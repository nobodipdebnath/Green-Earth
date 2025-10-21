const ornamental = [
  {
    id: 1,
    image: "images/ornamental/1.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 2,
    image: "images/ornamental/2.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 3,
    image: "images/ornamental/3.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 4,
    image: "images/ornamental/4.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 5,
    image: "images/ornamental/5.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 6,
    image: "images/ornamental/6.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 7,
    image: "images/ornamental/7.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 8,
    image: "images/ornamental/8.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 9,
    image: "images/ornamental/9.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 10,
    image: "images/ornamental/10.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 11,
    image: "images/ornamental/12.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 12,
    image: "images/ornamental/12.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 13,
    image: "images/ornamental/13.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 14,
    image: "images/ornamental/14.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 15,
    image: "images/ornamental/15.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 16,
    image: "images/ornamental/16.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 17,
    image: "images/ornamental/17.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 18,
    image: "images/ornamental/18.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 19,
    image: "images/ornamental/19.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 20,
    image: "images/ornamental/20.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },
  {
    id: 21,
    image: "images/ornamental/21.jpg",
    name: "ornamental Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "ornamental Tree",
  },

];

const ornamentalContainer = document.getElementById('ornamental-container');

ornamental.map((ornament) => {
  const card = document.createElement('div');

  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${ornament.image}" alt="${ornament.name}">
      <h1 class="color text-base font-semibold py-1.5">${ornament.name}</h1>
      <p class="text-sm color">${ornament.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[70%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${ornament.category}</p>
      <div>
        <button id="ornament-btn-${ornament.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
  ornamentalContainer.appendChild(card);
})

ornamental.forEach((ornament) => {
  const button = document.getElementById(`ornament-btn-${ornament.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = ornament.image;
    img.alt = ornament.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})
