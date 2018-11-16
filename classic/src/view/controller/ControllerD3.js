Ext.define('Myapp.view.controller.ControllerD3', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bindingtoway',



    onTitleButtonClick: function () {
        var title = 'Title' + Ext.Number.randomInt(1, 100);
        this.getViewModel().set('title', title);

    }
});