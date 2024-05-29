// const image = document.querySelector("img");
let product = [
  {
    Image: "../images/categories/categories-image1.png",
  },
  {
    Image: "../images/categories/categories-image2.png",
  },
  {
    Image: "../images/categories/categories-image3.png",
  },
  {
    Image: "../images/categories/categories-image4.png",
  },
  {
    Image: "../images/categories/categories-image5.png",
  },
  {
    Image: "../images/categories/categories-image6.png",
  },
  {
    Image: "../images/categories/categories-image7.png",
  },
  {
    Image: "../images/categories/categories-image8.png",
  },
  {
    Image: "../images/categories/categories-image9.png",
  },
  {
    Image: "../images/categories/categories-image10.png",
  },
  {
    Image: "../images/categories/categories-image11.png",
  },
  {
    Image: "../images/categories/categories-image12.png",
  },
  {
    Image: "../images/categories/categories-image13.png",
  },
];

const categories_images = document.querySelector(".categories_images");

function displayProducts(data) {
  let str = "";
  data.forEach((product) => {
    str += `
        <img src=${product.Image} alt="image" />
      `;
  });

  categories_images.innerHTML = str;
}

displayProducts(product);
