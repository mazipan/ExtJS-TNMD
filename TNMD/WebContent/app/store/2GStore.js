/**
 * @author Irfan Maulana
 * 
 */
Ext.define('SERVOWEB.store.2GStore', {
	extend: 'Ext.data.Store',	
    
    autoLoad: false,
    model : 'SERVOWEB.model.GridModel',
    proxy: {
    	timeout: 10*60*1000,
        type: 'ajax',
        url: './Services/AvailServices/DataGrid/2G',
        reader: {
            type: 'json',
            rootProperty: 'TypeService',
        }
    },
    
    listeners:{
    	beforeload: function(store){
    		store.clearFilter(true);
    		if(typeof(Storage) !== "undefined"){							
				var hour = new Date().getHours();				
				var lastHour = hour;
				
				if(sessionStorage.getItem('SERVOWEB_lastRequestHour') != null) {
					lastHour = parseInt(sessionStorage.getItem('SERVOWEB_lastRequestHour'));
					
					if(hour != lastHour){
						//window.location.reload(1);
						console.log('Reconfigure grid 2G');

						try {
				        	var grid2g = Ext.ComponentQuery.query('#pM2GAvail_grid')[0];
							var columns2g = reconfigureColumn('2G');
							grid2g.reconfigure(store, columns2g);
							grid2g.getView().refresh();
							grid2g.getView().scrollBy(999999, 0, true);
					    } catch (err) {
					    	
					    }
					}
				}				
				
				sessionStorage.setItem('SERVOWEB_lastRequestHour', parseInt(hour));				
        	}
    	},
        load: function(store, records){
        	var label = Ext.ComponentQuery.query('#2g_totalData')[0];
        	label.setText('Total data shown : '+records.length +' of '+records.length);
        	SERVOWEB.config.GlobalVariable.setTotalData2G(parseInt(records.length));
        	
        	store.sort('hourCount', 'ASC');
        },
        filterchange: function(store, filters){
        	var label = Ext.ComponentQuery.query('#2g_totalData')[0];
        	label.setText('Total data shown : '+store.getCount()+' of '+SERVOWEB.config.GlobalVariable.getTotalData2G());        	
        }
    }
    
});

