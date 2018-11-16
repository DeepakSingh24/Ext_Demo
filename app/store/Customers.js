Ext.define('Myapp.store.Customers', {
    extend: 'Ext.data.Store',
    alias: 'store.customert',
    model: 'Myapp.view.model.Customer',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/classic/src/view/serverSide/Customer.json',
        reader: {
            type: 'json',
            rootProperty: 'records',
        }
    }


});