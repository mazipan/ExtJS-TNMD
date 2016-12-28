/**
 * @author Irfan Maulana
 * 
 */

Ext.define('SERVOWEB.store.CommentStore', {
	extend: 'Ext.data.Store',	
    autoLoad: false,
    fields : ['source_id', 'ne_id', 'datetime_id', 'comment_time', 'text', 'name'],
    proxy: {
    	timeout: 10*60*1000,
        type: 'ajax',
        url: './Services/AvailServices/GetCellComment/{sourceId}/{neId}/{dateTimeId}',
        reader: {
            type: 'json',
            rootProperty: 'TypeService',
        }
    },
});

