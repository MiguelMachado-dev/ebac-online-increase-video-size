// ==UserScript==
// @name         EBAC Online - Bigger video screen size
// @namespace    https://github.com/MiguelMachado-dev/ebac-online-increase-video-size
// @version      0.2.2
// @description  Get a bigger video screen size on EBAC lessons
// @updateURL    https://github.com/MiguelMachado-dev/ebac-online-increase-video-size/raw/main/ebacIncreaseVideoSize.user.js
// @downloadURL  https://github.com/MiguelMachado-dev/ebac-online-increase-video-size/raw/main/ebacIncreaseVideoSize.user.js
// @author       https://github.com/MiguelMachado-dev
// @match        https://lms.ebaconline.com.br/lesson/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebaconline.com.br
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const adjustScreenSize = () => {
    const content = document.querySelector('.lesson__page-main-content');
    const kalturaPlayer = document.querySelector('.lesson__block--kaltura');

    content.style.maxWidth = 'inherit';
    kalturaPlayer.style.maxWidth = 'inherit';
  };

  adjustScreenSize();
})();
