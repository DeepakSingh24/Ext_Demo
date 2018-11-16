Ext.define('Myapp.view.main.Databind1', {
    extend: 'Ext.panel.Panel',
    xtype: 'binding',
    width: 700,
    bodypadding: 10,

    viewModel: {
        data: {
            title: 'Hello world',
            html: 'HTML content',
            buttonText: 'A Button'

        }

    },
    bind: {
        title: '{title}',
        html: '{html}'

    },

    tbar: [
        {
            bind: '{buttonText}'
        }
    ]
});