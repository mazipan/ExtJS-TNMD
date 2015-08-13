/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentChartBar', {
    extend: 'Ext.panel.Panel',    
    xtype: 'contentChartBar',
    itemId: 'contentChartBar',
    
    title : 'Top Talker by Site Address ',
    
    tools :[{
    	  type:'refresh',
    	  handler: function() {
    		  randomBarChart();
    	  }    	        
    }],
    
    layout : 'fit',
    
    items:[{
    	xtype : 'container',
        itemId: 'contentChartBarContainer',
    	listeners:{
        	boxready: function(thisCmp, width, height, eOpts){        		
        		var chart = createFusionChart("barChart", 
        					thisCmp.getId(), width, height, 
        					"./data/MSColumn2D1.json", getSwfPath("MSColumn2D"));
        		
        		TNMD.config.GlobalVariable.setBarChart(chart);
    		},
			resize: function(thisCmp, width, height, oldWidth, oldHeight){	
				if(oldWidth && oldHeight) {
					if(TNMD.config.GlobalVariable.getBarChart()){
						var chart = TNMD.config.GlobalVariable.getBarChart();
						chart.resizeTo(width, height);
					}
				}
			}
        }
    }]
        
    
        	
});
