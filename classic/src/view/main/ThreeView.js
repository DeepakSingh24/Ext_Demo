Ext.define('Myapp.view.main.ThreeView', {
    extend: 'Ext.container.Container',
    //width: 1100,
    height: 600,
    xtype: 'three',
    title: 'ThreedView',
    scrollable: true,
    maximizable: true,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        bodyPadding: 10,
        bodyMargin: 30
    },
    requires: [
        'Myapp.store.ThreeStore',
        'Myapp.view.controller.ThreeController'
    ],
    controller: 'threepin',


    items: [
        {
            xtype: 'panel',
            title: 'Search User',
            width: 400,
            height: 300,
            collapsible: true,
            maximizable: true,

            layout: {
                type: 'table',
                columns: 3,

            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    // labelWidth: '50px',
                    margin: '0 40 20 0',
                    id: 'txt1',

                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Address',
                    margin: '0 40 20 0',
                    id: 'txt2'
                },
                {

                    fieldLabel: 'Gender',
                    xtype: 'radiogroup',
                    name: 'gender',
                    margin: '0 40 20 0',
                    items: [
                        {
                            boxLabel: 'Male',
                            name: 'Gender',
                            inputValue: 'male',
                            checked: 'true'
                        },
                        {
                            boxLabel: 'Female',
                            name: 'Gender',
                            doc: 'right',
                            inputValue: 'female'

                        }
                    ]
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'DOB',
                    margin: '0 40 0 0',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'email',
                    margin: '0 40 0 0',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Domain',
                    margin: '0 0 0 0',
                },

            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Search',
                            handler: 'multifilter'
                        },
                        {
                            xtype: 'button',
                            text: 'Reset',
                            handler: 'DataReset'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: 'Search result',
            store: {
                type: 'threegrid1'
            },
            height: 300,
            width: 400,

            columns: [
                {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1,
                },
                {
                    text: 'adderss',
                    dataIndex: 'address',
                    flex: 1,
                },
                {
                    text: 'Gender',
                    dataIndex: 'gender',
                    flex: 1,
                },
                {
                    text: 'DOB',
                    dataIndex: 'dob',
                    flex: 1,
                },
                {
                    text: 'Email',
                    dataIndex: 'email',
                    flex: 1,
                },
                {
                    text: 'Domain',
                    dataIndex: 'domain',
                    flex: 1,
                },

            ],
            // bbar: [{
            //     xtype: 'pagingtoolbar',
            //     store: threegrid1,
            //     displayInfo: true,
            //     displayMsg: 'Displaying customers {0} - {1} of {2}'
            // }],



            tools: [{
                xtype: 'button',
                text: 'Add',
                width: 80,
                textAlign: 'left',
                glyph: 'xf0fe@FontAwesome',
                // handler: 'onAddClick',
                aclCfg: 'hidden',
                aclModule: 'Add User',
                aclFuncId: '1073',
                hasACL: true,
                id: 'btn1',
                handler: 'POPUP'
            },
            {
                xtype: 'button',
                text: 'Edit',
                width: 80,
                textAlign: 'left',
                disabled: true,
                glyph: 'xf0fe@FontAwesome',
                //handler: 'onEditClick',
                aclCfg: 'hidden',
                aclModule: 'Edit User',
                aclFuncId: '1073',
                hasACL: true,
                id: 'btn2'
            }],
            listeners: {
                select: 'UnhideButton'
            }

        },
        {
            title: 'User Form',
            xtype: 'form',
            //layout: 'fit',
            width: 300,
            height: 400,
            collapsible: true,
            hidden: true,
            // maximizable: true,
            id: 'downform',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    name: 'name'

                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Address',
                    name: 'address'
                },
                {

                    fieldLabel: 'Gender',
                    xtype: 'radiogroup',
                    name: 'gender',
                    items: [
                        {
                            boxLabel: 'Male',
                            name: 'gender',
                            inputValue: 'male',
                            checked: 'true'
                        },
                        {
                            boxLabel: 'Female',
                            name: 'gender',
                            // doc: 'left',
                            inputValue: 'female'

                        }
                    ]
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'DOB',
                    name: 'dob'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    name: 'email'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Domain',
                    name: 'domain'
                },
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Set',
                            handler: 'formClick'
                        },
                        {
                            xtype: 'button',
                            text: 'Reset',
                            handler: 'formReset'
                        }
                    ]
                }
            ]


        }
    ]


});