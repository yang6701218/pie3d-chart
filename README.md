# pie3d-chart
pie3d-chart base on sprite.js

## 依赖文件

    <script src="https://unpkg.com/spritejs@3/dist/spritejs.es.min.js"></script>
    <script src="https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>

#### 使用案例：

``` js

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

```
