<template>
  <div class="overview-container">
    <div class="header">SMART &nbsp;&nbsp;&nbsp;&nbsp;CLASSROOM PLATFORM - DASHBOARD</div>

    <div class="content">
      <!-- left -->
      <div class="left">
        <div class="top">
          <div class="l">
            <div class="all-classrooms box">
              <div class="title">
                <img src="../assets/images/overview/地球.png" alt="" class="icon" />
                <div class="text">Energy Consumption for All Classrooms</div>
                <img src="../assets/images/overview/更多.png" alt="" class="more" />
              </div>

              <div class="chart">
                <div class="chart-left">
                  <div class="number">560</div>
                  <div class="desc">
                    <div class="desc-top">Ton CO2e</div>
                    <div class="desc-bottom">Year Total</div>
                  </div>
                </div>
                <div class="chart-right">
                  <div ref="classroomChartRef" style="width: 300px; height: 80px"></div>

                  <div class="right-bottom-box">
                    <div class="days">Last 7 days</div>
                    <div class="percent">23.5 Ton CO2e -1.6%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-classrooms box">
              <div class="title">
                <img src="../assets/images/overview/帮助.png" alt="" class="icon" />
                <div class="text" style="margin-left: -119px">Energy Usage Intensity</div>
                <img src="../assets/images/overview/更多.png" alt="" class="more" />
              </div>

              <div class="chart">
                <div class="chart-left">
                  <div class="number">560</div>
                  <div class="desc">
                    <div class="desc-top">GJ/m2/Year</div>
                    <div class="desc-bottom"></div>
                  </div>
                </div>
                <div class="chart-right">
                  <div ref="IntensityChartRef" style="width: 300px; height: 80px"></div>

                  <div class="right-bottom-box">
                    <div class="days">Last 7 days</div>
                    <div class="percent">12.5 GJ/m²</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-classrooms box">
              <div class="title" style="justify-content: flex-start">
                <img src="../assets/images/overview/双人.png" alt="" class="icon" />
                <div class="text" style="margin-left: 20px">Classroom Occupancy</div>
              </div>

              <div class="chart">
                <div class="chart-left">
                  <div class="number">1252</div>
                  <div class="desc">
                    <div class="desc-top">People / Day</div>
                    <div class="desc-bottom"></div>
                  </div>
                </div>
                <div class="chart-right">
                  <div ref="OccupancyRef" style="width: 300px; height: 80px"></div>

                  <div class="right-bottom-box" style="margin-right: 40px">
                    <div class="days">Last 30 days</div>
                    <div class="percent">1320 people/day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- center -->
          <div class="r">
            <div class="center-chart-box">
              <div class="center-chart">
                <div class="center-header">
                  <div class="header-left">
                    <div class="icon">
                      <img src="../assets/images/overview/帮助.png" style="width: 40px" />
                    </div>
                    <div class="text">Enegy Cosumption and CO2 Emission</div>
                  </div>
                  <div class="header-right">
                    <div class="more">
                      <img src="../assets/images/overview/更多.png" alt="" style="width: 40px" />
                    </div>
                  </div>
                </div>

                <div
                  class="chart"
                  ref="centerChartRef"
                  style="width: 100%; height: calc(100% - 71px)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="header-header">
            <div class="icon">
              <img src="../assets/images/overview/bottom-header.png" alt="" />
            </div>
            <div class="text">Operation Alerts</div>
          </div>

          <div class="list">
            <div class="item" v-for="item in bottomList" :key="item">
              <div class="count">{{ item.count }}</div>
              <div class="center">
                <div class="icon">
                  <img src="../assets/images/overview/list-icon.png" alt="" />
                </div>
                <div class="text">{{ item.text }}</div>
              </div>
              <div class="days">{{ item.days }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <div class="right">
        <div class="right-header">
          <div class="icon">
            <img src="../assets/images/overview/绿叶.png" style="width: 40px" alt="" />
          </div>
          <div class="text">Energy Consumption by Builiding</div>
          <div class="more">
            <img src="../assets/images/overview/更多.png" style="width: 40px" alt="" />
          </div>
        </div>

        <div class="days">Last 30 days</div>

        <div
          class="chart-text"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            margin-bottom: -10px;
          "
        >
          <div class="building">building</div>
          <div class="average" style="color: yellow">Average</div>
          <div class="2000">
            2.000
            <p>Kwh</p>
          </div>
        </div>
        <div ref="buildingChartRef" style="width: 100%; height: 500px"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
  classroomChart()
  IntensityChart()
  Occupancy()
  centerChart()
  buildingChart()
})

const classroomChartRef = ref()
const IntensityChartRef = ref()
const OccupancyRef = ref()
const centerChartRef = ref()
const buildingChartRef = ref()

function classroomChart() {
  // 折线图
  var chart = echarts.init(classroomChartRef.value)
  var option = {
    color: ['#319ae5', '#32df48', '#d067e9', '#fcbc04', '#33373a'],
    // 设置图表的位置
    grid: {
      containLabel: true // grid 区域是否包含坐标轴的刻度标签, 常用于『防止标签溢出』的场景
    },
    // 提示框组件
    tooltip: {
      trigger: 'axis', // 触发类型, axis: 坐标轴触发
      axisPointer: {
        // 指示器类型  'line' 直线指示器 'shadow' 阴影指示器 'none' 无指示器
        // 'cross' 十字准星指示器 其实是种简写，表示启用两个正交的轴的 axisPointer
        type: 'none'
      },
      textStyle: {
        color: '#cdd3ee' // 文字颜色
      },
      // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 折线（区域）图、柱状（条形）图、K线图
      // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
      formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
    },
    // 图例组件
    legend: {
      bottom: -3,
      left: 33,
      itemHeight: 10, // 修改icon图形大小
      itemWidth: 10,
      textStyle: {
        color: '#fff'
      },
      data: ['Electrical', 'Cooling Load'] // 图例的数据数组
    },
    // X轴
    xAxis: {
      type: 'value', // 坐标轴类型,   'value' 数值轴，适用于连续数据
      // 坐标轴刻度
      axisTick: {
        show: false // 是否显示坐标轴刻度 默认显示
      },
      // 坐标轴轴线
      axisLine: {
        // 是否显示坐标轴轴线 默认显示
        show: false // 是否显示坐标轴轴线 默认显示
      },
      // 坐标轴在图表区域中的分隔线
      splitLine: {
        show: false // 是否显示分隔线。默认数值轴显示
      },
      // 坐标轴刻度标签
      axisLabel: {
        show: false // 是否显示刻度标签 默认显示
      }
    },
    yAxis: [
      // 左侧Y轴
      {
        // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
        // 为该类型时必须通过 data 设置类目数据
        type: 'category',
        // 坐标轴刻度
        axisTick: {
          show: false // 是否显示坐标轴刻度 默认显示
        },
        // 坐标轴轴线
        axisLine: {
          // 是否显示坐标轴轴线 默认显示
          show: false, // 是否显示坐标轴轴线 默认显示
          lineStyle: {
            // 坐标轴线线的颜色
            color: '#cdd3ee'
          }
        },
        // 坐标轴在图表区域中的分隔线
        splitLine: {
          show: false // 是否显示分隔线。默认数值轴显示
        },
        // 坐标轴刻度标签
        axisLabel: {
          show: true, // 是否显示刻度标签 默认显示
          fontSize: 16, // 文字的字体大小
          color: '#cdd3ee', // 刻度标签文字的颜色
          // 使用字符串模板，模板变量为刻度默认标签 {value}
          formatter: '{value}'
        },
        // 类目数据，在类目轴（type: 'category'）中有效
        data: ['']
      }
    ],
    // 系列列表
    series: [
      {
        type: 'bar', // 系列类型
        name: 'Electrical', // 系列名称, 用于tooltip的显示, legend 的图例筛选
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        stack: '总量',
        barMaxWidth: 100, // 柱条的最大宽度，不设时自适应
        // 图形上的文本标签
        label: {
          show: true,
          // 标签的位置 left right bottom top inside  // 绝对的像素值 position: [10, 10]
          // 相对的百分比 position: ['50%', '50%']
          position: 'inside'
        },
        data: [350] // 系列中的数据内容数组
      },
      {
        type: 'bar',
        name: 'Cooling Load',
        stack: '总量',
        barMaxWidth: 60,
        label: {
          show: true,
          position: 'inside'
        },
        data: [210]
      }
    ]
  }
  chart.setOption(option)
}

function IntensityChart() {
  var chart = echarts.init(IntensityChartRef.value)
  var option = {
    grid: {
      splitLine: {
        // 分割线样式配置项
        lineStyle: {
          // 分割线样式
          color: '#f00' // 设置为灰色（十六进制表示）
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#233653'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 10
        }
      }
    },
    series: [
      {
        data: [8, 13, 5, 12, 10, 8, 9, 3],
        type: 'line',
        itemStyle: {
          color: '#00fbfc'
        }
      }
    ]
  }
  chart.setOption(option)
}

function Occupancy() {
  // 折线图
  var chart = echarts.init(OccupancyRef.value)
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 10
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 10
        }
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: '#ad9727'
        }
      }
    ]
  }
  chart.setOption(option)
}

function centerChart() {
  const Data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const sjlData = [200, 250, 370, 150, 350, 110, 200, 250]
  const bjlData = [150, 140, 300, 350, 110, 200, 250, 370, 150, 400, 200, 100, 200, 300]
  const balData = [40, 30, 55, 30, 30, 33, 22, 66, 44, 22, 11, 30]
  const bjl2Data = [70, 70, 70, 70, 70, 65, 55, 70, 70, 70, 50, 80]

  var chart = echarts.init(centerChartRef.value)
  var option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(13,5,30,.6)',
      borderWidth: 1,
      borderColor: '#4ddd8f',
      padding: 5,
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      itemWidth: 20,
      itemHeight: 15,
      top: 60,
      left: 40,
      icon: 'rect',
      textStyle: {
        color: '#c7d3e5'
      }
    },
    grid: {
      top: '25%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: Data,
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(199,211,229,0.5)'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(199,211,229,0.5)'
          }
        },
        axisLabel: {
          color: '#c7d3e5'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 500,
        nameTextStyle: {
          color: '#c7d3e5'
        },
        axisLabel: {
          color: '#c7d3e5'
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(199,211,229,0.3)',
            width: 1,
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        scale: true,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(199,211,229,0.3)'
          }
        },
        max: 100,
        min: 0,
        axisLabel: {
          formatter: '{value}%', //右侧以百分比进行展示
          show: true,
          textStyle: {
            color: '#c7d3e5'
          }
        },
        nameTextStyle: {
          color: '#c7d3e5'
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)'
          }
        }
      }
    ],
    series: [
      {
        name: 'Y on Y',
        type: 'bar',
        barWidth: 14,
        data: sjlData,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(11, 160, 255, 1)'
            },
            {
              offset: 1,
              color: 'rgba(11, 160, 255, 0)'
            }
          ])
        }
      },
      {
        name: 'This Year',
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(245, 213, 39, 1)'
            },
            {
              offset: 1,
              color: 'rgba(245, 213, 39, 0)'
            }
          ])
        },
        data: bjlData
      },
      {
        name: 'CO2',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'none',
        data: balData,
        itemStyle: {
          color: '#2DF3E2'
        },
        lineStyle: {
          type: 'dashed', // 可以改为'dotted'以使用点线样式
          width: 3 // 线条宽度
        }
      },
      {
        name: 'Baseline',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'none',
        data: bjl2Data,
        itemStyle: {
          color: '#885DFF'
        },
        lineStyle: {
          type: 'dashed', // 可以改为'dotted'以使用点线样式
          width: 3 // 线条宽度
        }
      }
    ]
  }
  chart.setOption(option)
}

function buildingChart() {
  var chart = echarts.init(buildingChartRef.value)
  var option = {
    xAxis: {
      // type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        fontSize: 8
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      namGap: 50,
      axisTick: {
        show: false
      },
      nameTextStyle: {
        color: '#d890e6'
      },
      axisLine: {
        lineStyle: {
          color: '#00b4a7',
          width: 2 //这里是为了突出显示加上的
        }
      },
      data: [
        'Z',
        'Y',
        'W',
        'VA',
        'VS',
        'V',
        'X',
        'M',
        'TU',
        'ST',
        'RQ',
        'TU',
        'QT',
        'PQ',
        'OP',
        'HJ',
        'GH',
        'FG',
        'FJ',
        'EF',
        'CF',
        'CD',
        'BC',
        'AG'
      ]
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      top: '5%',
      right: '10%',
      bottom: '0%',
      containLabel: true
    },
    series: [
      {
        data: [
          1100, 2200, 1842, 1623, 1254, 3330, 1213, 2363, 1534, 1231, 1245, 336, 3456, 3163, 2432,
          441, 141, 424, 2525, 3124, 545, 2342, 331, 333
        ],
        // name: '1',
        type: 'bar',
        barWidth: '15',
        label: {
          show: false,
          position: 'right',
          color: '#d890e6'
        },
        itemStyle: {
          normal: {
            show: true,
            color: function () {
              return {
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: `#d890e6`
                  },
                  {
                    offset: 1,
                    color: '#62B0E9'
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }

  chart.setOption(option)
}

const bottomList = ref([
  {
    count: 56,
    text: 'Total Alarm',
    days: 'Last 30 days'
  },
  {
    count: 14,
    text: 'Equipment Fault',
    days: 'Last 30 days'
  },
  {
    count: 51,
    text: 'Alarm Resumed',
    days: 'Last 30 days'
  },
  {
    count: 20,
    text: 'Other Alarm',
    days: 'Last 30 days'
  },
  {
    count: 4,
    text: 'System Offline',
    days: 'Last 30 days'
  }
])
</script>

<style lang="scss" scoped>
.header {
  margin-top: 30px;
  background: url(../assets/images/overview/header.png) center center;
  height: 70px;
  line-height: 60px;
  color: #000;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
}

.content {
  display: flex;
  height: calc(100vh - 68px - 64px - 120px);
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    // background-color: green;

    .top {
      display: flex;
      height: 100%;

      .l {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 390px;

        .box {
          background: linear-gradient(to right top, #0086bf, #002564);
          height: 31%;
          border-top-left-radius: 30px;
          border-top-right-radius: 3px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 25px;

          .title {
            margin: 10px 10px 10px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
            }

            .text {
              background-color: #003366;
              padding: 3px;
              box-shadow: 5px 2px 5px 0px rgba(221, 204, 204, 0.75);
              -webkit-box-shadow: 5px 2px 5px 0px rgba(221, 204, 204, 0.75);
              -moz-box-shadow: 5px 2px 5px 0px rgba(221, 204, 204, 0.75);
            }
          }

          .chart {
            display: flex;
            margin: 0 25px;

            .chart-left {
              width: 100px;
              .number {
                font-size: 40px;
                font-weight: bold;
                color: #edeeee;
              }

              .desc {
                margin-top: 5px;
                color: #a4bfda;
                font-weight: bold;
              }
            }

            .chart-right {
              flex: 1;

              .right-bottom-box {
                margin-right: 30px;
                margin-top: 3px;
                display: flex;
                justify-content: flex-end;

                div {
                  background-color: #517087;
                  padding: 7px;
                  border-radius: 5px;
                }

                .days {
                  margin-right: 20px;
                }
              }
            }
          }
        }
      }

      .r {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        // 中间
        .center-chart-box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 800px;
          height: 540px;
          background: url('../assets/images/overview/center-bg.png') no-repeat center center;
          background-size: cover;

          .center-chart {
            width: 750px;
            height: 500px;
            background: linear-gradient(#008e97, #006593, #006571);

            border-top-left-radius: 40px;
            border-bottom-right-radius: 100px;
            .center-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 20px 20px 20px 30px;

              .header-left {
                display: flex;
                align-items: center;

                .icon {
                  margin-right: 20px;
                }

                .text {
                  background-color: #009997;
                  font-size: 25px;
                  font-weight: bold;
                  padding: 6px;
                  box-shadow: 5px 2px 5px 0px rgba(221, 204, 204, 0.85);
                  -webkit-box-shadow: 5px 2px 5px 0px rgba(0, 0, 0, 1);
                  -moz-box-shadow: 5px 2px 5px 0px rgba(221, 204, 204, 0.685);
                }
              }
            }
          }
        }
      }
    }

    .bottom {
      margin-right: 10px;
      height: 27%;
      background: url(../assets/images/overview/left-bottom.png) center center no-repeat;
      background-size: cover;
      .header-header {
        display: flex;
        align-items: center;
        margin: 10px;

        .text {
          padding: 3px 30px 3px 3px;
          box-shadow: 3px 3px 3px 0px rgba(241, 230, 230, 0.75);
          -webkit-box-shadow: 3px 3px 3px 0px rgba(241, 230, 230, 0.75);
          -moz-box-shadow: 5px 5px 5px 0px rgba(241, 230, 230, 0.75);
        }
      }

      .list {
        display: flex;
        padding: 0 20px 5px 20px;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 240px;
          height: 120px;
          background: url('../assets/images/overview/bottom-border.png') no-repeat center center;
          background-size: contain;

          .count {
            font-size: 30px;
            color: yellow;
            font-weight: bold;
          }

          .center {
            display: flex;
            margin: 4px 0;
            .text {
              font-size: 18px;
            }
          }

          .days {
            background-color: #203864;
            padding: 6px 15px;
          }
        }
      }
    }
  }

  .right {
    margin-right: 10px;
    padding: 20px 20px 20px 20px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    .right-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .text {
        margin: 0 0 0 15px;
        font-size: 25px;
        font-weight: bold;
      }
    }

    .days {
      margin: 0 auto;
      margin-top: 20px;
      width: 200px;
      height: 50px;
      background-color: #13517e;
      border-radius: 10px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
    }
    width: 400px;
    background: linear-gradient(to left top, #00a2e2, #002060);
  }
}
</style>
