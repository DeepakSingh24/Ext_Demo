
Ext.define('Myapp.view.main.tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'Tree1',
    width: 300,
    height: 400,
    scrollable: true,
    frame: true,
    title: 'Simple Tree Panel',
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                {
                    text: 'detention', leaf: true,
                },
                {
                    text: 'homework', expanded: true,
                    children: [
                        { text: 'book report', leaf: true },
                        { text: 'algebra', leaf: true }
                    ]
                },
                { text: 'buy lottery tickets', leaf: true },
                {
                    text: 'Model', expanded: true,
                    children: [
                        { text: 'APP.js', leaf: true },
                        { text: 'Main.js', leaf: true },
                        { text: 'view.js', leaf: true },
                        { text: 'Controller.js', leaf: true },

                    ]
                },
            ]
        }
    }),

    listeners: {
        'itemclick': function (me, record, item, index, e, eOpts) {
            var treegrid1 = Ext.create({
                xtype: 'treegrid1'
            });
            if (record.data.text === "detention")
                this.up().items.length === 1 ? this.up().add(treegrid1) : false;


        }
    }

});