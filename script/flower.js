const flowers = [
  {
    id: 1,
    image: "images/flower/1.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 2,
    image: "images/flower/2.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 3,
    image: "images/flower/3.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 4,
    image: "images/flower/4.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 5,
    image: "images/flower/5.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 6,
    image: "images/flower/6.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 7,
    image: "images/flower/7.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 8,
    image: "images/flower/8.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 9,
    image: "images/flower/9.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 10,
    image: "images/flower/10.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 11,
    image: "images/flower/12.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 12,
    image: "images/flower/12.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 13,
    image: "images/flower/13.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 14,
    image: "images/flower/14.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 15,
    image: "images/flower/15.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 16,
    image: "images/flower/16.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 17,
    image: "images/flower/17.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 18,
    image: "images/flower/18.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 19,
    image: "images/flower/19.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },
  {
    id: 20,
    image: "images/flower/20.jpg",
    name: "Rose Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Flower Tree",
  },

];

const flowerContainer = document.getElementById('flower-container');
// const cardContainer = document.getElementById('card-container');

flowers.map((flower) => {
  const card = document.createElement('div');
  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${flower.image}" alt="${flower.name}">
      <h1 class="color text-base font-semibold py-1.5">${flower.name}</h1>
      <p class="text-sm color">${flower.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[60%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${flower.category}</p>
      <div>
        <button id="flower-btn-${flower.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
  flowerContainer.appendChild(card);
})
flowers.forEach((flower) => {
  const button = document.getElementById(`flower-btn-${flower.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = flower.image;
    img.alt = flower.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
});
