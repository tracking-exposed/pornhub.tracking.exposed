---
title: "final report - poTEST#1"
subtitle: "January 2020: we made the first coordinated observation of the PornHub algorithm, here our findings and how to let you reproduce the experiment"
draft: false
date: 2020-01-30T10:26:08Z

og_title: "Coordinated observation of PornHub — test#1 updates"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/pov.jpg"
og_url: "https://pornhub.tracking.exposed/potest/final-1"
og_description: "in January 2020 we made the first coordinated observation of the PornHub algorithm, here our findings and how to let you reproduce the experiment"

extraCSS: "/css/report.css"
---
After our global-call on the [19th of January](/potest/1), we are glad to follow-up and to say:

* The test on the PornHub algorithm went well enough. More than 100+ new supporters show up. [/impact](/impact). _This is not enough to be representative, but it is a good start to test our process._
* We collected 87 correct sequences (see at [methodology](#how-extraction-works) section our selection logic). _We released the software and documented the data format: we'll repeat the experiment soon._
* We produced three versions of the CSV (updates and bugfix) to allow other research replicate the study. _Sadly nobody yet plays with it except us, but if there is any group of researchers we should keep updated, please reach out potrex-team@tracking dot exposed._
* We keep [sharing our updates while the investigation was going on](https://pornhub.tracking.exposed/potest/announcement-1/), _we are now going to share this final report and some concise [slides](https://pornhub.tracking.exposed/slides/potest1/) on our [social](https://twitter.com/trackingexposed) [media](https://facebook.com/personalizationalgorithm) [channels](https://nebbia.fail/@TRackingEXposed)._

{{< colorblock text="1. In a few words" >}}

<div class="row">
	<div class="col-sm" style="padding-right: 30px; padding-left: 0;">
    <h2>Findings and Process </h2>
    <p>As expected: many little steps and nothing ground breaking.
      We don't have <b>any major finding</b> (and what you should expect as a major finding with such unexperienced test? :) potest#1 allow us to test ourselves and to identify some variables playing behind the scene of PornHub. In short, the results are focus on understanding better the platform before design a more precise test.
    </p>
    <p>Consider the potest as part of a open process: we'll design proper methodology to explore specific research questions. If anyone has methods to suggest, is welcome to mail us at pornhub-team at tracking dot exposed, or in our <a href="https://chat.securitywithoutborders.org/community/channels/trackingexposed" target=_blank>Mattermost chat</a>.</p>
  </div>

  <div class="col-sm">
    <h2> Quick table of Findings </h2>
    <p>
      <li> When you watch a video, the eight related content might be the same (fixed recommendation) or dynamic. In this first test we were testing a video published on PH 11 years ago and another one 24 hours before the test. With this frame, might be simply to say <i>old videos get their recommendation frozen while new video are subject to testing</i>, and this insights gives us a new research direction. </li>
      <br>
      <li> The homepage of PornHub has 5 (or more, but we fail to pick these) sections. Only two of these sections are personalized for individual, <i>the priority PornHub gives is to what PornHub decides is <b>Most View</b> and <b>Hot Video</b>.</i></li>
      <br>
      <li><i>Recommendation doesn't seem to be personalized</i> with our test. We know it should be, we didn't yet isolated a clear evidence.</li>
    </p>
  </div>
</div>

{{< colorblock text="2. The test" >}}

## 2.1 The design of the experiment

* It is complicated to make interesting inferences using data collected by random people on random videos; we need to control some variables.
* We use to test PornHub's recommended system with profiles under our control. This allows us to understand the role of all the variables involved in the process, but this is a limited strategy because it doesn't consider the real variety of profiles used by common people.
* Therefore, we decided to create this collaborative observation: **we asked random people across the world to repeat the same sequence of actions** and measure how recommended video changes. [Here is the announcement we made circulate the same day](/potest/1), and it asks to contributors to install our browser extension (which records what pornhub decides will appear on your browser, and we want to find out, how much this is individualized)

### The steps we requested to the participants 

<table class="table">
  <thead>
    <tr>
      <th scope="col">Step</th>
      <th scope="col">Link</th>
      <th scope="col">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><a href="https://www.pornhub.com/">Homepage</a>.</td>
      <td>There are regional sections, and we want to see how much PH changes the homepage during the day.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><a target="_blank" rel="noopener noreferrer" href="https://www.pornhub.com/recommended">Recommendation</a> page.</td>
      <td>To see if PH is recommending something unique for you since the beginning.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>The first video <a target="_blank" rel="noopener noreferrer" href="https://www.pornhub.com/view_video.php?viewkey=e77c73d25861c37acea8">it's been on Pornhub for 11 years</a>.</td>
      <td>We want to collect the 8 related video below each video page.</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><a target="_blank" rel="noopener noreferrer" href="https://www.pornhub.com/recommended">Recommendation </a>page.</td>
      <td>To see if the recommendation is change since the first look.</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Second video <a target="_blank" rel="noopener noreferrer" href="https://www.pornhub.com/view_video.php?viewkey=ph5e22e4f60abd6">published the day before the test</a>.</td>
      <td>We want to see the 8 related video below each video page.</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><a href="https://www.pornhub.com/">Homepage</a>.</td>
      <td>To record a second homepage sample.</td>
    </tr>
  </tbody>
</table>


## 2.2 What we were looking at

* We wanted to compare an old video's visualization with a recent one to see if the related content tends to "freeze in time" or keeps changing.
Our hypothesis was that: with **an old video** PornHub will return the same eight suggested content for every user, and that with **a new video** PornHub's recommender system will test a recent sent of best recommended videos and would suggest some of them to the user, changing the set of recomandation quite often.
* Before and after the visualization of the videos, we asked our partecipants to visualize the **Home and Recommended page**. We wanted to highlight in this way the effects of the personalization process. We are aware that the Homepage's contents change frequently during the day, but we don't know the underpinning mechanisms. Aneddoctaly, we can assert that videos tend to be 'hyped' in some hours and then fade away, like waves. *Recommended videos* and *Homepage* share the same pool of 'hyped' videos, we wanted to verify if different users across the world share common suggestions.

## 2.3 How the extraction process worked

* The collection process lasted for 24 hours, our extraction method took into account only the complete sequences (if a sequence is composed by 6 steps like this one, all the steps in the exact sequence should have been recorded).
* The extraction was done with [this nodejs script](https://github.com/tracking-exposed/potrex/blob/master/backend/scripts/potest-1-generator.js). Additional notes in the extraction have been documented [as announcements](/potest/announcement-1).

{{< colorblock text="3. The analysis" >}}

Then, we looked at correlations and patterns, to better perform this analysis, we loaded some sections of our CSV in ([Gephi](https://gephi.org/)), a network analysis tool.

## 2.3.1 Videos watched

All the users got the same 8 related content when watching the **old video**.
On the other hand, with the **second video** (uploaded few hours before the test), we have a very different scenario: the suggested videos are different across users, they according to when the video was watched, and they can be clustered in eight topic-related groups.

<div class="row" style="display: flex; align-items: center;">
  <div class="col-sm-5" style="padding-left: 0;">
    <h3> First video: "lily thai", uploaded 11 years ago. </h3>
    <p>
      Here you can see the suggestions recorded for the first video.
      Each watcher got exactly the same recommendations.
      Each light orange node in a circle is a different participant to the experiment; each orange node is the title of a suggested video. The labels are the titles of the suggested videos. Each video had 8 recommended videos and they were constant for the test duration.
    </p>
  </div>
  <div class="col-sm-7" style="padding-bottom: 30px;">
      <img style="width: 100%; height: auto;" src="/images/pot20/1-first-video.svg" />
  </div>  
</div>

<div class="row" style="padding-top: 30px;display: flex; align-items: center;">
  <div style="background-image: radial-gradient(circle, #1b1b1b 50%, #f7fbfa;" class="col-sm-7">
    <img width="100%" style="padding-bottom: 30px;" src="/images/pot20/1-second-video.svg">
</div>  
<div class="col-sm-5" style="padding:30px 0px 30px 0px;text-align: right;">
  <h3> Second video: "pussy licking", uploaded 1 day before the test. </h3>

  <p> <i> Here you can observe the suggestions recorded for the second video. </i></p>

  <h4> Different watchers were exposed to a different cluster of recommendations. </h4>
  <p>Each node in the circle is a different user; some nodes have a bigger size because the user saw the video twice. The other nodes represent various videos' titles.
  We don't know why some users have different topic-related suggestions, e.g. "pussy licking" (video watched at 12.00 pm), "dildos" (video watched at 15.00pm)...</p>
  </div>
</div>

<div class="row" style="display: flex; align-items: center;">
  <div class="col-sm-7" style="padding:30px 0px 30px 0px;">
    <h4> The clusters are correlated to the visualization time. </h4>
    <p>In the second video the different clusters of suggestions change according to the visualization's time. We are not able to explain which are the underpinning reasons that lead this video to have different reccomandations compared to the previous one. Perhaps, since the video is new the reccomandations have not been 'stabilized' yet. Or, PornHub could attribute a considerable importance to the time of the day in which you are watching a video and, hence, significantly change its reccomandations. Indeed, we would need another test to confirm these just mentioned ideas!</p>
    <i>In the gif, you can see the second video's recommendations changing based on the visualization's timestamp. </i>
</div>
<div class="col-sm-5">
  <img style=" width: 100%; height: auto; padding-bottom:30px;" src="/images/pot20/timeline.gif" />
</div>
</div>

The animation shows the progression of the suggestion by the time the users watched the video (from 00.00 to 24.00).
It is interesting how the node "Cheese-cheese-egg", who performed all the steps twice (the size of the node is bigger than the other users' one), at the first visualization (H: 00.05) received the suggestions of the grey cluster, whereas at the second visualization it received the violet's one (H: 15.00). As we already mentioned, it seems that the user receives different recommendations depending on the hour of the visualization. Therefore, we can point out that suggestions are not only related to the user, but also to the visualization's time.

## 2.3.2 Home and Recommended page suggestions.

The suggested videos for the first and second access to the **Home and Recommended** page are almost identical. Again, we cannot identify the reasons that motivates this minor shift for some users. Probably, it is just random testing.


<div class="row" style="display: flex; align-items: center;">
  <div class="col-sm-7">
    <img style=" width: 100%; height: auto; padding-bottom:30px;" src="/images/pot20/1-recommended.svg" />
  </div>  
  <div class="col-sm-5" style="padding:30px 0px 30px 0px;">
    <p> Here you can see the even smaller differences between two access to the <strong>Recommended page</strong>. Each orange node is a different user; each ochre node is a suggested video's title. The violet nodes are the ones who appear just in the second visualization of the Recommended page.</p>
  </div>
</div>


<div class="row" style="display: flex; align-items: center;">
  <div class="col-sm-5" style="padding:30px 0px 30px 0px;">
    <h3> Before and after the test, suggestions are almost equal. </h3>
    <p> Here you can see the small differences between two access to the <strong>Home page</strong>. Each orange node is a different user; each ochre node is a suggested video's title. The violet nodes are the ones who appear just in the second visualization of the Homepage.</p>
  </div>
  <div class="col-sm-7">
    <img style=" width: 100%; height: auto; padding-bottom:30px;" src="/images/pot20/1-homepage.svg" />
</div>  
</div>

## 2.3.3 Comparing Homepage's categories

### Not all the homepage sections are the same.

In the Homapege, the suggested videos are dislayed under different sections. By comparing different users involved in the experiment we found out that:

* the first and secondon sections always mention the watcher's nationality
* the third and fourth sections below are explicitly *recommended for you* (looks like they should be deduced from your interests).
* the last section is about recent videos

Before wondering about the logics of the sections' dynamics, we can at least observe how they vary among watchers. Font size is proportional to the amount of occurrences recorded.

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
      <div class="card-body" style="background-color:#f98e05">
        <h5 class="card-title">Section 1</h5>
        <p class="card-text">
          <button style="font-size:0.4em;">Hot Video in <b>AT</b></button><button style="font-size:0.5em;">Hot Video in <b>AU</b></button><button style="font-size:0.4em;">Hot Video in <b>NO</b></button><button style="font-size:0.4em;">Hot Video in <b>BG</b></button><button style="font-size:0.4em;">Hot Video in <b>DK</b></button><button style="font-size:0.5em;">Hot Video in <b>GR</b></button><button style="font-size:0.4em;">Hot Video in <b>CZ</b></button><button style="font-size:0.8em;">Hot Video in <b>NL</b></button><button style="font-size:0.5em;">Hot Video in <b>GB</b></button><button style="font-size:0.9em;">Hot Video in <b>IT</b></button><button style="font-size:0.7em;">Hot Video in <b>DE</b></button><button style="font-size:0.6em;">Hot Video Internationally</button><button style="font-size:0.4em;">Hot Video in <b>BE</b></button><button style="font-size:0.9em;">Hot Video in <b>US</b></button><button style="font-size:0.5em;">Hot Video in <b>FR</b></button><button style="font-size:0.5em;">Hot Video in <b>RU</b></button><button style="font-size:0.4em;">Hot Video in <b>RO</b></button><button style="font-size:0.4em;">Hot Video in <b>PT</b></button><button style="font-size:0.4em;">Hot Video in <b>BR</b></button><button style="font-size:0.6em;">Hot Video in <b>CA</b></button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" style="background-color:#fc992e">
        <h5 class="card-title">Section 2</h5>
        <p class="card-text">
          <button style="font-size:0.4em;">Most View in <b>DK</b></button><button style="font-size:0.4em;">Most View in <b>AT</b></button><button style="font-size:0.4em;">Most View in <b>BR</b></button><button style="font-size:0.5em;">Most View in <b>AU</b></button><button style="font-size:0.4em;">Most View in <b>BE</b></button><button style="font-size:0.5em;">Most View in <b>FR</b></button><button style="font-size:0.4em;">Most View in <b>NO</b></button><button style="font-size:0.4em;">Most View in <b>BG</b></button><button style="font-size:0.6em;">Most View in <b>CA</b></button><button style="font-size:0.8em;">Most View in <b>NL</b></button><button style="font-size:0.5em;">Most View in <b>GR</b></button><button style="font-size:0.9em;">Most View in <b>IT</b></button><button style="font-size:0.9em;">Most View in <b>US</b></button><button style="font-size:0.4em;">Most View in <b>RO</b></button><button style="font-size:0.4em;">Most View in <b>CZ</b></button><button style="font-size:0.5em;">Most View in <b>GB</b></button><button style="font-size:0.4em;">Most View in <b>PT</b></button><button style="font-size:0.5em;">Most View in <b>RU</b></button><button style="font-size:0.7em;">Most View in <b>DE</b></button><button style="font-size:0.6em;">Most View</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" style="background-color:#fea348">
        <h5 class="card-title">Section 3</h5>
        <p class="card-text">
          <button style="font-size:0.4em;">Recommended Category For You - Lesbian</button><button style="font-size:0.4em;">Recommended hentai</button><button style="font-size:0.4em;">Recommended teen</button><button style="font-size:3em;">Recommended For You</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" style="background-color:#ffb874">
        <h5 class="card-title">Section 4</h5>
        <p class="card-text">
          <button style="font-size:0.4em;">Recommended Category For You - Big Dick</button><button style="font-size:0.4em;">Recommended Category For You - Masturbation</button><button style="font-size:0.4em;">Recommended Category For You - Fetish</button><button style="font-size:0.4em;">Popular With Woman</button><button style="font-size:0.4em;">Recommended Category For You - Brunette</button><button style="font-size:0.4em;">Recommended Category For You - Public</button><button style="font-size:0.5em;">Recently Featured XXX</button><button style="font-size:0.4em;">Recommended Category For You - Arab</button><button style="font-size:0.4em;">Recommended Category For You - Party</button><button style="font-size:0.4em;">Recommended Category For You - Blowjob</button><button style="font-size:0.4em;">Recommended Category For You - German</button><button style="font-size:0.4em;">Recommended Category For You - Big Tits</button><button style="font-size:0.4em;">Recommended Category For You - British</button><button style="font-size:0.4em;">Recommended Category For You - Cumshot</button><button style="font-size:0.4em;">Categoria Consigliata Per Te - Italiane</button><button style="font-size:0.7em;">Recommended Category For You - Lesbian</button><button style="font-size:0.4em;">Recommended Category For You - Japanese</button><button style="font-size:0.4em;">Recommended Category For You - Hardcore</button><button style="font-size:0.5em;">Recommended Category For You - Ebony</button><button style="font-size:0.4em;">Recommended Category For You - POV</button><button style="font-size:0.6em;">Recommended Category For You - Anal</button><button style="font-size:0.7em;">Recommended Category For You - MILF</button><button style="font-size:0.5em;">Recommended Category For You - Squirt</button><button style="font-size:0.5em;">Recommended Category For You - Amateur</button><button style="font-size:0.4em;">Recommended Category For You - Bondage</button><button style="font-size:0.7em;">Recommended teen</button><button style="font-size:0.4em;">Recommended Category For You - Creampie</button><button style="font-size:0.6em;">Recommended Category For You - Threesome</button><button style="font-size:0.6em;">Recommended babe</button><button style="font-size:0.4em;">Recommended Category For You - Big Ass</button><button style="font-size:0.7em;">Recommended hentai</button><button style="font-size:0.6em;">Рекомендуемая категория для вас - Зрелые</button><button style="font-size:0.4em;">Recommended Category For You - Czech</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 248</small>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" style="background-color:#ffc28a">
        <h5 class="card-title">Section 5</h5>
        <p class="card-text">
          <button style="font-size:3em;">Recently Featured XXX</button>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">total here 243</small>
      </div>
    </div>
  </div>

  </div>
</div>

### Can we generalize the organization of the sections? 

By separating the homepage in _three macro sections_ we noticed that:

1. **Hot and Most View** the primary entry point for PH is leveraging on collaborative filtering (content selection because of trending) by regional or global subgroups.
2. **Recommendations** in second position (less important, perhaps?) and can be a general 'Recommended For You', a portion likely overlapping with the content served in /recommended page, and 'Recommended For You - [Category Name]'.
3. **Recently Featured**: Content suggested because of chronological order (but we ignore the reason for a video to become Featured).

### How does the personalization of the sections works?

* PornHub **stores in localstorage a sequence of watched video** by each user.
* After a while, a profile with new cookies and tracking code, starts to navigate over a due category, the 'Recommended for [Category Name]' becomes more appropriate along with the selected fetish.
* PornHub, with the stored list of watched video, **can infer a liked fetish and suggest it in the Recommended**.
* In this potest#1 we didn't suggest (probably) enough video, and without belonging to a specific category would be hard to see if they influence in any way.

### What we didn't find out, but we'll keep checking:

* We don't know if any particular producer benefits from any advantageous treatment from the algorithm.
* We don't know if, for not-logged-in users, the recommended page changes accordingly to what has been seen.
* We know for sure that the Homepage and 'Recommended For You' section, depends on your past activity, but we didn't yet link this evidence.


{{< colorblock text="4. Other interesting things" >}}

## Research on pornography leads to recruitment difficulties 🤷

We shared the invitation below on: [/r/privacy](https://www.reddit.com/r/privacy/comments/equgcy/on_sunday_january_19th_2020_join_the_first/), [/r/italyInformatica](https://www.reddit.com/r/ItalyInformatica/comments/erb7g0/nsfw_aiutiamo_i_ragazzi_italiani_di_tracking/), and [/r/SampleSize](https://www.reddit.com/r/SampleSize/comments/eqwd32/academic_today_collective_observation_of_the/).

As ironic as it can seem, an algorithm (the antispam filter of reddit) punished us as spammers, of course:

{{<bord-img href="/images/pot20/1-reddit-spamfilter.png" >}}

it wasn't the only issue, the first algorithm overlord and true Sauron's eye, Google played its role as well:

{{<bord-img href="/images/pot20/1-chrome-rejected.jpg">}}

--- 

{{<colorblock text="We're working on repeating this test and validate our findings. We will, by the 13 of March, apply this experience on YouTube!"  >}}

---

Completed in February 2020 by Claudio, Giulia, Salvatore, Matteo, and Barbara.
