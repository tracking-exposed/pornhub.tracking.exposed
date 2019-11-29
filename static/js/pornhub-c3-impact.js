$(document).ready(function() {

    var graphNodes = $('.c3graph');

    const clist = [{
        bindto: '#supporters-graph',
        data : {
            url: serverWrap('/api/v2/statistics/supporters/day/15'),
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'newcomers' ], x: 'day' },
            type: 'bar',
            axes: {
                'newcomers': 'y'
            },
            colors: {
                'newcomers': 'black'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }, {
        bindto: '#processed-graph',
        data : {
            url: serverWrap('/api/v2/statistics/processed/day/15'),
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'failure', 'successful', 'unprocessed', 'total' ], x: 'day' },
            types: {
                'failure': 'bar',
                'unprocessed': 'bar',
                'successful': 'line',
                'total': 'line',
            },
            axes: {
                'failure': 'y',
                'unprocessed': 'y',
                'successful': 'y2',
                'total': 'y2',
            },
            colors: {
                'failure': 'black',
                'unprocessed': '#eee',
                'successful': '#3b5898',
                'total': 'green'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },

            },
            y2: { show: true }
        }
    }, {
        bindto: '#contributions-graph',
        data : {
            url: serverWrap('/api/v2/statistics/contributions/day/15'),
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'videos', 'total' ], x: 'day' },
            types: {
                'videos': 'bar',
                'total': 'bar',
            },
            axes: {
                'videos': 'y',
                'total': 'y',
            },
            colors: {
                'videos': 'black',
                'total': 'green'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }, {
        bindto: '#metadata-graph',
        data : {
            url: serverWrap('/api/v2/statistics/metadata/day/15'),
            mimeType: 'json',
            xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
            keys: { value : [ 'hasTitle', 'hasAuthor', 'hasRelated', 'total' ], x: 'day' },
            type: 'bar'
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%d',
                    culling: { max: 5 }
                },
            }
        }
    }];

    const graphs = _.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;
        var config = _.find(clist, { bindto: graphId });
        if(config) {
            console.log("Generating graph", graphId);
            var r = c3.generate(config);
        } else {
            console.log("Invalid ID", graphId);
        }
    });
});
