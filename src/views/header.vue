<template>
  <div class="header">
    <ul class="nav">
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <div class="sendeHeader">
      <div>
        <img src="../images/logo.png" alt="">
      </div>
      <img src="../images/search.png" alt="" class="search">
      <ul >
        <li v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      list:[
        '关键字',
        '关键字',
        '关键字',
        '关键字',
        '关键字',
        '关键字',
        '关键字'
      ]
    }
  },
  components: {
  }
}
</script>
<style>
  .header{
    width: 96%;
    min-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header ul{
    overflow: hidden;
    color: #606060;
  }
  .sendeHeader{
    overflow: hidden;
    margin-top: 20px;
  }
  .sendeHeader div img{
    float: left;
    width: 175px;
  }
  .header ul li:hover{
    text-decoration:underline ;
    cursor:pointer;
    font-weight: bold;
    color: #ea5404;
  }
  .header ul li{
    float: left;
    list-style:none;
    margin: 0 10px;
  }
  .sendeHeader .search{
    float: right;
    width: 20px;
    margin-top: 25px;
  }
  .sendeHeader ul{
    float: right;
   margin-top: 25px;
  }
  .sendeHeader ul li{
      margin: 0 33px;
      font-size: 15px;
  }
</style>
