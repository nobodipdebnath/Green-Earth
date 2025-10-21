const bamboos = [
  {
    id: 1,
    image: "images/bamboo/1.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 2,
    image: "images/bamboo/2.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 3,
    image: "images/bamboo/3.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 4,
    image: "images/bamboo/4.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 5,
    image: "images/bamboo/5.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 6,
    image: "images/bamboo/6.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 7,
    image: "images/bamboo/7.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 8,
    image: "images/bamboo/8.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 9,
    image: "images/bamboo/9.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 10,
    image: "images/bamboo/10.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 11,
    image: "images/bamboo/12.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 12,
    image: "images/bamboo/12.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 13,
    image: "images/bamboo/13.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 14,
    image: "images/bamboo/14.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 15,
    image: "images/bamboo/15.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 16,
    image: "images/bamboo/16.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 17,
    image: "images/bamboo/17.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 18,
    image: "images/bamboo/18.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 19,
    image: "images/bamboo/19.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 20,
    image: "images/bamboo/20.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 21,
    image: "images/bamboo/21.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 22,
    image: "images/bamboo/22.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 23,
    image: "images/bamboo/23.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 24,
    image: "images/bamboo/24.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 25,
    image: "images/bamboo/25.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },
  {
    id: 26,
    image: "images/bamboo/26.jpg",
    name: "bamboo Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "bamboo Tree",
  },

];

const bambooContainer = document.getElementById('bamboo-container')

bamboos.map((bamboo) => {
  const card = document.createElement('div');
  card.innerHTML =  `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${bamboo.image}" alt="${bamboo.name}">
      <h1 class="color text-base font-semibold py-1.5">${bamboo.name}</h1>
      <p class="text-sm color">${bamboo.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[70%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${bamboo.category}</p>
      <div>
        <button id="bamboo-btn-${bamboo.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
    bambooContainer.appendChild(card);
})
bamboos.forEach((bamboo) => {
  const button = document.getElementById(`bamboo-btn-${bamboo.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = bamboo.image;
    img.alt = bamboo.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})