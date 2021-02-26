<template>
  <div class="contentFooterAbove">
            <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.image" alt="">
                    <div>
                        <h3> {{item.title}} </h3>
                        <p> {{item.content}} </p>
                    </div>
                </li>
            </ul>
            </div>
            <div class="right">
            <div class="minContent">
                <div>
                    <div class="rightPoint"></div>
                    <h3> {{rightContent.title}} </h3>
                </div>
                <p> {{rightContent.content}} </p>
            </div>
            </div>
            <div class="point">

            </div>
        </div>
</template>

<script>
export default {
    name:'contentFooterAbove',
  components: {},
  props: {},
  data() {
    return {
        list:[
            {
                image:require('@/images/products.png'),
                title:'PLC与PLC之间',
                content:'本方案用于解决多台汇川PLC之间基于MODBUS通讯协议下的无线通信实现方法。方案中采用达泰电子日系PLC专用无线通讯终端'
            },
            {
                image:require('@/images/products.png'),
                title:'PLC与PLC之间',
                content:'本方案用于解决多台汇川PLC之间基于MODBUS通讯协议下的无线通信实现方法。方案中采用达泰电子日系PLC专用无线通讯终端'
            },{
                image:require('@/images/products.png'),
                title:'PLC与PLC之间',
                content:'本方案用于解决多台汇川PLC之间基于MODBUS通讯协议下的无线通信实现方法。方案中采用达泰电子日系PLC专用无线通讯终端'
            },{
                image:require('@/images/products.png'),
                title:'PLC与PLC之间',
                content:'本方案用于解决多台汇川PLC之间基于MODBUS通讯协议下的无线通信实现方法。方案中采用达泰电子日系PLC专用无线通讯终端'
            }
        ],
        rightContent:{
            title:'技术应用方案',
            content:'达泰线通品，其优势在于，无需更改或二次开发程序Rs485等传统有线方案的产品，其优势在于，无需更改或二次开发程序Rs485等传统有线方案的产品，其优势在于，无需更改或二次开发程序是一款可直接代替有线Rs232、Rs485等传统有线方案的产品，其优势在于，无需更改或二次开发程序'
        }
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
.contentFooterAbove{
    width: 1200px;
    margin: 50px auto 0;   
    position: relative; 
    font-size: #707070;
    overflow: hidden;
    .left{
        width: 50%;
        height: 100%;
        overflow: hidden;
        float: left;
        ul{
            overflow: hidden;
            margin-top: 100px;
            li:hover{
                opacity: 0.6; 
                background: #fff;
                position: relative;
                z-index: 0;
            }
            li{
                width: 190px;
                float: left;
                margin:30px 0 0 110px;
            
                img{
                    width: 190px;
                    height: 110px;
                }
               div{
                    width: 190px;
                    h3,p{
                    text-align: right;
                }
                h3{
                    margin: 10px 0;
                }
               }
            }
        }
    }
    .right{
        width:49%;
        float: right;
        .minContent{
            width: 130px;
            margin: 150px auto 0;
            text-align: left;
            div{
                overflow: hidden;
                .rightPoint{
                    width: 15px;
                    height:15px;
                    background: #ea5404;
                    float: left;
                    margin: 10px;
                    margin-left: 0;
                    // border-radius: 50%;
                }
                h3{
                    float: left;
                    margin-top: 8px;
                }
            }
            p{
                font-size: 12px;
            }
        }
    }
    
}
</style>