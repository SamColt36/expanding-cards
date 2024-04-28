import { createClient } from "pexels";

const client = createClient(
  "IvtJEQNWC4iFB0UrtKN5jCpbamoJjhMUvWRp28gHUn5u2IrHFEQeXOE8"
);

const getImages = async () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const requestImage = await client.photos.search({
    query: "forest",
    size: "small",
    per_page: 6,
    page: getRandomNumber(0, 10),
  });
  return requestImage.photos;
};

export { getImages };
