<template>
  <div class="cooperation">
      <div class="w">
          <h3>合作流程</h3>
      <p>沟通需求——产品选型——方案设计——确认方案——签订合同——产品、图纸等技术文件交付——售后一对一指导安装调试——定期回访</p>
      <ul>
          <li v-for="(item,index) in list" :key="index" @mouseenter="changeFlag(index)"   :class="flag >= index?'open':''||flag<=index?'close':''">
              <div class="serialNumber" :style="flag === index?'background:#ea5504;':''"> 0{{index+1}} </div>
              <div class="step"> {{item}} </div>
          </li>
      </ul>
      <button>获取免费方案</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'cooperation',
  components: {},
  props: {},
  data() {
    return {
        flag:4,
        list:[
            '沟通需求','产品选型','方案设计','确认方案','签订合同','产品、图纸等技术文件交付','售后一对一指导安装调试','定期回访'
        ]
    };
  },
  watch: {},
  computed: {},
  methods: {
      changeFlag(index) {
          this.flag = index
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
 .open{
    animation: first 1s forwards;
 }
 .close{
animation: sender 1s forwards;
 }
 @keyframes first{
     from{left:0px;}
     to{left: -90px;}
 }
 @keyframes sender{
     from{left:-90px;}
     to{left: 0px;}
 }
.cooperation{
    border-bottom: 3px solid #ea5504;
    .w{
     width: 1200px;
     margin: 0 auto;
      h3{

    }
    p{

    }
    button{
        background: #ea5504;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        margin-bottom: 30px;
    }
    ul{
        overflow: hidden;
        width: 1000px;
        margin: 20px 0 20px 110px;
        padding-left: 250px;
        li{
            float: left;
            width: 200px;
            height: 65px;
            line-height: 65px;
            border-radius: 30px;
            background: #ffffff;
            margin-left: -100px;
            box-shadow: 0px 2px 3px #fad5c0;
            margin-bottom:5px ;
            position: relative;
            .serialNumber{
                float: left;
                width: 45px;
                height: 45px;
                margin: 10px;
                line-height: 45px;
                background: #ffe6d8;
                font-size: 16px;
                border-radius: 50%;
            }
            .step{
                float: left;
                width: 100px;
                cursor: pointer;
            }
        }
    }
 }
   
}
</style>