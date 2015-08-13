/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentMapEast', {
    extend: 'Ext.container.Container',    
    xtype: 'contentMapEast',
    itemId: 'contentMapEast',
    
    style : 'border: 1px solid grey;',
    
    listeners:{
		boxready: function(thisCmp, width, height, eOpts){
			TNMD.config.GlobalVariable.setGmapsEast(initializeGoogleMap(thisCmp.getId(), "east"));
		},
		resize: function(){
			if(typeof google !== 'undefined') google.maps.visualRefresh = true;			
			var map = TNMD.config.GlobalVariable.getGmapsEast();
			if(map != null){
				try{
            		google.maps.event.trigger(map, 'resize');
            		var center = map.getCenter();
            		map.setCenter(center); 
            	}catch (e) {
				}
			}                	  
		}
	}
        	
});
