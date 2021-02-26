<template>
  <div class="introduce">
      <ul>
          <li v-for="(item,index) in list" :key="index"> 
            <h3>
                <span v-if="item.time">{{item.time}}</span>
                <span class="smart">{{item.content}}</span>
            </h3>
            <h3> {{item.title}} </h3> 
          </li>
          <div>
              {{content}}
          </div>
      </ul>
  </div>
</template>
<script>
export default {
  name:'introduce',
  components: {},
  props: {},
  data() {
    return {
        list:[
            {
                title:'达泰创立',
                time:'2002',
                content:'年'
            },
            {
                title:'百强供应商立',
                content:'水泥行业'
            },
            {
                title:'发明专利',
                content:'数十项'
            },
            {
                title:'售后服务',
                time:'7*24',
                content:'小时'

            },
            {
                title:'国际体系创立',
                time:'IS09001'
            }
        ],
        content:'使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染'

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
.introduce{
    width: 1550px;
    margin: 0 auto;
    ul{
        width: 850px;
        overflow: hidden;
        margin: 151px auto 0;
        li:hover{
            opacity: 0.6;
        }
        li{
            float: left;
            width: 19%;
            text-align: center;
            font-size: 18px;
            padding: 30px 0;
            h3{
                margin: 2px 0 ;
                cursor: pointer;
                .smart{
                    font-size: 12px;
                }
            }
        }
        div{
            width: 850px;
            line-height: 20px;
            clear: left;
            text-align: left;
            margin: 100px auto 0;
            color: #333333;
        }
    }
}
</style>