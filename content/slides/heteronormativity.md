---
title: "Heteronormativity and Pornography"
subtitle: "an Algorithmic Analysis of PornHub"
draft: false
type: "webslides"
og_title: "Summary and findings"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/compare.jpg"
og_url: "https://pornhub.tracking.exposed/slide/test"
og_description: "While research has focused on the diffusion of online pornography and its broader implications, less attention has been paid to the algorithmic infrastructures through which platforms distribute and manage pornographic content, and how this might reiterate socially embedded views and perspectives."

extraCSS: "/css/potest-slide-svg.css"
---

<script>removeHeaderFooter(1500)</script>

<section class="bg-pornhuborange aligncenter">
  <div class="wrap aligncenter fadeInUp">
    <h2><strong>Heteronormativity and Pornography</strong></h2>
    <h2> an Algorithmic Analysis of Pornhub </h2>
    <br>
    <p class="text-symbols"> * * * </p>
    <p class="text-intro" style="color: #fff">
        Tracking Exposed & UniMi <br>
        (
          <a href="/potest/final-1" target=_blank style="color:#000">Porn Studies</a>
        )
    </p>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="text-center content-left fadeInUp">
      <img class="size-100" src="/images/addon.png">
      <h4 style="color:#1b1b1b;">poTREX extension</h2>Free software<a target="_blank" rel="noopener noreferrer" href="/preview"> pornhub.tracking.exposed</a></h4>
    </div>
    <br>
    <div class="fadeInUp">
      <p><code>we analyze platforms</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1><strong>NOT PEOPLE</strong></h1>
      <h4>TREX browser extension collects data on .json and .csv formats, in order to decipher the functioning of the proprietary algorithms for <strong>public interest</strong>.</h4>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="grid vertical-align">
        <div class="column">
        <p><code>.csv structure</code></p>
        <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>THE DATASET</strong></h1>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h5>Each entry represent a suggested video from Pornhub. <br>Each video snippet you might click on while visiting the platform.<br></h4>
        </div>
        <!-- .end .column -->
        <div class="column">
        <pre>
    {
        "title": "Sunny Sextape on the Sofa! Squirt, deepthroat",
        "authorName": "Leolulu",
        "authorLink": "/pornstar/leolulu",
        "duration": "17:15",
        "href": "/view_video.php?viewkey=ph5e18b11299830",
        "savingTime": "2020-01-19T22:18:10.522Z",
        "metadataId": "738c411c67c7b6107bbb3ff8631070011a814f48",
        "clientTime": "2020-01-19T22:17:48.000Z",
        "size": 421227,
        "randomUUID": "INITucmr5condtj2zkfy9o6cv4",
        "selector": "body",
        "incremental": 0,
        "amountGrossDimension": 0,
        "packet": 0,
        "type": "home",
        "processed": true,
        "step": 0,
        "session": 1,
        "pseudo": "blueberry-cake-pistachio",
        "sectionName": "Hot Porn Videos In United States",
        "sectionHref": "/video?o=ht&cc=us",
        "sectionOrder": 0,
        "displayOrder": 0,
    },
        </pre>
        </div>
        <!-- .end .column -->
    </div>
    <!-- .end .grid -->
  </div>
</section>

<!--
<section>
  <span class="background" style="background-image:url('/images/smoke.jpeg')"></span>    
  <div class="wrap">
    <h1 class="fadeInUp" style="color: #F98E05">ANONYMIZATION PROCESS</h1>
    <ul class="flexblock metrics fadeInUp">
      <li>
        <h2>01. UNIQUE AND SECRET TOKEN</h2>
        <p>Every browser has a unique code attributed</p>
      </li>
      <li>
        <h2>02. YOUR CHOICE</h2>
        <p>Total control managing the data provided: visualize, download or delete</p>
      </li>
      <li>
        <h2>03. NO CONTEXT</h2>
        <p>No data about where you are coming from, who your friends are or what they are doing and such</p>
      </li>
      <li>
        <h2>04. NOT OUR CUSTOMER</h2>
        <p>We are not obsessed by the user ;)</p>
      </li>
    </ul>
  </div>
</section>
-->

<section>
  <div class="wrap aligncenter fadeInUp">
    <h2> Our BOTS from <a target="_blank" rel="noopener noreferrer" href="https://github.com/tracking-exposed/potrex/tree/master/methodology/src">guardoni.js</a> helped us</h2>
    <div class="row mb-5 mt-5">
      <div class="col-sm text-center">
        <img src="/images/addon.png"><br /> <br>
        <h4 style="color:#1b1b1b;">Adding the poTREX extension</h2>By default on every new clean browser profile
      </div>
      <div class="col-sm text-center">
        <img src="/images/click.png"><br /> <br>
        <h4 style="color:#1b1b1b;">Open homepages</h2>avoiding PTSD
      </div>
      <div class="col-sm text-center">
        <img src="/images/unravel.png"><br /> <br>
        <h4 style="color:#1b1b1b;">Unravel the algorithmic mist</h2>starting from a .csv release
      </div>
    </div>
  </div>
</section>

<section>
  <span class="background" style="background-image:url('/images/smoke.jpeg')"></span>    
  <div class="wrap size-60">
    <h2 class="fadeInUp" style="color: #F98E05; padding-bottom:2rem;">To consider how the platform might reiterate a heteronormative point of view, we created several profiles with the intention to investigate differences in <strong>recommended and personalized content</strong>.</h2>
    <p class="text-symbols" style="text-align: left; color: #F98E05;"> * * * </p>
    <h4 class="fadeInUp">to the user accounts were assigned a variable gender identity and a fixed sexual interest during the <strong>registration phase</strong></h4>
  </div>
</section>

<section class="bg-pornhuborange">
  <!--.wrap = container (width: 90%) -->
  <div class="wrap">
    <blockquote class="text-quote" style="color:#1b1b1b;">
    <p>
      How platforms conceptualise gender has broader effects, as it reifies a specific, socially embedded cultural conception that is able to shape, affect, and maintain gender identities.
    </p>
    <p>
      <cite><a href="https://doi.org/10.1177/1461444815621527" style="color:#1b1b1b;">Bivens et al. 2016</a></cite>
    </p>
    </blockquote>
  </div>
  <!-- .end .wrap -->
</section>

<section>
  <div class="wrap size-60">
  <h2> What Pornhub looks like ;) </h2>
  <img src="/images/paper/gender.jpg">
  </div>
</section>

<section>
<div class="wrap">
  <div class="card-50 bg-white">
    <figure>
      <img src="/images/paper/variables.jpg">
    </figure>
    <div class="flex-content">
      <h2>Methodology</h2>
      <p>‘gender’ and ‘sexual orientation’ are defined by the platform</p>
      <ul class="description">
        <p>
          Data collection processes leveraged on the ‘Pornhub Tracking Exposed’ (poTREX) infrastructure, that collects and processes data from Pornhub.com web pages such as page layout, video order, titles and views, authors, categories, and more.
          <br><br>
          This data collection helped us to determine potential recurring patterns, especially regarding the underlying logics governing the different sections of the homepage.
        </p>
        <li><strong class="text-label" style="width: 30rem;color: #F98E05;">Videos per homepage:</strong> 46 </li>
        <li>
          <strong class="text-label" style="width: 30rem; color: #F98E05;">Homepages:</strong> 1600
        </li>
        <li><strong class="text-label" style="width: 30rem; color: #F98E05;">Videos:</strong> 45.959</li>
        <li><strong class="text-label" style="width: 30rem; color: #F98E05;">Reliability:</strong> 99.1%</li>
        <li><strong class="text-label" style="width: 30rem; color: #F98E05;">Unique videos:</strong> 118</li>
      </ul>
    </div>
  </div>
</div>
</section>

<section>
  <div class="wrap">
    <div class="card-30 bg-pornhuborange fadeInUp">
      <figure>
        <img src="/images/pov.svg">
      </figure>
      <div class="flex-content">
        <h2>Observations</h2>
        <ul class="description">
          <li><strong class="text-label" style="color:#fff; width: 15rem;">Homepage:</strong> it keeps changing even for different users</li>
          <li><strong class="text-label" style="color:#fff; width: 15rem;">Recommended:</strong> the personalization based on what the bot saw</li>
          <li><strong class="text-label" style="color:#fff; width: 15rem;">Videos:</strong> some of them where removed</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <h2 style="color: #F98E05">
        <strong>F I N D I N G S </strong>
    </h2><p class="text-symbols" style="color: #F98E05;">* * * </p>
    <p class="text-intro" style="color: #fff">
        A small summary and next steps
    </p>
  </div>
</section>

<section class="bg-potrex">
  <div class="wrap">
    <div class="card-60">
      <figure class="fadeInUp">
        <img src="/images/paper/CommonSection.png"></img>
      </figure>
      <div class="fadeInUp flex-content">
        <p><code style="color:#F98E05">homepages layout</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>COMMON SECTIONS</strong></h1>
        <h5 style="color: #fff">The homepage is not completely individually personalized.</h5>
        <h4 style="color: #F98E05"> The majority of the sections propose the same videos to all users.<br> This is the case for: <br><i>· Hot Porn Videos in Your Country <br>· Most Viewed Videos in Your Country <br>· Recently Featured XXX Videos</i></h4>
        <p style="color: #fff">
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-potrex">
  <div class="wrap">
    <div class="card-60">
      <div class="flex-content fadeInUp">
        <p><code style="color:#F98E05">personalized content</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>RECOMMENDED CATEGORY FOR YOU</strong></h1>
        <h5 style="color: #fff">Not all 10 profiles shared the same 5 sections</h5>
        <h4 style="color: #F98E05">
          The cluster seem to reflect gender-normativity. This is especially relevant considering that this specific section is missing for <i> Same Sex Couple (female), Non-Binary, Trans Female, and Trans Male.</i>
          <br>
        </h4>
      </div>
      <figure class="fadeInUp">
        <!-- <svg id="firstvideo" type="image/svg+xml"></svg> -->
        <img src="/images/paper/Category4u.png"></img>
      </figure>
    </div>
  </div>
</section>

<section class="bg-potrex">
  <div class="wrap">
    <div class="card-60">
      <figure class="fadeInUp">
        <img src="/images/paper/4u.png"></img>
      </figure>
      <div class="fadeInUp flex-content">
        <p><code style="color:#F98E05">personalized content</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>RECOMMENDED <br> FOR YOU</strong></h1>
        <h5 style="color: #fff">Common for all profiles</h5>
        <h4 style="color: #F98E05">the gender-normative group showcases videos from model, channels, and pornstar; the second group instead does not include channels (production companies). Pornhub manages content in relation to gender identity factoring in broader productive and distributive logics as well?
        <p style="color: #fff">
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-potrex">
  <div class="wrap size-50 frame" style="border-color: #F98E05; border-style: dashed;">
    <h1 class="aligncenter" style="color: #F98E05"><strong>F U T U R E <br> D I R E C T I O N S</strong></h1>
    <p class="text-symbols" style="color: #F98E05">* * *</p>
      <ul style="color: #fff">
        <li>
          <h5> Leaning into more qualitative methodologies might lead to different (and interesting) results  </h5>
        </li>
        <br>
        <li>
          <h5> Geographic and Cultural Axis. Analyze geographic differences to understand the effects of potential anglocentrism at the ethnic level. </h5>
        </li>
      </ul>
  </div>
</section>

<section class="bg-pornhuborange aligncenter">
  <figure style="padding-bottom:4rem;">
    <a href="https://tracking.exposed/manifesto" target=_blank>
    <img src="/images/sticker/sticker-poTREX-arial.png" ></img></a>
  </figure>
  <h4 class="aligncenter fadeIn" style="color:#000">
    info[@]tracking.exposed
  </h4>
</section>

<script>
  $(document).ready(function() {
      let visibleFooter = false;
      $("#final-slide").on('mousemove', function() {
        visibileFooter = !visibleFooter && restoreHeaderFooter(800);
      });
    }
  );
</script>
