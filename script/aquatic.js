const aquatics = [
  {
    id: 1,
    image: "images/aquatic/1.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 2,
    image: "images/aquatic/2.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 3,
    image: "images/aquatic/3.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 4,
    image: "images/aquatic/4.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 5,
    image: "images/aquatic/5.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 6,
    image: "images/aquatic/6.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 7,
    image: "images/aquatic/7.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 8,
    image: "images/aquatic/8.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 9,
    image: "images/aquatic/9.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 10,
    image: "images/aquatic/10.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 11,
    image: "images/aquatic/12.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 12,
    image: "images/aquatic/12.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 13,
    image: "images/aquatic/13.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 14,
    image: "images/aquatic/14.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 15,
    image: "images/aquatic/15.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 16,
    image: "images/aquatic/16.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 17,
    image: "images/aquatic/17.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 18,
    image: "images/aquatic/18.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 19,
    image: "images/aquatic/19.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 20,
    image: "images/aquatic/20.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 21,
    image: "images/aquatic/21.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 22,
    image: "images/aquatic/22.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 23,
    image: "images/aquatic/23.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },
  {
    id: 24,
    image: "images/aquatic/24.jpg",
    name: "Aquatic Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "aquatic Tree",
  },

];

const aquaticsContainer = document.getElementById('aquatic-container');

aquatics.map((aquatic) => {
  const card = document.createElement('div');

  card.innerHTML =  `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${aquatic.image}" alt="${aquatic.name}">
      <h1 class="color text-base font-semibold py-1.5">${aquatic.name}</h1>
      <p class="text-sm color">${aquatic.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[60%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${aquatic.category}</p>
      <div>
        <button id="aquatic-btn-${aquatic.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
  aquaticsContainer.appendChild(card);
})

aquatics.forEach((aquatic) => {
  const button = document.getElementById(`aquatic-btn-${aquatic.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = aquatic.image;
    img.alt = aquatic.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})