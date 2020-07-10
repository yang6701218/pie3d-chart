
import Pie3D from './src'

let container = document.getElementById("container")

new Pie3D({
    container,
    data:[{
        title:"华米",
        num:1200  
      },{
        title:"苹果",
        num:1250
      },{
          title:"华为",
          num:1280
      },{
        title:"荣耀",
        num:1270
      }]
})
