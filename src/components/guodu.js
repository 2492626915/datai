export default function guodu(targetDom,stopValue,speed,ms) {
    // targetDom需要轮播的元素
    // stopValue停止的距离
    // speed 每次执行进行的长度
    // ms 动画执行速度
    let timer
    console.log(targetDom.offsetLeft,stopValue,speed,ms)
     timer = setInterval(() => {
        console.log(targetDom.offsetLeft)
        targetDom.style.left = targetDom.offsetLeft-speed+'px'
        if(targetDom.offsetLeft<=stopValue){
            clearInterval(timer)
        }
    },ms)
    
}