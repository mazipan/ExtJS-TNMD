/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.CurrentActivity', {
    extend: 'Ext.panel.Panel',    
    xtype: 'currentActivity',
    itemId: 'currentActivity',
    
    requires: [
               'TNMD.view.GaugeUtil',
               'TNMD.view.GaugePacket',
               'TNMD.view.GaugeError'
               ],
               
    title : 'Current Activity',
    margin : '2 2 2 2',
    
    header : {
        height : 30 / 768 * screen.height,
        style : {
			"background": "#4474c7",
            "box-shadow" : "#000000 0 0 0 0 inset;",
            "border" : "none",
            "border-top" : '1px solid #b0b0b0',
            "border-right" : '1px solid #b0b0b0',
            "border-left" : '1px solid #b0b0b0',
            "border-top-right-radius" : '10px',
            "border-top-left-radius" : '10px',
        }
    },
    bodyStyle : 'border:none; border-right: 1px solid #b0b0b0; border-left: 1px solid #b0b0b0; border-bottom: 1px solid #b0b0b0; border-bottom-right-radius:10px; border-bottom-left-radius:10px;',
          
    layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},
    
    items:[{
		xtype : 'container',
		flex : 1,
		layout : 'border',
		style : 'background-color:white; ',
		items:[{
			xtype : 'container',
			region : 'center', 
			layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
			items:[{
				xtype : 'gaugeUtil',
				flex : 1,
				width : '100%'
			},{
				xtype : 'label',
				margin : '10 0 0 0',
				text : '% Utilization',
				height : 20,
			}]
		},{
			xtype : 'container',
			region : 'south',
			height : 50,
	    	style : 'border-radius:10px; background-color:red;', 
	        margin : '5 5 5 5',
	        layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
	        
	        items:[{
	    		xtype : 'label',
	    	    itemId: 'labelUtil',
	    		text : '92%',
	    		style : 'font-size:25px; font-weight:bold;'
	    	}]
		}]
	},{
		xtype : 'container',
		flex : 1,
		layout : 'border',
		style : 'background-color:white; ',
		items:[{
			xtype : 'container',
			region : 'center', 
			layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
			items:[{
				xtype : 'gaugePacket',
				flex : 1,
				width : '100%'
			},{
				xtype : 'label',
				margin : '10 0 0 0',
				text : 'Packets/s',
				height : 20,
			}]
		},{
			xtype : 'container',
			region : 'south',
			height : 50,
	    	style : 'border-radius:10px; background-color:#91cf4e;', 
	        margin : '5 5 5 5',
	        layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
	        
	        items:[{
	    		xtype : 'label',
	    	    itemId: 'labelPacket',
	    		text : '5%',
	    		style : 'font-size:25px; font-weight:bold;'
	    	}]
		}]
	},{
		xtype : 'container',
		flex : 1,
		layout : 'border',
		style : 'background-color:white; ',
		items:[{
			xtype : 'container',
			region : 'center', 
			layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
			items:[{
				xtype : 'gaugeError',
				flex : 1,
				width : '100%'
			},{
				xtype : 'label',
				margin : '10 0 0 0',
				text : 'Error/s',
				height : 20,
			}]
		},{
			xtype : 'container',
			region : 'south',
			height : 50,
	    	style : 'border-radius:10px; background-color:#91cf4e;', 
	        margin : '5 5 5 5',
	        layout: {
	    	    type: 'vbox',
	    	    pack: 'center',
	    	    align: 'center'
	    	},
	        
	        items:[{
	    		xtype : 'label',
	    	    itemId: 'labelError',
	    		text : '3%',
	    		style : 'font-size:25px; font-weight:bold;'
	    	}]
		}]
	}]
        
    
        	
});
