<template>
  <div class="characteristic">
      <div :class="item.listClass" class="four" v-for="(item,index) in list">
          <div>
              <span>{{item.content}}</span>
          </div>
      </div>
      <img src="../images/ellipse.png" alt="">
      <div class="circular"></div>
      <div class="content">
          <div>
              <span>二十年，只专注</span>
              <h2>工业无线测控</h2>
          </div>
          <p>自主研发无线通讯和数据信号传输的智能化终端产品</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'characteristic',
  components: {},
  data() {
    return {
        list:[
            {
                content: '可靠',
                listClass:'ellipse1'
            },
            {
                content: '简单',
                listClass:'ellipse2'
            },{
                content: '高效',
                listClass:'ellipse3'
            }
           
        ]
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.characteristic{
    width: 1550px;
    min-width: 1200px;
    position: relative;
    height: 500px; 
    margin: 20px auto 0; 
    img{
        position: absolute;
        top: 32px;
        left: 35%;
    }
    .circular{
        position: absolute;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background: #ea5404;
        left: 50%;
        top: 185px;
        transform:translateX(-50%)
    }
    .four{
        position:absolute;
        width: 90px;
        height: 90px;
        border:1px dashed  #f2aa83;
        border-radius: 50%;
        div{
            width: 80px;
            height: 54px;
            border: 1px solid #ec651d;
            border-radius: 50%;
            margin: 4px 0 0 4px;
            font-size: 20px;
            font-weight: bold;
            padding-top: 25px;
            span{
            }
        }
    }
    .ellipse1{
        left:720px;
    }
    .ellipse2{
        left: 500px;
        top: 212px;
    }
    .ellipse3{
        left: 720px;
        top: 410px;
    }
    .content{
        position:absolute;
        top: 340px;
        left: 887px;
        div{
            overflow: hidden;
            line-height: 25px;
            span{
                margin:2px 5px 0 0;
            }
        }
        span{
            float: left;
        }
        h2{
            float: left;
            color: #ea5404;
        }
    }
}
</style>
