---
title: Realtime data Monitor
subtitle: This page auto-refres each 10 seconds, you don't have to reload
date: 2019-07-22T15:01:21+01:00
draft: false
description: Realtime data Monitor
extraCSS: "/css/monitor.css"

og_title: "ytTREX Monitor"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/data"
og_description: "youtube.tracking.exposed realtime data Monitor"
---

<div id="fuffa">

  <div class="info" id="master--info" hidden>
    <span class="col-1 number">💡</span>
    <span class="col-1 relative"></span>
    <b>
      <span class="col-5 message"></span>
      <span class="col-3 subject"></span>
    </b>
  </div>

  <div class="htmls" id="master--htmls" hidden>
    <span class="col-1 number">🖳</span>
    <span class="col-1 savingTime timevar"></span>
    <span class="col-1 relative"></span>
    <span class="col-3 href"></span>
    <span class="col-3 selector"></span>
    <span class="col-1 size"></span>
    <span class="col-1 publicKey"></span>
  </div>

  <div class="home" id="master--home" hidden>
    <span class="col-1 number">H</span>
    <span class="col-1 savingTime timevar"></span>
    <span class="col-1 publicKey"></span>
    <span class="col-8 firstSection"></span>
  </div>

  <div class="video" id="master--video" hidden>
    <span class="col-1 number">V</span>
    <span class="col-1 savingTime timevar"></span>
    <span class="col-1 id"></span>
    <span class="col-5 title"></span>
    <span class="col-2 authorName"></span>
    <span class="col-1 type"></span>
  </div>

  <div class="supporters" id="master--supporters" hidden>
    <span class="col-1 number">首</span>
    <span class="col-1 timevar creationTime"></span>
    <span class="col-2 relative"></span>
    <span class="col-1 publicKey"></span>
    <span class="col-4 p"></span>
    <span class="col-2 version"></span>
  </div>

  <div class="client" id="master--client" hidden>
    <span class="col-1 number">⚠</span>
    <span class="col-6 message"></span>
    <span class="col-3 subject"></span>
  </div>

  <div class="stat" id="master--stat" hidden>
    <span class="col-1 number">؀</span>
    <span class="col-5 countby"></span>
    <span class="col-1 lastUpdate"></span>
    <span class="col-1 start"></span>
    <span class="col-1 end"></span>
    <span class="col-1 duration"></span>
  </div>

</div>

<div id="loader" class="standardLoader"></div>

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/monitor.js"></script>
<script type="text/javascript">

  $( document ).ready(function() {
    monitor();
  });

</script>