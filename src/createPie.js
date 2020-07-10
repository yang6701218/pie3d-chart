const { Cylinder, Plane, Group3d , shaders} = spritejs.ext3d;

export default function createPie(options, Sprite) {

    let groups = [],dataLen = options.data.length,deg = 360 / dataLen;

    for (let i = 0; i < options.data.length; i++) {

        let group = new Group3d()
   
        let cylinder = new Cylinder(Sprite.program, {
            radialSegments: 32,
            thetaStart: 0,
            thetaLength: 2*Math.PI / dataLen
        });

        let paneR = new Plane(Sprite.program, {
            width: 0.5,
            z: 0.25,
            rotateY: 90
        })

        let paneL = new Plane(Sprite.program, {
             width: 0.5,
             rotateY:deg - 90,
             z:0.25*Math.cos(deg*Math.PI/180),
             x:0.25*Math.sin(deg*Math.PI/180)
        })

        const texture = Sprite.layer.createText(`${options.data[i].title}|${options.data[i].num}`, {
            font: '48px Arial',
            fillColor: '#fff'
          });
          
          const program = Sprite.layer.createProgram({
            ...shaders.NORMAL_TEXTURE,
            texture,
            cullFace: null,
          });

          const label = new Plane(program, {
            width: 0.15,
            height: 0.15,
            z:0.4*Math.cos(Math.PI/dataLen),
            x:0.4*Math.sin(Math.PI/dataLen),
            rotateX:-90,
            rotateY:360/dataLen/2,
            colors:"rgba(0,0,0,0)",
            id:"text",
            bgcolor: 'transparent'
          });

        group.append(cylinder, paneL, paneR, label);

        groups.push(group);

    }

    //初始化偏转和颜色

    groups.forEach(function (item, idx) {

        item.childNodes.forEach(function (ele) { //每一个item
           if(ele.id != "text"){
                ele.attributes.height = options.rangeData[idx] - 0;
                ele.attributes.y = options.rangeData[idx] / 2 - 0.1
            }else{
                ele.attributes.y = options.rangeData[idx] - 0.099;
            }
           
            ele.attributes.colors = options.colors[idx];
        });

        item.attributes.rotateY = idx * 360 / groups.length;
        item.attributes.scale = [1.5,1.5,1.5] //
        item.attributes.y = -0.5
    })


    return groups

} 