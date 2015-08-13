/**
 * @author Irfan Maulana
 */
var chartStore2 = new Ext.data.ArrayStore({
    fields : [{
        name : 'value'
      }]
});
chartStore2.loadData([[0]]);

Ext.define('TNMD.view.GaugePacket', {
    extend: 'Ext.chart.Chart',    
    xtype: 'gaugePacket',
    itemId: 'gaugePacket',

    animate: true,    
    store: chartStore2,    
    insetPadding: 10,
    axes: [{
        type: 'kpigauge',
        position: 'left',
        minimum: 0,
        maximum: 10000000,
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
            to: 5000000,
            color: '#00FF00'
        }, {
            from: 5000000,
            to: 8000000,
            color: '#FFFF00'
        }, {
            from: 8000000,
            to: 10000000,
            color: '#FF0000'
        }],
        donut: 70,
    }],
    
});
