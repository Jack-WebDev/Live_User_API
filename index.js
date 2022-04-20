
const userFilter = document.getElementById("filter");
const userResult = document.getElementById("result");

const listItems = [];

getData();

userFilter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=100");
  const { results } = await res.json();

  // results cleared

  results.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">

        <div class="details">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;

    userResult.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
