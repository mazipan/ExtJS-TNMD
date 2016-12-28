/**
 * @author Irfan Maulana
 * 
 * example usage :
 * 
 * - setter : TNMD.config.GlobalVariable.setStore2G(null);
 * - getter : TNMD.config.GlobalVariable.getStore2G();
 */

Ext.define('TNMD.config.GlobalVariable',{
    singleton : true,
    config : {
    	gmapsEast : null,
    	gmapsWest : null,
    	barChart : null,
    	pieChart : null,
    	lineChart : null,
    },
    
    constructor : function(config){
    	
        this.initConfig(config);
    }
});