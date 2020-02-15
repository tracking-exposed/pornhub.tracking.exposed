---
title: "final report - poTEST#1"
subtitle: "January 2020 we made the first coordinated observation of the Pornhub algorithm, here our findings and how to let you reproduce the experiment"
draft: false

og_title: "Coordinated observation of Pornhub — test#1 updates"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/pov.jpg"
og_url: "https://pornhub.tracking.exposed/potest/final-1"
og_description: "in January 2020 we made the first coordinated observation of the Pornhub algorithm, here our findings and how to let you reproduce the experiment"

extraCSS: "/css/report.css"
---

# The first collaborative algorithm observation: here the final report

After the first experimental global-call on the [19th of January](/potest/1), we are glad to follow-up and to say:

* the test on the pornhub algorithm went well enough. More than 100+ new supporters show up. [/impact](/impact).
* We collected 87 correct sequences (see at [methodology](#how-extraction-works) section our selection logic).
* We produced three versions of the CSV to allow other research replicate the study
* And constantly [shared updates while our small investigation was going on](https://pornhub.tracking.exposed/potest/announcement-1/).
* We don't have **any major finding** because this **is not meant to happen yet**. Observation like this allow the test of few variables, but only in a long term we might eventually exclude enough condition to isolate the algorithm. 

### The design of the esperiment

* It is really difficult to make interesting inferences using data collected by random people on random videos, we need to control same variables.
* We use to test Pornhub's recommended system with profiles under our control. This allow us to undestand the role of all the variables involved in the process, but this is a limited strategy because it doesn't consider the real varity of profiles used by normal people.
* Therefore we decided to create this collaborative observation: we asked random people across the world to repeat the same sequence of actions and measure how recommended video changes.

### What we were looking at

* We wanted to compare the visualization of an old video and a recent one to see if the related content tends to be "freeze in time" or keep changing. 
Our hypothesis were: 1) with an old video Pornhub will return for every user the same eight suggested content 2) with a new videos PornHub's recommended system will test the best recommended videos to suggest, changing them quite often.
* Befoure and after the visualization of the videos, we asked to visualize the Homepage and the Recommended page to each users involved in the test, to see the effects of the personalization process. We know that the contents in the homepage change during the day frequently, but we don't know why. Videos tend to be 'hiped' in some hours and then fade away, like a multitude of waves.Recommended videos and home page share the same pool of 'hyped' videos, but we wanted to kow if different users across the world share common suggestions.

## New findings

We looked at correlation and pattern, to help us in the analysis, we loaded some sections of our CSV in a network analysis tool ([Gephi](https://gephi.org/)).

#### On related content

All the users get the same 8 related content when they watch the **old video**.
With the **second video** (uploaded few hours befoure the test), we have a different scenario: the suggested videos are different across users, the change during time, and they are clustered at least in eight topic-related groups.

### The 11years old video (lily thai)
Here you can see the suggestions recorded for the first video watched:

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-first-video.svg" />
  </figure>
</div>  

#### Each watcher did get the same recommendation

Each white node in a circle is a different partecipant to the experiment; each orange node is the title of a suggested video. The labels are the titles of the suggested videos.

This might let us belive, each video has 8 recommended videos, suggested to watchers as related content. But this is not the case, because if we look at the:

### The 24hours old video (pussy licking)

Here you can see the suggestions recorded for the second video watched:

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-second-video.svg" />
  </figure>
</div>  


Each node in a circle is a different user; some nodes have a bigger size because the user has seen the video twice. The other nodes are suggested videos' titles. 
We don't know why some users have different topic-related suggestions, e.g. "pussy licking" (video watched at 12.00 pm), "dildos" (video watched at 15.00pm)... 

### In the second video watched...

... the different clusters of suggestions change by the visualization's time. We are not able to say if the suggestions change in this video because it is a new video (the suggestions are not fixed for the algorithm yet), or because PornHub suggests different videos at different times of the day. We need a new test for this!

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/timeline.gif" />
  </figure>
</div>  

In the gif, you can see the second video's recommendations changing on the basis of the hour of visualization. Infact the animation shows the progression of the suggestion in accordance with the time the users watched the video. 
It is interesting how the node "Cheese-cheese-egg", who have visualized all the steps twice (the size of the node is bigger than the other users' one), at the first visualization has the suggestions of the grey cluster, and at the second gets the violet's one. It seems that the user gets different suggestions depending on the hour of the visualization. Suggestions are not only related to the user, but also to the visualization's time.


### Not all the sections in homepage are the same.

This might seems a standard factor: the first section always mention the nationality name of the watcher, and other sections below are explicitly recommended for you (looks like they should be deduced on your interestes).

Before wonder on the logics of section dynamics, We can at lease see how they changes among watchers. The size is proportional to the amount of occurencies recorded.

<div class="card-deck">
  <div class="row">
  <!-- this innerHTML is generated by scripts/potest-1-creampiechart.js 
        the file hugosnippet.text 
    -->
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 1</h5>
        <p class="card-text">
          <button style="font-size:0.8em;color:#f900aa">Hot Video in AT</button><button style="font-size:0.9em;color:#f900aa">Hot Video in AU</button><button style="font-size:0.8em;color:#f900aa">Hot Video in NO</button><button style="font-size:0.8em;color:#f900aa">Hot Video in BG</button><button style="font-size:0.8em;color:#f900aa">Hot Video in DK</button><button style="font-size:0.9em;color:#f900aa">Hot Video in GR</button><button style="font-size:0.8em;color:#f900aa">Hot Video in CZ</button><button style="font-size:1.3em;color:#f900aa">Hot Video in NL</button><button style="font-size:0.9em;color:#f900aa">Hot Video in GB</button><button style="font-size:1.4em;color:#f900aa">Hot Video in IT</button><button style="font-size:1.1em;color:#f900aa">Hot Video in DE</button><button style="font-size:1em;color:#f900aa">Hot Video Internationally</button><button style="font-size:0.8em;color:#f900aa">Hot Video in BE</button><button style="font-size:1.4em;color:#f900aa">Hot Video in US</button><button style="font-size:0.9em;color:#f900aa">Hot Video in FR</button><button style="font-size:0.9em;color:#f900aa">Hot Video in RU</button><button style="font-size:0.8em;color:#f900aa">Hot Video in RO</button><button style="font-size:0.8em;color:#f900aa">Hot Video in PT</button><button style="font-size:0.8em;color:#f900aa">Hot Video in BR</button><button style="font-size:1em;color:#f900aa">Hot Video in CA</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 2</h5>
        <p class="card-text">
          <button style="font-size:0.8em;color:#ffaa00">Most View in DK</button><button style="font-size:0.8em;color:#ffaa00">Most View in AT</button><button style="font-size:0.9em;color:#ffaa00">Most View in AU</button><button style="font-size:0.8em;color:#ffaa00">Most View in BE</button><button style="font-size:0.8em;color:#ffaa00">Most View in NO</button><button style="font-size:0.8em;color:#ffaa00">Most View in BG</button><button style="font-size:1em;color:#ffaa00">Most View in CA</button><button style="font-size:1.3em;color:#ffaa00">Most View in NL</button><button style="font-size:0.9em;color:#ffaa00">Most View in GR</button><button style="font-size:1.4em;color:#ffaa00">Most View in IT</button><button style="font-size:1.4em;color:#ffaa00">Most View in US</button><button style="font-size:0.8em;color:#ffaa00">Most View in BR</button><button style="font-size:0.8em;color:#ffaa00">Most View in RO</button><button style="font-size:0.8em;color:#ffaa00">Most View in CZ</button><button style="font-size:0.9em;color:#ffaa00">Most View in GB</button><button style="font-size:0.8em;color:#ffaa00">Most View in PT</button><button style="font-size:0.9em;color:#ffaa00">Most View in RU</button><button style="font-size:1em;color:#ffaa00">Most View</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 215</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 3</h5>
        <p class="card-text">
          <button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Lesbian</button><button style="font-size:0.8em;color:#40f">Recommended hentai</button><button style="font-size:0.8em;color:#40f">Recommended teen</button><button style="font-size:0.9em;color:#ffaa00">Most View in FR</button><button style="font-size:3.4em;color:#55aadd">Recommended For You</button><button style="font-size:1.1em;color:#ffaa00">Most View in DE</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 4</h5>
        <p class="card-text">
          <button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Masturbation</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Fetish</button><button style="font-size:0.8em;color:#d48">Popular With Woman</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Big Dick</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Brunette</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Public</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Arab</button><button style="font-size:0.9em;color:#dfda44">Recently Featured XXX</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Party</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Blowjob</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Big Tits</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Cumshot</button><button style="font-size:0.8em;color:#ffaa00">Categoria Consigliata Per Te - Italiane</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - British</button><button style="font-size:1.2em;color:#55aadd">Recommended For You</button><button style="font-size:1.1em;color:#ffaa00">Recommended Category For You - Lesbian</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Japanese</button><button style="font-size:1em;color:#ffaa00">Recommended Category For You - Anal</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - POV</button><button style="font-size:0.9em;color:#ffaa00">Recommended Category For You - Ebony</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Amateur</button><button style="font-size:0.9em;color:#ffaa00">Recommended Category For You - Squirt</button><button style="font-size:1.1em;color:#ffaa00">Categoria Consigliata Per Te - MILF</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Bondage</button><button style="font-size:1.1em;color:#40f">Recommended teen</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Creampie</button><button style="font-size:1em;color:#ffaa00">Recommended Category For You - Threesome</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Big Ass</button><button style="font-size:1em;color:#40f">Recommended babe</button><button style="font-size:1em;color:#40f">Recommended hentai</button><button style="font-size:1em;color:#ffaa00">Рекомендуемая категория для вас - Зрелые</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Czech</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 5</h5>
        <p class="card-text">
          <button style="font-size:0.8em;color:#40f">Recommended teen</button><button style="font-size:0.8em;color:#40f">Recommended babe</button><button style="font-size:0.9em;color:#40f">Recommended hentai</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - German</button><button style="font-size:0.9em;color:#ffaa00">Recommended Category For You - Lesbian</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Hardcore</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Amateur</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - MILF</button><button style="font-size:0.8em;color:#ffaa00">Recommended Category For You - Anal</button><button style="font-size:3.2em;color:#dfda44">Recently Featured XXX</button><button style="font-size:0.8em;color:#ffaa00">Für dich empfohlene Kategorie - Reife Frauen</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 226</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 6</h5>
        <p class="card-text">
          <button style="font-size:1.2em;color:#dfda44">Recently Featured XXX</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 33</small>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Section 7</h5>
        <p class="card-text">
          <button style="font-size:1em;color:#dfda44">Recently Featured XXX</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 17</small>
      </div>
    </div>
  </div>

  
  </div>
</div>


### How to read this data?

By separating the homepage in _three macro sections_ we see:

1. **Hot and Most View**: the primary entry point for PH is leveraging on collaborative filtering (content selection because trending) by regional or global subgroup.
2. **Recommendations**: this is in second position (less important, perhaps?) and can be a general 'Recommended For You', a portion likely overlapping with the content served in /recommended page, and 'Recommended For You - [Category Name]'. 
3. **Recently Featured**: Content suggested because of chronological order (but we ignore the reason for a video to become Featured).


##### By empirical observation we know:

* PornHub store in localstorage a sequence of watched video
* After a while a profile with new cookies and tracking code, start to navigate over a due category, the 'Recommended for [Category Name]' become appropriate with the selected fetish.


### Hipothesys 

PornHub with the stored list of watched video can infer a liked fetish and suggest it in the Recommended.

In this potest#1 we didn't suggest (probably) enough video, and without belonging to a specific category would be hard to see if they influence in any way.


### Suggested videos for first and second access to the Home and Recommended page are almost equal

... but we don't know what produces this small shift in the suggestions just for some users. Probably it is only random testing.

## Home and Recommended (they share the first macro-section)

Here you can see the small differences between two access to the Home page (Home1.svg and Home2.svg).

Each green node is a different user; each violet node is the title of a suggested video. The black nodes are the ones who appear just in the second visualization of the Home page.

Here you can see the small differences between two access to the Recommended videos page (Recommended1.svg and Reccomended2.svg).

Each green node is a different user; each violet node is the title of a suggested video. The black nodes are the ones who appear just in the second visualization of the Recommended videos page.



### What we didn't find out, but we'll keep pursuing 
* We don't know if any particular producer benefit from a advantageous treatment from algorithm.
* We don't know if, for not-logged-in users, the recommended page change accordingly to what has been seen.
* We know for sure the homepage, 'Recommended For You' sections, depends on your past activity, but we didn't yet linked this evidence. 


# On the outreach History 

We shared the invitation below on: [/r/privacy](https://www.reddit.com/r/privacy/comments/equgcy/on_sunday_january_19th_2020_join_the_first/), [/r/italyInformatica](https://www.reddit.com/r/ItalyInformatica/comments/erb7g0/nsfw_aiutiamo_i_ragazzi_italiani_di_tracking/), and [/s/SampleSize](https://www.reddit.com/r/SampleSize/comments/eqwd32/academic_today_collective_observation_of_the/).

As ironic it can look, an algorithm (the antispam filter of reddit) punish us, of course:

{{<bord-img href="/images/pot20/1-reddit-spamfilter.png" >}}

it wasn't the only issue, the first algorithm overlord and true sauron's eye, Google play its role too:

{{<bord-img href="/images/pot20/1-chrome-rejected.jpg">}}

## Announcement  -- 19 January 2020
On Sunday, January 19th, 2020: join the first collective observation of the #pornhub algorithm!

We are the tracking.exposed team and our main objective is to put a spotlight on users’ tracking, profiling, and the wider data market by performing an open algorithmic analysis. We believe that, as long as the operation of recommendation systems remains obscure, the many side-effects of platform economy cannot be tackled as they should.

After the development of the infrastructure and analysis tools facebook.tracking.exposed and youtube.tracking.exposed, we decided to take inspiration from the 34th rule of the internet: There is porn of it. No exceptions.

So, are now also focusing on online porn giant PornHub, trying to unpack the hidden logic of user profiling!

We do it because personalization algorithms have the potential to shape public perception, and Pornhub claims to implement some kind of personalization!

To do this, we need your help! Join our global test and explore for yourself how the Pornhub experience varies between users that are performing the same actions. You have to follow an 8 step script. (hard work for a Sunday!)
After the test is completed and the evidence analyzed, we will release the dataset, along with some research and a final report, around January 30th, 2020.

You can find our browser extension on the pornhub.tracking.exposed website: it is necessary to participate, and collects what Pornhub send to you. Partecipation is anonymous, the extension can be used in Incognito/Private mode if you allow it, and for extra safety, you can even do the test with a browser you normally do not use (the extension runs in both Firefox and Chrome).

The test is simple &mdash; just follow the script you'll find at this address: https://pornhub.tracking.exposed/potest/1. All you have to do is to click on a few links, and we'll do the rest: by comparing multiple observations coming from our participants, we'll measure how frequently personalized changes happen.

The test is not safe for work! We kindly ask you to watch the two videos that we selected after months of exhausting research, but if you don't like them, don't worry! Twenty seconds are enough for the extension to collect data and send it back to us. Of course, you retain full control of the evidence you send to us: by clicking on the extension icon, you can open your personal page, where you can eventually delete everything you sent us or play with our basic data analysis functionality.

Thank you,
The pornhub.tracking.exposed team
