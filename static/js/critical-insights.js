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
