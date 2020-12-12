function largerTooltip(d) {
  const mapped = [
      "What they want to sell",
      "What you likely look for",
      "Experiments they run to remain relevant"
  ]
  return `<h4 class="lighter-bg">${mapped[d[0].index]}</h4>`;
}

function renderHomepageDonut() {
  const chart = c3.generate({
    bindto: '#homepage--stats',
    data: {
      columns: [
        ['Production Company', 19],
        ['Verified Amateurs', 19],
        ['Non verified producers', 13]
      ],
      type : 'donut',
      colors: {
        'Production Company': palette[5],
        'Verified Amateurs': palette[4],
        'Non verified producers': palette[999999999],
      }
    },
    donut: {
      title: "PornHub homepage"
    },
    tooltip: {
      contents: largerTooltip
    }
  });
}

function renderWomanCounters() {
  const chart = c3.generate({
    bindto: '#women--stats',
    data: {
      columns: [
        [ 'women', 23, 24, 26, 26, 29, 32 ],
        [ 'man', 77, 76, 74, 74, 71, 68 ]
      ],
      type: 'bar',
      colors: {
        'women': '#ffc0cb',
        'man': '#87cefa' 
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: [ '2014', '2015', '2016', '2017', '2018', '2019' ]
      }
    },
    bar: {
      width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
      }
    }
  });
}

function registerScrolling(listofIDs) {
  listofIDs.forEach(function(id) {
    $(id).click(function(e) {
      e.preventDefault();
      const targel = $(this.getAttribute('href'));
      const dest = targel.offset().top -200;
      $('html').animate({scrollTop: dest}, 200);
    });
  });
}