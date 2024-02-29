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
            </div>
            <div class="box">2</div>
            <div class="box">3</div>
          </div>
          <div class="r">??</div>
        </div>
        <div class="bottom">222</div>
      </div>
      <div class="right">2</div>
    </div>
  </div>
</template>

<script setup></script>

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
  height: calc(100vh - 68px - 64px - 130px);
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
          height: 30%;
          border-top-left-radius: 30px;
          border-top-right-radius: 3px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 25px;

          .title {
            margin: 10px;
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
        }
      }

      .r {
        flex: 1;
      }
    }

    .bottom {
      height: 20%;
    }
  }

  .right {
    width: 400px;
    background-color: red;
  }
}
</style>
