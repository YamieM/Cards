function closeLoader() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('loader-success');
}

const addElement = ({
  createdElement,
  content = "",
  img = "",
  link = "",
  addClass = "",
  status = "",
  parentElement = undefined,
  grandParentElement = undefined,
}) => {
  const cards = document.querySelector(".cards");
  const element = document.createElement(createdElement);
  if (content) {
    element.innerHTML = content;
  }
  if (img) {
    element.src = img;
  }
  if (!!link) {
    element.href = link;
  }
  if (!!addClass) {
    element.classList.add(addClass);
  }
  if (!!status) {
    const statusDiv = document.createElement("div");
    statusDiv.classList.add('status_div')
    const statusRound = document.createElement("span");
    statusRound.classList.add('status_round');
    parentElement.appendChild(statusDiv);
    statusDiv.appendChild(statusRound);
    statusDiv.appendChild(element);
    if (status === 'Alive') {
      statusRound.dataset.status = 'Alive'
    }
    else if (status === 'Dead') {
      statusRound.dataset.status = 'Dead'
    }

    return grandParentElement.appendChild(parentElement);
  }

  if (!!parentElement) {
    parentElement?.appendChild(element);
    return grandParentElement.appendChild(parentElement);
  }
  cards.appendChild(grandParentElement);
  return grandParentElement.appendChild(element);
};

const createCards = (data) => {
  data.results.forEach((element) => {
    const text_div = document.createElement("div");
    text_div.classList.add("text_div");
    const card_div = document.createElement('div');
    card_div.classList.add("card_div");

    addElement({
      createdElement: "img",
      img: element.image,
      grandParentElement: card_div,
    });
    addElement({
      createdElement: "a",
      content: element.name,
      parentElement: text_div,
      grandParentElement: card_div,
      link: element.url,
      addClass: "name_link",
    });
    addElement({
      createdElement: "h2",
      content: `${element.status}-${element.species}`,
      parentElement: text_div,
      grandParentElement: card_div,
      status: element.status,
    });
    addElement({
      createdElement: "h3",
      content: "Last known location",
      parentElement: text_div,
      grandParentElement: card_div,
    });
    addElement({
      createdElement: "a",
      content: element.location.name,
      parentElement: text_div,
      grandParentElement: card_div,
      link: element.location.url,
    });
    addElement({
      createdElement: "h3",
      content: "First seen in:",
      parentElement: text_div,
      grandParentElement: card_div,
    });
    const getEpisode = fetch(`${element.episode[0]}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        addElement({
          createdElement: "a",
          content: res.name,
          parentElement: text_div,
          grandParentElement: card_div,
          link: res.url,
        });
      })
  });
};

const getCharacters = fetch("https://rickandmortyapi.com/api/character")
  .then(closeLoader())
  .then((response) => {
    return response.json();
  })
  .then((data) => createCards(data))
  .catch((error) => console.log(error.name));




