<template>
  <div class="contentFooter">
      <div class="dividingLine">
      </div>
      <div class="point"> </div>
        <ContentFooterAbove/>
        <contentFooterMid/ >
        <IndustryAnalysisImg/>
  </div>
</template>

<script>
import ContentFooterAbove from './contentFooterAbove'
import contentFooterMid from './contentFooterMid'
import IndustryAnalysisImg from './industryAnalysisImg'
export default {
    name:'contentFooter',
  components: {
      ContentFooterAbove,
      contentFooterMid,
      IndustryAnalysisImg
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
 .contentFooter{
     position:relative;
     width: 1200px;
     margin: 0 auto;
     
     .dividingLine{
         background: #ea5404;
        position: absolute;
        left: 50%;
        top: 0;
        width:1px ;
        height: 100%;
        z-index: 1;
     }
     .point{
        width: 5px;
        height: 5px;
        background: #ea5404;
        position: absolute;
        left: 50%;
        top: 0;
        transform:translateX(-50%);
        border-radius: 50%;
    }
 }
</style>