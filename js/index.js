const searchQuery = document.querySelector(".query");
const searchButton = document.querySelector(".search-btn");
const label = document.querySelector(".placeholder");
const heading = document.querySelector(".heading");
const results = document.querySelector(".results");
let data;
let audio;

const dictionaryLookup = async (query) => {
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const queryData = await fetch(`${api}${query}`);
  const resp = await queryData.json();
  return resp;
};

// const audioPlay = ()=>{

//     for (let i = 0; i < data[0]['phonetics'].length; i++) {
//         if (data[0]['phonetics'][i]['audio'] != undefined && data[0]['phonetics'][i]['audio'] != "") {
//             audio = new Audio(data[0]['phonetics'][i]['audio'])
//             break
//         }

//     }

//     document.querySelector(".volume").addEventListener("click", () => {
//         audio.play()
//     })
// }

const loadData = async (e) => {
  e.preventDefault();
  const data = await dictionaryLookup(searchQuery.value);
  console.log(data);
  if (data.length === 0) {
    alert("Pls enter a valid word");
  } else {
    displayHeading(data[0])
  }


  for (let j = 0; j < data[0]["meanings"].length; j++) {
    results.insertAdjacentHTML(
      "beforeend",
      `  <div class="pos">${data[0]["results"][j]["partOfSpeech"]}</div>
<div class="definitions">
<p class="def">${data[0]["results"][j]["definitions"][0]["definition"]}</p> `
    );
  }
};

searchButton.addEventListener("click", loadData);
