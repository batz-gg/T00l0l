// ==========================================================================================
// Title:       TUNAMAL SPEECH
// Description: The Mongolian number to speeching converter.😉
// Author:      Batzorig Gonchigsumlaa
// Email:       batz.gg@gmail.com
// Date:        28 Jul 2023
//===========================================================================================
/* #region  AUDIO TOOLS AND MAINTENANCE OPPORTUNITIES
  
  // play-sound: This library allows you to play audio files by shelling out to available audio tools1.
  // node-wav-player: This library provides a simple interface for playing WAV files in Node.js.
  // speaker: This library outputs raw PCM data to your speakers, allowing you to play audio in Node.js.
  // audic: This library provides a simple interface for playing audio files in Node.js and doesn’t use any native dependencies2.

  // const player = require('node-wav-player');

  // player.play({
  //   path: './path/to/audio/file.wav',
  // }).then(() => {
  //   console.log('The audio file has finished playing.');
  // }).catch((error) => {
  //   console.error(error);
  // });

  // const fs = require('fs');

  // fs.readFile('./path/to/audio/file.wav', (err, data) => {
  //   if (err) throw err;
  //   // `data` is a Buffer containing the contents of the audio file
  // });

//  #endregion */

function playAudio(word) {
    return new Promise((resolve) => {
        let audio = new Audio(`./assets/${word}.wav`);
        // audio.playbackRate = 2;
        audio.play();
        audio.onended = () => resolve();
    });
}
async function mn2vc(inputId) {
    let wordNumInput = document.getElementById(`${inputId}`).value;
    let wordArray = wordNumInput.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        switch(wordArray[i]) {
        case "тэг":
            await playAudio(wordArray[i]);
            break;
        case "нэг":
            await playAudio(wordArray[i]);
            break;
        case "нэгэн":
            await playAudio(wordArray[i]);
            break;
        case "хоёр":
            await playAudio(wordArray[i]);
            break;
        case "хоёрон":
            await playAudio(wordArray[i]);
            break;
        case "гурав":
            await playAudio(wordArray[i]);
            break;
        case "гурван":
            await playAudio(wordArray[i]);
            break;
        case "дөрөв":
            await playAudio(wordArray[i]);
            break;
        case "дөрвөн":
            await playAudio(wordArray[i]);
            break;
        case "тав":
            await playAudio(wordArray[i]);
            break;
        case "таван":
            await playAudio(wordArray[i]);
            break;
        case "зургаа":
            await playAudio(wordArray[i]);
            break;
        case "зургаан":
            await playAudio(wordArray[i]);
            break;
        case "долоо":
            await playAudio(wordArray[i]);
            break;
        case "долоон":
            await playAudio(wordArray[i]);
            break;
        case "найм":
            await playAudio(wordArray[i]);
            break;
        case "найман":
            await playAudio(wordArray[i]);
            break;
        case "ес":
            await playAudio(wordArray[i]);
            break;
        case "есөн":
            await playAudio(wordArray[i]);
            break;
        case "арав":
            await playAudio(wordArray[i]);
            break;
        case "арван":
            await playAudio(wordArray[i]);
            break;
        case "хорь":
            await playAudio(wordArray[i]);
            break;
        case "хорин":
            await playAudio(wordArray[i]);
            break;
        case "гуч":
            await playAudio(wordArray[i]);
            break;
        case "гучин":
            await playAudio(wordArray[i]);
            break;
        case "дөч":
            await playAudio(wordArray[i]);
            break;
        case "дөчин":
            await playAudio(wordArray[i]);
            break;
        case "тавь":
            await playAudio(wordArray[i]);
            break;
        case "тавин":
            await playAudio(wordArray[i]);
            break;
        case "жар":
            await playAudio(wordArray[i]);
            break;
        case "жаран":
            await playAudio(wordArray[i]);
            break;
        case "дал":
            await playAudio(wordArray[i]);
            break;
        case "далан":
            await playAudio(wordArray[i]);
            break;
        case "ная":
            await playAudio(wordArray[i]);
            break;
        case "наян":
            await playAudio(wordArray[i]);
            break;
        case "ер":
            await playAudio(wordArray[i]);
            break;
        case "ерэн":
            await playAudio(wordArray[i]);
            break;
        case "зуу":
            await playAudio(wordArray[i]);
            break;
        case "зуун":
            await playAudio(wordArray[i]);
            break;
        case "мянга":
            await playAudio(wordArray[i]);
            break;
        case "мянган":
            await playAudio(wordArray[i]);
            break;
        case "сая":
            await playAudio(wordArray[i]);
            break;
        case "тэрбум":
            await playAudio(wordArray[i]);
            break;
        case "их":
            await playAudio("их наяд");
            break;
        case "наяд":
            break;
        case "тунамал":
            await playAudio(wordArray[i]);
        default:
            break;
        }
    }
}