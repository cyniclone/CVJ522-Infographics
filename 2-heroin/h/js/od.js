$(function () {
    var categories = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013];
    $(document).ready(function () {
        $('#overdose').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            // subtitle: {
            //     text: 'Source: www.cdc.gov'
            // },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value));
                    }
                },
                min: -2000,
                max: 7000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ' ' + this.point.category + '</b><br/>' +
                        'Overdoses: ' + Math.abs(this.point.y);
                }
            },

            series: [
            {
                name: 'Female',
                data: [-306, -279, -313, -359, -358, -341, -389, -344, -399, -551, -577, -584, -878, -1213, -1732],
                color:'#98abc5'
            },
            {
                name: 'Male',
                data: [1654, 1563, 1466, 1730, 1722, 1537, 1620, 1744, 2000, 2490, 2701, 2452, 3519, 4712, 6525],
                color:'#6b486b'
            }
            ]
        });
    });

});