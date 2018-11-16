Ext.define('Myapp.view.main.last', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.layout.container.VBox',
        'Ext.layout.container.Absolute',
        'Myapp.store.Student'
    ],

    xtype: 'layout-vertical-box',
    width: 600,
    height: 600,

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    bodypadding: '10',
    // frame: true,
    defaults: {
        bodyPadding: 10
    },
    flex: 1,
    margin: '0 0 10 0',
    items: [
        {
            xtype: 'form',
            height: '500',
            id: 'form3',
            // extend: 'Ext.form.Panel',
            title: 'Form',
            flex: 1,
            margin: '0 0 10 0',
            //  html: 'flex : 1',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Name',
                // emptyText: 'Name',
                name: 'name',
                id: 't1'
            },

            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    store: {
                        type: 'student'

                    },

                    items: [

                        {
                            text: 'search',
                            handler: function () {

                                var store = Ext.getStore('studentId');
                                console.log(store);
                                var searchValue = Ext.getCmp('t1').getValue();
                                /*single params*/
                                store.filter('name', searchValue);


                                /*Multiple params*/
                                // store.filterBy(function (record) {
                                //     return record.data.name == searchValue && record.data.address == searchValue;
                                // });
                            }
                        },

                        {
                            text: 'clear',
                            handler: function () {
                                Ext.getCmp('t1').setValue('');
                                var store = Ext.getStore('studentId');
                                store.clearFilter();
                            }
                        }
                    ]
                }
            ]

        },
        {
            xtype: 'grid',
            title: 'School Items',
            scrollable: true,
            columns: [
                { text: 'Name', dataIndex: 'name' },
                { text: 'Address', dataIndex: 'address', flex: '1' }

            ],
            // requires: [
            //     'Myapp.store.Student'
            // ],
            title: 'Student Information',
            store: {
                type: 'student'
            },
            // store: 'studentId'

        },


    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        //store: myStore,
        store: {
            type: 'student'
        },
        displayInfo: true,
        pageSize: 3,
        displayMsg: 'Displaying customers {0} - {1} of {2}'
    }],

});