import "../styles/styles.css";
import "./component.js";
import { getImages } from "./api.js";

async function getAttributesImages() {
  const images = document.querySelectorAll(".image-landscape");
  const request = await getImages();

  const propsPromises = Array.from(images).map(async (_, index) => {
    const src = await request[index].src.portrait;
    const alt = await request[index].alt;
    return { src, alt };
  });

  const resolvePromise = await Promise.all(propsPromises);

  images.forEach((image, index) => {
    const prop = resolvePromise[index];

    image.src = prop.src;
    image.alt = prop.alt;
  });
}

reloadedIMages: setInterval(async () => getAttributesImages(), 7000);
