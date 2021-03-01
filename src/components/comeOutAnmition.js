export default function handleScrollx(DOM,targetValue) {
      console.log('滚动高度',window.pageYOffset)
        if(targetValue === undefined){
            targetValue = 500
        }else{
            targetValue
        }
    let Bool
    //   console.log('距离顶部高度',DOM.getBoundingClientRect().top)
      if(DOM.getBoundingClientRect().top<=targetValue){
          Bool = true
          return Bool
      }
    }