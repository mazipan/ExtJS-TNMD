/**
 * @author Irfan Maulana
 * 
 */
Ext.define('SERVOWEB.store.3GStore', {
	extend: 'Ext.data.Store',
	    
    autoLoad: false,
    model : 'SERVOWEB.model.GridModel',
    proxy: {
    	timeout: 10*60*1000,
        type: 'ajax',
        url: './Services/AvailServices/DataGrid/3G',
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
						console.log('Reconfigure grid 3G');
						try {
				        	var grid3g = Ext.ComponentQuery.query('#pM3GAvail_grid')[0];
							var columns3g = reconfigureColumn('3G');
							grid3g.reconfigure(store, columns3g);
							grid3g.getView().refresh();
							grid3g.getView().scrollBy(999999, 0, true);
					    } catch (err) {
					    	
					    }
					}
				}
				
				sessionStorage.setItem('SERVOWEB_lastRequestHour', parseInt(hour));
        	}
    	},
        load: function(store, records){
        	var label = Ext.ComponentQuery.query('#3g_totalData')[0];
        	label.setText('Total data shown : '+records.length +' of '+records.length);
        	SERVOWEB.config.GlobalVariable.setTotalData3G(parseInt(records.length));  
        	
        	store.sort('hourCount', 'ASC');      	
        },
        filterchange: function(store, filters){
        	var label = Ext.ComponentQuery.query('#3g_totalData')[0];
        	label.setText('Total data shown : '+store.getCount()+' of '+SERVOWEB.config.GlobalVariable.getTotalData3G());       	
        }
    }
    
});

