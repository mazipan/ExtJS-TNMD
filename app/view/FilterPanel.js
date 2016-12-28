/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.FilterPanel', {
    extend: 'Ext.panel.Panel',    
    xtype: 'filterPanel',
    itemId: 'filterPanel',
    
    title : 'Filter Data',
    collapsible : true,
    split : true,
        
    items: [{
    	xtype : 'fieldset',
    	title : 'Display',
    	items : [{
    		xtype : 'combobox',
    		margin : '0 0 5 0',
    		width : 226,
    		store : new Ext.data.SimpleStore({
                fields : ["value"],
                data : [["Dashboard"]]
            }),
            displayField : 'value',
            valueField : 'value',
            mode: 'local',
            value: 'Dashboard',
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	}]
    },{
     	xtype : 'fieldset',
    	title : 'Service Type',
    	items : [{
    		xtype : 'checkboxfield',
            boxLabel : 'Point-to-Point',
    		style : {
                "float" : "right"
            },
    		margin : '0 0 5 0',
    		width : 226,
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	},{
    		xtype : 'checkboxfield',
            boxLabel : 'Dedicated Internet',
    		style : {
                "float" : "right"
            },
    		margin : '0 0 5 0',
    		width : 226,
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	},{
    		xtype : 'checkboxfield',
            boxLabel : 'IPVPN',
    		style : {
                "float" : "right"
            },
    		margin : '0 0 5 0',
    		width : 226,
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	}]
    },{
     	xtype : 'fieldset',
    	title : 'Industry',
    	items : [{
    		xtype : 'gridpanel',
            selType : 'checkboxmodel',
            scroll : 'vertical',
    		hideHeaders : true,
            multiSelect: true,
    		columns: [{
    			text: 'value',
    			dataIndex: 'value',
    			flex : 1
    		}],
    		store : new Ext.data.SimpleStore({
                fields : ["value"],
                data : [["Financial Services"], ["Oil, Gas, Power "], ["General Trading"], ["Network And Telecomunication"]]
            }),
    		margin : '0 0 5 0',
    		width : 226,
    		height : 80,
    		listeners:{
    			selectionchange: function(thisGrid, selected, eOpts ){
            		slide = 1;
    				doFilter();
    			}
    		}
    	}]
    },{
     	xtype : 'fieldset',
    	title : 'Customer',
    	items : [{
    		xtype : 'combobox',
            itemId: 'filterCustomer',
    		margin : '0 0 5 0',
    		width : 226,
    		store : new Ext.data.SimpleStore({
                fields : ["value"],
                data : [["Customer1"], ["Customer2"], ["Customer3"], ["Customer4"], ["Customer5"]]
            }),
            displayField : 'value',
            valueField : 'value',
            mode: 'local',
            value: 'Customer1',
            multiSelect : true,
            allowBlank : false,
            listConfig : {
                loadingText : 'Please wait...',
                emptyText : 'No item to display.',

                getInnerTpl : function() {
                  return '<div class="x-combo-list-item"><img src="' + Ext.BLANK_IMAGE_URL + '" class="chkCombo-default-icon chkCombo" /> {value} </div>';
                }
            },
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter(true);
            	}
            }
    	}]
    },{
     	xtype : 'fieldset',
    	title : 'State/Federal',
    	items : [{
    		xtype : 'gridpanel',
            selType : 'checkboxmodel',
            scroll : 'vertical',
    		hideHeaders : true,
            multiSelect: true,
    		columns: [{
    			text: 'value',
    			dataIndex: 'value',
    			flex : 1
    		}],
    		store : new Ext.data.SimpleStore({
                fields : ["value"],
                data : [["Kuala Lumpur"], ["Labuan"], ["Putra Jaya"], ["Johor"]]
            }),
    		margin : '0 0 5 0',
    		width : 226,
    		height : 80,
    		listeners:{
    			selectionchange: function(thisGrid, selected, eOpts ){
            		slide = 1;
    				doFilter();
    			}
    		}
    	}]
    },{
     	xtype : 'fieldset',
    	title : 'Date Period',
    	items : [{
    		xtype : 'label',
    		text : 'Start Date'
    	},{
    		xtype : 'datetimefield',
            format : 'Y-m-d',
            value : new Date(),
    		margin : '0 0 5 0',
    		width : 226,
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	},{
    		xtype : 'label',
    		text : 'End Date'
    	},{
    		xtype : 'datetimefield',
            format : 'Y-m-d',
            value : new Date(),
    		margin : '0 0 5 0',
    		width : 226,
            listeners:{
            	change: function(){
            		slide = 1;
            		doFilter();
            	}
            }
    	}]
    }]
        	
});
