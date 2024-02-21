import { images } from "./dom.js";
import { getImages } from "./api.js";

try {
  const arraySrc = new Array();
  const arrayAlt = new Array();

  const getAttributesImages = async () => {
    // Consumir da API apenas os valores de 'alt' e 'src'
    const request = await getImages();
    await request.map((e) => arraySrc.push(e.src.landscape));
    await request.map((e) => arrayAlt.push(e.alt));
  };

  getAttributesImages().then(() =>
    images.each((index, element) => {
      $(element).prop("src", arraySrc[index]);
      $(element).prop("alt", arrayAlt[index]);
    })
  );
} catch (error) {
  console.error(error);
}
