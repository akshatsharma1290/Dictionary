import { renderMeanings, renderWordHeaderWithAudio } from "./dynamichtml.js";
const query = document.querySelector(".query");
const searchButton = document.querySelector(".search-btn");

const dictionaryLookup = async (query) => {
  const api = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
  );
  const resp = await api.json();
  return resp[0];
};

async function showData(e) {
  e.preventDefault();
  const data = await dictionaryLookup(query.value);
  if (!data) {
    alert("Result Not Found.");
    return;
  }

  renderWordHeaderWithAudio(query.value, data.phonetics);
  renderMeanings(data.meanings);
}

searchButton.addEventListener("click", showData);
