function groupAnimals(animals){
    animals.sort()
    var output = []
    var countUp = 0

    output.push([animals[0]])
    for (var i=0;i<animals.length;i++){
        if(output[countUp][0][0] === animals[i][0]){
            output[countUp].push(animals[i])
        }else{
            countUp++
            output.push([animals[i]])
        }
    }
    var redundant = output[0].filter(function(item,index){
        return output[0].indexOf(item)===index
    }) 
    output.shift()
    output.unshift(redundant)
    return output
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
