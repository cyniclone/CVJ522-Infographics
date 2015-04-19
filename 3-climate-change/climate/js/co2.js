google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'CO2 Emissions (Thousands of Tonnes)'],
        ['China', 2625729],
        ['US', 1396790],
        ['India', 611226],
        ['Russian Federation', 491840],
        ['Japan', 342270],
        ['Total Africa', 330941],
        ['Germany', 199716],
        ['South Korea', 166679],
        ['Iran', 164497],
        ['Saudi Arabia', 137877],
        ['Canada', 137819],
        ['Indonesia', 129987],
        ['Mexico', 129942],
        ['United Kingdom', 128494],
        ['South Africa', 125741],
        ['Brazil', 122082],
        ['Other Africa', 108880],
        ['Italy', 102368],
        ['Australia', 101147],
        ['France', 93712],
        ['Ukraine', 88383],
        ['Thailand', 88044],
        ['Turkey', 84860],
        ['Poland', 83894],
        ['Kazakhstan', 79616],
        ['Spain', 75676],
        ['Taiwan', 71558],
        ['Malaysia', 58952],
        ['Egypt', 58649],
        ['Venezuela', 56599],
        ['Argentina', 53547],
        ['United Arab Emirates', 46720],
        ['Netherlands', 45421],
        ['Vietnam', 44624],
        ['Pakistan', 44051],
        ['Algeria', 37669],
        ['Uzbekistan', 30047],
        ['Czech Republic', 28288],
        ['Belgium', 27050],
        ['Kuwait', 26357],
        ['Chile', 24778],
        ['Qatar', 24662],
        ['Philippines', 23624],
        ['Greece', 22289],
        ['Romania', 22210],
        ['Colombia', 21981],
        ['Israel', 20928],
        ['Peru', 17805],
        ['Bangladesh', 17707],
        ['Belarus', 16907],
        ['Austria', 16312],
        ['Norway', 15835],
        ['Turkmenistan', 15059],
        ['Portugal', 14367],
        ['Azerbaijan', 13897],
        ['Finland', 13055],
        ['Trinidad & Tobago', 12835],
        ['Hungary', 12675],
        ['Bulgaria', 12414],
        ['Sweden', 12232],
        ['China Hong Kong SAR', 10483],
        ['Switzerland', 10366],
        ['Denmark', 10007],
        ['Republic of Ireland', 9889],
        ['Slovakia', 9689],
        ['Ecuador', 9513],
        ['New Zealand', 8852],
        ['Lithuania', 3718],
        ['Singapore', 3587]
    ]);

    var options = {
        colorAxis: {
            colors: ["#C2E7CE", "#308780", "#135267"],
            values: [0, 200000, 2625729]
        },
        projection: 'kavrayskiy-vii'
    };

    var formatter = new google.visualization.NumberFormat(
        {groupingSymbol:',',
        fractionDigits:0});
    formatter.format(data, 1);

    var chart = new google.visualization.GeoChart(document.getElementById('co2'));

    chart.draw(data, options);
}