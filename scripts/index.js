'use strict';

import { videoPlayerInit } from "./videoPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";


// variables
const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

// function
const deactivationPlayer = () => {
    temp.style.display = '';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));

    musicPlayerInit.stop();
    videoPlayerInit.stop();
    radioPlayerInit.stop();
}

// event handler
playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
})

// function call
videoPlayerInit();
radioPlayerInit();
musicPlayerInit();