Ext.define('Myapp.store.Student', {
    extend: 'Ext.data.Store',
    storeId: 'studentId',
    alias: 'store.student',
    autoSync: true,
    fields: [
        'name', 'address'
    ],

    data: {
        items: [
            { name: 'Deepak', address: 'Deepak' },
            { name: 'Rahul', address: 'Delhi' },
            { name: 'Dimple', address: 'Noida' },
            { name: 'Rakesh', address: 'Hyderabad' },
            { name: 'Suresh', address: 'Mangalore' },
            { name: 'Mahesh', address: 'Pune' },
            { name: 'Mahesh', address: 'Pune' },
            { name: 'Mahesh', address: 'Pune' },
            { name: 'Deepak', address: 'Pune' },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },



});