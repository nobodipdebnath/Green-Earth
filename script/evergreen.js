const evergreen = [
  {
    id: 1,
    image: "images/evergreen/1.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 2,
    image: "images/evergreen/2.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 3,
    image: "images/evergreen/3.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 4,
    image: "images/evergreen/4.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 5,
    image: "images/evergreen/5.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 6,
    image: "images/evergreen/6.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 7,
    image: "images/evergreen/7.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 8,
    image: "images/evergreen/8.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 9,
    image: "images/evergreen/9.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 10,
    image: "images/evergreen/10.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 11,
    image: "images/evergreen/11.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 12,
    image: "images/evergreen/12.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 13,
    image: "images/evergreen/13.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 14,
    image: "images/evergreen/14.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 15,
    image: "images/evergreen/15.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 16,
    image: "images/evergreen/16.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 17,
    image: "images/evergreen/17.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
  {
    id: 18,
    image: "images/evergreen/18.jpg",
    name: "evergreen Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "evergreen Tree",
  },
];

const evergreenContainer = document.getElementById('evergreen-container');

evergreen.map((ever) => {
  const card = document.createElement('div');

  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${ever.image}" alt="${ever.name}">
      <h1 class="color text-base font-semibold py-1.5">${ever.name}</h1>
      <p class="text-sm color">${ever.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[65%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${ever.category}</p>
      <div>
        <button id="ever-btn-${ever.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
  evergreenContainer.appendChild(card);
})

evergreen.forEach((ever) => {
  const button = document.getElementById(`ever-btn-${ever.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = ever.image;
    img.alt = ever.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})
