// ==UserScript==
// @name        Minecraft.fr LikesPercent
// @namespace   leminaw
// @description Pour le forum de Minecraft.fr. Ajoute le pourcentage de likes par message des utilisateurs dans les fils de discussion.
// @match       http://minecraft.fr/forum/*
// @match       https://minecraft.fr/forum/*
// @grant       none
// @version     1.0.0
// @copyright   2016+, LeMinaw
// @updateURL   https://openuserjs.org/meta/LeMinaw/Minecraft.fr_LikesPercent.meta.js
// ==/UserScript==

'use strict';

function init() {
    var blocks = document.querySelectorAll('.messageUserBlock');

    for (var i = 0, len = blocks.length; i < len; i++) {
        var block = blocks[i],
            likes    = getLikesFromBlock(block),
            messages = getMessagesFromBlock(block),
            likes_nb    = parseInt(likes.textContent.replace(/\s+/g, ''),    10), // Spaces removing
            messages_nb = parseInt(messages.textContent.replace(/\s+/g, ''), 10);
                        
        likes.textContent += " (" + String(roundFloat(likes_nb / messages_nb * 100, 1)) + "%)";
    }
}

function getLikesFromBlock(block) {
    return block.querySelector('.extraUserInfo>dl:nth-child(3)>dd');
}

function getMessagesFromBlock(block) {
    return block.querySelector('.extraUserInfo>dl:nth-child(2)>dd>a');
}

function roundFloat(x, digits) {
	var pwr = Math.pow(10, digits);
	return Math.round(x * pwr) / pwr;
}

init();
