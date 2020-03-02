---
title: "About the project"
subtitle: "pornhub.tracking.exposed"
draft: false

og_title: "poTREX - About the project"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/potrex-logo.jpg"
og_url: "https://pornhub.tracking.exposed/about"
og_description: "A tool to analyze personalized experiences in the biggest website in the porn industry"
---

Since January and April 2019 we conducted a small series of experiment on the bigger website of the porn industry. The tool we built initially to analyze [Youtube Algorithm](https://youtube.tracking.exposed), was a good starting point to analyze the biggest porn website.

## How to contact us:

  * a Facebook group: [Personalization Algorithms](https://www.facebook.com/personalizationalgorithm).
  * Developers and activists meets in [Mattermost channel](https://chat.securitywithoutborders.org/community/channels/trackingexposed), or directly interfere with our development roadmap by opening a [github issue](https://github.com/tracking-exposed/potrex/issues).
  * Drop an email <**pornhub-team** at *tracking* dot *exposed*>.
  * we're on the **Fediverse** [https://nebbia.fail/@tracking.exposed](https://nebbia.fail/@tracking.exposed).

## Which control you've on data, and what we collect

Every browser has a unique code attributed, this is the only way to link data. for you and for us. You can:

* Control and change your identifier when you want, only you know your pseudonym has changed. Is in the decision of the browser with the extension installed, to decide if share the access link.
* Delete specific content you submit
* Every identified will be only represented by a pseudo-random sequence of three foods. For example, if you are *guacamole-pizza-mascarpone*, only you know this, only you can change this, and only you can reveal this.
* We do not link (and we have no means to do it) the collections of this project, with other [Tracking Exposed initiatives](https://tracking.exposed/connect).

## Process limitation

* The analysis works by recording the full HTML Pornhub send to you. In our server, we'll extract the list of the suggested video.
* The research is done by playing with personalization and verify how this has an impact on your suggested related videos.
* The data users provided can be downloaded via personal token, the anonymized analysis (the same comparison logic implemented for YouTube) is available and with and API, retrieve these information as machine readable format (JSON or CSV).

do not exist any other method of access, and our code server + extension code is [on github, available for scrutiny](https://github.com/tracking.exposed/potrex), the website source is [here](https://github.com/tracking-exposed/pornhub.tracking.exposed).

## [Initial Analysis](/project-analysis/)

Thinking of someone who observes closely and can predict your behavior even while watching porn videos can be perceived as something particularly disturbing, given that this activity is considered very personal, taboo and with a high potential for blackmail. In particular to understand that the incognito mode doesn’t mean you are surfing the net anonymously and that both our browser and Pornhub are observing everything: IP address, cookies, geographic location, time of visit, which hardware and software you are using, which videos are searched, which are opened, for how long they are watched, up to obtaining a unique and identifying fingerprint of the individuals and their digital unique behavior.

The actors of the experiments were different Firefox profiles, thus ensuring a clean browser without history and cookies. Some Firefox profiles were real bots, that is, a fictitious Pornhub account had been created specifically to simulate their identity, while other profiles acted without any registration; this allowed us to observe the different interactions of the site with the registered user and with the non-registered user.

It is also important to observe how the behavior of Pornhub changes in the absence of previous cookies, or with the incognito mode, which is often used by users.

## Ideas for _researchers_

Understanding where and how the Pornhub personalization algorithm works, to identify the metrics, to optimize the tool and then to carry out higher level analyzes, for example about the impact that can have on sexuality. Can a personalization algorithm push towards a radicalization of the user towards a specific form of sadism?

Similarly to the test done by [fbTREX+WebFoundation, during the Argentinian G20](https://webfoundation.org/research/the-invisible-curation-of-content-facebooks-news-feed-and-our-information-diets/), or our [YouTube initial analysis](https://youtube.tracking.exposed/results) it is advisable to use simulated situations in order to bring our actors into a situation of divergence and study what factors are causing it.

Read the complete project analysis [.pdf](https://github.com/tracking-exposed/presentation/raw/master/poTREX%20-%20initial%20analysis%20-%202019%20-%20v1.0.pdf)

## Short term goals

1. In some nations (like the one in which most of us live) sex education is not taught in school. We assume current, and future adults learn something from porn, and this might not translate into very healthy sexual relationships. We can't avoid this, well, _we should by teaching sex education and consent properly, obviously_. But as long as this doesn't happen, we can look at the algorithm as it is the logic behind the content visualized.
2. if data outside of your navigation (in incognito or without) are used to personalize your experience, this might be a cold shower and a method to explain linkability, and strengthen our digital safety.
3. use an adult video platform might help us to reach out to people who usually would not care about Facebook and YouTube, this is why we are even [organizing gathering](/tordimatti).
