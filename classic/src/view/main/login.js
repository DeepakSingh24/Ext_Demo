Ext.define('Myapp.view.main.login', {
    extend: 'Ext.form.Panel',
    //xtype: 'form-login',
    alias: 'widget.deepak',
    title: 'Login',
    frame: 'true',
    width: 320,
    bodypadding: 10,
    defaultType: 'textfield',
    items: [
        { allowblank: 'false', fieldLabel: 'User Id', name: 'user', emptyText: 'User Id', msgTarget: 'under' },
        { allowblank: 'false', fieldLabel: 'password', name: 'pass', emptyText: 'password', inputType: 'password' },
        { xtype: 'checkbox', fieldLabel: 'Remember me', name: 'remember' }
    ],
    buttons: [
        { text: 'Register' },
        { text: 'Login' }

    ],


    defaults: {
        anchor: '100%',
        labelWidth: 120
    }


});