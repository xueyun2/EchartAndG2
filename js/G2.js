const data = [
  { type: '2017年', value: 40, percent: 0.02 },
  { type: '2018年', value: 80, percent: 0.02 },
  { type: '2019年', value: 122, percent: 0.2 },
];
const chart = new G2.Chart({
  container: 'container',
  autoFit: false,
  width:600,
  height: 500,
  padding: [100, 100, 100, 100],
});
chart.data(data);
chart.scale('value', {
  alias: '销售额(万)',
});

chart.axis('type', {
  tickLine: {
    alignTick: false,
  },
});

chart.tooltip({
  showMarkers: false,
});
chart.interval().position('type*value').style({
    fill:'p(a)../img/22.png'
    // fill:'#A1B9D3'
});
chart.line().position('type*value').style({
    stroke:'#6B7581',
    lineDash: [4, 4]
});
chart.axis('value', {
    grid:{
        line:{
            style:{
                stroke:'#fff',
                zIndex:8888
            }
        }
    }
});
chart.interaction('element-active');
// 添加文本标注
data.forEach((item) => {
  chart
    .annotation()
    .text({
      position: [item.type, item.value],
      content: item.value+'亿元',
      style: {
        textAlign: 'center',
      },
      offsetY: -20,
    })
    .text({
      position: [item.type, item.value],
      content:'销售比例：'+ (item.percent * 100).toFixed(0) + '%',
      style: {
        textAlign: 'center',
      },
      offsetY: -35,
      offsetX:-80
    });
});
chart.render();
