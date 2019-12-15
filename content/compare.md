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

<div class="container">
    <span class="col-2" id="profiles" style="display:inline-block;vertical-align:top">
        <smaller><i>Last active pseudonyms</i></smaller>
        <button 
            id="master"
            type="button"
            class="btn btn-secondary btn-lg btn-block cause--refresh"
            hidden>
            [placeholder]
        </button>
    </span>
    <span
        class="col-9 radarChart"
        style="text-align: center;display:inline-block;">
    </span> 
</div>

---

## Radar graph: the radius represents one of the categories of the video watched

The distance from the center of the point marked on the radius is given by the percentage of the times in which the categories appear. The points on the rays are joined with segments, so that the graph takes on a personal shape. This shape can tell us something about user profiling, radicalization and which are the categories most connected to each other.

<script src="/js/d3.min.js"></script>
<!-- <script src="/js/c3.min.js"></script> -->
<script src="/js/radarChart.js"></script>
<script src="/js/radarLoader.js"></script>

<script>
$(document).ready(function() {
    generateButtons();
    initializeRadar();
});
</script>
