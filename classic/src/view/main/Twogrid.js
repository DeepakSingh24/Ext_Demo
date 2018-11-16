Ext.define('Myapp.view.main.Twogrid', {
    extend: 'Ext.container.Container',
    xtype: 'Two-Grid',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    requires: [
        'Ext.layout.container.VBox',
        'Ext.layout.container.Absolute',
        'Myapp.store.Two',
        'Myapp.store.SecondStore'
    ],

    items: [
        {

            xtype: 'grid',
            title: 'Customers',
            id: 'crack',
            height: 300,
            width: 200,
            store: {
                type: 'three'

            },

            columns: [
                // {
                //     text: 'Rownumber',
                //     xtype: 'rownumberer',
                //     align: 'center',
                //     width: 50

                // },
                {
                    text: 'Id',
                    dataIndex: 'id',
                    width: 200

                },
                {
                    text: 'Name',
                    dataIndex: 'name',
                    width: 200,

                },
                {
                    text: 'Phone',
                    dataIndex: 'phone',
                    width: 220,
                },
                {
                    text: 'Website',
                    dataIndex: 'website',
                    width: 330,
                },

            ],
            listeners: {
                rowclick: function (grid, record, value, index, ev, Opts) {
                    debugger
                    console.log(grid);
                    // var customerStore = this.up().items.items[1].store;
                    // customerStore.removeAll();
                    // customerStore.add(record.data);


                    //  var temp = Ext.getCmp('track').getStore().setValues(record.data);
                    var temp = Ext.getCmp('track').store;
                    temp.removeAll();
                    temp.add(record.data);


                }
            }
        },
        {
            xtype: 'grid',
            title: 'Customers record',
            id: 'track',
            height: 300,
            width: 200,
            reference: 'customrecord',
            store: {
                type: 'pt'
            },


            bind: {
                store: '{data}'
            },
            columns: [
                {
                    text: 'Id',
                    dataIndex: 'id',
                    width: 150
                },
                {
                    text: 'Name',
                    dataIndex: 'name',
                    width: 220
                },
                {
                    text: 'Phone',
                    dataIndex: 'phone',
                    width: 200,
                },
                {
                    text: 'Website',
                    dataIndex: 'website',
                    width: 200
                }
            ]
        }

    ]

});