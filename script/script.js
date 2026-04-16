const nextArrow = document.getElementById("next_arrow");
const previousArrow = document.getElementById("previous_arrow");
const mainProductImage = document.getElementById("main_product_image");

let desktopQuery = window.matchMedia("(min-width: 60rem)");

let imageIndex = 1;

function imageGallary(imageIndex) {
  if (imageIndex === 4) {
    nextArrow.style.display = "none";
  } else {
    nextArrow.style.display = "block";
  }
  if (imageIndex === 1) {
    previousArrow.style.display = "none";
  } else {
    previousArrow.style.display = "block";
  }
  mainProductImage.src = `./images/image-product-${imageIndex}.jpg`;
}

nextArrow.addEventListener("click", () => {
  imageIndex++;
  imageGallary(imageIndex);
});

previousArrow.addEventListener("click", () => {
  imageIndex--;
  imageGallary(imageIndex);
});

function handleDesktopChange(e) {
  if (e.matches) {
    imageIndex = 1;
    mainProductImage.src = `./images/image-product-${imageIndex}.jpg`;
  }
}

desktopQuery.addEventListener("change", handleDesktopChange);
handleDesktopChange(desktopQuery)
