<template>
  <div class="midContent">
      <div class="surround">
          <div class="communication" v-for="(item,index) in list" :key="index">
            <div class="zuo">
                <img :src="item.image" alt="">
                <h3>{{item.title}}</h3>
                <p> {{item.content}} </p>
            </div>
            <div class="you">
                <img :src="item.image" alt="">
                <h3>{{item.title}}</h3>
                <p> {{item.content}} </p>
            </div>
          </div>
            <div class="arrow">
                <img src="../images/形状-15.png" alt="" :class="this.flag === true?'anmition':'stopAnmition'"><br>
                <img src="../images/形状-15-拷贝.png" alt="" :class="this.flag === false?'anmition':'stopAnmition'">
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'midContent',
  components: {},
  props: {},
  data() {
    return {
        flag:true,
        timer:null,
        list:[
            {
                image:require('../images/products1.png'),
                title:'DTD434M|西门子、施耐德及ABB等欧美系PLC专用无线通讯',
                content:'无需挖沟布线、与欧美系PLC配套使用直接替代有线RS485网络、无线距离可达3公里！PLC的种类繁多，品牌大多分为欧系、美系、'
            },
            {
                image:require('../images/products2.png'),
                title:'DTD434M|西门子、施耐德及ABB等欧美系PLC专用无线通讯',
                content:'无需挖沟布线、与欧美系PLC配套使用直接替代有线RS485网络、无线距离可达3公里！PLC的种类繁多，品牌大多分为欧系、美系、'
            }
        ]
    }
  },
  watch: {},
  computed: {},
  methods: {
      anmition() {
          this.timer = setInterval(() => {
              this.flag = !this.flag
          },3000)
      }
  },
  created() {},
  mounted() {
      this.anmition()
  }
};
</script>
<style lang="scss" scoped>
.midContent{
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    .surround{
        width: 1000px;
        overflow: hidden;
    margin: 0 auto;
    position: relative;
        .communication{
        float: left;
        width: 50%;
        div{
            text-align: left;
            width: 300px;
            img{
            width: 300px;
            height: 168px;
            }
            p{
            }
        }
    }
    .arrow{
        position: absolute;
        right: 0;
        top: 100px;
        img{
            margin:10px;
        }
        .stopAnmition{
            animation: stop 1s  forwards;
        }
        .anmition{
            animation: identifier 1s  forwards;
        }
        @keyframes identifier {
            from{margin-left: 0;}
            to{
                margin-left: -50px;
            }
            
        }
        @keyframes stop {
            from{margin-left: -50px;}
            to{margin-left: 0;}
        }
    }
    }
}
</style>