const displayHeading = (results) => {
  heading.innerHTML = `<div class="heading">
    <img class="volume" src="svgs/volume.svg" alt="hear pronounciation">
    <h1 class="main-word">${results["word"]}</h1>
    <div>[ <span class="phonetics">${displayPhonetics(results.phonetics)}</span> ]</div></div>`;
};


const displayPhonetics = (phonetics) => {
    console.log(phonetics);
    phonetics.forEach((item) => {
    })
}