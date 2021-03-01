<template>
  <div class="news" ref="news" :class="{'isShow':isShow}">
        <div class="nav">
            <span class="point"></span>
            <span class="newsTitle">新闻中心</span>
        </div>
        <ul>
            <div class="occupy">

            </div>
            <li v-for="(item,index) in list" :key="index">
                <div>
                    <p class="serialNumber"> {{item.number}} </p>
                    <p class="date"> {{item.date}} </p>
                </div>
                <h4 class="articleTitle"> {{item.title}} </h4>
                <img v-if="item.image" :src="item.image" alt="">
                <p> {{item.content}} </p>
                <img src="../images/blockArrow.png" alt="" class="arrow">
            </li>
        </ul>
  </div>
</template>

<script>
import handleScrollx from '../components/comeOutAnmition'
export default {
    name:'news',
  components: {},
  props: {},
  data() {
    return {
        list:[
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                image:require('../images/products.png'),
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                image:require('../images/products.png'),
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                image:require('../images/products.png'),
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
            },
            {
                number:23,
                date:'2020-09',
                title:'大萨达撒多撒大大大大阿萨德sad发多少',
                content:'达到四川在线梵蒂冈发电VR刚发的重新发过的发多少吧成吃个饭大风车V型地方DVD出发点发VR发吧成反腐成发V型从成地方成大V让对方成的大V成地方吃顿饭'
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
              this.isShow = handleScrollx(this.$refs.news)
          }else{
              return
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
.isShow{
    animation: identifier 3s forwards;
}
@keyframes identifier {
    0%{
        opacity: 1;
    }
    50%{
       opacity: 0.5;
       background: #000;
    }
    100%{
        opacity: 1;
    }
}
.news{
    text-align: left;
    width: 1200px;
    margin: 0 auto;
    .nav{
        overflow: hidden;
        margin: 50px ;
        .point{
        width: 15px;
        height:15px;
        background: #ea5404;
        float: left;
        // border-radius: 50%;
        }
        .newsTitle{
            float: left;
        }

    }
    ul{
        overflow: hidden;
        .occupy{
            width: 200px;
            height:200px ;
            float: left;
            margin-right: 100px;
        }
        li{
            width: 200px;
            float: left;
            margin: 0 50px 50px;
            
            div{
                border-left: 2px solid #ea5404;
                padding: 5px 0 5px 10px;
                margin: 0;
                p{
                    width: 60px;
                }
                p:nth-child(odd){
                    font-size: 18px;
                }
            }
            h4{

            }
            img{
                width: 200px;
                height: 100px;
            }
            p{

            }
            .arrow{
                width: 40px;
                height: 10px;
                margin-top: 30px;
            }
        }
    }
}
</style>