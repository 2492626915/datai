<template>
  <div class="contentHeader">
    <div class="point"></div>
    <div class="left">
      <div>
        <h2 
        v-for="(item,index) in list" 
        :key="index"
        @mouseenter="visible(index)" @mouseleave="invisible"
        > 
        <span :class="status === item.flag?'bottomBorder':''">{{item.title}}</span>
         </h2>
      </div>
    </div>
    <div class="right">
      <div v-for="(item,index) in list" :key="index" :style="status === item.flag?'display:block':'display:none'">
        <img :src="item.image" alt="">
        <div>
          <h3>
          {{item.contentTiele}}
          </h3>
          <p>
            {{item.content}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'contentHeader',
  components: {},
  props: {},
  data() {
    return {
      status:0,
      timer:null,
      list:[
        {
          title:'工业无线通讯',
          flag:0,
          image:require('../images/products.png'),
          contentTiele:'DTD122FH|双向混合信号无线传输器',
          content:'模拟量和开关量信号同时无线传输、根据用户要求定制，传输距离大于3公里。达泰1系DTD122FHC混合信号无线传输器由一个无线信'
        },
        {
          title:'工业数据信号传输',
          flag:1,
          image:require('../images/products1.png'),
          contentTiele:'DTD122FH|双向混合信号无线传输器',
          content:'123和开关量信号同时无线传输、根据用户要求定制，传输距离大于3公里。达泰1系DTD122FHC混合信号无线传输器由一个无线信'
        },
        {
          title:'水位无线测控',
          flag:2,
          image:require('../images/products2.png'),
          contentTiele:'DTD122FH|双向混合信号无线传输器',
          content:'456和开关量信号同时无线传输、根据用户要求定制，传输距离大于3公里。达泰1系DTD122FHC混合信号无线传输器由一个无线信'
        }
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    executionAnimation() {
      this.timer = setInterval(()=>{
        this.status++
        if(this.status >2){
          this.status = 0
        }
      },5000)
      
    },
    visible(index) {
      console.log(123)
        clearInterval(this.timer)
        this.status = index
    },
    invisible() {
      this.executionAnimation()
    }
  },
  created() {},
  mounted() {
    this.executionAnimation()
  }
};
</script>
<style lang="scss" scoped>
.contentHeader{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .point{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ea5404;
    position:absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .left{
    width: 50%;
    height: 100%;
    float: left;
    border-right: 1px solid #ea5404;
    overflow: hidden;
    padding-bottom: 300px;
    div{
        margin-top: 200px;
      h2{
        text-align: left;
        margin: 30px;
        .bottomBorder{
        border-bottom: 3px solid #ea5404;
        cursor:pointer;
        }
      }
    }
  }
  .right{
    width: 49%;
    float: left;
    text-align: left;
    div{
      img{
        width: 500px;
        height: 300px;
        margin-top: 100px;
      }
      div{
        text-align: left;
        width: 300px;
        margin: 50px 0;
        line-height: 25px;
      }
    }
  }
}
</style>