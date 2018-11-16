Ext.define('Myapp.view.main.personalform', {
    extend: 'Ext.form.Panel',

    requires: [

    ],
    frame: 'true',
    title: 'Pesonal form',
    xtype: 'formpersonal',
    width: 700,
    id: 'form1',
    bodyPadding: 10,
    scrollable: true,
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: 'false',
        emptyText: 'Name'

    },
    {
        xtype: 'textfield',
        name: 'fathers',
        fieldLabel: 'Father Name',
        allowBlank: 'false',
        emptyText: 'Fathers Name'
    },

    {
        xtype: 'textfield',
        name: 'mothers',
        fieldLabel: 'Mothers Name',
        allowBlank: 'false',
        emptyText: 'Mothers Name'
    },

    {
        xtype: 'textareafield',
        grow: 'true',
        height: 100,
        width: 200,
        name: 'communication',
        fieldLabel: 'Communication address',
        allowBlank: 'false',
        emptyText: 'communication Address',
        anchor: '100%'

    },
    {
        xtype: 'checkboxfield',
        boxLabel: 'Is permanent address is same as corresponding address',
        name: 'check',
        inputValue: '1',
        id: 'checkbox1'

    },
    {
        xtype: 'textareafield',
        grow: 'true',
        name: 'permanent',
        height: 100,
        width: 200,
        fieldLabel: 'Permanent address',
        allowBlank: 'false',
        emptyText: 'Permanent Address',
        anchor: '100%'

    },
    {
        xtype: 'numberfield',
        fieldLabel: 'Mobile No.',
        /*  ***
           Remove spinner buttons, and arrow key and mouse wheel listeners
        */
        hideTrigger: true,
        keyNavEnabled: false,
        mouseWheelEnabled: false,
        name: 'mobile'
    }, {
        dockedItems: [{
            xtype: 'toolbar',
            items: [
                {
                    fieldLabel: 'Gender',
                    xtype: 'radiogroup',
                    name: 'gender',
                    items: [
                        {
                            boxLabel: 'Male',
                            name: 'Gender',
                            inputValue: '1',
                            checked: 'true'
                        },
                        {
                            boxLabel: 'Female',
                            name: 'Gender',
                            doc: 'right',
                            inputValue: '2'

                        }
                    ]
                }
            ]
        }]
    },


    {
        xtype: 'textfield',
        fieldLabel: 'Email',
        name: 'email',
        vtype: 'email'

    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            {
                text: 'submit',
                // handler: 'submit',
                handler: function (btn) {
                    var temp2 = btn.up('form');
                    console.log(temp2.getValues());
                    var win = Ext.create('Ext.window.Window', {
                        title: 'Hello',
                        height: 600,
                        width: 600,
                        layout: 'anchor',
                        items: [{
                            xtype: 'form',
                            frame: 'true',
                            id: 'form2',
                            items: [

                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Name',
                                    name: 'name',
                                    //value: 'name'
                                },


                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Fathers Name',
                                    name: 'fathers',
                                    //value: ''
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Mothers Name',
                                    name: 'mothers',
                                    //value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Communication address',
                                    name: 'communication',
                                    //value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Is Permanent address is same as communication address',
                                    name: 'check',
                                    //value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Permanent address',
                                    name: 'permanent',
                                    //value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Mobile Number',
                                    name: 'mobile',
                                    //value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Gender',
                                    name: 'gender',
                                    // value: 'Deepak'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Email',
                                    name: 'email',
                                    //   value: 'Deepak'
                                },



                            ]
                        }],
                        showWithData: function (data) {

                            Ext.getCmp('form2').getForm().setValues(data);
                            this.show();
                        }
                    });
                    win.showWithData(temp2.getValues());

                }
            },

            {
                text: 'clear',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            }


        ]
    }]

});