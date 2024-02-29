<template>
  <div class="layout-container">
    <a-layout>
      <a-layout-sider :style="siderStyle">
        <div class="title">
          <img src="../assets/images/menu-title.png" />
        </div>

        <a-menu
          v-model:selectedKeys="selectedKeys"
          style="width: 256px"
          mode="inline"
          :items="items"
          @click="handleClick"
        />
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="headerStyle">
          <div class="header-box">
            <div class="person">
              <img src="../assets/images/person.png" />
            </div>
            <div class="weather">
              <div class="left">
                <div class="city">Hong Kong</div>
                <div class="weather-number">6 ℃ ~ 15 ℃</div>
                <img src="../assets/images/weather.png" class="icon" height="30px" />
              </div>
              <div class="right">SIEMENS</div>
            </div>
          </div>
        </a-layout-header>
        <a-layout-content :style="contentStyle">
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import { ReadOutlined, PicLeftOutlined, HomeOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const defaultPath = localStorage.getItem('menuPath') || 'overview'

const selectedKeys = ref([defaultPath])
const items = ref([
  {
    key: 'overview',
    icon: () => h(HomeOutlined),
    label: 'Overview',
    title: 'Overview'
  },
  {
    key: 'classrooms',
    icon: () => h(PicLeftOutlined),
    label: 'Classrooms',
    title: 'Classrooms'
  },
  {
    key: 'operation',
    icon: () => h(ReadOutlined),
    label: 'Operation',
    title: 'Operation'
  }
])

const handleClick = (item) => {
  const path = item.item.title.toLowerCase()
  localStorage.setItem('menuPath', path)
  router.push(path)
}

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#009999'
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#009999'
}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-layout.ant-layout-has-sider {
  height: 100%;
}

.ant-layout-sider {
  background: url(../assets/images/1.png) !important;
  background-size: cover;
  min-width: 300px !important;

  .title {
    margin: 37px 0 10px 0;
    img {
      width: 300px;
      height: 60px;
    }
  }
}

.ant-layout-header {
  height: 130px;
  padding-inline-start: 10px;
  padding-inline-end: 0px;

  .header-box {
    .person {
      padding-right: 20px;
      text-align: right;
    }
    .weather {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      height: 64px;
      background-color: #fff;
      .left {
        display: flex;
        align-items: center;
        .city {
          font-size: 30px;
          font-weight: bold;
        }

        .weather-number {
          margin-right: 20px;
          margin-left: 40px;
          font-size: 25px;
          font-weight: bold;
          color: #00b0f0;
        }
      }

      .right {
        color: #008080;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}

.ant-layout-content {
  text-align: unset !important;
  padding-left: 10px;
  line-height: unset !important;
}

.ant-menu {
  width: 100% !important;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light {
  background: unset;
}

:deep(.ant-menu-title-content) {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: start;
  margin-left: 20px !important;
}

:deep(.ant-menu-item-selected) {
  background-color: rgba(169, 209, 142, 0.5) !important;
}

:deep(.ant-menu-item-icon) {
  color: #fff !important;
  font-size: 25px !important;
}
</style>
