const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Feature section
const features = [
  {
    icon: "images/icons/Vector (1).png",
    title: "Lazy Efficient",
    description:
      "A cras semper auctor neque. Proin libero nunc consequat interdum varius sit. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.",
  },
  {
    icon: "images/icons/GearSix (1).png",
    title: "Streamlined Process",
    description:
      "Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Orci porta non pulvinar neque laoreet",
  },
  {
    icon: "images/icons/Broom.png",
    title: "Minimum Effort",
    description:
      "Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus dolor purus non enim praesent elementum.",
  },
  {
    icon: "images/icons/ChartLine.png",
    title: "Absolutely Easy To Use",
    description:
      "Rutrum quisque non tellus orci ac. Purus viverra accumsan in nisl. Id interdum velit laoreet id donec ultrices adisipicing elit.",
  },
  {
    icon: "images/icons/Vector (2).png",
    title: "Just Sleep & Chill",
    description:
      "Bibendum est ultricies integer quis auctor elit. Ultrices in iaculis nunc sed. A scelerisque purus semper eget. Facilisi morbi tempus iaculi.",
  },
  {
    icon: "images/icons/Vector (3).png",
    title: "Don’t Worry About Life",
    description:
      "Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Risus ultricies tristique nulla aliquet enim tortor.",
  },
];


const container = document.querySelector(".features");

features.forEach((feature) => {
  const card = document.createElement("div");
  card.className = "card-features";

  card.innerHTML = `
    <img src="${feature.icon}" alt="${feature.title}" />
    <p class="card-features-title">${feature.title}</p>
    <p class="card-features-p">${feature.description}</p>
  `;

  container.appendChild(card);
});

/////testimonials section///////
const testimonials = [
  {
    ratingImg: 5,
    text: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
    avatar: "images/rating/Avatar.png",
    name: "X_AE_A-13",
    title: "Product Designer, slothUI"
  },
  {
    ratingImg: 3.5,
    text: "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
    avatar: "images/rating/Avatar.png",
    name: "Azunyan U. Wu",
    title: "CEO, nextlife.ai"
  },
  {
    ratingImg: 4,
    text: "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi.",
    avatar: "images/rating/Avatar.png",
    name: "Mechatronics Yi",
    title: "CTO, fin4win.ai"
  },
  {
    ratingImg: 5,
    text: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
    avatar: "images/rating/Avatar.png",
    name: "Oarack Babama",
    title: "Former President of US"
  },
  {
    ratingImg: 4.5,
    text: "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
    avatar: "images/rating/Avatar.png",
    name: "Saylor Twift",
    title: "Famous Singer"
  },
  {
    ratingImg: 3.5,
    text: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
    avatar: "images/rating/Avatar.png",
    name: "Asuna Yuuki",
    title: "Virtual Swordsman"
  },
  {
    ratingImg: 2.5,
    text: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
    avatar: "images/rating/Avatar.png",
    name: "Asuna Yuuki",
    title: "Virtual Swordsman"
  },
  {
    ratingImg: 5,
    text: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
    avatar: "images/rating/Avatar.png",
    name: "Asuna Yuuki",
    title: "Virtual Swordsman"
  },
  {
    ratingImg: 4,
    text: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
    avatar: "images/rating/Avatar.png",
    name: "Asuna Yuuki",
    title: "Virtual Swordsman"
  }
];

const container3 = document.querySelector(".testimonial-features");

function generateStars(rating) {
  let stars = '';
  const fullCount = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullCount; i++) {
    stars += '<span class="star full' + '">&#9733;</span>';
  }
  if (hasHalf) {
    stars += '<span class="star half">&#9733;</span>';
  }
  for (let i = fullCount + (hasHalf ? 1 : 0); i < 5; i++) {
    stars += '<span class="star">&#9733;</span>';
  }

  return stars;
}

testimonials.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="rating">${generateStars(item.ratingImg)}</div>
    <p>${item.text}</p>
    <div class="avator">
      <img src="${item.avatar}" alt="${item.name}" />
      <p>
        ${item.name}<br />
        ${item.title}
      </p>
    </div>
  `;
  container3.appendChild(card);
});


// /////////// Our office section////////////
// const locations = [
//   {
//     country: "Japan",
//     addressLine1: "221b Banzai Street",
//     addressLine2: "Tokyo, TO 77812",
//     image: "images/icons/Vector (6).png"
//   },
//   {
//     country: "USA",
//     addressLine1: "221b Freedom Street",
//     addressLine2: "New York, NY 21231",
//     image: "images/icons/Vector (6).png"
//   },
//   {
//     country: "Canada",
//     addressLine1: "221b Maple Syrup Street",
//     addressLine2: "Ottawa, OW 77847",
//     image: "images/icons/Vector (6).png"
//   },
//   {
//     country: "South Korea",
//     addressLine1: "221b Samyang Street",
//     addressLine2: "Gangnam, GM 22124",
//     image: "images/icons/Vector (6).png"
//   }
// ];

// // Select the parent element where you want to append these
// const office = document.querySelector(".our-office");

// // Loop through the array and append elements
// locations.forEach(location => {
//   const div = document.createElement("div");

//   div.innerHTML = `
//     <img src="${location.image}" alt="" />
//     <h2>${location.country}</h2>
//     <p>${location.addressLine1}</p>
//     <p>${location.addressLine2}</p>
//   `;

//   office.appendChild(div);
// });
