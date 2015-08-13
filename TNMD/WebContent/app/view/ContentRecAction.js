/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentRecAction', {
    extend: 'Ext.grid.Panel',    
    xtype: 'contentRecAction',
    itemId: 'contentRecAction',
    
    scroll : 'vertical',    
    columnLines : true,
    title : 'Recommended Action :',
    margin : '2 2 2 2',
    
    header : {
        height : 30 / 768 * screen.height,
        style : {
			"background": "white",
            "box-shadow" : "#000000 0 0 0 0 inset;",
            "border" : "none",
            "border-top" : '1px solid #b0b0b0',
            "border-right" : '1px solid #b0b0b0',
            "border-left" : '1px solid #b0b0b0',
            "border-top-right-radius" : '10px',
            "border-top-left-radius" : '10px',
        }
    },
    
	columns: [{
		text: 'Status',
		dataIndex: 'status',
		baseCls:'custom-header-grid',
		flex : 1
	},{
		text: 'Action',
		dataIndex: 'action',
		baseCls:'custom-header-grid',
		flex : 1
	}],
	
	store : new Ext.data.SimpleStore({
        fields : ["status", "action"],
        data : [["utilization over 90% for 6 hour at peak time in 5 day in row.", "Propose bandwidth update"], 
                ["Most traffic type is WWW with facebook and youtube consume > 50% of total traffic", "propose BW mangement applience"]]
    }),
        
        	
});
