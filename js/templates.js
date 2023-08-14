const headerTemplate = `
<div class="heading">
  <img class="audio" src="svgs/volume.svg" alt="pronunciation audio">
  <h1 class="main-word">{word}</h1>
  <div>[ <span class="phonetic">{text}</span> ]</div>
</div>
`;

const meaningsTemplate = `
<p class="partOfSpeech">{partOfSpeech}</p>
   <div class="definitions">
   <p class="def">{definition}</p>
   </div>
`;

export { headerTemplate, meaningsTemplate };
