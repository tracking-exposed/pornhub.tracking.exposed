---
title: Statistics & Bar charts
subtitle: adoption trends, system performances, and few lines on open data
type: c3app
date: 2019-08-11T00:00:00
description: Statistics build on what we are collecting; Aggregated information to keep in check our system and our relevance
draft: false
---

Statistics and OpenData enable network effects, data reuse, and collaborative revision of our project. But they are tricky and can't be released carelessly:

* [Data can't be anonymized](https://www.theguardian.com/technology/2019/jul/23/anonymised-data-never-be-anonymous-enough-study-finds) easily, we aggregate them and we use only non-personal metadata to develop the aggregation.
* We don't want to help in any way [social media intelligence](https://responsibledata.io/social-media-intelligence-the-wayward-child-of-open-source-intelligence/).
* Is in our DNA [enable researchers](/data-activism), we described which are our [data usage policies](/what-we-collect).
* The public stats below display how the system is performing how the people use it (no content-related analysis are here).

<!-- the graphs are appended in the 'div'. the ID 
     are specify in static/js/pornhub-c3-impact.js 
     and the layout is hugo-theme-trex/layouts/c3app/single.html -->

### Supporters  
<div id="supporters-graph" class="c3graph"></div>

_newcomers is the number of people installing the extension. In every day is counted the sum of new installation. They can be either in Firefox, Chrome, Brave, and we are not reporting if the user uninstall the extension few seconds later or not._

### Contributions
<div id="contributions-graph" class="c3graph"></div>

### Content processed
<div id="processed-graph" class="c3graph"></div>

### Metadata 
<div id="metadata-graph" class="c3graph"></div>
