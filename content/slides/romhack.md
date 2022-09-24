---
title: "Porn Platforms Hate Them"
subtitle: "for Exposing Their Mischief With These Two Weird Tricks"
draft: false
type: "webslides"
date: 2022-09-23T10:26:08Z
og_title: "Porn Platforms Hate Them! (for Exposing Their Mischief With These Two Weird Tricks)"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/compare.jpg"
og_url: "https://pornhub.tracking.exposed/slides/rightscon/#slide=1"
og_description: "The non-profit organization Tracking Exposed, which fosters digital rights and algorithm accountability, has developed a set of free-software tools (Potrex and Guardoni) with the intent of bringing light into the underlying mechanisms of one of the major porn platforms existing nowadays. Thanks to these tools, Giulia and Alessandro have achieved an unprecedented angle of view over biases and data processing malpractices that may affect these websites, collecting precious evidence that has proven useful for carrying out academic research and even digital forensics investigations. Their goal is to give empowerment to the users and help them reclaim their rights recognized by the European General Data Protection Regulation (GDPR) and even more. During this talk, they will present the research they have conducted regarding the abuses spotted on a porn platform whose algorithms seem to be operating in a seriously biased way. They will then explore signs of possible data protection law violations and will imagine together strategies and methodologies for the upcoming analysis of these platforms."

extraCSS: "/css/potest-slide-svg.css"
---

<script>removeHeaderFooter(1500)</script>

<!-- Slide 1 -->
<section class="bg-pornhuborange aligncenter">
  <div class="wrap aligncenter fadeInUp">
    <h2><strong>PORN PLATFORMS HATE THEM!</strong></h2>
    <h2>(for Exposing Their Mischief With These Two Weird Tricks)</strong></h2></h2>
    <br>
    <p class="text-symbols"> * * * </p>
    <code class="text-intro white">
        ALESSANDRO POLIDORO - GIULIA CORONA
    </code><br>
        <h4 style="padding-top: 2%;">
        Tracking Exposed
    </h4>
        <h6 class="slide-bottom" style="padding-top: 10%;">
        <span>
          <svg class="fa-book">
            <use xlink:href="#fa-book"></use>
          </svg>
        </span>
        <a href="https://www.tandfonline.com/doi/full/10.1080/23268743.2022.2066566" target=_blank style="color:#1b1b1b;text-decoration: underline;">read the paper</a>
        </h6>  
  </div>
</section>

<!-- Slide 2 -->
<section>
  <div class="wrap">
    <div class="text-center content-left fadeInUp">
      <img class="size-100" src="/images/addon.png">
      <h4 style="color:#1b1b1b;">browser extensions</h2><a target="_blank" rel="noopener noreferrer" href="https://github.com/tracking-exposed/potrex">free software  </a></h4>
    </div>
    <br>
    <div class="fadeInUp content-right">
      <img style="width: 30%; padding-bottom: 1em;" src="/images/header-logo-pornhub-negative.svg">
      <p><code>we analyze platforms</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1><strong>NOT PEOPLE</strong></h1>
      <h4>Non-profit that collects data to decipher the functioning of proprietary algorithms for <strong>public interest</strong>.</h4>
    </div>
  </div>
</section>

<!-- Slide 4 -->
<section class="bg-pornhuborange">
  <div class="wrap">
    <h1><strong>Why Pornhub?</strong></h1>
    <ul class="flexblock features">
      <li>
        <span class="white">&rarr;</span>
        <div>
          <h4>
           Pornhub has affirmed as the main <strong>gateway</strong> for the access to pornographic digital content
          </h4>
        </div>
      </li>
      <li>
        <span class="white">&rarr;</span>
        <div>
          <h4 style="padding-bottom:10px">
            The ‘platformization’ of porn culture
          </h4>
          <h4 class="white">
          <li style="padding: 20px 5px 10px 25px;">
          1. Datafication of users
          </li>
          <li style="padding: 10px 5px 10px 25px;">
          2. Standardization of content based on criteria of popularity and predictability 
          </li>
          <li style="padding: 10px 5px 10px 25px;">
          3. Targeted content and ads (Paasonen, 2019)<br>
          </li>
          </h4>
        </div>
      </li>
      <li>
      <span class="white">&rarr;</span>
        <div>
          <h4>
            ‘Year in Review’ (Pornhub Insights 2021): the <strong>transparency</strong> narrative
          </h4>
          <br>
          <img src="/images/year-in-review-cover.jpg" style="width: 100%;">
        </div>
      </li> 
    </ul>
  </div>
</section>

<!-- Slide 3 -->
<section class="bg-pornhuborange">
  <div class="wrap">
    <blockquote class="text-quote" style="color:#1b1b1b;">
    <h3>
      How platforms conceptualise gender has broader effects, as it <strong>reifies</strong> a specific, socially embedded cultural conception that is able to shape, affect, and maintain gender identities.
    </h3><br>
    <p>
      <cite><a href="https://doi.org/10.1177/1461444815621527" style="color:#1b1b1b;">Bivens et al. 2016</a></cite>
    </p>
    </blockquote>
  </div>
</section>

<!-- Slide 8 - GC -->
<section class="fullscreen bg-potrex">
  <div class="card-50">
    <figure>
      <img src="/images/slides/information_brazil.jpg" alt="Bonsai">
    </figure>
    <div class="flex-content">
      <p><code style="color:#F98E05">algorithms as social policies</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>BIASED BLACK BOXES</strong></h1>
      <h4 class="white text-context">Technology is social before it is technical. —Gilles Deleuze</h4>
      <h4 class="text-intro white"><br>Algorithmic systems have been criticized for perpetuating bias, discriminations, and contributing to inequality. Data and information collection takes place asymmetrically, generating surveillance. Users' data are exploited.<br><br></h4>
      <p style="color: #F98E05;">from the movie: Brazil, 1985 by Terry Gilliam</p>
    </div>
  </div>
</section>

<!-- Slide 9 
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
        <h4 style="color:#1b1b1b;">Open homepages</h2>(or videos) </b>avoiding PTSD</b>
      </div>
      <div class="col-sm text-center">
        <img src="/images/unravel.png"><br /> <br>
        <h4 style="color:#1b1b1b;">Unravel the algorithmic mist</h2>starting from a .csv release
      </div>
    </div>
  </div>
</section>
-->

<!-- Slide 10 -->
<section>
  <div class="wrap">
    <h1 style="color: #F98E05;"><strong>SCRAPISM WITH POTREX</strong></h1>
    <h4 class="text-intro">the practice of web scraping for artistic, emotional, and critical ends. [Sam Lavigne] <br><br></h4 >
    <ul class="flexblock steps">
      <!-- li>a? Add blink = <ul class="flexblock steps blink">-->
      <li>
        <span>
          <svg class="fa-code">
            <use xlink:href="#fa-code"></use>
          </svg>
        </span>
        <h4>01. HTML Websites</h4>
        <h3>not structured data</h3>
      </li>
      <li>
        <div class="process step-2"></div>
        <span>
          <svg class="wrench">
            <use xlink:href="#fa-wrench"></use>
          </svg>
        </span>
        <h4>02. Potrex extension</h4>
        <h3>Scraping tool</h3>
      </li>
      <li>
        <div class="process step-3"></div>
        <span>
          <svg class="fa-database">
            <use xlink:href="#fa-database"></use>
          </svg>
        </span>
        <h4>03. Structured Data</h4>
        <h3>JSON/CSV </h3>
      </li>
    </ul>
  </div>
</section>

<!-- Slide 12 -->
<section>
<div class="wrap">
  <div class="card-60 bg-white">
    <figure>
      <img src="/images/paper/variables.jpg" width="80%">
    </figure>
    <div class="flex-content">
      <h2><strong>METHODOLOGY</strong></h2>
      <p>‘gender’ and ‘sexual orientation’ are defined by the platform</p>
      <ul class="description">
        <h4>
          All gender identities, one sexual interest. <br> We focused then on personalized sections of the homepage. 
        </h4><br><br><br><br>
        <li>
          <strong class="text-label" style="width: 30rem;color: #F98E05;">Accounts:</strong> 10
        </li>
        <li>
          <strong class="text-label" style="width: 30rem;color: #F98E05;">Videos per homepage:</strong> 46
        </li>
        <li>
          <strong class="text-label" style="width: 30rem; color: #F98E05;">Homepages:</strong> 1600
        </li>
        <li><strong class="text-label" style="width: 30rem; color: #F98E05;">Reliability:</strong> 99.1%</li>
        <li><strong class="text-label" style="width: 30rem; color: #F98E05;">Unique videos:</strong> 118</li>
      </ul>
    </div>
  </div>
</div>
</section>

<!-- Slide 11 -->
<section>
  <div class="wrap">
    <div class="grid vertical-align">
        <div class="column">
        <p><code>CSV|JSON structure</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>POTREX DATA FORMAT - HOMEPAGE</strong></h1>
        <h5>Each entry represent a proposed video from Pornhub. <br>
          They are video snippet you might click on while visiting the platform.<br></h4>
        </div>
        <div class="column">
        <pre style="font-size:1em; line-height:1.4em">
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
      },</pre>
        </div>
    </div>
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
        <h4 style="color:#1b1b1b;">Open homepages</h2>(or videos) </b>avoiding PTSD</b>
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

<section>
  <div class="wrap size-50">
  <h2> What signing up to Pornhub looks like ;) </h2>
  <img src="/images/paper/gender.jpg">
  </div>
</section>
-->

<!-- Slide 5 
<section>
  <div class="wrap">
    <div class="grid vertical-align">
        <div class="column">
        <p><code>methodology</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>OUR RESEARCH IN BRIEF:</strong></h1>
        <h4>
        <li>
          10 accounts
        </li>
        <li>   
          1.600 variations of Pornhub’s homepages
        </li>
        <li>
          25.000 videos suggested
        </li>
        </ul>
        </h4>
        </div>
        <div class="column">
          <img src="/images/paper/gender.jpg">
        </div>
    </div>
  </div>
</section>
-->



<!-- Slide 13 
<section>
  <div class="wrap">
    <div class="card-30 bg-pornhuborange fadeInUp">
      <figure>
        <img src="/images/pov.svg">
      </figure>
      <div class="flex-content">
        <h1>Observing</h1>
        <ul class="description">
          <li><strong class="text-label" style="color:#fff; width: 25rem;">Homepage:</strong> it keeps changing for different users</li>
          <li><strong class="text-label" style="color:#fff; width: 25rem;">Sections:</strong> geographically or individually personalized</li>
          <li><strong class="text-label" style="color:#fff; width: 25rem;">Recommended:</strong> different gender identities have different recommendations</li>
        </ul>
      </div>
    </div>
  </div>
</section> -->

<!-- Slide 14 -->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <h1 style="color: #F98E05">
        <strong>F I N D I N G S </strong>
    </h1><p class="text-symbols" style="color: #F98E05;">* * * </p>
    <h4 class="text-landing" style="color: #fff">
        A small summary </h4>
    <h4 class="text-intro" style="color: #fff">
        graphs made with <a href="https://gephi.org/" target=_blank> gephi </a></h4>
  </div>
</section>

<!-- Slide 15 -->
<section class="bg-potrex">
  <div class="wrap">
    <div class="card-50">
      <figure class="fadeInUp">
        <img src="/images/paper/CommonSection.png"></img>
      </figure>
      <div class="fadeInUp flex-content">
        <p><code style="color:#F98E05">homepages layout</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>COMMON SECTIONS</strong></h1>
        <h5 style="color: #fff">The homepage is not completely individually personalized.</h5>
        <h5 style="color: #F98E05"> The majority of the sections propose the same videos to all users.<br> This is the case for: <br><i>· Hot Porn Videos in Your Country <br>· Most Viewed Videos in Your Country <br>· Recently Featured XXX Videos</i></h5>
        <p style="color: #fff">
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Slide 16 -->
<section class="bg-potrex">
  <div class="wrap">
    <div class="card-50">
      <div class="flex-content fadeInUp">
        <p><code style="color:#F98E05">personalized content</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>RECOMMENDED CATEGORY FOR YOU</strong></h1>
        <h5 style="color: #fff">Not all 10 profiles shared the same 5 sections</h5>
        <h5 style="color: #F98E05">
          The cluster seem to reflect gender-normativity. This is especially relevant considering that this specific section is missing for <i> Same Sex Couple (female), Non-Binary, Trans Female, and Trans Male.</i>
          <br>
        </h5>
      </div>
      <figure class="fadeInUp">
        <!-- <svg id="firstvideo" type="image/svg+xml"></svg> -->
        <img src="/images/paper/Category4u.png"></img>
      </figure>
    </div>
  </div>
</section>

<!-- Slide 17 -->
<section class="bg-potrex">
  <div class="wrap">
    <div class="card-50">
      <figure class="fadeInUp">
        <img src="/images/paper/4u.png"></img>
      </figure>
      <div class="fadeInUp flex-content">
        <p><code style="color:#F98E05">personalized content</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #fff"><strong>RECOMMENDED<br> FOR YOU</strong></h1>
        <h5 style="color: #fff">Common for all profiles</h5>
        <h5 style="color: #F98E05">the gender-normative group showcases models, channels, and pornstar; the second group doesn't include channels (production companies). Pornhub manages content in relation to gender identity factoring in broader productive and distributive logics as well?</h5>
        <p style="color: #fff">
        </p>
      </div>
    </div>
  </div>
</section>




<!-- Slide 6 -->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <h1 style="color: #F98E05;"><strong>OUR MAIN ARGUMENT</strong></h1>
    </div>
    <div class="content-left white">
      <h4>Data show how the platform leverages on affordances and algorithmic suggestions to build fixed and limited user gender identities: contributing to the reiteration of a heteronormative perspective on sexual desire and sexuality typical of a heterosexual, white, and hegemonic masculinity.</h4>
    <ul class="flexblock metrics white" style="padding-top: 90px;">
      <li>
        <span>
          <svg class="fa-venus-mars">
            <use xlink:href="#fa-venus-mars"></use>
          </svg>
        </span>
        Heteronormative
      </li>
      <li>
        <span>
          <svg class="fa-money">
            <use xlink:href="#fa-money"></use>
          </svg>
        </span>
        White
      </li>
      <li>
        <span>
          <svg class="fa-users">
            <use xlink:href="#fa-users"></use>
          </svg>
        </span>
        Masculine      
      </li>
    </ul>
  </div>
  </div>
  <!-- .end .wrap -->
</section>

<!-- Slide 18 
<section class="bg-pornhuborange">
  <div class="wrap">
    <blockquote class="text-quote" style="color:#1b1b1b;">
    <p>
    The result of this deeply male-dominated culture is that the male experience, the male perspective, has come to be seen as universal, while the female experience -that of half the global population, after all- is seen as, well, niche.” 
    </p>
    <p>
      <cite><a href="https://carolinecriadoperez.com/book/invisible-women/" style="color:#1b1b1b;">Caroline Criado Perez, Invisible Women: Data Bias in a World Designed for Men, 2019</a></cite>
    </p>
    </blockquote>
  </div>
</section> -->

<!-- Slide 7 -->
<section>
  <div class="wrap size-60">
    <h1 style="color: #F98E05;"><strong>WHAT COMES NEXT?</strong></h1>
    <hr>
    <div class="bg-white shadow">
      <ul class="flexblock reasons">
        <li>
          <h4>Raise awareness about topics like GDPR, algorithms, consent and desire</h4>
        </li>
        <li>
          <h4>Holding the platform accountable for lack of transparency with respect to the tracking and use of users’ personal and behavioural data</h4>
        </li>
        <li>
          <h4>Call for action through TrEx’s free tools</h4>
      </li>
      </ul>
    </div>
  </div>
</section>


<!-- Slide 19 - RODIA -->

<section class="fullscreen bg-potrex">
    <div class="card-50">
      <figure>
        <img src="/images/slides/toast.jpeg"></img>
      </figure>
      <div class="fadeInUp flex-content">
        <p><code style="color:#F98E05">how do our tools work</code></p>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h1 style="color: #F98E05"><strong>A NEW TRICK</strong></h1><br><br>
      <h4 class="white"><br><br>Gaining data from volunteers is essential for algorithm analysis. <br><br>But sometimes to prove a certain bias we have to begin from a clean environment.</h4><br>
        <p style="color: #fff">
        </p>
      </div>
    </div>
</section>


<!-- Slide 20 -->
<section class="bg-pornhuborange">  
  <div class="wrap">
    <h1><strong>WHAT ARE WE NOW LOOKING FOR?</strong></h1>
    <ul class="flexblock features">
      <li>
        <span class="white">&rarr;</span>
        <div>
          <h4>
           Third Party Trackers
          </h4>
        </div>
      </li>
      <li>
        <span class="white">&rarr;</span>
        <div>
          <h4>
            Recommended Content
          </h4>
        </div>
      </li>
      <li>
      <span class="white">&rarr;</span>
        <div>
          <h4>
           Corn?
            <figure>
            <img src="/images/slides/corn.jpeg" style="width:100%;"alt="corn">
            </figure>
          </h4>
        </div>
      </li> 
    </ul>
  </div>
</section>

<!-- Slide 21 -->
<section class="fullscreen bg-potrex">
  <div class="card-50">
    <figure>
      <img src="/images/slides/guardoni.png" alt="Bonsai">
    </figure>
    <div class="flex-content">
      <p><code style="color:#F98E05">tool</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>Guardoni.js</strong></h1>
      <h4 class="white text-context">From the potrex <a href="https://github.com/tracking-exposed/potrex" taget="blank">github repository</a> you can find our automation script in methodology/bin/guardoni.js</h4>
      <h4 class="text-intro white"><br>And what can it do for us?<br><br></h4>
    </div>
  </div>
</section>

<!-- Slide 22 -->
<section>
  <div class="wrap">
    <h1 style="color: #F98E05;"><strong>LABORATORY SETUP</strong></h1>
    <h4 class="text-intro">It can automate for us some boring tasks: <br><br></h4>
    <ul class="flexblock steps">
      <!-- li>a? Add blink = <ul class="flexblock steps blink">-->
      <li>
        <h4>01. Install the potrex extension on a clean browser</h4>
      </li>
      <li>
        <div class="process step-2"></div>
        <h4>02. Initialize a new profile if needed</h4>
      </li>
      <li>
        <div class="process step-3"></div>
        <h4>03. Navigate through the website</h4>
      </li>
      <li>
        <div class="process step-4"></div>
        <h4>04. Harvest tracking data and screenshots</h4>
      </li>
    </ul>
  </div>
</section>

<!-- Slide 23 -->
<section>
<div class="wrap">
  <div class="grid vertical-align">
    <div class="column">
      <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>PUPPEETER 101</strong></h1>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h4>
      <li style="line-height:2em;">
        Chrome(ium) automation through dev tools!
      </li>
      <li style="line-height:2em;">
        It's a node library with JS extensions
      </li>
      <li style="line-height:2em;">
        Made with UI testing and browser automation in mind
      </li>
      <li style="line-height:2em;">
        Full browser configuration capabilities
      </li>
      </h4>
    </div>
    <div class="column">
    <h4>
       From its github repository
    </h4>
      <pre class="zoomIn" style="font-size:1.1em; line-height:2em">
      <br>
      const puppeteer = require('puppeteer');
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.screenshot({ path: 'example.png' });
        await browser.close();
      })();
      </pre>
    </div>
  </div>
</div>
</section>

<!-- Slide 24 -->
<section>
<div class="wrap">
  <div class="grid vertical-align">
    <div class="column">
      <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>AN EXPERIMENT SAMPLE</strong></h1>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h4>
        In general for an experiment we mean <strong> a set of commands </strong> which automates the navigation of our bot.<br><br>
        This includes a landing page, a list of videos to be watched and the time to be spent on each page.<br><br>
        From the potrex repository in <code>methodology/json/phase1/guardoni2.json</code> 
      </h4>
    </div>
    <div class="column">
      <pre class="zoomIn" style="font-size:0.9em; line-height:1.5em">
[{
    "name": "Homepage first",
    "url": "https://www.pornhub.com/",
    "loadFor": "17s",
    "screenshotAfter": "5s"
},{
    "name": "Hentai-1",
    "loadFor": "3m",
    "screenshotAfter": "5s",
    "url": "https://www.pornhub.com/view_video.php?viewkey=ph604a68bb36307"
},{
    "name": "Hentai-2",
    "loadFor": "3m",
    "url": "https://www.pornhub.com/view_video.php?viewkey=ph604a625b562ea"
},{
...
      </pre>
    </div>
  </div>
</div>
</section>

<!-- Slide 25 -->
<section>
<div class="wrap">
  <div class="grid vertical-align">
    <div class="column">
      <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>CODE SAMPLES</strong></h1>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h4>
        From <code> methodology/src/domainSpecific.js </code> <br> you can see that we save everything from localstorage
      </h4>
    </div>
    <div class="column">
      <pre class="zoomIn" style="font-size:1.5em; line-height:1.9em">
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  json[key] = localStorage.getItem(key);
...
const cookies = await page._client.send('Network.getAllCookies');
      </pre>
    </div>
  </div>
</div>
</section>

<!-- Slide 26 -->
<section>
<div class="wrap">
  <div class="grid vertical-align">
    <div class="column">
      <h1 class="fadeInUp" style="color: #F98E05; padding-bottom: 2rem;"><strong>CODE SAMPLES</strong></h1>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h4>
        ...Or how third party trackers are saved
      </h4>
    </div>
    <div class="column">
      <pre class="zoomIn" style="font-size:1.5em; line-height:1.9em">
const up = url.parse(reqpptr.url());
if(_.endsWith(up.host, 'pornhub.com') ||
_.endsWith(up.host, 'phncdn.com') )
  return;
const full3rdparty = {
  method: reqpptr.method(),
  host: up.host,
  pathname: up.pathname,
...

if(full3rdparty.method != 'GET')
  full3rdparty.postData = reqpptr.postData();
      </pre>
    </div>
  </div>
</div>
</section>

<!-- Slide 27 -->
<section class="bg-pornhuborange">
  <div class="wrap">
    <blockquote class="text-quote" style="color:#1b1b1b;">
    <p>
    Anecdotal evidence suggests that there are significant differences between the third-party organizations operating in the porn and the regular web tracking industry as large online ad networks such as Google Ads set strict constraints for porn-related publishers, prohibiting the advertising of adult-oriented products and services. These restricting terms of services [...] opened new market opportunities for other actors who have specialized in providing advertising and tracking technologies to adult sites. This context has created, as a result, <b>a parallel ecosystem of third-party service providers </b>in the porn ecosystem who has not been scrutinized by regulators, policy makers, and the research community.
    </p>
    <p>
      <cite><a href="https://www.researchgate.net/publication/336654445_Tales_from_the_Porn_A_Comprehensive_Privacy_Analysis_of_the_Web_Porn_Ecosystem" style="color:#1b1b1b;">Tales from the Porn: A Comprehensive Privacy Analysis of the Web Porn Ecosystem, 2019</a></cite>
    </p>
    </blockquote>
  </div>
</section>

<!--
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
        <br>
        <li>
        <h5> Linguistic analysis of titles and comments to understand the imagery surrounding videos/categories/channels</h5>
        </li>
      </ul>
  </div>
</section>
-->
<!-- Slide 28 -ALE -->
<section class="bg-potrex">
  <div class="wrap">
    <div class="card-40">
      <figure>
        <img src="/images/slides/bean.jpeg" alt="mrbean">
      </figure>
      <div class="flex-content">
        <h1 style="color: #F98E05;"><strong>How did we get here?</strong></h1>
        <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
        <h4 class="white"><b>The “Legal Vacuum”</b></h4>
        <h4 class="white">A legal context in which things are not clear, there is no applicable law or in which some injustice is uncorrected</h4>
      </div>
    </div>
  </div>
</section>

<!-- Slide 29-->
<section>
  <div class="wrap size-60">
    <h1 style="color: #F98E05;"><strong>ABOUT THE LEGAL VACUUM</strong></h1>
    <hr>
    <div class="bg-white shadow">
      <ul class="flexblock reasons">
        <li>
          <h4>Lack of norms (at every level)</h4>
        </li>
        <li>
          <h4>Lack of concepts (categories, principles)</h4>
        </li>
        <li>
          <h4>Lack of political will (controversial and complex topic)</h4>
      </li>
      </ul>
      <br><br>
      <h4>In the words of Ludwig Mies van der Rohe “Less is more”?</h4>
    </div>
  </div>
</section>

<!-- Slide 30-->
<section>
<div class="wrap">
  <div class="grid vertical-align">
    <div class="column">
      <h1 class="fadeInUp" style="color: #F98E05;"><strong>In the European context some precious tools are already filling up the void</strong></h1>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h4>
      <li style="line-height:1.5em;">
        General Data Protecion Regulation (since 2018)
      </li>
      <li style="line-height:1.5em;">
        Privacy and Electronic Commerce Directive (since 2002)
      </li>
      <li style="line-height:1.5em;">
        ecommerce directive (since 2000)
      </li>
      <li style="line-height:1.5em;">
        … and more
      </li>
      </h4>
    </div>
    <div class="column">
    <img src="/images/slides/europe.png" ></img>
    </div>
  </div>
</div>
</section>

<!-- Slide 31-->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <h1 style="color: #F98E05;"><strong>Legally speaking, what about porn platforms?</strong></h1>
    </div>
    <div class="content-left white">
      <h4>
      <ul>
      <li style="padding-bottom:3%;">“I shall not today attempt further to define the kinds of material […] <b style="text-decoration: underline;">but I know it when I see it</b>”  famous quote by Potter Stewart</li>
      <li style="padding-bottom:3%;">Producing, selling and possessing porno is still illegal in many nations</li>
      <li style="padding-bottom:3%;">There has been a significant effort to stop child pornography and non-consensual pornography</li>
      <li style="padding-bottom:3%;">We can see a growing effort in preventing under age users to access online pornography</li>
      <li>An interesting debate has sparked over the addictive nature of mainstream pornographic content</li>
      </ul>
    <ul class="flexblock metrics white" style="padding-top: 90px;">
</section>

<!-- Slide 32-->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <h1 style="color: #F98E05;"><strong>SOME OPEN ISSUES</strong></h1>
    </div>
    <div class="content-left white">
      <h4>
      <ul>
      <li style="padding-bottom:3%;">sex-workers and prostitutes rights</li>
      <li style="padding-bottom:3%;">privacy</li>
      <li style="padding-bottom:3%;">role of pornography in our society</li>
      </ul>
      <!-- Slide 18<img src="/images/slides/pornography.jpeg" ></img> -->
    <ul class="flexblock metrics white" style="padding-top: 90px;">
</section>

<!-- Slide 33-->
<section>
  <div class="wrap size-50">
    <h1 style="color: #F98E05;"><strong>POSSIBLE APPROACHES</strong></h1>
    <hr>
    <div class="bg-white shadow">
      <ul class="flexblock reasons">
        <li>
          <h4>Policy</h4>
        </li>
        <li>
          <h4>Advocacy</h4>
        </li>
        <li>
          <h4>Litigation</h4>
      </li>
      </ul>
    </div>
  </div>
</section>

<!-- Slide 34-->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <p><code style="color:#F98E05">reactive and proactive</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>1. POLICY</strong></h1>
    </div>
    <div class="content-right white">
      <h4>
      <ul>
      <li style="padding-bottom:3%;line-height: 130%;">currently most of power and agency over this field is in the hands of the private sector</li>
      <li style="padding-bottom:3%;line-height: 130%;">there are many projects that try to offer alternatives to mainstream online pornography, embedding values like feminism, non-conformity of gender, sex-workers empowerment and more</li>
      <li style="padding-bottom:3%;line-height: 130%;">public opinion does not seem to see this issue as a priority also due to a cultural taboo</li>
      </ul>
    <ul class="flexblock metrics white" style="padding-top: 90px;">
</section>

<!-- Slide 35-->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <p><code style="color:#F98E05">reactive and proactive</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>2. ADVOCACY</strong></h1>
    </div>
    <div class="content-right white">
      <h4>
      <ul>
      <li style="padding-bottom:3%;line-height: 130%;">this topic is often not welcomed by political institutions</li>
      <li style="padding-bottom:3%;line-height: 130%;">pushing for openness on these issues may escalate in a moral panic </li>
      <li style="padding-bottom:3%;line-height: 130%;">a blind fight against obscenity and other forms of extremism generate a toxic debate</li>
      </ul>
    <ul class="flexblock metrics white" style="padding-top: 90px;">
</section>

<!-- Slide 36-->
<section class="bg-potrex">
  <div class="wrap aligncenter fadeInUp">
    <div class="content-left">
      <p><code style="color:#F98E05">only reactive</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>3. LITIGATION</strong></h1>
    </div>
    <div class="content-right white">
      <h4>
      <ul>
      <li style="padding-bottom:3%;line-height: 130%;"> It seems to be the most reachable approach at the present time</li>
      <li style="padding-bottom:3%;line-height: 130%;"> Allows to bring together law and technology specialists during evidence acquisition and reporting </li>
      <li style="padding-bottom:3%;line-height: 130%;"> Involves judges and Data Protection Authorities in bringing light into the legal vacuum</li>
      </ul>
    <ul class="flexblock metrics white" style="padding-top: 90px;">
</section>

<!-- Slide 37-->
<section class="fullscreen bg-potrex">
  <div class="card-50">
    <figure>
      <img src="/images/slides/sailor.jpeg" alt="sailor">
    </figure>
    <div class="flex-content">
      <p><code style="color:#F98E05">feedbacks</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>WHAT ABOUT YOU</strong></h1>
      <h4 class="white"><br>
      <ul> 
      <li>Are you aware of any issues?</li>
      <li>What would you like to investigate?</li>
      <li>How? Which methodology would you use?</li>
      </ul>
      </h4>
    </div>
  </div>
</section>

<!-- Slide 38 -->
<section class="bg-pornhuborange aligncenter">
  <figure style="padding-bottom:4rem;">
    <a href="https://tracking.exposed/manifesto" target=_blank>
    <img src="/images/sticker/sticker-poTREX-arial.png" ></img></a>
  </figure>
  <h2 class="aligncenter fadeIn" style="color:#000">
    mail: team[@]tracking.exposed
  </h2>
</section>

<section class="fullscreen bg-potrex">
  <div class="card-50">
    <figure>
      <img src="/images/minkymouse.jpeg" alt="Bonsai">
    </figure>
    <div class="flex-content">
      <p><code style="color:#F98E05">thank you</code></p>
      <p class="text-symbols" style="text-align: left; color: #F98E05;">* * * </p>
      <h1 style="color: #F98E05;"><strong>GRAZIE PER L'ATTENZIONE</strong></h1>
      <h3 class="white">per stampare Minki rivolgetevi a ESC</h3>
    </div>
  </div>
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
