const shade = [
  {
    id: 1,
    image: "images/shade/1.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 2,
    image: "images/shade/2.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 3,
    image: "images/shade/3.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 4,
    image: "images/shade/4.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 5,
    image: "images/shade/5.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 6,
    image: "images/shade/6.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 7,
    image: "images/shade/7.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 8,
    image: "images/shade/8.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 9,
    image: "images/shade/9.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 10,
    image: "images/shade/10.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 11,
    image: "images/shade/12.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 12,
    image: "images/shade/12.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 13,
    image: "images/shade/13.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 14,
    image: "images/shade/14.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 15,
    image: "images/shade/15.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 16,
    image: "images/shade/16.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 17,
    image: "images/shade/17.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 18,
    image: "images/shade/18.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 19,
    image: "images/shade/19.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },
  {
    id: 20,
    image: "images/shade/20.jpg",
    name: "shade Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "shade Tree",
  },

];

const shadeContainer = document.getElementById('shade-container');
// const cardContainer = document.getElementById('card-container')

shade.map((shad) => {
    const card = document.createElement('div');
    card.innerHTML = `    <div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${shad.image}" alt="${shad.name}">
      <h1 class="color text-base font-semibold py-1.5">${shad.name}</h1>
      <p class="text-sm color">${shad.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[60%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${shad.category}</p>
      <div>
        <button id="shad-btn-${shad.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
    shadeContainer.appendChild(card);
})
shade.forEach((shad) => {
  const button = document.getElementById(`shad-btn-${shad.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = shad.image;
    img.alt = shad.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
});
