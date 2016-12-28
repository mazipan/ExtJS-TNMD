/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.ContentMapWest', {
    extend: 'Ext.container.Container',    
    xtype: 'contentMapWest',
    itemId: 'contentMapWest',
   
    style : 'border: 1px solid grey;',
    
    listeners:{
		boxready: function(thisCmp, width, height, eOpts){
			TNMD.config.GlobalVariable.setGmapsWest(initializeGoogleMap(thisCmp.getId(), "west"));
		},
		resize: function(){
			if(typeof google !== 'undefined') google.maps.visualRefresh = true;			
			var map = TNMD.config.GlobalVariable.getGmapsWest();
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
