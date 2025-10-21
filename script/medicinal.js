const medicinal = [
  {
    id: 1,
    image: "images/medicinal/1.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 2,
    image: "images/medicinal/2.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 3,
    image: "images/medicinal/3.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 4,
    image: "images/medicinal/4.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 5,
    image: "images/medicinal/5.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 6,
    image: "images/medicinal/6.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 7,
    image: "images/medicinal/7.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 8,
    image: "images/medicinal/8.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 9,
    image: "images/medicinal/9.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 10,
    image: "images/medicinal/10.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 11,
    image: "images/medicinal/12.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 12,
    image: "images/medicinal/12.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 13,
    image: "images/medicinal/13.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 14,
    image: "images/medicinal/14.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 15,
    image: "images/medicinal/15.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 16,
    image: "images/medicinal/16.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 17,
    image: "images/medicinal/17.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 18,
    image: "images/medicinal/18.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 19,
    image: "images/medicinal/19.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 20,
    image: "images/medicinal/20.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 21,
    image: "images/medicinal/21.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 22,
    image: "images/medicinal/22.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },
  {
    id: 23,
    image: "images/medicinal/23.jpg",
    name: "medicinal Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "medicinal Tree",
  },

];

const medicinalContainer = document.getElementById('medicinal-container')

medicinal.map((medici) => {
    const card = document.createElement('div');
    card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${medici.image}" alt="${medici.name}">
      <h1 class="color text-base font-semibold py-1.5">${medici.name}</h1>
      <p class="text-sm color">${medici.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[65%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${medici.category}</p>
      <div>
        <button id="medici-btn-${medici.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
    medicinalContainer.appendChild(card);
})
medicinal.forEach((medici) => {
  const button = document.getElementById(`medici-btn-${medici.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = medici.image;
    img.alt = medici.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
});
