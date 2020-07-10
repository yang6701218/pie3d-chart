
export const ErrorInfo = function(msg){  
    console.error(new Error(msg));
}

export const changeRange = function (arr){
    arr = arr && arr.reduce((newArr,item)=>{
        newArr.push(item.num)
        return newArr
    },[])
 
    let max = Math.max(...arr)+50;
    let min = Math.min(...arr)-50;  
    let ranger = max-min;
    return arr.map((item)=>{
       return ((item-min)/ranger+0.1).toFixed(3) 
    })
 }
  