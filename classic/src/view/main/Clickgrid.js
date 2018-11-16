Ext.define('Myapp.view.main.Clickgrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'treegrid1',
    title: 'Grid on Tree Click',

    requires: ['Myapp.store.Treegrid'],


    store: {
        type: 'treegrid'

    },
    columns: [
        { text: 'Name', dataIndex: 'name', },
        { text: 'Email', dataIndex: 'email', flex: 2 },
        { text: 'Address', dataIndex: 'address', flex: 2 }
    ]
});