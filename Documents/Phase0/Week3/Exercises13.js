function targetTerdekat(arr){
    if(arr.includes('x')===false){
        return 0
    }
    var index=arr.indexOf('o')
    var index1
    var i=0
   
    if(arr.indexOf('o')<arr.indexOf('x')){
        while(i<arr.length){
            if(arr[i]==='x'){
                index1 = arr.indexOf(arr[i])
            }
            i++
        }
        return index1-index
    }else{
        return Math.abs(arr.lastIndexOf('x')-index)
    }
    
}

console.log(targetTerdekat(['','o','','x','x'])) //2
console.log(targetTerdekat(['x','','','o',''])) //3
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) //1
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) //4
console.log(targetTerdekat(['','','o',''])) //0