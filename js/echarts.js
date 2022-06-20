const chartDom = document.getElementById('echarts');
const myChart = echarts.init(chartDom);
let option;
let data = [{
    value:21,
}, {
    value:70,
}, {
    value:142,
}]
let beforeArr = []
option = {
    // 设置图表标题
    title: {
        text: '标题',
        show: true,
        left: "center",
        subtextStyle: {
            align: 'center'
        }
    },
    //设置图表X轴数据
    xAxis: {
        zlevel:9,
        type: 'category',
        data: ['2017年', '2018年', '计划2019年'],
        axisPointer: {
            type: 'shadow'
        }
    },
    //设置网格和整体显示大小
    grid: {
        show: false
    },
    //设置Y轴数据
    yAxis: [
        {
            z:8,
            type: 'value',
            axisLabel: {
                formatter: '{value}',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#B03A5B',
                },
            }
        },
        {
            type: 'value',
            show: false,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    //设置图表显示[柱状图，折线图，等等]
    series: [
        {
            name: 'Precipitation',
            data: data,
            type: 'bar',
            barMaxWidth:50,
            itemStyle: {
                color: '#A1B9D3'
            },
            label: {
                // 柱图头部显示值
                show: true,
                position: 'top',
                color: '#333',
                fontSize: '12px',
                formatter: (params) => {
                    return params.value + '亿元';
                }
            }
        }, 
        {
            // 分隔
            name: 'Evaporation',
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#fff"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin:14,
            symbol: "rect",
            symbolClip: true,
            symbolSize: ['100%', 1],
            symbolOffset: [0, 0],
            symbolBoundingData: this.total,
            data: data,
            width: 25,
            z: 0,
            zlevel: 1,
        },
        {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'circle',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            data: data,
            lineStyle: {
                color: '#969EA7',
                width: 2,
                type: 'dashed',
            },
            itemStyle: {
                color: '#969EA7',
            },
            label: {
                show: true,
                position: 'top',
                color: '#333',
                offset: [-30, -20],
                fontSize: '12px',
                formatter: (params) => {
                    beforeArr.push(params.value) 
                    if(params.dataIndex===0){
                        return ''
                    }
                    return '增长率：' + ((params.value-beforeArr[params.dataIndex-1])/beforeArr[params.dataIndex-1]).toFixed(2) + '%';
                }
            }

        }

    ]
};
option && myChart.setOption(option);