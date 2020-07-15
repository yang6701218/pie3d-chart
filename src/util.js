
function getMax(arr){
    let max = Math.max(...arr);  
    let rangeMax = 0;
    //找到最大值，在最大值的上面+上一个数变成整数
    let maxLen = max.toString().length;
    if(maxLen == 1){
        rangeMax = max>5?10:max
    }else{
        rangeMax = max.toString().replace(/(\d)(\d)(\d*)/,function(max,$1,$2,$3){
               
              if ($2>5) {
                
                 return (($1-0) + 1) + new Array(max.length-1).fill(0).toString().replace(/,/,"")

              }else{

                  return $1 + 5 + new Array(max.length-2).fill(0).toString().replace(/,/,"")

              }

        })

    }
   return rangeMax 
}  


export const ErrorInfo = function(msg){  
    console.error(new Error(msg));
}

export const changeRange = function (arr){
    arr = arr && arr.reduce((newArr,item)=>{
        newArr.push(item.num)
        return newArr
    },[])

    let rangeMax = getMax(arr);
    //找到最大值，在最大值的上面+上一个数变成整数

    return arr.map((item)=>{
       return (item/rangeMax).toFixed(2)
    })
 }
  