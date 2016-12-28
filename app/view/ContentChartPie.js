/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentChartPie', {
    extend: 'Ext.container.Container',    
    xtype: 'contentChartPie',
    itemId: 'contentChartPie',
        
    layout : 'fit',
    listeners:{
    	boxready: function(thisCmp, width, height, eOpts){        		
    		var chart = createFusionChart("pieChart", 
    					thisCmp.getId(), width, height, 
    					"./data/Pie3D1.json", getSwfPath("Pie3D"));
    		
    		TNMD.config.GlobalVariable.setPieChart(chart);
		},
		resize: function(thisCmp, width, height, oldWidth, oldHeight){	
			if(oldWidth && oldHeight) {
				if(TNMD.config.GlobalVariable.getPieChart()){
					var chart = TNMD.config.GlobalVariable.getPieChart();
					chart.resizeTo(width, height);
				}
			}
		}
    }

    
        	
});
