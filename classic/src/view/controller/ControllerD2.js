Ext.define('Myapp.view.controller.ControllerD2', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.binding-Dynamic',

    contentCount: 0,
    titleCount: 0,


    onChangeTitleClick: function () {
        this.getViewModel().set('title', 'New Title' + ++this.titleCount);
    },

    onChangeContentClick: function () {
        this.getViewModel().set('content', 'New Content' + ++this.contentCount);
    }

});