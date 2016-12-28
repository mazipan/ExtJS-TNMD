/**
 * @author Irfan Maulana
 * 
 */

Ext.define('SERVOWEB.store.AllCommentStore', {
	extend: 'Ext.data.Store',	
    autoLoad: false,
    fields : ['datetime_id', 'source_id', 'ne_id', 'last_comment', 'last_comment_time'],
    pageSize : 25,
    proxy: {
    	timeout: 10*60*1000,
        type: 'ajax',
        url: './Services/AvailServices/CommentsTable',
        reader: {
            type: 'json',
            rootProperty: 'TypeService',
            totalProperty: 'totalCount'
        }
    },
});
