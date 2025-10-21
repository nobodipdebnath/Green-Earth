const climbers = [
  {
    id: 1,
    image: "images/climbers/1.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 2,
    image: "images/climbers/2.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 3,
    image: "images/climbers/3.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 4,
    image: "images/climbers/4.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 5,
    image: "images/climbers/5.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 6,
    image: "images/climbers/6.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 7,
    image: "images/climbers/7.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 8,
    image: "images/climbers/8.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 9,
    image: "images/climbers/9.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 10,
    image: "images/climbers/10.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 11,
    image: "images/climbers/12.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 12,
    image: "images/climbers/12.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 13,
    image: "images/climbers/13.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 14,
    image: "images/climbers/14.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 15,
    image: "images/climbers/15.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 16,
    image: "images/climbers/16.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 17,
    image: "images/climbers/17.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 18,
    image: "images/climbers/18.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 19,
    image: "images/climbers/19.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 20,
    image: "images/climbers/20.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 21,
    image: "images/climbers/21.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
  {
    id: 22,
    image: "images/climbers/22.jpg",
    name: "climbers Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "climbers Tree",
  },
];

const climberContainer = document.getElementById('climbers-container');

climbers.map((climber) => {
  const card = document.createElement('div');

  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${climber.image}" alt="${climber.name}">
      <h1 class="color text-base font-semibold py-1.5">${climber.name}</h1>
      <p class="text-sm color">${climber.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[70%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${climber.category}</p>
      <div>
        <button id="climber-btn-${climber.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
  climberContainer.appendChild(card);
})

climbers.forEach((climber) => {
  const button = document.getElementById(`climber-btn-${climber.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = climber.image;
    img.alt = climber.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})