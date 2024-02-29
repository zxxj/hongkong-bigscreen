<template>
  <div class="overview-container">
    <div class="header">SMART &nbsp;&nbsp;&nbsp;&nbsp;CLASSROOM PLATFORM - DASHBOARD</div>

    <div class="content">
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
                <img src="../assets/images/overview/地球.png" alt="" class="icon" />
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
                <img src="../assets/images/overview/地球.png" alt="" class="icon" />
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
          <div class="r">??</div>
        </div>
        <div class="bottom">222</div>
      </div>
      <div class="right">2</div>
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
})

const classroomChartRef = ref()
const IntensityChartRef = ref()
const OccupancyRef = ref()
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
    background-color: green;

    .top {
      display: flex;
      height: 100%;

      .l {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 400px;

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
                margin-right: 20px;
                margin-top: 10px;
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
      }
    }

    .bottom {
      height: 25%;
      background: url(../assets/images/overview/left-bottom.png) center center no-repeat;
      background-size: cover;
    }
  }

  .right {
    width: 400px;
    background-color: red;
  }
}
</style>
