/**
 * @author Irfan Maulana
 */
var chartStore1 = new Ext.data.ArrayStore({
    fields : [{
        name : 'value'
      }]
});
chartStore1.loadData([[0]]);

Ext.define('TNMD.view.GaugeUtil', {
    extend: 'Ext.chart.Chart',    
    xtype: 'gaugeUtil',
    itemId: 'gaugeUtil',

    animate: true,    
    store: chartStore1,    
    insetPadding: 10,
    axes: [{
        type: 'kpigauge',
        position: 'left',
        minimum: 0,
        maximum: 100,
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
            to: 50,
            color: '#00FF00'
        }, {
            from: 50,
            to: 70,
            color: '#FFFF00'
        }, {
            from: 70,
            to: 100,
            color: '#FF0000'
        }],
        donut: 70,
    }],
    
});
