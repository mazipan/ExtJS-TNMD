/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentValuePerf', {
    extend: 'Ext.panel.Panel',    
    xtype: 'contentValuePerf',
    itemId: 'contentValuePerf',

    border : false,
    title : 'LINK PERFORMANCE INDEX',  
    margin : '2 2 2 2',
    
    header : {
        height : 30 / 768 * screen.height,
        style : {
			"background": "#91cf4e",
            "box-shadow" : "#000000 0 0 0 0 inset;",
            "border" : "none",
            //"border-top" : '5px solid #b0b0b0',
            //"border-right" : '5px solid #b0b0b0',
            "border-top-right-radius" : '10px',
            "border-top-left-radius" : '10px',
        }
    },
    bodyStyle : 'background: #91cf4e; border:none; border-bottom-right-radius:10px; border-bottom-left-radius:10px;',
    
    
    layout: {
	    type: 'vbox',
	    pack: 'center',
	    align: 'center'
	},
    
    items:[{
		xtype : 'label',
	    itemId: 'labelPerf',
		html : '<font style="color:white; font-size:50px; font-weight:bold;">8,9%</font> <font style="color:white; font-size:20px; font-weight:bold;">of 10</font>',
	}]
        
    
        	
});
