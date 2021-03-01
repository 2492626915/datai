<template>
  <div class="industryAnalysisImg">
      <div class="title">
          <div class="point"></div>
          <h4>行业应用领域</h4>
      </div>
      <!-- <div class="one" @mouseenter.stop="setBac(0)" @mouseleave="setLeaveBac" :class="this.flag === 0?'bac':''">
          <div class="two" @mouseenter.stop="setBac(1)" @mouseleave="setLeaveBac" :class="this.flag === 1?'bac':''">
              <div class="three" @mouseenter.stop="setBac(2)" @mouseleave="setLeaveBac" :class="this.flag ===2 ?'bac':''">
                  <div class="four" @mouseenter.stop="setBac(3)" @mouseleave="setLeaveBac" :class="this.flag ===3?'bac':''"></div>
              </div>
          </div>
      </div> -->
      <div class="one" ref="one">
          <div class="two" ref="two">
              <div class="three" ref="three">
                  <div class="four" ref="four"></div>
              </div>
          </div>
      </div>
      <ul>
          <li 
          v-for="(item,index) in list"
           :key="index" 
           ref="dsad"
            @mouseenter="changeArticle(index)"
            @mouseleave="cancelBac(index)"
            > <span></span>{{item}} </li>
      </ul>
      <div class="introduce">
          <h4> {{details[flag].title}} </h4>
          <p> {{details[flag].content}} </p>
          <img :src="details[flag].image" alt="">
      </div>
  </div>
</template>

<script>
 function getId(id){
    return document.getElementById(id)
 }
 function clearBubbling() {
    const one = getId('one')
    const two = getId('two')
    const three = getId('three')
    const four = getId('four')
 }
 clearBubbling()
export default {
    name:'industryAnalysisImg',
  components: {},
  props: {},
  data() {
    return {
        flag:4,
        list:[
            '食品加工行业','农林畜牧行业','石油化工行业','电力行业','钢铁行业','给排水行业','煤炭矿产行业','焦化行业','水泥建材行业'
        ],
        details:[
            {
            title:'1无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        },
        {
            title:'2内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        },
        {
            title:'3内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        },
        {
            title:'4厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        }
        ,
        {
            title:'5厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        }
        ,
        {
            title:'6厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        }
        ,
        {
            title:'7厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        }
        ,
        {
            title:'8厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        },
        {
            title:'9厂内的无线改造项目鞍山 钢厂内的无线改造内的无线改造 内的无线改造......',
            content:'在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整个工业企业制造在众多的工业现场中，钢厂的环境最为复杂和恶劣，可以说是整'
            ,image:require('../../images/blockArrow.png')
        }
        ]
    };
  },
  watch: {},
  computed: {},
  methods: {
      cancelBac(index){
          this.$refs.one.style.background = ''
          this.$refs.two.style.background = ''
          this.$refs.three.style.background = ''
          this.$refs.four.style.background = ''
      },
      changeArticle(index){
          this.flag = index
          if(index === 0 ||index === 7){
              this.$refs.one.style.background = '#ffe6d8'
              
          }
          if(index === 1 ||index === 6){
              this.$refs.two.style.background = '#fff1e9'
              this.$refs.one.style.background = '#ffe6d8'
          }
          if(index ===2 ||index === 5){
              this.$refs.three.style.background = '#ffe6d8'
              this.$refs.one.style.background = '#ffe6d8'
              this.$refs.two.style.background = '#fff1e9'
          }
          if(index ===3 ||index === 4){
              this.$refs.three.style.background = '#ffe6d8'
              this.$refs.one.style.background = '#ffe6d8'
              this.$refs.two.style.background = '#fff1e9'
              this.$refs.four.style.background = '#fff1e9'
          }
      }
  },
  created() {},
  mounted() {
      clearBubbling()
  }
};
</script>
<style lang="scss" scoped>
.bac{
    background: #ffe6d8;
}
.industryAnalysisImg{
    width: 1200px;
    position: relative;
    .title{
        position: absolute;
        left: 80px;
        .point{
            width: 20px;
            height: 20px;
            background: #ea5404;
            float: left;
            margin: 5px;
            margin-top: 3px;
        }
        h4{
            float: left;
            font-size: 18px;
        }
    }
    .one:hover{
        background: #ffe6d8;
    }
    .one{
        width: 800px;
        height: 800px;
        margin: 100px auto;
        border: 1px solid #ffece1;
        border-radius: 50%;
        .two:hover{
        background: #fff1e9;
    }
        .two{
            width: 600px;
            height: 600px;
            margin: 100px auto;
            border: 1px solid #ffece1;
            border-radius: 50%;
            background: #fff;
           .three:hover{
        background: #ffe6d8;
    } 
            .three{
                 width: 400px;
                 height: 400px; 
                 margin: 100px auto;
                 border: 1px solid #ffece1;
                 border-radius: 50%;
                  background: #fff;
              .four:hover{
        background: #fff1e9;
    }    
                .four{
                    width: 200px;
                    height: 200px; 
                    margin: 100px auto;
                    border: 1px solid #ffece1;
                    border-radius: 50%;
                     background: #fff;
                }
            }
        }
    }
    ul{
        overflow: hidden;
        position: absolute;
        width: 900px;
        top: 400px;
        left: 194px;
        li{
            width: 80px;
            float: left;
            padding-left: 20px;
            list-style: initial;
            text-align: left;
            cursor: pointer;
            list-style: none;
        }
        li span{
            display: block;
            width: 5px;
            height: 5px ;
            background: #000;
            float: left;
            margin-left: -13px;
            margin-top: 6px;
        }
        li:hover{
            color: #ea5404;
        }
    }
    .introduce{
        width: 150px;
        padding: 10px 20px;
        position: absolute;
        right: 50px;
        top: 0;
        text-align: left;
       box-shadow: #666 0px 5px 10px;
           line-height: 20px;
       h4{
           margin: 10px 0;
       }
       img{
           float: right;
           margin: 20px 0;
       }
    }
}
</style>