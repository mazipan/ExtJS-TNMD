/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentTitle', {
    extend: 'Ext.panel.Panel',    
    xtype: 'contentTitle',
    itemId: 'contentTitle',
       
    layout: {
        type: 'table',
        columns: 6,
        tableAttrs : {
            width : '100%'
        }
    },
    
    items:[{
    	xtype : 'label',
    	html : '<div style="padding-left:10px; font-size:30px; font-weight:bold;"><font id="customerTitle">Customer1</font> - <font id="serviceTypeTitle">IPVN</font> Backhaul 10Mbps</div>',
    	colspan : 4
    },{
    	xtype : 'label',
    	html : 'Payment Status : ',
    	tdAttrs:{
    		width : 120
    	},
    },{ 	
    	border : false,
    	html : '<div style="height:20px; width:100%; background-color:red; color:white; font-weight:bold;"><div style="padding-top:3px; padding-left:40px;">1 month late</div></div>'
    },{
    	xtype : 'label',
    	style : 'padding-left:10px; ',
    	html : 'Priority Level'
    },{
    	border : false,
    	html : '<div style="height:20px; width:100%; background-color:grey; color:white; font-weight:bold;"><div style="padding-top:3px; padding-left:50px;">Platinum / Gold / Silver / Bronze</div></div>'
    },{
    	xtype : 'label',
    	html : 'Subscription Period : '
    },{
    	border : false,
    	html : '<div style="height:20px; width:100%; background-color:#91cf4e; color:white; font-weight:bold;"><div style="padding-top:3px; padding-left:50px;">> 5years</div></div>'
    },{
    	xtype : 'label',
    	html : 'Contract End Date : ',
    	tdAttrs:{
    		width : 120
    	},
    },{ 	
    	border : false,
    	html : '<div style="height:20px; width:100%; background-color:red; color:white; font-weight:bold;"><div style="padding-top:3px; padding-left:40px;">2 month left</div></div>'
    }]
    
        	
});
