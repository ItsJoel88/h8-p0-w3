function pasanganTerbesar(num){
    var angkaString = num+''
    var angkaArray = angkaString.split('')
    var output = []
    for (var i = 0; i < angkaArray.length-1; i++) {
        output[i] = angkaArray[i] + angkaArray[i + 1]
    }
    return Math.max(...output)
}
console.log(pasanganTerbesar(64157374757677))
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) //99
console.log(pasanganTerbesar(38790)) //90
console.log(pasanganTerbesar(606162663676566)) //76
