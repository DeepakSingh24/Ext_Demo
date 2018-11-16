Ext.define('Myapp.view.controller.CalcController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.calculate',

    clickBtn: function (bid, _this) {
        // debugger
        var v = bid.getText();
        var currentval = Ext.getCmp('text').getValue();
        v = currentval + v;
        Ext.getCmp('text').setValue(v);
    },

    clearBtn: function () {
        let v = Ext.getCmp('text').getValue();
        var newResult = v.substr(0, v.length - 1);
        Ext.getCmp('text').setValue(newResult)
    },

    evaluateExp: function () {
        // debugger

        let v = Ext.getCmp('text').getValue();
        var ar = v.split(/([+*\/-])/g);
        for (i = 0; i <= ar.length; i++) {
            cItem = ar[i];
            if (cItem == '/') {
                var tLeft = parseFloat(ar[i - 1]),
                    tRight = parseFloat(ar[i + 1]),

                    nVal = tLeft / tRight;
                ar[i - 1] = nVal;
                ar.splice(i, 2);
                i = ar.length;
                console.log(nVal);
            }
        }


        for (i = 0; i <= ar.length; i++) {
            cItem = ar[i];
            if (cItem == '*') {
                var tLeft = parseFloat(ar[i - 1]);
                var tRight = parseFloat(ar[i + 1]);

                var nVal = tLeft * tRight;
                ar[i - 1] = nVal;
                ar.splice(i, 2);
                i = ar.length;

                console.log(nVal);
            }
        }

        var tResult = parseFloat(ar[0]);
        for (i = 1; i <= ar.length; i++) {
            if (ar[i] == '+') {
                tResult = tResult + parseFloat(ar[i + 1]);
            } else if (ar[i] == '-') {
                tResult = tResult - parseFloat(ar[i + 1]);
            }
            i++;
        }
        console.log(tResult);
        Ext.getCmp('text').setValue(tResult);
    },
    calcResult: function () {
        let v = Ext.getCmp('text').getValue();
        var c = eval(v);
        Ext.getCmp('text').setValue(c)
    },

});

