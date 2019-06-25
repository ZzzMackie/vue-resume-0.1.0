// 引入基本模板
const echarts = require('echarts/lib/echarts');
// 引用中国地图
require('echarts/map/js/china.js');

export default function (id) {
  const myChart = echarts.init(document.getElementById(id));

  // 排行前五城市
  const myFirendCity = [
    { name: '广州', value: ['113.23', '23.16', '3'] },
    { name: '深圳', value: ['114.07', '22.62', '5'] },
    { name: '成都', value: ['104.07', '30.68', '10'] },
    { name: '哈尔滨', value: ['126.66', '45.77', '4'] },
    { name: '北京', value: ['116.46', '39.92', '12'] },
  ];
  // 好友分布省份
  const myFriendProvince = [
    { name: '山东', value: 1 },
    { name: '四川', value: 1 },
    { name: '广东', value: 21 },
    { name: '广西', value: 1 },
    { name: '北京', value: 12 },
    { name: '甘肃', value: 1 },
    { name: '上海', value: 10 },
    { name: '陕西', value: 4 },
    { name: '湖北', value: 1 },
    { name: '湖南', value: 1 },
    { name: '山西', value: 1 },
    { name: '辽宁', value: 2 },
    { name: '江苏', value: 1 },
    { name: '河北', value: 3 },
    { name: '海南', value: 1 },
    { name: '河南', value: 1 },
  ];

  myChart.setOption({
    // 标题
    title: {
      text: '前端好友分布',
      textStyle: {
        color: '#fff',
      },
      subtext: '微信统计',
      subtextStyle: {
        color: '#fff',
      },
      x: 'center',
    },
    // 移动显示
    tooltip: {
      trigger: 'item',
      // 鼠标移动过去显示
      formatter(params) {
        console.log(params);
        if (params.value[2] === undefined) {
          if (!params.name) {
            return '该地区暂无好友';
          }
          return `${params.name} : ${params.value}`;
        }
        return `${params.name} : ${params.value[2]}`;
      },
    },
    // 左边注记
    visualMap: {
      text: ['', '好友数'],
      min: 0,
      max: 30,
      // 是否能通过手柄显示
      calculable: true,
      inRange: {
        color: ['#e4e004', '#ff5506', '#ff0000'],
      },
      textStyle: {
        color: '#fff',
      },
    },
    // geo
    geo: {
      map: 'china',
    },
    // 数据
    series: [
      // 排行前五城市
      {
        name: '排行前五',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbolSize(val) {
          return val[2] * 2;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true,
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            color: '#ddb926',
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        // 类似于 z-index
        zlevel: 1,
        data: myFirendCity,
      },
      // 好友分布省份
      {
        name: '好友数',
        type: 'map',
        mapType: 'china',
        // 是否允许缩放
        roam: false,
        label: {
          // 显示省份标签
          normal: {
            formatter: myFirendCity,
            show: false,
            textStyle: {
              color: '#fff',
            },
          },
          // 对应的鼠标悬浮效果
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            borderWidth: 0.5, // 区域边框宽度
            borderColor: '#fff', // 区域边框颜色
            areaColor: 'aqua', // 区域颜色
          },
          // 对应的鼠标悬浮效果
          emphasis: {
            borderWidth: 1,
            borderColor: '#fff',
            areaColor: '#00aeff',
          },
        },
        // 数据
        data: myFriendProvince,
      },
    ],
  });
}
