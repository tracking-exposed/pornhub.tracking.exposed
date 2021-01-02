const DAYSAGO = 19;

const clist = [{
    API: buildApiUrl('statistics/supporters/day', 2 * DAYSAGO, 2),
    bindto: '#supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'day' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': _.first(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/active/day', 2 * DAYSAGO, 2),
    bindto: '#active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'day' },
        type: 'bar',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': _.last(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/contributions/day', DAYSAGO, 2),
    bindto: '#contributions-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total', 'videos', 'home' ], x: 'day' },
        type: 'bar',
        colors: {
            'total': palette[0],
            'videos': palette[3],
            'home': palette[6],
        },
        groups: [ [ 'videos', 'home' ] ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/sizes/day', DAYSAGO, 2),
    bindto: '#sizes-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'less-500k', '500k-1m', '1m-1500k', 'more-1500k', 'total' ], x: 'day' },
        type: 'bar',
        colors: {
            'less-500k': palette[0],
            '500k-1m': palette[1],
            '1m-1500k': palette[2],
            'more-1500k': palette[3],
            'total': _.last(palette)
        },
        groups: [ 
            [ 'less-500k', '500k-1m', '1m-1500k', 'more-1500k' ]
        ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
    }
}, {
    API: buildApiUrl('statistics/processing/day', DAYSAGO, 2),
    bindto: '#processing-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'failure', 'successful', 'unprocessed', 'total', 'hasMetadata' ], x: 'day' },
        type: 'bar',
        colors: {
            'failure': palette[0],
            'unprocessed': palette[2],
            'successful': palette[4],
            'total': palette[1],
            'hasMetadata': palette[3]
        },
        groups: [ [ 'successful', 'failure', 'unprocessed' ] ],
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
    }
}, {
    API: buildApiUrl('statistics/video-metadata/day', DAYSAGO, 2),
    bindto: '#video-metadata-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ 'hasTitle', 'hasAuthor', 'hasRelated', 'hasAd', 'total' ],
            x: 'day'
        },
        types: {
            'total': 'area',
            'hasTitle': 'bar',
            'hasAuthor': 'bar',
            'hasRelated': 'bar',
        },
        colors: {
            'total': _.last(palette),
            'hasTitle': palette[0],
            'hasAuthor': palette[1],
            'hasRelated': palette[2],
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            }
        },
    }
}, {
    API: buildApiUrl('statistics/home-metadata/day', DAYSAGO, 2),
    bindto: '#home-metadata-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ 'section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'total' ],
            x: 'day'
        },
        types: {
            'total': 'area',
            'section-1': 'bar',
            'section-2': 'bar',
            'section-3': 'bar',
            'section-4': 'bar',
            'section-5': 'bar',
        },
        colors: {
            'total': _.last(palette),
            'section-1':  palette[0],
            'section-2':  palette[1],
            'section-3':  palette[2],
            'section-4':  palette[3],
            'section-5':  palette[4],
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            }
        },
    }
}];

$(document).ready(async function() {

    var graphNodes = $('.c3graph');
    console.log("Retrieved", _.size(graphNodes), "from the impact.md page");

    const graphs = _.compact(_.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;

        const config = _.find(clist, { bindto: graphId });
        if(!config) {
            console.log("Invalid ID", graphId, "not found among the c3 configs");
            return null;;
        }
        return {
            config,
            graphId
        }
    }));

    for (const g of graphs) {
        const connection = await fetch(g.config.API);
        const content = await connection.json();
        if(content.error) {
            console.log("Error received!", g.graphId, JSON.stringify(content));
        } else if (!_.size(content)) {
            console.log("Empty answer for", g.graphId, JSON.stringify(content));
            $(g.graphId).html("<h6 style='color:red'>Error in fetching data!?</h6>")
        } else {
            console.log("Generating graph", g.graphId, g,
                        "Retrieved", _.size(content),
                        "adding to config.data https://c3js.org/reference.html");
            g.config.data.json = content;
            const retval = c3.generate(g.config);
            // retval currently not used for updates
        }
    }
});