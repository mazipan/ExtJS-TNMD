/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentValueDowntime', {
    extend: 'Ext.panel.Panel',    
    xtype: 'contentValueDowntime',
    itemId: 'contentValueDowntime',
    
    border : false,    
    title : '# of Downtime',
    margin : '2 2 2 2',
    
    header : {
        height : 30 / 768 * screen.height,
        style : {
			"background": "#fae6d7",
            "box-shadow" : "#000000 0 0 0 0 inset;",
            "border" : "none",
            //"border-top" : '5px solid #b0b0b0',
            //"border-right" : '5px solid #b0b0b0',
            "border-top-right-radius" : '10px',
            "border-top-left-radius" : '10px',
        }
    },
    bodyStyle : 'background: #fae6d7; border:none; border-bottom-right-radius:10px; border-bottom-left-radius:10px;',
    
      
    layout: {
	    type: 'vbox',
	    pack: 'center',
	    align: 'center'
	},
    
    items:[{
		xtype : 'label',
	    itemId: 'labelDowntime',
		text : '1',
		style : 'font-size:25px; font-weight:bold;'
	}]
        
    
        	
});
