/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentValueSLA', {
    extend: 'Ext.panel.Panel',    
    xtype: 'contentValueSLA',
    itemId: 'contentValueSLA',

    border : false,
    title : 'SLA Achieved',
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
	    itemId: 'labelSLA',
		text : '99,98%',
		style : 'font-size:25px; font-weight:bold;'
	}]
        
    
        	
});
