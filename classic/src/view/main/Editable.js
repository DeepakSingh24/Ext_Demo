Ext.define('Myapp.view.main.Editable', {
    extend: 'Ext.grid.Panel',
    xtype: 'editable',

    requires: ['Myapp.store.Editabledata',
        // 'Ext.toolbar.Paging',
        // 'Ext.ux.ProgressBarPager'
    ],

    title: 'Editable Grid',
    // selType: 'rowmodel',
    selModel: {
        // selType: 'cellmodel',
        selType: 'checkboxmodel',
        // mode: 'MULTI'
    },
    listeners: {
        'beforeedit': function (editor) {
            // editor.getEditor().floatingButtons.hide();
            // editor.getEditor().floatingButtons.items.items[0].hide();

        }
    },

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        })

    ],


    // },

    store: {
        type: 'editableData'
    },


    columns: [

        { text: 'Name', dataIndex: 'name', flex: 1, editor: 'textfield', direction: 'ASC' },
        { text: 'Contact', dataIndex: 'contact', flex: 2, editor: 'textfield' },
        {
            text: 'Email', dataIndex: 'email', flex: 3,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },


        // {

        //     xtype: 'checkcolumn',
        //     // header: 'Active?',
        //     fieldLabel: 'checkbox_label',
        //     name: 'checkbox_name',
        //     text: 'text',
        //     flex: 1,
        //     dataIndex: 'active',
        //     editor: {
        //         xtype: 'checkbox',
        //         cls: 'x-grid-checkheader-editor'
        //  
        //}
        {
            text: 'Status',
            width: 150,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'radiogroup',
                editable: false,
                editor: 'radiogroup',
                items: [
                    {
                        boxLabel: 'Yes',
                        inputValue: true,

                    },
                    {
                        boxLabel: 'No',
                        inputValue: false,

                    }
                ]
            }

        },
        {
            text: 'Select',
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'combobox',
                store: Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data: [
                        { "abbr": "AL", "name": "Alabama" },
                        { "abbr": "AK", "name": "Alaska" },
                        { "abbr": "AZ", "name": "Arizona" }

                    ]
                }),
                displayField: 'name',
                valueField: 'abbr',
                queryMode: 'local',
                editor: 'textfield'

            }

            // xtype: 'gridcolumn',
            // dataIndex: '100%',
            // text: 'Combobox',
            // name: '',
            // header: '100%',
            // sortable: true,
            // grupable: true,
            // align: 'center',
            // flex: 1,
            // renderer: function (value) {
            //     return "<select><option value='volvo'>Volvo</option><option value='saab'>Saab</option><option value='mercedes'>Mercedes</option> </select>";
            // }
        }

    ],

    // bbar: {
    //     xtype: 'pagingtoolbar',
    //     displayInfo: true,
    //     plugins: 'ux-progressbarpager'
    // }




});