/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.view.MainView', {
    extend: 'Ext.container.Container',    
    xtype: 'mainView',
    itemId: 'mainView',
    
    requires: [
               'TNMD.viewController.MainController',
               'TNMD.view.FilterPanel',
               'TNMD.view.ContentPanel'
               ],

    controller: 'mainController',
    
    layout : 'border',
    
    items:[{
    	xtype : 'filterPanel',
    	region : 'west',
    	width : 250,
    },{
    	xtype : 'contentPanel',
    	region : 'center',
    }]
        	
});
