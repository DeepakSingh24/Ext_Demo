Ext.define('Myapp.store.Two', {
    extend: 'Ext.data.Store',
    alias: 'store.three',
    fields: ['id', 'name', 'phone', 'website'],

    data: {
        items: [
            { id: 45325, name: 'lukas', phone: '45327832672345', website: 'www.google.com' },
            { id: 213, name: 'Tamas', phone: '45327832672345', website: 'www.msn.com' },
            { id: 9786, name: 'Flintroff', phone: '4567898767367', website: 'www.Alibaba.com' },
            { id: 6789, name: 'Peter', phone: '4532563899832267', website: 'www.yahoo.com' }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }



});