// 引入基本模板
const ECHARTS = require('echarts');

export default function (id = 'special_skill') {
  const myChart = ECHARTS.init(document.getElementById(id));
  myChart.setOption({
    // 标题
    title: {
      // 标题文本
      text: '技能分布图',
      // 标题样式
      textStyle: {
        color: '#fff',
      },
      // 标题位置
      x: 'center',
    },
    // 移动显示
    tooltip: {
      trigger: 'item',
      // 显示文字样式
      formatter: '{a} <br/>{b} : {d}%',
    },
    // 注记
    legend: {
      x: 'center',
      y: 'bottom',
      textStyle: {
        color: '#fff',
      },
      data: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Vue', 'Node', '微信小程序', '其他'],
    },
    // 注记显示手柄
    calculable: true,
    // 图形系列
    series: [
      {
        name: '技能分布',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 20, name: 'HTML5' },
          { value: 20, name: 'CSS3' },
          { value: 30, name: 'JavaScript' },
          { value: 20, name: 'jQuery' },
          { value: 20, name: 'Vue' },
          { value: 10, name: 'Node' },
          { value: 15, name: '微信小程序' },
          { value: 10, name: '其他' },
        ],
      },
    ],
    // 颜色调整
    color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', '#00eeff', '#006eff', '#0099ff', '#0066ff'],
  });
}
