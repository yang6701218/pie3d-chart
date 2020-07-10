
import {ErrorInfo,changeRange} from './util'
import initSprite from "./initSprite"
import createPie from "./createPie"

let defaultOptions = { //初始化数据

    data:[], //传递进来的数据
    colors:["#e83030","#be4bd1","#26c7c9","#005d8f","#6e0303"],//柱子的颜色
    MAXLEN:8,
    MINLEN:2,
    container:"#container",
    animate:true,//初始化动画
    orbit: true //是否可以旋转
}

let Sprite = null; //全局缓存 Sprite

const Pie3D = function (options){
      this.options = Object.assign(defaultOptions,options);//初始化数据
      this.init()
}

Pie3D.prototype = {

    init : function(){
        
        if(this.options.data.length > this.options.MAXLEN || this.options.data.length < this.options.MINLEN){
            ErrorInfo("pass data error：need 2 to 8 length")
            return 
        }

        if(!this.options.container) {
            ErrorInfo("pass container error")
            return 
        }
       
        Sprite = !Sprite ? initSprite(this.options.container): Sprite;
 
        this.initPieBackGround() //初始化每个pie的颜色
        this.createPie() //创建pie group

        this.options.orbit && Sprite.layer.setOrbit(); 

    },
    createPie : function(){
        this.options.rangeData = changeRange(this.options.data);
        let groups = this.groups = createPie(this.options,Sprite);//拿到所有的group
        Sprite.layer.append(...groups)
    },

    bindEvent:function(){ //绑定事件

    
    },

    initPieBackGround:function(){
        //设置颜色 
        let len = this.options.data.length - this.options.colors.length;
        if(len){
           for(let i = 0;i<len;i++){
              this.options.colors.push(`rgba(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, 1)`)
           } 
        }
    }
}

export default Pie3D