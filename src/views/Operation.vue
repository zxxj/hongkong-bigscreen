<template>
  <div class="operation-container">
    <div class="left">
      <div class="bg">
        <div class="level-1-bg">
          <img src="../assets/images/operation/left-bg.png" alt="" />
        </div>
        <div class="level-2-bg">
          <img src="../assets/images/operation/left-bg-level2.png" alt="" />

          <div class="header">
            <div
              class="item"
              :class="leftDefalutMenuIndex === index ? 'leftMenuActive' : 'item'"
              v-for="(item, index) in leftMenuList"
              :key="item"
              @click="handleLeftMenu(index)"
            >
              {{ item }}
            </div>
          </div>

          <div class="line">
            <img src="../assets/images/operation/left-line.png" alt="" />
          </div>
          <div class="floor">
            <div class="message">Campus Map</div>
            <img src="../assets/images/operation/left-floor.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="bg">
        <div class="level-1-bg">
          <img src="../assets/images/operation/right-bg.png" alt="" />
        </div>
        <div class="level-2-bg">
          <img src="../assets/images/operation/right-bg-level2.png" alt="" />

          <div class="header">
            <div
              class="item"
              :class="rightDefalutMenuIndex === index ? 'leftMenuActive' : 'item'"
              v-for="(item, index) in rightMenuList"
              :key="item"
              @click="handleRightMenu(index)"
            >
              {{ item }}
            </div>
          </div>

          <div class="line">
            <img style="width: 80%" src="../assets/images/operation/right-line.png" alt="" />
          </div>

          <div class="floor">
            <img src="../assets/images/operation/img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftMenuList = ref(['1/F', '2/F', '3/F', '4/F', '5/F', '6/F'])
const leftDefalutMenuIndex = ref(2)

const rightMenuList = ref(['CD3001', 'CD3002', 'CD3003', 'CD3004'])
const rightDefalutMenuIndex = ref(2)

const handleLeftMenu = (index) => {
  leftDefalutMenuIndex.value = index
}

const handleRightMenu = (index) => {
  rightDefalutMenuIndex.value = index
}
</script>

<style lang="scss" scoped>
.operation-container {
  display: flex;
  height: 100%;

  .left,
  .right {
    width: 60%;
    height: 100%;

    .bg {
      position: relative;
      width: 100%;
      height: 100%;
      .level-1-bg {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 900px;
        height: 700px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .level-2-bg {
        width: 900px;
        height: 700px;
        position: absolute;
        bottom: 0;
        top: -30px;
        left: 0;
        right: 0;
        margin: auto;
        transform: translateX(-20px);
        img {
          width: 100%;
          height: 100%;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 20px;
          left: -100px;
          right: 0;
          height: 80px;

          .item {
            transition: all 0.3s;
            cursor: pointer;
            width: 100px;
            height: 30px;
            background-color: #808080;
            margin: 0 10px;
            border-radius: 20px;
            text-align: center;
            line-height: 26px;
            border: 2px solid #67ffff;
            font-weight: bold;
          }
        }

        .line {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          margin: auto;
          width: 80%;
        }

        .floor {
          position: absolute;
          top: 110px;
          left: 0;
          right: 0;
          margin: auto;
          width: 800px;
          height: 500px;

          .message {
            position: absolute;
            top: -10px;
            color: #1f4e79;
            left: 0;
            right: 0;
            margin: auto;
            width: 180px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            background-color: #9dc3e6;
          }
        }
      }
    }
  }

  .right {
    width: 38%;

    .bg {
      position: relative;
      width: 100%;
      height: 100%;
      .level-1-bg {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 600px;
        height: 700px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .level-2-bg {
        width: 580px;
        height: 700px;
        position: absolute;
        bottom: 0;
        top: -30px;
        left: 0;
        right: 0;
        margin: auto;
        transform: translateX(-20px);
        img {
          width: 100%;
          height: 100%;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 20px;
          left: -100px;
          right: 0;
          height: 80px;

          .item {
            transition: all 0.3s;
            cursor: pointer;
            width: 80px;
            height: 30px;
            background-color: #808080;
            margin: 0 10px;
            border-radius: 10px;
            text-align: center;
            line-height: 26px;
            border: 2px solid #67ffff;
            font-weight: bold;
          }
        }

        .line {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          margin: auto;
          width: 90%;
        }

        .floor {
          position: absolute;
          top: 110px;
          left: 0;
          right: 0;
          margin: auto;
          width: 500px;
          height: 500px;

          .message {
            position: absolute;
            top: -10px;
            color: #1f4e79;
            left: 0;
            right: 0;
            margin: auto;
            width: 180px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            background-color: #9dc3e6;
          }
        }
      }
    }
  }
}

.leftMenuActive {
  background-color: #ff00ff !important;
}
</style>
