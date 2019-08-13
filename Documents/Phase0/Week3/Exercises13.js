function targetTerdekat(arr){
    var index = arr.indexOf('o')
    if(arr.indexOf('x')>arr.indexOf('o')){
    var tampung = 0
        for(var i =index;i<arr.length;i++){
            if(arr[i]===''||arr[i]===' '){
                tampung +=1
            }
            if(arr[i]==='x'){
                tampung +=1
                break
            }
        }
    }
    if(arr.indexOf('x')<arr.indexOf('o')){
        var tampung1 = 0
        for(var j=index;j>=0;j--){
            if(arr[j]==='' || arr[j]===' '){
                tampung1 +=1
            }
            if(arr[j]==='x'){
                tampung1 +=1
                break
            }
        }
    }
        
    if(arr.includes('x')===false){
        return 0
    }
    else if(tampung>tampung1 || tampung === undefined){
        return tampung1
    }else{
        return tampung
    }

}
console.log(targetTerdekat(['','o','','x','x'])) //2
console.log(targetTerdekat(['x','','','o',''])) //3
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) //1
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) //4
console.log(targetTerdekat(['','','o',''])) //0
console.log(targetTerdekat(['x','o','','x','x'])) //1
