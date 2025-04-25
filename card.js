/////////// Our office section////////////
const locations = [
  {
    country: "Japan",
    addressLine1: "221b Banzai Street",
    addressLine2: "Tokyo, TO 77812",
    image: "images/icons/Vector (6).png"
  },
  {
    country: "USA",
    addressLine1: "221b Freedom Street",
    addressLine2: "New York, NY 21231",
    image: "images/icons/Vector (6).png"
  },
  {
    country: "Canada",
    addressLine1: "221b Maple Syrup Street",
    addressLine2: "Ottawa, OW 77847",
    image: "images/icons/Vector (6).png"
  },
  {
    country: "South Korea",
    addressLine1: "221b Samyang Street",
    addressLine2: "Gangnam, GM 22124",
    image: "images/icons/Vector (6).png"
  }
];

// Select the parent element where you want to append these
const office = document.querySelector(".our-office");

// Loop through the array and append elements
locations.forEach(location => {
  const div = document.createElement("div");

  div.innerHTML = `
    <img src="${location.image}" alt="" />
    <h2>${location.country}</h2>
    <p>${location.addressLine1}</p>
    <p>${location.addressLine2}</p>
  `;

  office.appendChild(div);
});