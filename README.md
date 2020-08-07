# pie3d-chart
pie3d-chart base on sprite.js

## 依赖文件

    <script src="https://unpkg.com/spritejs@3/dist/spritejs.es.min.js"></script>
    <script src="https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>

#### 使用案例：

``` js

    import Pie3D from 'pie3djs'

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
![avatar](http://a1.qpic.cn/psc?/V13rVzVM1RKjQV/oBo2DhJ2tsiQw92MIOThMv0ecBm7JW*Iw7KP3KRPMiIdSaxArKCpzd3KVvytw4a7ZP9RtckM.jLTeIXXAYKMrg!!/b&ek=1&kp=1&pt=0&bo=8wHQAfMB0AERADc!&tl=3&vuin=2974322925&tm=1596783600&sce=60-2-2&rf=viewer_311)

