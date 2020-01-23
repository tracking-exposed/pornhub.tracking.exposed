---
title: "poTEST#1"
subtitle: "January 2020: the first coordinated observation of the Pornhub algorithm"
draft: false

og_title: "Global coordinated observation of the Pornhub homepage"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/pov.jpg"
og_url: "https://pornhub.tracking.exposed/potest/announcement-1"
og_description: "This is the first worldwide test of the Pornhub algorithm; on Sunday January 19th, with a browser extension, we'll see how PH personalizes the customer experience"
---

## Update n.3 -- 21 January 2020

The _recommended_ parser is supported now! each video suggested will be extracted with the following dataformat:

```
   { 
     "order": 2,                                             
     "duration": "35:55",                                    
     "publicationRelative": "2 months ago",                  
     "views": "4.3M",                                        
     "viewString": "4.3M views",                             
     "title": null,                                          
     "href": "/view_video.php?viewkey=ph5d6b197f4129b",      
     "videoId": "ph5d6b197f4129b",                           
     "thumbnails": null,                                     
     "authorLink": "/model/nyna-ferragni",                   
     "authorName": "Nyna Ferragni" 
     "thumnail": "https://ci.phncdn.com/videos/201912/16/269034501/thumbs_10/(m=eafTGgaaaa)(mh=oEChYH3QEwc4Iyfh)8.jpg"
   }    
```

The json object above is the second video snippet from a recommented page, and now we'll produce a final CSV to be shared .

...In regards of the chrome extension, it seems definitely blocked at the moment:

<div class="text-center">
    <img style="border-color: red; border-size: 2px; border-style: solid; margin: 30px; max-width:100%" src="/images/extension-chrome-rejected-January2020.png">
</div>

whatever, just a reason to consider firefox **better**.

## Update n.2 -- 20 January 2020

Despite Google didn't enable our app, a bunch of Firefox adopters supported the project:

<div class="text-center">
    <img style="border-color: red; border-size: 2px; border-style: solid; margin: 30px; max-width:100%" src="/images/potest-1-stats.png">
</div>

## Update n.1 -- 19 January 2020

This test will work only with our [firefox extension](https://addons.mozilla.org/en-US/firefox/addon/adult-industry-algorithms/), because google has put our extension under _revision_, and now is not accessible to the public:

<div class="text-center">
    <img style="border-color: red; border-size: 2px; border-style: solid; margin: 30px; max-width:100%" src="/images/screencapture-chromewebdev-2020-01-19_09-21-15.jpg">
</div>

## Announcement  -- 19 January 2020
On Sunday, January 19th, 2020: join the first collective observation of the #pornhub algorithm!

We are the tracking.exposed team and our main objective is to put a spotlight on users’ tracking, profiling, and the wider data market by performing an open algorithmic analysis. We believe that, as long as the operation of recommendation systems remains obscure, the many side-effects of platform economy cannot be tackled as they should. 

After the development of infrastructure and analysis tools facebook.tracking.exposed and youtube.tracking.exposed, we decided to take inspiration from the 34th rule of the internet: There is porn of it. No exceptions.

So, are now also focusing on online porn giant PornHub, trying to unpack the hidden logic of user profiling!

We do it because personalization algorithms have the potential to shape public perception, and Pornhub claims to implement some kind of personalization! 

To do this, we need your help! Join our global test and explore for yourself how the Pornhub experience varies between users that are performing the same actions. You have to follow an 8 step script. (hard work for a Sunday!)
After the test is completed and the evidence analyzed, we will release the dataset, along with some research and a final report, around January 30th, 2020.

You can find our browser extension on the pornhub.tracking.exposed website: it is necessary to participate, and collects what Pornhub send to you. Partecipation is anonymous, the extension can be used in Incognito/Private mode if you allow it, and for extra safety, you can even do the test with a browser you normally do not use (the extension runs in both Firefox and Chrome). 

The test is simple &mdash; just follow the script you'll find at this address: https://pornhub.tracking.exposed/potest/1. All you have to do is to click on a few links, and we'll do the rest: by comparing multiple observations coming from our participants, we'll measure how frequently personalized changes happen. 

The test is not safe for work! We kindly ask you to watch the two videos that we selected after months of exhausting research, but if you don't like them, don't worry! Twenty seconds are enough for the extension to collect data and send it back to us. Of course, you retain full control of the evidence you send to us: by clicking on the extension icon, you can open your personal page, where you can eventually delete everything you sent us or play with our basic data analysis functionality. 

Thank you,
The pornhub.tracking.exposed team