Ext.define('Myapp.view.main.school', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainschool',
    requires: [
        'Myapp.store.Student'
    ],

    title: 'Student Information',
    store: {
        type: 'student'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Address', dataIndex: 'address', flex: '1' }

    ]


});