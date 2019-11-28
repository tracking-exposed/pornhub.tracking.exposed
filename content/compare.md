---
title: "Feel like a voyeur and compare your Pornhub experience with others"
subtitle: "Measure personalized suggestions for onanistic activities"
draft: false
type: "dark"
og_title: "Compare your Pornhub's recommended videos"
og_type: "website"
og_image: "http://pornhub.tracking.exposed/images/compare.jpg" 
og_url: "https://pornhub.tracking.exposed/compare"
og_description: "Analyze differences and correlations between categories and the personalized experiencesm, even if nobody uses or abuses PH anymore ;) Let's get some independent insights"
---


<div class="container" >
    <div class="radarChart" style="text-align: center;"></div>
    <h4>
        Radar graph: each radius represents one of the categories of the video watched ― This is still a demo: pick a random user below
    </h4>
</div>

<div style="text-align:center; font-size:2em;">
    <a href="/compare/#Hg5gp1kEVPMHEVvBkNrgbm7x6juj5LDc3rbosPMv1igA,CbM4wnicN9YJjAanTjHQzXJ7pJDdZnF3WQB5tmv4yFLY">1+2</a> ―
    <a href="/compare/#Hg5gp1kEVPMHEVvBkNrgbm7x6juj5LDc3rbosPMv1igA,AaLK2xNWpr2QSr63snfdUS8kQQv2jCQXh6s51U6u3ffw">1+3</a> ―
    <a href="/compare/#Hg5gp1kEVPMHEVvBkNrgbm7x6juj5LDc3rbosPMv1igA,4FNa2xBEzhnsyfR5HuvNvi89tms3AxAvdbbC9NtZn1Qw">1+4</a> ―
    <a href="/compare/#CbM4wnicN9YJjAanTjHQzXJ7pJDdZnF3WQB5tmv4yFLY,AaLK2xNWpr2QSr63snfdUS8kQQv2jCQXh6s51U6u3ffw">2+3</a> ―
    <a href="/compare/#CbM4wnicN9YJjAanTjHQzXJ7pJDdZnF3WQB5tmv4yFLY,4FNa2xBEzhnsyfR5HuvNvi89tms3AxAvdbbC9NtZn1Qw">2+4</a> ―
    <a href="/compare/#AaLK2xNWpr2QSr63snfdUS8kQQv2jCQXh6s51U6u3ffw,4FNa2xBEzhnsyfR5HuvNvi89tms3AxAvdbbC9NtZn1Qw">3+4</a>
</div>

The distance from the center of the point marked on the radius is given by the percentage of the times in which the categories appear. The points on the rays are joined with segments, so that the graph takes on a personal shape. This shape can tell us something about user profiling, radicalization and which are the categories most connected to each other.

<script src="/js/d3.min.js"></script>
<!-- <script src="/js/c3.min.js"></script> -->
<script src="/js/radarChart.js"></script>
<script src="/js/radarLoader.js"></script>

<script>
$(document).ready(function() {
    initializeRadar();
});
</script>
