Ext.define('Myapp.store.Editabledata', {
    extend: 'Ext.data.Store',
    storeid: 'edit',
    alias: 'store.editableData',
    autoSync: 'true',
    pageSize: 3,

    scrollable: true,


    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },




    fields: ['name', 'contact', 'email', 'active'],

    data: {
        items: [
            { name: 'Deepak', contact: '9835106586', email: 'deepaksinghlive123@gmail.com', active: true },
            { name: 'Rahul', contact: '4532823564512', email: 'Rahul@gmail.com', active: true },
            { name: 'Prince', contact: '56w2252323t23', email: 'prince@gmail.com', active: true },
            { name: 'Liquid', contact: '5282943838', email: 'Liquid@gmail.com', active: false },
            { name: 'Kishore', contact: '47252839353', email: 'kishore@gmail.com', active: true },
            { name: 'Lucky', contact: '53892624538', email: 'lucky@gmail.com', active: false }
        ]
    }





});