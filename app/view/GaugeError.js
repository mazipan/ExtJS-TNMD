/**
 * @author Irfan Maulana
 */
var chartStore3 = new Ext.data.ArrayStore({
    fields : [{
        name : 'value'
      }]
});
chartStore3.loadData([[0]]);

Ext.define('TNMD.view.GaugeError', {
    extend: 'Ext.chart.Chart',    
    xtype: 'gaugeError',
    itemId: 'gaugeError',
    /*
    animate: true,    
    store: chartStore3,    
    insetPadding: 10,
    axes: [{
        type: 'kpigauge',
        position: 'left',
        minimum: 0,
        maximum: 10000,
        steps: 5,
        margin: 2,
        label: {
            fill: '#000000',
            font: '9px Heveltica, sans-serif'
        }
    }],
    series: [{
        type: 'kpigauge',
        showInLegend : true,
        field: 'value',
        label: {
            fill: '#000000',
        },
        needle: {
            width: 2,
            pivotFill: '#000000',
            pivotRadius: 3
        },
        ranges: [{
            from: 0,
            to: 4000,
            color: '#00FF00'
        }, {
            from: 4000,
            to: 8000,
            color: '#FFFF00'
        }, {
            from: 8000,
            to: 10000,
            color: '#FF0000'
        }],
        donut: 70,
    }],
    */
});
