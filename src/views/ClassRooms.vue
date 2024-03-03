<template>
  <div class="classrooms-container">
    <div class="top">
      <div class="item">
        <div class="header">
          <div class="left">
            <div class="icon">
              <img src="../assets/images/overview/绿叶.png" alt="" />
            </div>
            <div class="text">Energy Use per Room</div>
            <div class="days">Last week</div>
          </div>
          <div class="more">
            <img src="../assets/images/overview/更多.png" alt="" />
          </div>
        </div>

        <div class="chart-content">
          <div
            class="chart"
            ref="energyChartRef"
            style="width: 250px; height: 270px; margin-left: -30px"
          ></div>
          <div class="info">
            <div class="count">211</div>
            <div class="desc">
              <div class="t">kWh</div>
              <div class="b">Average</div>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="header">
          <div class="left">
            <div class="icon">
              <img src="../assets/images/overview/双人2.png" alt="" />
            </div>
            <div class="text">Ocuupancy per Room</div>
            <div class="days">Dally</div>
          </div>
          <div class="more">
            <img src="../assets/images/overview/更多.png" alt="" />
          </div>
        </div>

        <div class="chart-content">
          <div
            class="chart"
            ref="ocuupancyChartRef"
            style="width: 250px; height: 270px; margin-left: -30px"
          ></div>
          <div class="info">
            <div class="count">
              32
              <div class="sub">ppl</div>
            </div>
            <div class="desc">
              <div class="t">In Room</div>
              <div class="b">People</div>
              <div class="b">Average</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="left">
            <div class="icon">
              <img src="../assets/images/overview/温度计.png" alt="" />
            </div>
            <div class="text">Room Temperature</div>
            <div class="days">Dally</div>
          </div>
          <div class="more">
            <img src="../assets/images/overview/更多.png" alt="" />
          </div>
        </div>

        <div class="chart-content">
          <div class="chart" ref="temperatureRef" style="height: 250px"></div>
          <div class="info">
            <div class="count">24.3</div>
            <div class="desc">
              <div class="t">Room</div>
              <div class="b">Temperature</div>
              <div class="b">Average</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="left">
            <div class="icon">
              <img src="../assets/images/overview/地球.png" alt="" />
            </div>
            <div class="text">Room CO2</div>
            <div class="days">Dally</div>
          </div>
          <div class="more">
            <img src="../assets/images/overview/更多.png" alt="" />
          </div>
        </div>

        <div class="chart-content">
          <div class="chart" ref="CO2Ref" style="width: 10px; height: 250px"></div>
          <div class="info">
            <div class="count">
              322
              <div class="sub">ppm</div>
            </div>
            <div class="desc">
              <div class="t">CO2</div>
              <div class="b">Average</div>
              <div class="b">Room Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="menu">
          <div
            class="item"
            :class="defalutMenuIndex === index ? 'active' : 'item'"
            v-for="(item, index) in floorMenuList"
            :key="item"
            @click="handleMenu(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="floor">
          <img src="../assets/images/classroom/floor.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="menu">
          <div
            class="item"
            :class="defalutRoomMenuIndex === index ? 'active' : 'item'"
            v-for="(item, index) in roomMenuList"
            :key="item"
            @click="handleRoomMenu(index)"
          >
            {{ item }}
          </div>
        </div>

        <div class="subMenu">
          <div
            class="subItem"
            :class="defalutSubMenuIndex === index ? 'subMenuActive' : 'subItem'"
            v-for="(item, index) in roomSubMenuList"
            :key="item"
            @click="handleSubMenu(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="floor">
          <img src="../assets/images/classroom/room.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  energyChart()
  ocuupancyChart()
  temperatureChart()
  CO2Chart()
})

const energyChartRef = ref()
const ocuupancyChartRef = ref()
const temperatureRef = ref()
const CO2Ref = ref()

// 左菜单
const floorMenuList = ref(['1/F', '2/F', '3/F', '4/F', '5/F', '6/F'])
const defalutMenuIndex = ref(2)

// 右边菜单
const roomMenuList = ref(['CD301', 'CD302', 'CD303', 'CD304'])
const defalutRoomMenuIndex = ref(2)

// 右边子菜单
const roomSubMenuList = ref(['TEMPERATUR', 'IAQ', 'PAU', 'VAV'])
const defalutSubMenuIndex = ref(0)

const handleMenu = (index) => {
  defalutMenuIndex.value = index
}

const handleRoomMenu = (index) => {
  defalutRoomMenuIndex.value = index
}

const handleSubMenu = (index) => {
  defalutSubMenuIndex.value = index
}

function energyChart() {
  // 折线图
  var chart = echarts.init(energyChartRef.value)

  let label = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let value = [0, 33, 300, 44, 100, 200, 0]

  var option = {
    grid: {
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255,255,255,0)' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(255,255,255,1)' // 100% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(255,255,255,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          fontSize: 14,
          textStyle: {
            color: '#6196c7'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#1e314a'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#1e314a'
          }
        },
        axisTick: {
          show: false
        },
        data: label
      }
    ],
    yAxis: [
      {
        interval: 100,
        name: 'kWh',
        boundaryGap: false,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#4685c2'
          }
        },
        nameTextStyle: {
          color: '#4685c2',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: '#4685c2'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#4685c2'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        itemStyle: {
          color: '#ff8e2e',
          borderColor: '#4685c2'
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#ffccff'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#ffccff'
                },
                {
                  offset: 0.8,
                  color: '#ffccff'
                }
              ],
              false
            )
          }
        },
        data: value
      }
    ]
  }

  chart.setOption(option)
}

function ocuupancyChart() {
  // 折线图
  var chart = echarts.init(ocuupancyChartRef.value)

  let label = ['0600', '0800', '1000', '1200', '1400', '1600', '1800']
  let value = [0, 33, 300, 44, 100, 200, 0]

  var option = {
    grid: {
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255,255,255,0)' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(255,255,255,1)' // 100% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(255,255,255,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          fontSize: 14,
          textStyle: {
            color: '#6196c7'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#1e314a'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#1e314a'
          }
        },
        axisTick: {
          show: false
        },
        data: label
      }
    ],
    yAxis: [
      {
        interval: 100,
        name: 'ppl',
        boundaryGap: false,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#4685c2'
          }
        },
        nameTextStyle: {
          color: '#4685c2',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: '#4685c2'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#4685c2'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '1',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        itemStyle: {
          color: '#ff8e2e',
          borderColor: '#4685c2'
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#c8eea0'
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#c8eea0'
                },
                {
                  offset: 0.8,
                  color: '#c8eea0'
                }
              ],
              false
            )
          }
        },
        data: value
      }
    ]
  }

  chart.setOption(option)
}

function temperatureChart() {
  var chart = echarts.init(temperatureRef.value)
  var option = {
    grid: {
      splitLine: {
        // 分割线样式配置项
        lineStyle: {
          // 分割线样式
          color: '#1e314a' // 设置为灰色（十六进制表示）
        }
      }
    },
    xAxis: {
      splitLine: {
        show: false,
        lineStyle: {
          color: '#377bbd'
        }
      },
      axisTick: {
        show: false
      },
      type: 'category',
      data: ['0600', '0800', '1000', '1200', '1400', '1600', '1800'],
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: '#377bbd',
          fontSize: 12
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#377bbd',
          fontSize: 13
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

function CO2Chart() {
  var chart = echarts.init(CO2Ref.value)
  var option = {
    grid: {
      splitLine: {
        // 分割线样式配置项
        lineStyle: {
          // 分割线样式
          color: '#1e314a' // 设置为灰色（十六进制表示）
        }
      }
    },
    xAxis: {
      splitLine: {
        show: false,
        lineStyle: {
          color: '#377bbd'
        }
      },
      axisTick: {
        show: false
      },
      type: 'category',
      data: ['0600', '0800', '1000', '1200', '1400', '1600', '1800'],
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: '#377bbd',
          fontSize: 12
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#377bbd',
          fontSize: 13
        }
      }
    },
    series: [
      {
        data: [8, 13, 5, 12, 10, 8, 9, 3],
        type: 'line',
        itemStyle: {
          color: '#cf3727'
        }
      }
    ]
  }
  chart.setOption(option)
}
</script>

<style lang="scss" scoped>
.classrooms-container {
  height: 100%;
  background-color: #f2f2f2;
  overflow: hidden;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 10px;
    height: 30%;

    .item {
      padding: 10px;
      width: 390px;
      height: 250px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -webkit-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          align-items: center;
          .text {
            margin-left: 5px;
            color: #116f6f;
            padding: 5px 10px 5px 5px;
            font-size: 15px;
            font-weight: bold;
            background-color: #f2f2f2;
            border-radius: 3px;
          }

          .days {
            border-radius: 3px;
            padding: 5px 10px 5px 5px;
            margin-left: 8px;
            background-color: #e4e7ee;
            color: #31d0aa;
            font-weight: bold;
          }
        }

        img {
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }

      .chart-content {
        overflow: hidden;
        display: flex;
        // background-color: red;
        height: 100%;

        .chart {
          flex: 1;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90px;

          .count {
            display: flex;
            align-items: center;
            font-size: 30px;
            font-weight: bold;
            color: #000;

            .sub {
              margin-top: 20px;
              font-size: 14px;
            }
          }

          .desc {
            margin-top: 10px;
            color: #147bc2;
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
    }
  }

  .bottom {
    margin: 20px 10px 0;
    display: flex;
    justify-content: space-between;
    // background-color: green;
    height: 65%;

    .left {
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      background-color: #fff;
      width: 59%;
      box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -webkit-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      .menu {
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        border-bottom: 3px solid #d9d9d9;
        background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

        .item {
          cursor: pointer;
          transition: all 0.3s;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 25px;
          margin: 0 10px;
          border-radius: 30px;
          font-weight: bold;
          color: #fff;
          background-color: #808080;
          border: 2px solid #66fefe;
        }
      }

      .floor {
        display: flex;
        justify-content: center;
        height: calc(100% - 100px);
        img {
          width: 90%;
          height: 90%;
        }
      }
    }

    .right {
      background-color: pink;
      width: 39%;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
      background-color: #fff;
      box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -webkit-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(80, 74, 74, 0.75);
      .menu {
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        border-bottom: 3px solid #d9d9d9;
        background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

        .item {
          cursor: pointer;
          transition: all 0.3s;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 25px;
          margin: 0 10px;
          border-radius: 30px;
          font-weight: bold;
          color: #fff;
          background-color: #808080;
          border: 2px solid #66fefe;
        }
      }

      .subMenu {
        display: flex;
        justify-content: center;
        .subItem {
          transition: all 0.4;
          cursor: pointer;
          color: #7f7f7f;
          text-align: center;
          margin: 20px;
          width: 18%;
          height: 30px;
          line-height: 30px;
          background-color: #f2f2f2;
        }
      }

      .floor {
        display: flex;
        justify-content: center;
        height: calc(100% - 100px);
        img {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
}

.active {
  background-color: #ff00ff !important;
}

.subMenuActive {
  background-color: #2e75b6 !important;
  color: #fff !important;
}
</style>
