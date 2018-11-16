Ext.define('Myapp.view.main.Calculator', {
    extend: 'Ext.container.Container',
    requires: [
        // 'Ext.layout.container.VBox',
        'Myapp.view.controller.CalcController'
    ],
    xtype: 'calc',
    title: 'calculator',
    width: 600,
    height: 600,
    border: true,
    frame: true,
    controller: 'calculate',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        bodyPadding: 10
    },

    items: [
        {
            title: 'Calculator',
        },
        {
            xtype: 'textfield',
            reference: 'inputText',
            height: 60,
            width: 20,
            id: 'text'
        },
        {
            tbar: [
                '->',

                {
                    xtype: 'button',
                    text: 'Result',
                    // handler: 'calcResult'
                    handler: 'evaluateExp'
                },

                {
                    xtype: 'button',
                    text: 'Clear',
                    handler: function () {
                        Ext.getCmp('text').setValue('');
                    }
                }
            ]
        },

        {
            xtype: 'container',
            layout: {
                type: 'table',
                columns: 4,

            },
            items: [
                {
                    xtype: 'button',
                    text: '1',
                    scale: 'large',
                    id: 'one',
                    value: 1,
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '2',
                    scale: 'large',
                    id: 'two',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60

                },
                {
                    xtype: 'button',
                    text: '3',
                    scale: 'large',
                    id: 'three',
                    value: '3',
                    name: '3',
                    reference: 'pen',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60

                },
                {
                    xtype: 'button',
                    text: '4',
                    scale: 'large',
                    id: 'four',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '5',
                    scale: 'large',
                    id: 'five',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },

                {
                    xtype: 'button',
                    text: '6',
                    scale: 'large',
                    id: 'six',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '7',
                    scale: 'large',
                    id: 'seven',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '8',
                    scale: 'large',
                    id: 'eight',
                    width: 70,
                    height: 60,
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '9',
                    scale: 'large',
                    id: 'nine',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '0',
                    scale: 'large',
                    id: 'zero',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '+',
                    scale: 'large',
                    id: 'plus',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '-',
                    scale: 'large',
                    id: 'minus',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '*',
                    scale: 'large',
                    id: 'mul',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '/',
                    scale: 'large',
                    id: 'devide',
                    handler: 'clickBtn',
                    width: 80,
                    height: 60
                },
                {
                    xtype: 'button',
                    text: '=',
                    scale: 'large',
                    width: 80,
                    height: 60,
                    id: 'equal',
                    handler: 'evaluateExp'
                },
                {
                    xtype: 'button',
                    text: '<-',
                    scale: 'large',
                    width: 80,
                    height: 60,
                    handler: 'clearBtn'
                },
            ]
        }
    ]
});