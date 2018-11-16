Ext.define('Myapp.view.controller.ThreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threepin',


    UnhideButton: function () {
        Ext.getCmp('btn2').enable();
    },



    POPUP: function () {
        Ext.getCmp('downform').show();

    },

    DataSearch: function () {
        var searchvalue = Ext.getCmp('txt1').value;
        Ext.getStore('threestore').filter('name', searchvalue);
    },


    DataReset: function () {
        Ext.getStore('threestore').clearFilter();

    },

    formClick: function () {
        debugger

        var v = Ext.getCmp('downform').getForm().getValues();
        // console.log(v);
        Ext.getStore('threestore').add(v);
    },
    formReset: function () {
        Ext.getCmp('downform').getForm().reset();

    },
    multifilter: function () {
        debugger
        var searchvalue1 = Ext.getCmp('txt1').value;
        var searchvalue2 = Ext.getCmp('txt2').value;

        var store = Ext.getStore('threestore');
        store.filterBy(function (record) {
            return record.data.name == searchValue1 && record.data.address == searchValue2;
        });
    }

});