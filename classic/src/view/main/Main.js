/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Myapp.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Myapp.view.main.MainController',
        'Myapp.view.main.MainModel',
        'Myapp.view.main.List',
        'Myapp.view.main.login',
        'Myapp.view.main.personalform',
        'Myapp.view.main.last',
        'Myapp.view.main.school',
        'Myapp.store.Student',
        'Myapp.view.main.Editable',
        'Myapp.view.main.tree',
        'Myapp.view.main.Clickgrid',
        'Myapp.view.main.Databind1',
        'Myapp.view.main.Databind2',
        'Myapp.view.controller.ControllerD2',
        'Myapp.view.main.Two-Way-Binding',
        'Myapp.view.controller.ControllerD3',
        'Myapp.view.main.Twogrid',
        'Myapp.view.main.Chaining',
        //'Myapp.view.main.Chart'
        // 'Myapp.store.Customers',
        //'Myapp.view.model.Customer',
        //'Myapp.view.serverSide.Customer.json',



    ],
    // stores: [
    //     'Myapp.store.Student',
    //     'Myapp.store.Personnel'
    // ],


    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    height: 50,
    minHeight: 50,
    scrollable: true,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'right',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    },
    {
        title: 'Users',
        iconCls: 'fa-user',
        // bind: {
        //     html: '{loremIpsum}'
        // }

        items: [{
            xtype: 'deepak'


        }]
    },
    {
        title: 'Groups',
        iconCls: 'fa-users',
        // bind: {
        //     html: '{loremIpsum}'
        // }
        items: [{

            xtype: 'formpersonal'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        // bind: {
        //     html: '{loremIpsum}'
        // }

        items: [{
            xtype: 'layout-vertical-box'
        }]
    },
    {
        title: 'Editable-Grid',
        // iconCls: 'fa-grip-horizontal'
        items: [{
            xtype: 'editable'
        }]

    },
    {
        title: 'Tree Panel',
        iconCls: 'fa-pencil',
        items: [{
            xtype: 'Tree1'
        }]
    }, {
        title: 'Data Binding',
        items: [{
            xtype: 'binding'
        }]
    },
    {
        title: 'Data Binding2',
        items: [{
            xtype: 'Dynamic-binding'
        }]
    },
    {
        title: 'Two-way-Binding',
        items: [{
            xtype: 'two-way-binding'
        }]
    },
    {
        title: 'Two grid relation',
        items: [{
            xtype: 'Two-Grid'

        }]
    },
    {
        title: 'Server-Data',
        items: [{
            xtype: 'ServerData'

        }]
    },

    {
        title: 'Chart-Example',
        items: [{
            // xtype: 'column-basic'

        }]
    },
    {
        title: 'Calculator',
        items: [{
            xtype: 'calc'
        }]

    },
    {
        title: 'ThreeDview',
        items: [{
            xtype: 'three'
        }]

    }


    ]
});
