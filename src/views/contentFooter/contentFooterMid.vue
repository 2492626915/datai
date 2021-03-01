<template>
  <div class="contentFooterMid" id="calculation" ref="calculation" :class="{'isShow':isShow}">
      <ul>
          <li v-for="(item,index) in list" :key="index">
              <div class="time">
                  {{item.time}}
              </div>
              <h4> {{item.title}} </h4>
              <p> {{item.content}} </p>
          </li>
      </ul>
  </div>
</template>

<script>
import handleScrollx from '../../components/comeOutAnmition'
export default {
    name:'contentFooterMid',
  components: {},
  props: {},
  data() {
    return {
        list:[
            {
                title:'打对方答复都是范德萨发都是发多少发多少德萨发都是第三方sad',
                time:'2020-11-11',
                content:'免费低分局第四据佛ID是ofID技术费多少积分工地方面哪里打开VN面对搜给局欧舒丹搜if酒叟都是 '
            },
            {
                title:'打对方答复都是萨发都是发多少发多少德萨发都是第三方sad',
                time:'2020-11-11',
                content:'免费低分局第四佛ID是ofID技术费多少积分工地方面哪里打开VN面对搜给局欧舒丹搜if酒叟都是 '
            },{
                title:'打对方答复都是范发都是发多少发多少德萨发都是第三方sad',
                time:'2020-11-11',
                content:'免费低ID数据方面哪里打开VN面对搜给局欧舒丹搜if酒叟都是 '
            },{
                title:'打对方答复都是范萨发都是发多少发多少德萨发都是第三方sad',
                time:'2020-11-11',
                content:'免费低分局第四是ofID技术费多少积分工地方面哪里打开VN面对搜给局欧舒丹搜if酒叟都是 '
            }
        ],
        isShow:''
    };
  },
  watch: {},
  computed: {},
  methods: {
      calculation(e) {
      },
      anmition() {
          if(this.isShow!=true){
              this.isShow = handleScrollx(this.$refs.calculation)
          }else{
              return
          }
      }
  },
  created() {},
  mounted() {
      this.calculation()
       window.addEventListener('scroll',this.anmition,true)
  }
};
</script>
<style lang="scss" scoped>
.isShow{
    animation: identifier 3s forwards;
}
@keyframes identifier {
    0%{
        opacity: 1;
    }
    50%{
       opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
.contentFooterMid{
    width: 100%;
    height: 500px;
    ul{
        overflow: hidden;
        li{
            width: 15%;
            text-align: left;
            line-height: 25px;
            float: left;
            margin: 80px 0 0 85px;
            h4{
                margin: 10px 0;
            }
            .time{
                color: #ea5404;
            }
            p{
                color: #888787;
            }
        }
    }
}
</style>