const componentFigure = () => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");

  figure.setAttribute("role", "figure");
  figure.setAttribute(
    "class",
    "flex justify-center items-center overflow-hidden transition-all duration-500 border cursor-pointer border-gray-500 hover:brightness-100 brightness-75"
  );

  img.setAttribute("role", "img");
  img.setAttribute("class", "object-cover w-full h-full image-landscape");
  img.setAttribute("src", "https://placehold.co/600?text=Carregando");
  img.setAttribute(
    "alt",
    "Model image obtained from https://placehold.co/. A simple, fast and free image placeholder service."
  );

  figure.appendChild(img);
  return figure;
};

(() => {
  const main = document.querySelector("main");
  const numberOfComponents = 6;

  for (let i = 0; i < numberOfComponents; i++) {
    const figure = componentFigure();
    main.appendChild(figure);
  }
})();
