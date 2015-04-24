//On-Click functions



google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(drawRegionsMap);
google.setOnLoadCallback(drawRegionsMap2);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'CO2 Emissions (Thousands of Tonnes)'],
        ['China', 2625729],
        ['US', 1396790],
        ['India', 611226],
        ['Russian Federation', 491840],
        ['Japan', 342270],
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

    var chart = new google.visualization.GeoChart(document.getElementById('chart-co2'));

    chart.draw(data, options);
}

function drawRegionsMap2() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'CO2 Emissions (Tonnes Per Capita)'],
        ['China', 1.94398434342095],
        ['US', 4.45016843270919],
        ['India', 0.494245072218976],
        ['Russian Federation', 3.43516696307459],
        ['Japan', 2.68317675337248],
        ['Germany', 2.48323413440836],
        ['South Korea', 3.33328708673514],
        ['Iran', 2.15242228329465],
        ['Saudi Arabia', 4.87409554770313],
        ['Canada', 3.96579542158135],
        ['Indonesia', 0.526555243598685],
        ['Mexico', 1.07525931903656],
        ['United Kingdom', 2.01716539246493],
        ['South Africa', 2.4023270990395],
        ['Brazil', 0.614541739594897],
        ['Italy', 1.71933343916846],
        ['Australia', 4.45026708280502],
        ['France', 1.42746655371262],
        ['Ukraine', 1.93852805742115],
        ['Thailand', 1.31832141210148],
        ['Turkey', 1.14680981827396],
        ['Poland', 2.17705539147262],
        ['Kazakhstan', 4.74151683273847],
        ['Spain', 1.61795507892878],
        ['Malaysia', 2.01617674481656],
        ['Egypt', 0.726563341524681],
        ['Venezuela', 1.88950041036485],
        ['Argentina', 1.30328407438642],
        ['United Arab Emirates', 5.07522447843996],
        ['Netherlands', 2.7109217657037],
        ['Vietnam', 0.502681600735968],
        ['Pakistan', 0.245879938881181],
        ['Algeria', 0.978902345429568],
        ['Uzbekistan', 1.00917159656899],
        ['Czech Republic', 2.69135073671113],
        ['Belgium', 2.43079951232987],
        ['Kuwait', 8.1089025029253],
        ['Chile', 1.41877193942067],
        ['Qatar', 12.0275410816509],
        ['Philippines', 0.244291214639474],
        ['Greece', 2.00937463076957],
        ['Romania', 1.1073283625097],
        ['Colombia', 0.460782696608583],
        ['Israel', 2.64563238071495],
        ['Peru', 0.593741666452489],
        ['Bangladesh', 0.114465350197686],
        ['Belarus', 1.78647710641439],
        ['Austria', 1.93501793130049],
        ['Norway', 3.15533042576818],
        ['Turkmenistan', 2.91116723519534],
        ['Portugal', 1.36642226614649],
        ['Azerbaijan', 1.49498673190288],
        ['Finland', 2.41142090286625],
        ['Trinidad & Tobago', 9.59716987034149],
        ['Hungary', 1.27769751255884],
        ['Bulgaria', 1.69922668045379],
        ['Sweden', 1.28506108422807],
        ['Switzerland', 1.29628067762814],
        ['Denmark', 1.78977092488379],
        ['Republic of Ireland', 2.15607474607675],
        ['Ecuador', 0.614108862582291],
        ['New Zealand', 2.00822493104177],
        ['Lithuania', 1.24453583684037],
        ['Singapore', 0.675333402337699]
    ]);

    var options = {
        colorAxis: {
            colors: ["#C2E7CE", "#308780", "#135267"],
            values: [0, 6, 12]
        },
        projection: 'kavrayskiy-vii'
    };

    var formatter = new google.visualization.NumberFormat(
        {groupingSymbol:',',
            fractionDigits:2});
    formatter.format(data, 1);

    var chart = new google.visualization.GeoChart(document.getElementById('chart-co2pc'));

    chart.draw(data, options);
}