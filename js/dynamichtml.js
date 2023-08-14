import { headerTemplate, meaningsTemplate } from "./templates.js";
const header = document.querySelector(".header");
const meanings = document.querySelector(".meanings");

export const renderWordHeaderWithAudio = (word, phonetics) => {
  const { text, audio } = getPhoneticAndAudio(phonetics);

  const headerContent = headerTemplate
    .replace("{word}", word)
    .replace("{text}", text);

  header.innerHTML = headerContent;

  const pronunciation = new Audio(audio);

  const audioHtml = document.querySelector(".audio");
  audioHtml.addEventListener("click", () => {
    pronunciation.play();
  });
};

const getPhoneticAndAudio = (phoneticsObj) => {
  let text;
  let audio;

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
  results.forEach((item) => {
    meanings.insertAdjacentHTML(
      "beforeend",
      meaningsTemplate
        .replace("{partOfSpeech}", item.partOfSpeech)
        .replace("{definition}", item.definitions[0]["definition"])
    );
  });
};
