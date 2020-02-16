---
title: "final report - poTEST#1"
subtitle: "January 2020: we made the first coordinated observation of the PornHub algorithm, here our findings and how to let you reproduce the experiment"
draft: false

og_title: "Coordinated observation of PornHub — test#1 updates"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/pov.jpg"
og_url: "https://pornhub.tracking.exposed/potest/final-1"
og_description: "in January 2020 we made the first coordinated observation of the PornHub algorithm, here our findings and how to let you reproduce the experiment"

extraCSS: "/css/report.css"
---

<div style="background-color: #f98e05; padding: 30px 0px 20px 0px; text-align: center; margin-bottom: 30px;">
  <h2 style="color: #fff">Final report on the first collaborative algorithm observation of PornHub </h2>
</div>

After our global-call on the [19th of January](/potest/1), we are glad to follow-up and to say:

* The test on the PornHub algorithm went well enough. More than 100+ new supporters show up. [/impact](/impact). _This is not enough to be representative, but it is a good start to test our process._
* We collected 87 correct sequences (see at [methodology](#how-extraction-works) section our selection logic). _We released the software and documented the data format: we'll repeat the experiment soon._
* We produced three versions of the CSV (updates and bugfix) to allow other research replicate the study. _Sadly nobody yet plays with it except us, but if there is any group of researchers we should keep updated, please reach out potrex-team@tracking dot exposed._
* We keep [sharing our updates while the investigation was going on](https://pornhub.tracking.exposed/potest/announcement-1/), _we are now going to share this final report and some synthetic [slides](https://pornhub.tracking.exposed/slides/potest1/) on our [social](https://twitter.com/trackingexposed) [media](https://facebook.com/personalizationalgorithm) [channels](https://nebbia.fail/@TRackingEXposed)._

{{< colorblock text="1. In a few words" >}}

<div class="row">
	<div class="col-sm">
    <h2>Findings </h2>
    <p>

As expected: many little steps and nothing ground breaking.

We don't have **any major finding** (and what you should expect as a major finding with such unexperienced test? :)
potest#1 allow us to test ourselves and to identify some variables playing behind the scene of PornHub. In short, the results are focus on understanding better the platform before design a more precise test.
    </p>
  </div>

  <div class="col-sm">
    <h2> Quick table of Findings </h2>
    <p>
      <li> When you watch a video, the eight related content might be the same (fixed recommendation) or dynamic. In this first test we were testing a video published on PH 11 years ago and another one 24 hours before the test. With this frame, might be simply to say <i>old videos get their recommendation frozen while new video are subject to testing</i>, and this insights gives us a new research direction. </li>
      <br>
      <li> The homepage of PornHub has 5 to 7 sections. Only two of these sections are personalized for individual, <i>the priority PornHub gives is to what PornHub wants to push.</i></li>
      <br>
      <li><i>Recommendation doesn't seem to be personalized</i> with our test. We know it should be, we didn't yet isolated a clear evidence.</li>
    </p>
  </div>
</div>

<div style="background-color: #f98e05;  padding: 30px 0px 20px 0px; text-align: center; margin-bottom: 30px; margin-top: 50px;">
  <h2 style="color: #fff">2. The test</h2>
</div>

## 2.1 The design of the experiment

* It is complicated to make interesting inferences using data collected by random people on random videos; we need to control some variables.
* We use to test PornHub's recommended system with profiles under our control. This allows us to understand the role of all the variables involved in the process, but this is a limited strategy because it doesn't consider the real variety of profiles used by common people.
* Therefore, we decided to create this collaborative observation: **we asked random people across the world to repeat the same sequence of actions** and measure how recommended video changes.

## 2.2 How extraction works

The collection lasted for 24 hours, and our extraction method consider only the complete sequences (if a sequence is composed by 6 steps like this one, all the steps in the exact sequence should have been recorded).

The extraction is done with [this nodejs script](https://github.com/tracking-exposed/potrex/blob/master/backend/scripts/potest-1-generator.js), additional notes in the extraction have been documented [as announcements](/potest/announcement-1).

## 2.3 What we were looking at

* We wanted to compare the visualization of an old video and a recent one to see if the related content tends to be "freeze in time" or keep changing.
Our hypothesis was: with **an old video** PornHub will return for every user the same eight suggested content, with **a new video** PornHub's recommended system will test the best recommended videos to suggest, changing them quite often.
* Before and after the visualization of the videos, we asked to visualize the **Home and Recommended page** to each user involved in the test, to see the effects of the personalization process. We know that the contents of the Homepage change during the day frequently, but we don't know why. Videos tend to be 'hyped' in some hours and then fade away, like a multitude of waves. Recommended videos and home page share the same pool of 'hyped' videos, but we wanted to know if different users across the world share common suggestions.

<div style="background-color: #f98e05;  padding: 30px 0px 20px 0px; text-align: center; margin-bottom: 30px; margin-top: 50px;">
  <h2 style="color: #fff">3. The analysis</h2>
</div>

We looked at correlation and pattern, to help us in the analysis, we loaded some sections of our CSV in a network analysis tool ([Gephi](https://gephi.org/)).

## 2.3.1 Videos watched

All the users get the same 8 related content when they watch the **old video**.
With the **second video** (uploaded few hours before the test), we have a different scenario: the suggested videos are different across users, the change during time, and they are clustered at least in eight topic-related groups.

<div class="row">

  <div class="col-sm">
    <h3> First video "lily thai": uploaded 11 years ago. </h3>
    <p>
      Here you can see the suggestions recorded for the first video watched.
      Each watcher got exactly the same recommendations.
      Each white node in a circle is a different participant to the experiment; each orange node is the title of a suggested video. The labels are the titles of the suggested videos. This might let us believe, each video has 8 recommended videos, suggested to watchers as related content. But the scenario was different with the second video.
    </p>
  </div>

  <div class="col-sm">
    <figure>
      <img width="140%" src="/images/pot20/1-first-video.svg" />
    </figure>
  </div>  

</div>

#### Each watcher did get the same recommendation

Each white node in a circle is a different participant to the experiment; each orange node is the title of a suggested video. The labels are the titles of the suggested videos.

This might let us believe, each video has 8 recommended videos, suggested to watchers as related content. But this is not the case, because if we look at the:

### Second video "pussy licking": uploaded 1 day before the test.

* Here you can see the suggestions recorded for the second video watched:

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-second-video.svg" />
  </figure>
</div>  

#### Different watcher did get a different cluster of recommendations.
Each node in a circle is a different user; some nodes have a bigger size because the user has seen the video twice. The other nodes represent videos' titles.
We don't know why some users have different topic-related suggestions, e.g. "pussy licking" (video watched at 12.00 pm), "dildos" (video watched at 15.00pm)...

#### The clusters are correlated to the visualization time.

In the second video watched the different clusters of suggestions change by the visualization's time. We are not able to say if the recommendations vary in this video because it is a new video (the recommendations are not fixed for the algorithm yet), or because PornHub suggests different videos at different times of the day. We need a new test for this!

* In the gif, you can see the second video's recommendations changing based on the hour of visualization.
<figure>
  <img width="100%" src="/images/pot20/timeline.gif" />
</figure>

 The animation shows the progression of the suggestion by the time the users watched the video (from 00.00 to 24.00).
It is interesting how the node "Cheese-cheese-egg", who have visualized all the steps twice (the size of the node is bigger than the other users' one), at the first visualization (H: 00.05) has the suggestions of the grey cluster, and at the second gets the violet's one (H: 15.00). It seems that the user receives different recommendations depending on the hour of the visualization. Suggestions are not only related to the user, but also to the visualization's time.

## 2.3.2 Home and Recommended page suggestions.

Suggested videos for the first and second access to the Home and Recommended page are almost equal. But we don't know what produces this small shift in the suggestions just for some users. Probably it is only random testing.

### Before and after the test, they are almost equal.

* Here you can see the small differences between two access to the **Home page**.

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-homepage.svg" />
  </figure>
</div>  


Each orange node is a different user; each ochre node is a suggested video's title. The violet nodes are the ones who appear just in the second visualization of the Home page.

* Here you can see the small differences between two access to the **Recommended page**.

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-recommended.svg" />
  </figure>
</div>  

Each orange node is a different user; each ochre node is a suggested video's title. The violet nodes are the ones who appear just in the second visualization of the Recommended page.

## 2.3.3 Homepage's categories comparison

### Not all the sections in homepage are the same.

This might seems a standard factor: the first section always mention the nationality name of the watcher, and other sections below are explicitly recommended for you (looks like they should be deduced on your interests).

Before wonder on the logics of section dynamics, We can at lease see how they changes among watchers. The size is proportional to the amount of occurrences recorded.

<div class="card-deck">
  <div class="row">
  <!-- this innerHTML is generated by scripts/potest-1-creampiechart.js
        the file hugosnippet.text,            * *   AND:  * *
                       DO NOT EDIT IT BY HAND!
                      DO NOT CHANGE IT BY HAND!
                       DO NOT FIX IT BY HAND!
    -->
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Section 1</h5>
          <p class="card-text">
            <button style="font-size:0.4em;color:#f900aa">Hot Video in AT</button><button style="font-size:0.5em;color:#f900aa">Hot Video in AU</button><button style="font-size:0.4em;color:#f900aa">Hot Video in NO</button><button style="font-size:0.4em;color:#f900aa">Hot Video in BG</button><button style="font-size:0.4em;color:#f900aa">Hot Video in DK</button><button style="font-size:0.5em;color:#f900aa">Hot Video in GR</button><button style="font-size:0.4em;color:#f900aa">Hot Video in CZ</button><button style="font-size:0.8em;color:#f900aa">Hot Video in NL</button><button style="font-size:0.5em;color:#f900aa">Hot Video in GB</button><button style="font-size:0.9em;color:#f900aa">Hot Video in IT</button><button style="font-size:0.7em;color:#f900aa">Hot Video in DE</button><button style="font-size:0.6em;color:#f900aa">Hot Video Internationally</button><button style="font-size:0.4em;color:#f900aa">Hot Video in BE</button><button style="font-size:0.9em;color:#f900aa">Hot Video in US</button><button style="font-size:0.5em;color:#f900aa">Hot Video in FR</button><button style="font-size:0.5em;color:#f900aa">Hot Video in RU</button><button style="font-size:0.4em;color:#f900aa">Hot Video in RO</button><button style="font-size:0.4em;color:#f900aa">Hot Video in PT</button><button style="font-size:0.4em;color:#f900aa">Hot Video in BR</button><button style="font-size:0.6em;color:#f900aa">Hot Video in CA</button>
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
            <button style="font-size:0.4em;color:#ffaa00">Most View in DK</button><button style="font-size:0.4em;color:#ffaa00">Most View in AT</button><button style="font-size:0.4em;color:#ffaa00">Most View in BR</button><button style="font-size:0.5em;color:#ffaa00">Most View in AU</button><button style="font-size:0.4em;color:#ffaa00">Most View in BE</button><button style="font-size:0.5em;color:#ffaa00">Most View in FR</button><button style="font-size:0.4em;color:#ffaa00">Most View in NO</button><button style="font-size:0.4em;color:#ffaa00">Most View in BG</button><button style="font-size:0.6em;color:#ffaa00">Most View in CA</button><button style="font-size:0.8em;color:#ffaa00">Most View in NL</button><button style="font-size:0.5em;color:#ffaa00">Most View in GR</button><button style="font-size:0.9em;color:#ffaa00">Most View in IT</button><button style="font-size:0.9em;color:#ffaa00">Most View in US</button><button style="font-size:0.4em;color:#ffaa00">Most View in RO</button><button style="font-size:0.4em;color:#ffaa00">Most View in CZ</button><button style="font-size:0.5em;color:#ffaa00">Most View in GB</button><button style="font-size:0.4em;color:#ffaa00">Most View in PT</button><button style="font-size:0.5em;color:#ffaa00">Most View in RU</button><button style="font-size:0.7em;color:#ffaa00">Most View in DE</button><button style="font-size:0.6em;color:#ffaa00">Most View</button>
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
          <h5 class="card-title">Section 3</h5>
          <p class="card-text">
            <button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Lesbian</button><button style="font-size:0.4em;color:#40f">Recommended hentai</button><button style="font-size:0.4em;color:#40f">Recommended teen</button><button style="font-size:3em;color:#55aadd">Recommended For You</button>
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
            <button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Big Dick</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Masturbation</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Fetish</button><button style="font-size:0.4em;color:#d48">Popular With Woman</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Brunette</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Public</button><button style="font-size:0.5em;color:#dfda44">Recently Featured XXX</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Arab</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Party</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Blowjob</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - German</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Big Tits</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - British</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Cumshot</button><button style="font-size:0.4em;color:#ffaa00">Categoria Consigliata Per Te - Italiane</button><button style="font-size:0.7em;color:#ffaa00">Recommended Category For You - Lesbian</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Japanese</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Hardcore</button><button style="font-size:0.5em;color:#ffaa00">Recommended Category For You - Ebony</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - POV</button><button style="font-size:0.6em;color:#ffaa00">Recommended Category For You - Anal</button><button style="font-size:0.7em;color:#ffaa00">Recommended Category For You - MILF</button><button style="font-size:0.5em;color:#ffaa00">Recommended Category For You - Squirt</button><button style="font-size:0.5em;color:#ffaa00">Recommended Category For You - Amateur</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Bondage</button><button style="font-size:0.7em;color:#40f">Recommended teen</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Creampie</button><button style="font-size:0.6em;color:#ffaa00">Recommended Category For You - Threesome</button><button style="font-size:0.6em;color:#40f">Recommended babe</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Big Ass</button><button style="font-size:0.7em;color:#40f">Recommended hentai</button><button style="font-size:0.6em;color:#ffaa00">Рекомендуемая категория для вас - Зрелые</button><button style="font-size:0.4em;color:#ffaa00">Recommended Category For You - Czech</button>
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
            <button style="font-size:3em;color:#dfda44">Recently Featured XXX</button>
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">total here 243</small>
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

* PornHub store in localstorage a sequence of watched video by each user.
* After a while a profile with new cookies and tracking code, start to navigate over a due category, the 'Recommended for [Category Name]' become appropriate with the selected fetish.


### Considerations

PornHub with the stored list of watched video can infer a liked fetish and suggest it in the Recommended.

In this potest#1 we didn't suggest (probably) enough video, and without belonging to a specific category would be hard to see if they influence in any way.

<div style="background-color: #f98e05;  padding: 30px 0px 20px 0px; text-align: center; margin-bottom: 30px; margin-top: 50px;">
  <h2 style="color: #fff">4. Other interesting things  </h2>
</div>

## What we didn't find out, but we'll keep pursuing

* We don't know if any particular producer benefit from a advantageous treatment from algorithm.
* We don't know if, for not-logged-in users, the recommended page change accordingly to what has been seen.
* We know for sure the homepage, 'Recommended For You' sections, depends on your past activity, but we didn't yet linked this evidence.

## Porn research is difficult to outreach 🤷

We shared the invitation below on: [/r/privacy](https://www.reddit.com/r/privacy/comments/equgcy/on_sunday_january_19th_2020_join_the_first/), [/r/italyInformatica](https://www.reddit.com/r/ItalyInformatica/comments/erb7g0/nsfw_aiutiamo_i_ragazzi_italiani_di_tracking/), and [/s/SampleSize](https://www.reddit.com/r/SampleSize/comments/eqwd32/academic_today_collective_observation_of_the/).

As ironic it can look, an algorithm (the antispam filter of reddit) punish us, of course:

{{<bord-img href="/images/pot20/1-reddit-spamfilter.png" >}}

it wasn't the only issue, the first algorithm overlord and true Sauron's eye, Google play its role too:

{{<bord-img href="/images/pot20/1-chrome-rejected.jpg">}}
