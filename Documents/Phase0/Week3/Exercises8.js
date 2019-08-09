function targetTerdekat(num){
    var angkaString = num+''
    var c=angkaString.split('').map(Number)
    var tampung = c.indexOf(Math.max(...c))
    var kiri1 = angkaString[tampung-1]+angkaString[tampung]
    var kanan1 = angkaString[tampung]+angkaString[tampung+1]
    /*==========================================================*/
    if(angkaString[tampung+1] !== undefined && angkaString[tampung-1] !== undefined){
        if(kiri1>kanan1){
            return kiri1
        }else{
            return kanan1
        }
    }else{
        c.splice(tampung,1)
        var angkaTerbesar2 = angkaString[c.indexOf(Math.max(...c))]
        var tampung1=angkaString.indexOf(angkaTerbesar2)
        var kiri2 = angkaString[tampung1-1]+angkaString[tampung1]
        var kanan2 = angkaString[tampung1]+angkaString[tampung1+1]
        if(kiri1<kanan2 || kiri1<kiri2){
            if(kanan2>kiri2){
                return kanan2
            }else{
                return kiri2
            }
        }else if(angkaString[tampung-1]){
            return kiri1
        }else{
            return kanan1
        }
    }
}
console.log(targetTerdekat(641573)) // 73
console.log(targetTerdekat(12783456)) // 83
console.log(targetTerdekat(910233)) // 91
console.log(targetTerdekat(71856421)) // 85
console.log(targetTerdekat(79918293)) //99
console.log(targetTerdekat(38790)) //90
console.log(targetTerdekat(3879)) //87
