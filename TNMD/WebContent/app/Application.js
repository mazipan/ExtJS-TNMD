/**
 * @author Irfan Maulana
 */

Ext.define('TNMD.Application', {
    extend: 'Ext.app.Application',

    name: 'TNMD',

    requires : ['TNMD.config.GlobalVariable'],
    
    controllers: [
                  'AppController'
                  ],
  
    launch: function () {    	
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [{
                    xtype: 'mainView'
                }]
        });
    
    }
});


