const timbers = [
  {
    id: 1,
    image: "images/timber/1.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 2,
    image: "images/timber/2.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 3,
    image: "images/timber/3.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 4,
    image: "images/timber/4.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 5,
    image: "images/timber/5.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 6,
    image: "images/timber/6.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 7,
    image: "images/timber/7.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 8,
    image: "images/timber/8.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 9,
    image: "images/timber/9.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 10,
    image: "images/timber/10.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 11,
    image: "images/timber/12.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 12,
    image: "images/timber/12.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 13,
    image: "images/timber/13.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 14,
    image: "images/timber/14.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 15,
    image: "images/timber/15.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 16,
    image: "images/timber/16.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 17,
    image: "images/timber/17.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 18,
    image: "images/timber/18.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 19,
    image: "images/timber/19.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 20,
    image: "images/timber/20.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },
  {
    id: 21,
    image: "images/timber/21.jpg",
    name: "timber Tree",
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
    category: "timber Tree",
  },

];
const timberContainer = document.getElementById('timber-container');
timbers.map((timber) => {
  const card = document.createElement('div');

  card.innerHTML = `<div class="p-4 rounded-xl bg-white duration-500 border-gray-100 hover:shadow-md">
      <img class="rounded-lg h-[200px] w-full object-cover" src="${timber.image}" alt="${timber.name}">
      <h1 class="color text-base font-semibold py-1.5">${timber.name}</h1>
      <p class="text-sm color">${timber.description}</p>
      <p class="py-2 px-5 text-[#15803D] w-[60%] bg-[#DCFCE7] hover:bg-[#95e3b0] duration-500 cursor-pointer my-1 rounded-[38px]">${timber.category}</p>
      <div>
        <button id="timber-btn-${timber.id}" class="w-full py-3 rounded-[38px] text-base text-white cursor-pointer bg-[#15803D] hover:bg-[#075b25] duration-500 font-semibold">Add to Cart</button>
      </div>
    </div>`
    timberContainer.appendChild(card);
})
timbers.forEach((timber) => {
  const button = document.getElementById(`timber-btn-${timber.id}`);
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const img = document.createElement("img");
    img.src = timber.image;
    img.alt = timber.name;
    img.className = "w-32 h-32 object-cover rounded-lg border border-green-300";

    cardContainer.appendChild(img);
  });
})