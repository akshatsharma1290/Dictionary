const inp = document.querySelector(".word")
const btn = document.querySelector(".box button")
const label = document.querySelector(".box label")
const title = document.querySelector(".title")
const meanings = document.querySelector(".meaning")
const main = document.getElementsByTagName("main")[0]
let data
let audio

async function getWord(word) {
    let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    let resp = await api.json()
    return resp

}

function audioPlay() {

    for (let i = 0; i < data[0]['phonetics'].length; i++) {
        if (data[0]['phonetics'][i]['audio'] != undefined && data[0]['phonetics'][i]['audio'] != "") {
            audio = new Audio(data[0]['phonetics'][i]['audio'])
            break
        }

    }

    document.querySelector(".volume").addEventListener("click", () => {
        audio.play()
    })
}

async function showData() {
    data = await getWord(inp.value)
    if (data['title'] != undefined) {
        alert('Pls enter a valid word')
    } else {

        meanings.innerHTML = ""
        main.classList.add("gap")
        title.innerHTML = `<div class="title">
    <img class="volume" src="svgs/volume.svg" alt="hear pronounciation">
      <h1 class="main-word">${data[0]['word']}</h1>
     <div>[ <span class="phenotic">${data[0]['phenotic']}</span> ]</div></div>`

        audioPlay()

        if (document.querySelector(".phenotic").innerHTML == "undefined") {

            for (let i = 0; i < data[0]['phonetics'].length; i++) {
                if (data[0]['phonetics'][i]['text'] != undefined) {
                    document.querySelector(".phenotic").innerHTML = data[0]['phonetics'][i]['text']
                    break
                }
            }

        }

       


        for (let j = 0; j < data[0]['meanings'].length; j++) {

            meanings.insertAdjacentHTML("beforeend", `  <div class="pos">${data[0]['meanings'][j]['partOfSpeech']}</div>
<div class="definitions">
<p class="def">${data[0]['meanings'][j]['definitions'][0]['definition']}</p> `)

        }

    }






}

btn.addEventListener('click', showData)
