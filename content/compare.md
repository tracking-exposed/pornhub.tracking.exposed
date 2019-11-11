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

# -- This is a work in progress and at the moment is not yet ready: released scheduled before the 20th of November --
---

### Videos and categories from the most recenly submitted data

title + categories

### Have a look at which categories are pushed the most between you and someone else

<div class="radarChart"></div>

Each radius represents one of the categories that appeared among the videos in */recommended* section. The distance from the center of the point marked on the radius is given by the percentage of the times in which the categories appear. The points on the rays are joined with segments, so that the graph takes on a personal shape. This shape can tell us something about user profiling, radicalization and which are the categories most connected to each other.

<script src="/js/d3.min.js"></script>
<script src="/js/c3.min.js"></script>
<script src="/js/radarChart.js"></script>
<script src="/js/radarLoader.js"></script>

<script>
$(document).ready(function() {
    initializeRadar();
});
</script>
