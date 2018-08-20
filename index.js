Highcharts.chart('container', {
    title: {
        text: 'Gráfico demonstrativo de dados',
        style: {
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['Variável 1', 'Variável 2', 'Variável 3', 'Variável 4']
    },
    labels: {
        items: [{
            html: 'Total',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Objeto A',
        data: [3.00, 2.00,1.00, 3.00]
    }, {
        type: 'column',
        name: 'Objeto B',
        data: [2.00, 3.00, 5.00, 7.00]
    }, {
        type: 'column',
        name: 'Objeto C',
        data: [4.00, 3.00, 3.00, 9.00]
    }, {
        type: 'spline',
        name: 'Média',
        data: [3, 2.67, 3, 6.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'Objeto A',
            y: 13,
            color: Highcharts.getOptions().colors[0]
        }, {
            name: 'Objeto B',
            y: 23,
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'Objeto C',
            y: 19,
            color: Highcharts.getOptions().colors[2]
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});