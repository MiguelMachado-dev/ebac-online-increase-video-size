// ==UserScript==
// @name         EBAC Online - Bigger video screen size
// @namespace    https://github.com/MiguelMachado-dev/ebac-online-increase-video-size
// @version      0.2.4
// @description  Get a bigger video screen size on EBAC lessons
// @updateURL    https://github.com/MiguelMachado-dev/ebac-online-increase-video-size/raw/main/ebacIncreaseVideoSize.user.js
// @downloadURL  https://github.com/MiguelMachado-dev/ebac-online-increase-video-size/raw/main/ebacIncreaseVideoSize.user.js
// @author       https://github.com/MiguelMachado-dev
// @match        https://lms.ebaconline.com.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebaconline.com.br
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const SECONDS = 1 * 1000;

  const adjustScreenSize = () => {
    const content = document?.querySelector(".lesson__page-main-content")?.style;
    const kalturaPlayer = document?.querySelector(".lesson__block--kaltura")?.style;

    if (!content || !kalturaPlayer) return;
    if (content.maxWidth) return

    content.maxWidth = "inherit";
    kalturaPlayer.maxWidth = "inherit";
  };

  // // https://stackoverflow.com/a/18997637
  const pageURLCheckTimer = setInterval(function () {
    if (
      this.lastPathStr !== location.pathname ||
      this.lastQueryStr !== location.search ||
      (this.lastHashStr !== location.hash)
    ) {
      this.lastPathStr = location.pathname;
      this.lastQueryStr = location.search;
      this.lastHashStr = location.hash;
      adjustScreenSize();
    }
  }, SECONDS);
})();
