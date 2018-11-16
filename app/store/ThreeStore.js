Ext.define('Myapp.store.ThreeStore', {
    extend: 'Ext.data.Store',
    alias: 'store.threegrid1',
    storeId: 'threestore',


    fields: [
        'name', 'adress', 'gender', 'dob', 'email', 'domain'
    ],

    data: {
        items: [
            { name: 'Deepak', address: 'Bangalore', gender: 'male', dob: '13-11-1994', email: 'deepaksinghlive@gmail.com', domain: 'Yahoo' },
            { name: 'Rahul', address: 'Bangalore', gender: 'male', dob: '06-07-1997', email: 'rahul@gmail.com', domain: 'Google' },
            { name: 'Pawan', address: 'Bangalore', gender: 'male', dob: '23-08-1995', email: 'pawan@gmail.com', domain: 'MSN' },
            { name: 'Suresh', address: 'Bangalore', gender: 'male', dob: '17-09-1999', email: 'ramesh@gmail.com', domain: 'Yahoo' },
            { name: 'Subham', address: 'Bangalore', gender: 'male', dob: '29-12-1995', email: 'subham@gmail.com', domain: 'yahoo' },
            { name: 'Shivam', address: 'Bangalore', gender: 'male', dob: '12-01-1991', email: 'shivam@gmail.com', domain: 'yahoo' },
            { name: 'Suresh', address: 'Bangalore', gender: 'male', dob: '17-09-1999', email: 'ramesh@gmail.com', domain: 'Yahoo' },
            { name: 'Subham', address: 'Bangalore', gender: 'male', dob: '29-12-1995', email: 'subham@gmail.com', domain: 'yahoo' },
            { name: 'Shivam', address: 'Bangalore', gender: 'male', dob: '12-01-1991', email: 'shivam@gmail.com', domain: 'yahoo' },
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