/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentChartLine', {
    extend: 'Ext.container.Container',    
    xtype: 'contentChartLine',
    itemId: 'contentChartLine',
        
    layout : 'fit',
    
    listeners:{
    	boxready: function(thisCmp, width, height, eOpts){        		
    		var chart = createFusionChart("lineChart", 
    					thisCmp.getId(), width, height, 
    					"./data/MSLine1.json", getSwfPath("MSLine"));
    		
    		TNMD.config.GlobalVariable.setLineChart(chart);
		},
		resize: function(thisCmp, width, height, oldWidth, oldHeight){	
			if(oldWidth && oldHeight) {
				if(TNMD.config.GlobalVariable.getLineChart()){
					var chart = TNMD.config.GlobalVariable.getLineChart();
					chart.resizeTo(width, height);
				}
			}
		}
    }
        	
});
