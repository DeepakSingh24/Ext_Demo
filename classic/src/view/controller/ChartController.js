Ext.define('Myapp.view.controller.ChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-basic',

    onDownload: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported operation', 'This operation requires new version of internet explorer');
            return;
        }

        var chart = this.lookup('chart');
        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'RedWood city climate data chart'
            });
        }

        else {
            chart.preview();
        }
    },
    onReloadData: function () {
        var chart = this.lookup('chart');
        chart.getStore().refreshData();
    },

    //The 'target' here is an object which contains information about the target value when the drag operation on the column ends

    onEditTipRender: function (tooltip, item, target, e) {
        tooltip.setHtml('Temperature °F:' + target.yValue.toFixed(1));
    },
    onSeriesLabelRender: function (value) {
        return value.toFixed(1);

    },

    onColumnEdit: function (chart, data) {
        var threshold = 65,
            delta = 20,
            yValue = data.target.yValue,
            coldness;



        if (yValue < threshold) {
            coldness = Ext.Number.constrain((threshold - yValue) / delta, 0, 1);
            return {
                fillStyle: 'rgba(133,231,252, ' + coldness.toString() + ')'
            };

        }
        else {
            return {
                fillStyle: 'none'
            };
        }
    },
    onAfterRender: function () {
        var me = this,
            chart = this.lookup('chart');
        axis = chart.getAxis(0);
    }

});