Ext.define('Myapp.view.main.Databind2', {
    extend: Ext.panel.Panel,
    alias: 'widget.Dynamic-binding',
    width: 300,
    bodyPadding: 10,
    controller: 'binding-Dynamic',
    viewModel: {
        data: {
            title: 'Some title',
            content: 'Some content'

        }
    },

    bind: {
        title: 'Info-{title}',
        html: 'Stuff-{content}'
    },
    tbar: [
        {
            text: 'Change Title',
            listeners: {
                click: 'onChangeTitleClick'
            }
        },
        {
            text: 'Change Content',
            listeners: {
                click: 'onChangeContentClick'
            }
        }
    ]
});