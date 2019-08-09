function mengelompokkanAngka(arr){  
    var genap = []
    var ganjil = []
    var kelipatanTiga = []
    var output = []
    for (var i = 0;i<arr.length;i++){
        if(arr[i]%3===0){
            kelipatanTiga.push(arr[i])
        }else if(arr[i]%2!==0){
            ganjil.push(arr[i])
        }else if(arr[i]%2===0){
            genap.push(arr[i])
        }
    }  
    output.push(genap,ganjil,kelipatanTiga)
    return output
    
}
console.log(mengelompokkanAngka([1,2,3,4,5,6,7,8,9])) // [[2,4,8],[1,5,7],[3,6,9]]
console.log(mengelompokkanAngka([2,4,6])) // [[2,4],[],[6]]
console.log(mengelompokkanAngka([9,8,7,6,5,4,3,2,1])) //[[8,4,2],[7,5,1],[9,6,3]]