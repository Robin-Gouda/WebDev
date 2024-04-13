let cardContainer = document.getElementById("card_container");

const services_offered = [
  {
    id: 1,
    src: "images/laundry.png",
    name: "Laundry",
    link: "https://en.wikipedia.org/wiki/Laundry",
  },
  {
    id: 2,
    src: "images/dryClean.png",
    name: "Dry Clean",
    link: "https://en.wikipedia.org/wiki/Dry_cleaning",
  },
  {
    id: 3,
    src: "images/Upholstery.jpg",
    name: "Upholstery",
    link: "https://en.wikipedia.org/wiki/Upholstery",
  },
  {
    id: 4,
    src: "images/steamIroning.jpg",
    name: "Steam Ironing",
    link: "https://www.merriam-webster.com/dictionary/steam%20iron",
  },
  {
    id: 5,
    src: "images/homeCleaning.png",
    name: "Home Cleaning",
    link: "https://www.dictionary.com/browse/housecleaning",
  },
  {
    id: 6,
    src: "images/productsStore.png",
    name: "Products Store",
    link: "https://www.meesho.com/cleaning-supplies/pl/9ii",
  },
];

let service_off = [];

for (let i = 0; i < services_offered.length; i++) {
  service_off = [...service_off, services_offered[i].name];
}
// console.log(service_off);

services_offered.map((service) => {
  // create and append card
  let div = document.createElement("div");
  div.classList.add("card");
  let anchor = document.createElement("a");
  anchor.href = service.link;
  cardContainer.appendChild(anchor);
  anchor.appendChild(div);

  // create and append image
  let img = document.createElement("img");
  img.src = service.src;
  div.appendChild(img);
  img.classList.add("pic");

  // create and append title
  let title = document.createElement("h2");
  title.innerText = service.name;
  div.appendChild(title);
});

//  search functionality
const find = () => {
  let input = document.getElementById("search").value;
  let result = [];
  if (input.length > 0) {
    result = service_off.filter((e) => {
      return e.toLowerCase().includes(input);
    });
    redir(result);
  } else {
    redir(result);
  }
};

const searchBar = () => {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();

  services_offered.filter((e) => {
    let a = e.name.toLowerCase();
    if (a.includes(input)) {
      searchItem = e.link;
    }
  });
};

const resultsBox = document.querySelector(".result-box");

function redir(result) {
  const content = result.map((list) => {
    return "<li>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

// immage carousel

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
