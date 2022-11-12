// ==UserScript==
// @name         EBAC Online - Bigger video screen size
// @namespace    https://github.com/MiguelMachado-dev/ebac-online-increase-video-size
// @version      0.2
// @description  Get a bigger video screen size on EBAC lessons
// @updateURL    https://gist.github.com/MiguelMachado-dev/45717827a630bfd955eaa29faa8a1837/raw/0c17eb4cef1c3c863f8d2cc0d40db47c60349e85/ebacChangeVideoSize.user.js
// @downloadURL  https://gist.github.com/MiguelMachado-dev/45717827a630bfd955eaa29faa8a1837/raw/0c17eb4cef1c3c863f8d2cc0d40db47c60349e85/ebacChangeVideoSize.user.js
// @author       https://github.com/MiguelMachado-dev
// @match        https://lms.ebaconline.com.br/lesson/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebaconline.com.br
// @run-at document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const adjustScreenSize = () => {
        const content = document.querySelector(".lesson__page-main-content");
        const lessonBlock = document.querySelector(".lesson__block--kaltura");
        lessonBlock.style.maxWidth = "inherit";
        content.style.maxWidth = "inherit";
    }

    adjustScreenSize();
})();
