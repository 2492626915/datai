<template>
  <div id="app">
    <Header/>  
    <Characteristic/> 
    <Introduce/>
    <ContentHeader/>
    <MidContent/>
    <ContentFooter/>
    <Cooperation/>
    <News/>
    <Footer/>
    <ContactMode class="ContactMode"/>
  </div>
</template>
<script>
import Header from './views/header'
import Characteristic from './views/characteristic'
import Introduce from './views/introduce'
import ContentHeader from './views/contentHeader'
import MidContent from './views/midContent'
import ContentFooter from './views/contentFooter/contentFooter'
import Cooperation from './views/cooperation'
import News from './views/news'
import Footer from './views/footer'
import ContactMode from './views/contactMode'
export default {
  name:'app',
  components:{
    Header,
    Characteristic,
    Introduce,
    ContentHeader,
    MidContent,
    ContentFooter,
    Cooperation,
    News,
    Footer,
    ContactMode
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./images/gezi.png');
  background-size: 100%;
  position:relative;
  .ContactMode{
    position:absolute;
    top:600px;
  right:0;
  }
}
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
p{
         color: #a29d9d;
     }
</style>
