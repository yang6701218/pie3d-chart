
import Pie3D from './src'

let container = document.getElementById("container")

new Pie3D({
    container,
    data:[{
        title:"华米",
        num: 77
      },{
        title:"苹果",
        num:125
      },{
          title:"华为",
          num:100
      },{
        title:"荣耀",
        num:27
      }]
})
