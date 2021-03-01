<template>
  <div class="contactMode">
      <img src="../images/right.png" alt="">
      <ul :class="{'isFixed':isShow}" ref="needFixed">
          <li v-for="(item,index) in list" :key="index">
              <span>{{item.info}}</span>
              <img :src="item.image" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
import handleScrollx from '../components/comeOutAnmition';
export default {
  name:'contactMode',
  components: {},
  props: {},
  data() {
    return {
        list:[
            {
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            },{
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            },{
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            },{
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            },{
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            },{
              info:'400-6961-022'  ,
              image:require('../images/getProgramme.png')
            }
            
        ],
        isShow:''
    };
  },
  watch: {},
  computed: {},
  methods: {
      anmition() {
          if(this.isShow!=true){
              this.isShow = handleScrollx(this.$refs.needFixed,0)
          }else{
          }
          if(this.isShow === true){
            if(window.pageYOffset <=1100){
                this.isShow = false
            }
          }
      }

  },
  created() {},
  mounted() {
       window.addEventListener('scroll',this.anmition,true)
  }
};
</script>
<style lang="scss" scoped>
.isFixed{
    position: fixed;
    right: 0;
    top: 0;
}
.contactMode{
    width: 210px;
    ul{
        li{
            width: 210px;
            background: #fff3ed;
            padding: 10px 0;
            border-top: 2px solid #fff;
        }
    }
}
</style>