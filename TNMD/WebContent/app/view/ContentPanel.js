/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentPanel', {
    extend: 'Ext.container.Container',    
    xtype: 'contentPanel',
    itemId: 'contentPanel',

    requires: [
               'TNMD.view.ContentMapEast',
               'TNMD.view.ContentMapWest',
               'TNMD.view.ContentChartBar',
               'TNMD.view.ContentTitle',
               'TNMD.view.ContentChartLine',
               'TNMD.view.CurrentActivity',
               'TNMD.view.ContentChartPie',
               'TNMD.view.ContentValueDowntime',
               'TNMD.view.ContentValueSLA',
               'TNMD.view.ContentValuePerf',
               'TNMD.view.ContentRecAction'
               ],
               
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    items:[{
    	// panel up => map:left; chart:right;
    	xtype : 'container',
    	flex : 2,
    	
    	layout: 'border',
    	
    	  
    
    	items:[{
    		xtype : 'container',
    		style : 'background: linear-gradient(to bottom, #f0f0f0 0%,#d7d7d7 100%)',
    		itemId : 'slideControl',
    		hidden : true,
    		region : 'north',
    		height : 25,
    		
    		layout: {
        	    type: 'hbox',
        	    pack: 'start',
        	    align: 'stretch'
        	},
        	
        	items:[{
        		xtype : 'label',
        		text : 'Slide Control : ',
        		margin : '4 5 0 5',
        	},{
        		xtype : 'label',
        		itemId : 'currentSlide',
        		text : 'Slide Position : 1 of 1',
        		margin : '4 5 0 5',
        	},{
        		xtype : 'checkboxfield',
                boxLabel : 'Auto Sliding',
                checked : true,
        		style : {
                    "float" : "right"
                },
        		margin : '0 5 0 5',
        		//width : 90,
        		listeners:{
                	change: function(thisCmp, newValue, oldValue, eOpts){
                		var infiniteSlide = Ext.ComponentQuery.query("#infiniteSlide")[0];
                		if(!newValue){
                			Ext.ComponentQuery.query("#prevSlide")[0].show();
                			Ext.ComponentQuery.query("#nextSlide")[0].show();
                			infiniteSlide.setValue(false);
                			Ext.ComponentQuery.query("#infiniteSlide")[0].hide();
                			slide = 0;
                			clearIntervalLoop();
                			doSliding(true);
                		}else{
                			Ext.ComponentQuery.query("#prevSlide")[0].hide();
                			Ext.ComponentQuery.query("#nextSlide")[0].hide(); 
                			Ext.ComponentQuery.query("#infiniteSlide")[0].show();
                			infiniteSlide.setValue(true);
                			slide = 1;
                			clearIntervalLoop();
                			doFilter(true);
                		}
                	}
                }
        	},{
        		xtype : 'checkboxfield',
        		itemId : 'infiniteSlide',
                boxLabel : 'Infinite Repeat',
                checked : true,
        		style : {
                    "float" : "right"
                },
        		margin : '0 5 0 5',
        		//width : 100,
        		listeners:{
                	change: function(thisCmp, newValue, oldValue, eOpts){
                		infinite = newValue;
                		if(slide == totalSlide){
                			slide = 0;
                			clearIntervalLoop();
                			doSliding(true);
                			setTimeout(function(){
                				doFilter(true);	
                			}, 2000);                			
                		}
                	}
                }
        	},{
        		xtype : 'button',
        		text : 'Previous',
        		itemId : 'prevSlide',
        		hidden : true,
        		disabled : true,
        		margin : '2 5 2 5',
        		iconCls : 'fa fa-arrow-circle-left fa-lg',
        		handler: function(){
        			doSliding(false);
        		}
        	},{
        		xtype : 'button',
        		text : 'Next',
        		itemId : 'nextSlide',
        		hidden : true,
        		margin : '2 0 2 0',
        		iconCls : 'fa fa-arrow-circle-right fa-lg',
        		handler: function(){
        			doSliding(true);
        		}
        	},{
        		xtype : 'tbfill'
        	}]
        	
        	
    	},{
    		xtype : 'container',
    		region : 'center',    	
    		
    		layout: {
        	    type: 'hbox',
        	    pack: 'start',
        	    align: 'stretch'
        	},
        	
        	items :[{
            	xtype : 'contentMapEast',
            	flex : 1,
        	},{
            	xtype : 'contentMapWest',
            	flex : 1,
        	},{
            	xtype : 'contentChartBar',
            	flex : 1,
        	}]
    	}],
    
    	
    },{
    	// panel bottom => title:top; chart:middle; valu&grid:bottom
    	xtype : 'container',
    	height : 400,
    	//flex : 3,
    	style : 'background-color: white',
    	
    	layout: {
    	    type: 'vbox',
    	    pack: 'start',
    	    align: 'stretch'
    	},
    	
    	items :[{
        	xtype : 'contentTitle',
        	height : 70,          	
    	},{
        	xtype : 'container',
        	flex : 2,   
        	
        	layout: {
        	    type: 'hbox',
        	    pack: 'start',
        	    align: 'stretch'
        	},
        	
        	items :[{
            	xtype : 'contentChartLine',
            	flex : 2,
        	},{
            	xtype : 'currentActivity',
            	flex : 1,
        	}]
        	
    	},{
        	xtype : 'container',
        	height : 110,
        	//flex : 1,
        	
        	layout: {
        	    type: 'hbox',
        	    pack: 'start',
        	    align: 'stretch'
        	},
        	
        	items :[{
            	xtype : 'container',
            	flex : 2,

            	layout: {
            	    type: 'hbox',
            	    pack: 'start',
            	    align: 'stretch'
            	},
            	
            	items:[{
                	xtype : 'contentChartPie',
                	flex : 2,           		
            	},{
                	xtype : 'contentValueDowntime',
                	flex : 1,
            	},{
                	xtype : 'contentValueSLA',
                	flex : 1,           		
            	},{
                	xtype : 'contentValuePerf',
                	flex : 2,         		
            	}]
        	},{
            	xtype : 'contentRecAction', 
            	flex : 1,
        	}]
    	}]
    }]
        	
});
