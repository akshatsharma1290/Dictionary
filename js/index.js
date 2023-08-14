import { renderMeanings, renderWordHeaderWithAudio } from "./dynamichtml.js";
const query = document.querySelector(".query");
const searchButton = document.querySelector(".search-btn");

// This Function Makes a call to the dictionary api and then get the corresponding data.
const dictionaryLookup = async (query) => {
  const api = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
  );
  const resp = await api.json();
  // Data is in object form so the main data we want is on the first index so directly returning that data.
  return resp[0];
};

async function showData(e) {
    // Stopping The Page Refresh On Submitting
  e.preventDefault();
  // Making A Call To The Api.
  const data = await dictionaryLookup(query.value);
  // If the query is invalid and there is no data related to that so user will be alerted and the function will stop procceding.
  if (!data) {
    alert("Result Not Found.");
    return;
  }

  // Rendering The Html Code To Display Results.
  renderWordHeaderWithAudio(query.value, data.phonetics);
  renderMeanings(data.meanings);
}

searchButton.addEventListener("click", showData);
