Ext.define('Myapp.view.main.Chart', {
    extend: 'Ext.Panel',
    // requires: ['Ext.chart.CartesianChart'],
    xtype: 'column-basic',
    controller: '',
    width: 650,
    height: 650,


    tbar: [
        '->',
        {
            text: 'Preview',
            PlatformConfig: {
                desktop: {
                    text: 'download'
                }
            },
            handler: 'OnDownload'
        },
        {
            text: 'Reload Data',
            handler: 'onReload'

        }
    ],
    items: {
        xtype: 'cartesian',
        reference: 'chart',
        captions: {
            title: {
                text: 'RedWood city climate data',
                align: 'left'
            }
        },
        // },
        store: {
            type: 'climate'
        },
        downloadServerurl: '//svg.sencha.io',
        interactions: {
            type: 'itemedit',
            tooltip: {
                renderer: 'onEditTipRender'
            },
            renderer: 'onColumnEdit'
        },
        axes: [
            {
                type: 'numeric',
                position: 'left',
                minimum: 30,
                titleMargin: 20,
                title: {
                    text: 'Temp. in fereighn height'
                },
                listeners: {
                    rangechange: 'onAxisRangeChange'
                }
            },
            {
                type: 'category',
                position: 'bottom'

            }
        ],
        animation: Ext.isIE8 ? false : true,
        series: {
            type: 'bar',
            xField: 'month',
            yField: 'highF',
            style: {
                minGapWidth: 20
            },
            heighlight: {
                strokeStyle: 'black',
                fillStyle: 'gold'

            },
            label: {
                field: 'highF',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender',

            }
        },
        listeners: {
            afterrender: 'OnAfterRender',
            beginitemedit: 'OnBeginItemEdit',
            enditemedit: 'onEndItemEdit'
        }
    }
});