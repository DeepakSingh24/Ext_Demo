
Ext.define('Myapp.view.main.Chaining', {
    extend: 'Ext.grid.Panel',
    height: 600,
    width: 1050,
    xtype: 'ServerData',
    title: 'My customers',
    requires: ['Myapp.store.Customers',
        'Myapp.view.model.Customer'
        //'Myapp.view.serverSide.Customer'
    ],
    store: {
        type: 'customert'
    },

    columns: [
        {
            text: 'Id',
            width: 100,
            dataIndex: 'id'
        },
        {
            text: 'Customer Name',
            width: 150,
            dataIndex: 'name'

        },
        {
            width: 170,
            text: 'Phone',
            dataIndex: 'phone'
        },
        {
            width: 210,
            text: 'Website',
            dataIndex: 'website'
        },
        {
            width: 140,
            text: 'Status',
            dataIndex: 'status'
        },
        {
            width: 350,
            text: 'Client Since',
            dataIndex: 'clientSince'
        }
    ]
});