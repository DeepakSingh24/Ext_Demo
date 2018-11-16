Ext.define('Myapp.view.main.Two-Way-Binding', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.two-way-binding',
    width: 500,
    bodyPadding: 10,
    controller: 'bindingtoway',
    viewModel: {
        data: {
            title: 'The Title'
        }
    },

    bind: {
        title: '{title}'
    },


    items: {
        xtype: 'textfield',
        fieldLabel: 'Title',
        labelWidth: 50,
        bind: '{title}'
    },

    tbar: [
        {
            text: 'Ramdom Title',
            handler: 'onTitleButtonClick'
        }
    ]

    //http://localhost/Oracle_Extjs_6_x_Oct_17_Course_Material(complementary)/7_DataGrid/grid_01.html

});