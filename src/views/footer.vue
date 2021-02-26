<template>
  <div class="footer">
      <p>
          <span id="maodian">友情链接：</span>
          <a href="#maodian">百度</a>|
          <a href="#maodian">百度</a>|
          <a href="#maodian">百度</a>|
          <a href="#maodian">百度</a>
        </p>
        <div class="footerInfo">
            <div class="info">
                <p>服务热线：400-6961-022</p>
                <p>技术支持：13892831469     18992829586</p>
                <p>邮箱：data029@126.com</p>
                <p>地址：西安市高新区唐延南路11号逸翠园二期（i 都会）1幢2-1804</p>
                <p>版权信息 @ 西安达泰电子有限责任公司 陕ICP备05016222号-1</p>
                <p>信息公示</p>
            </div>
            <div class="center">
                <p>产品与技术</p>
                <p>技术应用方案</p>
                <p>行业应用领域</p>
                <p>相关技术与下载</p>
                <p>新闻中心</p>
                <p>关于达泰电子</p>
                <p>联系人</p>
                <p>合作伙伴</p>
            </div>
            <div class="warning">
                <p>
                    本网站部分资源来源于网络，如有侵权，请联系我们告知删除 我们将会尽快处理，谢谢！本站不承担任何法律责任
                </p>
                <div>
                    <img src="../images/erweima.png" alt="">
                    <img src="../images/erweima.png" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'footer',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.footer{
    width: 1100px;
    margin: 0 auto;
    text-align: left;
   .footerInfo{
       margin-top: 100px;
        .info{
        float: left;
        width: 33%;
    }
    .center{
        width: 33%;
        float: left;
        text-align: center;
    }
    .warning{
        width: 33%;
        float: left;
        text-align: right;
        img{
            margin: 20px 0 20px 20px ;
        }
    }
   }
}
</style>