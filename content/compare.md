---
title: "Radar: Compare it with others"
date: 2019-10-04T13:00:48+02:00
draft: true
type: "dark"
---

### Have a look at which categories are pushed the most between you and someone else

<div class="radarChart"></div>

Each radius represents one of the categories that appeared among the videos /recommended. The distance from the center of the point marked on the radius is given by the percentage of the times in which the categories appear. The points on the rays are joined with segments, so that the graph takes on a personal shape. This shape can tell us something about user profiling, radicalization and which are the categories most connected to each other.

<script src="/js/d3.min.js"></script>
<script src="/js/c3.min.js"></script>
<script src="/js/radarChart.js"></script>
<script src="/js/radarLoader.js"></script>

<script>
$(document).ready(function() {
    initializeRadar();
});
</script>
