import { displayHeader } from "./dynamichtml.js";
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
  console.log(data);
  if (data.length === 0) {
    alert("Result Not Found.");
    return;
  }

  displayHeader(query.value, data.phonetics);

  //     title.innerHTML = ``;

  //     if (document.querySelector(".phenotic").innerHTML == "undefined") {
  //       for (let i = 0; i < data[0]["phonetics"].length; i++) {
  //         if (data[0]["phonetics"][i]["text"] != undefined) {
  //           document.querySelector(".phenotic").innerHTML =
  //             data[0]["phonetics"][i]["text"];
  //           break;
  //         }
  //       }
  //     }

  //     for (let j = 0; j < data[0]["meanings"].length; j++) {
  //       meanings.insertAdjacentHTML(
  //         "beforeend",
  //         `  <div class="pos">${data[0]["meanings"][j]["partOfSpeech"]}</div>
  // <div class="definitions">
  // <p class="def">${data[0]["meanings"][j]["definitions"][0]["definition"]}</p> `
  //       );
  //     }
}

searchButton.addEventListener("click", showData);
