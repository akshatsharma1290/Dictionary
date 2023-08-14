import { headerTemplate, meaningsTemplate } from "./templates.js";
const header = document.querySelector(".header");
const meanings = document.querySelector(".meanings");

export const renderWordHeaderWithAudio = (word, phonetics) => {
  // Destructuring The Text And Audio Into Seperate Variables.
  const { text, audio } = getPhoneticAndAudio(phonetics);

  // Inserting The Variables. In The HTML Template..
  const headerContent = headerTemplate
    .replace("{word}", word)
    .replace("{text}", text);

  // Displaying The HTml.
  header.innerHTML = headerContent;

  const pronunciation = new Audio(audio);

  const audioHtml = document.querySelector(".audio");
  // Playing The Pronounciation When User Clicks The Audio Button.
  audioHtml.addEventListener("click", () => {
    pronunciation.play();
  });
};

const getPhoneticAndAudio = (phoneticsObj) => {
  let text;
  let audio;

  // Mapping Through The Phenotics Object And Finding The Text And Audio and assigning them to variables.
  phoneticsObj.forEach((item) => {
    if (!text && item.text) {
      text = item.text;
    }
    if (!audio && item.audio) {
      audio = item.audio;
    }
  });

  return { text, audio };
};

export const renderMeanings = (results) => {
  // Mapping Through The Results Object And Inserting The HTML.
  results.forEach((item) => {
    meanings.insertAdjacentHTML(
      "beforeend",
      meaningsTemplate
        .replace("{partOfSpeech}", item.partOfSpeech)
        .replace("{definition}", item.definitions[0]["definition"])
    );
  });
};
