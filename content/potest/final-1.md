---
title: "final report - poTEST#1"
subtitle: "January 2020 we made the first coordinated observation of the Pornhub algorithm, here our findings and how to let you reproduce the experiment"
draft: false

og_title: "Coordinated observation of Pornhub — test#1 updates"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/pov.jpg"
og_url: "https://pornhub.tracking.exposed/potest/final-1"
og_description: "in January 2020 we made the first coordinated observation of the Pornhub algorithm, here our findings and how to let you reproduce the experiment"
---

# The first collaborative algorithm observation, final quick report

After our surprisingly experimental call on the [19th of January](/potest/1), we are glad to follow-up and to say:

* the test on the pornhub algorithm went well enough. More than 100+ new supporters show up. [/impact](/impact).
* We collected 87 correct sequences (see at [methodology](#how-extraction-works) section our selection logic).
* We produced three versions of the CSV to allow other research replicate the study
* And constantly [shared updates while our small investigation was going on](https://pornhub.tracking.exposed/potest/announcement-1/).

### Why we design the experiment that way?

* Observing individual out of context is pointless to figure out the logic behind the platform: we need to control same variables
* Testing with profiles under the control of research is what we often do, but it is limited
* The first step in regards to the Facebook algorithm was to measure the differentiations imposed on people who were behaving similarly. We found this input useful and would be nice to have in regards to pornhub
* Therefore we asked random people to repeat the same sequence of actions and measure how recommended video changes.

### What we were looking at

* Comparing one old video and a recent video allow us to see if the related content tends to be "freeze in time" or keep changing. Considering the old video returned every time all the same eight relevant content, we can see as a success to identify 1) related content in video changes. 2) PornHub probable test at the beginning of the video how it is performing.
* How much 'Hot Videos' and content in the homepage change during the day. It is frequent. Videos tend to be 'hiped' in some hours and then fade away, like a multitude of waves; each observation only returns us a sample in the time. Recommended videos and home page share the same pool of 'hyped' videos. 

## New findings

We looked at correlation and pattern, to help us in the analysis, we loaded some sections of our CSV in a network analysis tool ([Gephi](https://gephi.org/)).

#### On related content

**All** the users get the same 8 related content (or, video suggestions) when they watch the old video.
With the second video, we have a different scenario: the suggested videos are different across users, the change during time, and they are clustered at least in eight topic-related groups.

### The 11years old video (lily thai)

<div style="padding-top: 1em; padding-bottom: 3em; border-radius: 5px; background-color: #000000; background-image: linear-gradient(167deg, #002a00 0%, #000000 20%, #434343 74%, #002a00 99%);" class="col-sm-12 text-center">
  <figure>
    <img width="100%" src="/images/pot20/1-first-video.svg" />
  </figure>
</div>  

#### Each watcher did get the same recommendation

Each white node in a circle is a different partecipant to the experiment; each orange node is the title of a suggested video. The labels are the titles of the suggested videos.

This might let us belive, each video has 8 recommended videos, suggested to watchers as related content. But this is not the case, because if we look at the:

### The 24hours old video (pussy licking)

* Here you can see the suggestions recorded for the second video (Video2.svg):
Each node in a circle is a different user; some nodes have a bigger size because the user has seen the video twice. The other nodes are suggested videos' titles. Use the mouseover to read each title properly. The colors are created using Modularity Statistic to highlight clusters.
We don't know why some users have different topic-related suggestions, e.g. "pussy licking" (blu cluster), "dildos" (green cluster)... 

> 2) In the second video watched, the different clusters of suggestions change by the visualization's time. We are not able to say if the suggestions change in this video because it is a new video (the suggestions are not fixed for the algorithm yet), or because PornHub suggests different videos at different times of the day. We need a new test for this!
* In the gif, you can see the same visualization of point 2b, but now the nodes appear following the hour of visualization's timeline. (Video2_timeline.webm). 
It is interesting how the node "Cheese-cheese-egg", who have visualized all the steps twice (the size of the node is bigger than the other users' one), at the first visualization has the suggestions of the orange cluster, and at the second gets the blu's one. It seems that the user is exactly in the middle of two different timeline sections of suggested videos, showing how those suggestions are not only related to the user, but also to the visualization's time.


> 3) Suggested videos for first and second access to the Home and Recommended page are almost equal. But we don't know what produces this small shift in the suggestions just for some users.
* Here you can see the small differences between two access to the Home page (Home1.svg and Home2.svg).
Each green node is a different user; each violet node is the title of a suggested video. The black nodes are the ones who appear just in the second visualization of the Home page.
* Here you can see the small differences between two access to the Recommended videos page (Recommended1.svg and Reccomended2.svg).
Each green node is a different user; each violet node is the title of a suggested video. The black nodes are the ones who appear just in the second visualization of the Recommended videos page.




* Recommended videos display a broad majority of the same videos at the first and second access in every session. For some reason, watching a video of a latina maid service do not make it change. It might be: 1) it doesn't work that way 2) the video is so old isn't connected in the last engine PH is using 3) one video is not enough to cause a shift 4) the published of the 'old video' wasn't a true user. 

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


