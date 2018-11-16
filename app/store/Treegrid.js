Ext.define('Myapp.store.Treegrid', {
    extend: 'Ext.data.Store',
    alias: 'store.treegrid',
    storeId: 'tree1',




    fields: ['name', 'email', 'address'],


    data: {
        items: [
            { name: 'Deepak', email: 'Deepaksinghlive@gmail.com', address: 'Bangalore' },
            { name: 'Rahul', email: 'rahul@gmail.com', address: 'Mangalore' }

        ]
    },

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },


});