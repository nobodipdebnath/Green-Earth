const fruits = [
  {
    id: 1,
    image: "images/fruit/1.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 2,
    image: "images/fruit/2.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 3,
    image: "images/fruit/3.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 4,
    image: "images/fruit/4.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 5,
    image: "images/fruit/5.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 6,
    image: "images/fruit/6.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 7,
    image: "images/fruit/7.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 8,
    image: "images/fruit/8.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 9,
    image: "images/fruit/9.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 10,
    image: "images/fruit/10.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 11,
    image: "images/fruit/12.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 12,
    image: "images/fruit/12.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 13,
    image: "images/fruit/13.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 14,
    image: "images/fruit/14.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 15,
    image: "images/fruit/15.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 16,
    image: "images/fruit/16.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 17,
    image: "images/fruit/17.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 18,
    image: "images/fruit/18.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 19,
    image: "images/fruit/19.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },
  {
    id: 20,
    image: "images/fruit/20.jpg",
    name: "Mango Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "Fruit Tree",
  },

];


const fruitContainer = document.getElementById("fruit-container");
const cardContainer = document.getElementById("card-container");

fruits.map((fruit) => {
  const card = document.createElement('div');
  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${fruit.image}" alt="${fruit.name}">
      <h1 class="color text-base font-semibold py-1.5">${fruit.name}</h1>
      <p class="text-sm color">${fruit.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[50%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${fruit.category}</p>
      <div>
        <button id="fruit-btn-${fruit.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
  </div>`
  fruitContainer.appendChild(card);
})

fruits.forEach((fruit) => {
  const button = document.getElementById(`fruit-btn-${fruit.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = fruit.image;
    img.alt = fruit.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
});