Ext.define('Myapp.store.SecondStore', {
    extend: 'Ext.data.Store',
    alias: 'store.pt',

    fields: ['id', 'name', 'phone', 'website'],

    // data: {
    //     record: [

    //     ]
    // },
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data'
    //     }
    // }

});