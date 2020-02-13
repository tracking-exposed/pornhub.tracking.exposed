function removeHeaderFooter(millis) {
    window.setTimeout(function() {
        $('header').fadeOut(millis / 2);
        $('footer').fadeOut(millis / 2);
    }, millis / 2)
}

function restoreHeaderFooter(millis) {
    $('header').fadeIn(millis);
    $('footer').show();
}

const creampiechartdata = [
  {
    "_id": "/video?o=ht&cc=at",
    "amount": 1,
    "section": 1,
    "column": [
      "/video?o=ht&cc=at",
      1
    ]
  },
  {
    "_id": "/video?o=ht&cc=au",
    "amount": 6,
    "section": 1,
    "column": [
      "/video?o=ht&cc=au",
      6
    ]
  },
  {
    "_id": "/video?o=ht&cc=no",
    "amount": 4,
    "section": 1,
    "column": [
      "/video?o=ht&cc=no",
      4
    ]
  },
  {
    "_id": "/video?o=ht&cc=bg",
    "amount": 3,
    "section": 1,
    "column": [
      "/video?o=ht&cc=bg",
      3
    ]
  },
  {
    "_id": "/video?o=ht&cc=dk",
    "amount": 3,
    "section": 1,
    "column": [
      "/video?o=ht&cc=dk",
      3
    ]
  },
  {
    "_id": "/video?o=ht&cc=gr",
    "amount": 5,
    "section": 1,
    "column": [
      "/video?o=ht&cc=gr",
      5
    ]
  },
  {
    "_id": "/video?o=ht&cc=cz",
    "amount": 2,
    "section": 1,
    "column": [
      "/video?o=ht&cc=cz",
      2
    ]
  },
  {
    "_id": "/video?o=ht&cc=nl",
    "amount": 37,
    "section": 1,
    "column": [
      "/video?o=ht&cc=nl",
      37
    ]
  },
  {
    "_id": "/video?o=ht&cc=gb",
    "amount": 12,
    "section": 1,
    "column": [
      "/video?o=ht&cc=gb",
      12
    ]
  },
  {
    "_id": "/video?o=ht&cc=it",
    "amount": 45,
    "section": 1,
    "column": [
      "/video?o=ht&cc=it",
      45
    ]
  },
  {
    "_id": "/video?o=ht&cc=de",
    "amount": 27,
    "section": 1,
    "column": [
      "/video?o=ht&cc=de",
      27
    ]
  },
  {
    "_id": "/video?o=ht",
    "amount": 16,
    "section": 1,
    "column": [
      "/video?o=ht",
      16
    ]
  },
  {
    "_id": "/video?o=ht&cc=be",
    "amount": 2,
    "section": 1,
    "column": [
      "/video?o=ht&cc=be",
      2
    ]
  },
  {
    "_id": "/video?o=ht&cc=us",
    "amount": 48,
    "section": 1,
    "column": [
      "/video?o=ht&cc=us",
      48
    ]
  },
  {
    "_id": "/video?o=ht&cc=fr",
    "amount": 6,
    "section": 1,
    "column": [
      "/video?o=ht&cc=fr",
      6
    ]
  },
  {
    "_id": "/video?o=ht&cc=ru",
    "amount": 6,
    "section": 1,
    "column": [
      "/video?o=ht&cc=ru",
      6
    ]
  },
  {
    "_id": "/video?o=ht&cc=ro",
    "amount": 1,
    "section": 1,
    "column": [
      "/video?o=ht&cc=ro",
      1
    ]
  },
  {
    "_id": "/video?o=ht&cc=pt",
    "amount": 3,
    "section": 1,
    "column": [
      "/video?o=ht&cc=pt",
      3
    ]
  },
  {
    "_id": "/video?o=ht&cc=br",
    "amount": 1,
    "section": 1,
    "column": [
      "/video?o=ht&cc=br",
      1
    ]
  },
  {
    "_id": "/video?o=ht&cc=ca",
    "amount": 20,
    "section": 1,
    "column": [
      "/video?o=ht&cc=ca",
      20
    ]
  },
  {
    "_id": "/video?o=mv&cc=dk",
    "amount": 3,
    "section": 2,
    "column": [
      "/video?o=mv&cc=dk",
      3
    ]
  },
  {
    "_id": "/video?o=mv&cc=at",
    "amount": 1,
    "section": 2,
    "column": [
      "/video?o=mv&cc=at",
      1
    ]
  },
  {
    "_id": "/video?o=mv&cc=au",
    "amount": 6,
    "section": 2,
    "column": [
      "/video?o=mv&cc=au",
      6
    ]
  },
  {
    "_id": "/video?o=mv&cc=be",
    "amount": 2,
    "section": 2,
    "column": [
      "/video?o=mv&cc=be",
      2
    ]
  },
  {
    "_id": "/video?o=mv&cc=no",
    "amount": 4,
    "section": 2,
    "column": [
      "/video?o=mv&cc=no",
      4
    ]
  },
  {
    "_id": "/video?o=mv&cc=bg",
    "amount": 3,
    "section": 2,
    "column": [
      "/video?o=mv&cc=bg",
      3
    ]
  },
  {
    "_id": "/video?o=mv&cc=ca",
    "amount": 20,
    "section": 2,
    "column": [
      "/video?o=mv&cc=ca",
      20
    ]
  },
  {
    "_id": "/video?o=mv&cc=nl",
    "amount": 37,
    "section": 2,
    "column": [
      "/video?o=mv&cc=nl",
      37
    ]
  },
  {
    "_id": "/video?o=mv&cc=gr",
    "amount": 5,
    "section": 2,
    "column": [
      "/video?o=mv&cc=gr",
      5
    ]
  },
  {
    "_id": "/video?o=mv&cc=it",
    "amount": 45,
    "section": 2,
    "column": [
      "/video?o=mv&cc=it",
      45
    ]
  },
  {
    "_id": "/video?o=mv&cc=us",
    "amount": 48,
    "section": 2,
    "column": [
      "/video?o=mv&cc=us",
      48
    ]
  },
  {
    "_id": "/video?o=mv&cc=br",
    "amount": 1,
    "section": 2,
    "column": [
      "/video?o=mv&cc=br",
      1
    ]
  },
  {
    "_id": "/video?o=mv&cc=ro",
    "amount": 1,
    "section": 2,
    "column": [
      "/video?o=mv&cc=ro",
      1
    ]
  },
  {
    "_id": "/video?o=mv&cc=cz",
    "amount": 2,
    "section": 2,
    "column": [
      "/video?o=mv&cc=cz",
      2
    ]
  },
  {
    "_id": "/video?o=mv&cc=gb",
    "amount": 12,
    "section": 2,
    "column": [
      "/video?o=mv&cc=gb",
      12
    ]
  },
  {
    "_id": "/video?o=mv&cc=pt",
    "amount": 3,
    "section": 2,
    "column": [
      "/video?o=mv&cc=pt",
      3
    ]
  },
  {
    "_id": "/video?o=mv&cc=ru",
    "amount": 6,
    "section": 2,
    "column": [
      "/video?o=mv&cc=ru",
      6
    ]
  },
  {
    "_id": "/video?o=mv",
    "amount": 16,
    "section": 2,
    "column": [
      "/video?o=mv",
      16
    ]
  },
  {
    "_id": "/video?c=27",
    "amount": 1,
    "section": 3,
    "column": [
      "/video?c=27",
      1
    ]
  },
  {
    "_id": "/categories/hentai",
    "amount": 2,
    "section": 3,
    "column": [
      "/categories/hentai",
      2
    ]
  },
  {
    "_id": "/categories/teen",
    "amount": 1,
    "section": 3,
    "column": [
      "/categories/teen",
      1
    ]
  },
  {
    "_id": "/video?o=mv&cc=fr",
    "amount": 6,
    "section": 3,
    "column": [
      "/video?o=mv&cc=fr",
      6
    ]
  },
  {
    "_id": "/recommended",
    "amount": 211,
    "section": 3,
    "column": [
      "/recommended",
      211
    ]
  },
  {
    "_id": "/video?o=mv&cc=de",
    "amount": 27,
    "section": 3,
    "column": [
      "/video?o=mv&cc=de",
      27
    ]
  },
  {
    "_id": "/video?c=22",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=22",
      2
    ]
  },
  {
    "_id": "/video?c=18",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=18",
      2
    ]
  },
  {
    "_id": "/popularwithwomen",
    "amount": 4,
    "section": 4,
    "column": [
      "/popularwithwomen",
      4
    ]
  },
  {
    "_id": "/video?c=7",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=7",
      1
    ]
  },
  {
    "_id": "/video?c=11",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=11",
      2
    ]
  },
  {
    "_id": "/video?c=24",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=24",
      1
    ]
  },
  {
    "_id": "/video?c=98",
    "amount": 3,
    "section": 4,
    "column": [
      "/video?c=98",
      3
    ]
  },
  {
    "_id": "/video",
    "amount": 5,
    "section": 4,
    "column": [
      "/video",
      5
    ]
  },
  {
    "_id": "/video?c=53",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=53",
      1
    ]
  },
  {
    "_id": "/video?c=13",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=13",
      2
    ]
  },
  {
    "_id": "/video?c=8",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=8",
      1
    ]
  },
  {
    "_id": "/video?c=16",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=16",
      1
    ]
  },
  {
    "_id": "/video?c=97",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=97",
      2
    ]
  },
  {
    "_id": "/video?c=96",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=96",
      2
    ]
  },
  {
    "_id": "/recommended",
    "amount": 33,
    "section": 4,
    "column": [
      "/recommended",
      33
    ]
  },
  {
    "_id": "/video?c=27",
    "amount": 21,
    "section": 4,
    "column": [
      "/video?c=27",
      21
    ]
  },
  {
    "_id": "/video?c=111",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=111",
      1
    ]
  },
  {
    "_id": "/video?c=35",
    "amount": 19,
    "section": 4,
    "column": [
      "/video?c=35",
      19
    ]
  },
  {
    "_id": "/video?c=41",
    "amount": 3,
    "section": 4,
    "column": [
      "/video?c=41",
      3
    ]
  },
  {
    "_id": "/video?c=17",
    "amount": 7,
    "section": 4,
    "column": [
      "/video?c=17",
      7
    ]
  },
  {
    "_id": "/video?c=3",
    "amount": 4,
    "section": 4,
    "column": [
      "/video?c=3",
      4
    ]
  },
  {
    "_id": "/video?c=69",
    "amount": 5,
    "section": 4,
    "column": [
      "/video?c=69",
      5
    ]
  },
  {
    "_id": "/video?c=29",
    "amount": 23,
    "section": 4,
    "column": [
      "/video?c=29",
      23
    ]
  },
  {
    "_id": "/video?c=10",
    "amount": 3,
    "section": 4,
    "column": [
      "/video?c=10",
      3
    ]
  },
  {
    "_id": "/categories/teen",
    "amount": 24,
    "section": 4,
    "column": [
      "/categories/teen",
      24
    ]
  },
  {
    "_id": "/video?c=15",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=15",
      1
    ]
  },
  {
    "_id": "/video?c=65",
    "amount": 20,
    "section": 4,
    "column": [
      "/video?c=65",
      20
    ]
  },
  {
    "_id": "/video?c=4",
    "amount": 2,
    "section": 4,
    "column": [
      "/video?c=4",
      2
    ]
  },
  {
    "_id": "/categories/babe",
    "amount": 18,
    "section": 4,
    "column": [
      "/categories/babe",
      18
    ]
  },
  {
    "_id": "/categories/hentai",
    "amount": 18,
    "section": 4,
    "column": [
      "/categories/hentai",
      18
    ]
  },
  {
    "_id": "/video?c=28",
    "amount": 16,
    "section": 4,
    "column": [
      "/video?c=28",
      16
    ]
  },
  {
    "_id": "/video?c=100",
    "amount": 1,
    "section": 4,
    "column": [
      "/video?c=100",
      1
    ]
  },
  {
    "_id": "/categories/teen",
    "amount": 2,
    "section": 5,
    "column": [
      "/categories/teen",
      2
    ]
  },
  {
    "_id": "/categories/babe",
    "amount": 3,
    "section": 5,
    "column": [
      "/categories/babe",
      3
    ]
  },
  {
    "_id": "/categories/hentai",
    "amount": 7,
    "section": 5,
    "column": [
      "/categories/hentai",
      7
    ]
  },
  {
    "_id": "/video?c=95",
    "amount": 3,
    "section": 5,
    "column": [
      "/video?c=95",
      3
    ]
  },
  {
    "_id": "/video?c=27",
    "amount": 5,
    "section": 5,
    "column": [
      "/video?c=27",
      5
    ]
  },
  {
    "_id": "/video?c=21",
    "amount": 1,
    "section": 5,
    "column": [
      "/video?c=21",
      1
    ]
  },
  {
    "_id": "/video?c=3",
    "amount": 1,
    "section": 5,
    "column": [
      "/video?c=3",
      1
    ]
  },
  {
    "_id": "/video?c=29",
    "amount": 4,
    "section": 5,
    "column": [
      "/video?c=29",
      4
    ]
  },
  {
    "_id": "/video?c=35",
    "amount": 3,
    "section": 5,
    "column": [
      "/video?c=35",
      3
    ]
  },
  {
    "_id": "/video",
    "amount": 193,
    "section": 5,
    "column": [
      "/video",
      193
    ]
  },
  {
    "_id": "/video?c=28",
    "amount": 4,
    "section": 5,
    "column": [
      "/video?c=28",
      4
    ]
  },
  {
    "_id": "/video",
    "amount": 33,
    "section": 6,
    "column": [
      "/video",
      33
    ]
  },
  {
    "_id": "/video",
    "amount": 17,
    "section": 7,
    "column": [
      "/video",
      17
    ]
  }
];

async function buildPie(sectionOrder) {
    const c3config = {
        bindto: '#homesection' + sectionOrder,
        data : {
            columns: _.map(_.filter(creampiechartdata, { section: sectionOrder }), 'column'),
            type: 'pie',
            donut: {
                title: "aaaa"
            }
        }
    };
    const retval = await c3.generate(c3config);
}

async function buildCreampieCharts() {

    console.log("execute buildCreampieCharts!");
    _.each([1, 2, 3, 4, 5, 6, 7], await buildPie);

}