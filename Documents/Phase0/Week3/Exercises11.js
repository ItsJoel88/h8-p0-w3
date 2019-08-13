function tentukanDeretAritmatika(arr) {
    var tampungSelisih = arr[1]-arr[0]
    for (var i =0; i < arr.length-1 ; i++) {
      if (arr[i+1] - arr[i] === tampungSelisih) {
        continue
      }else{
        return false;
      }
    }
    return true
  }
  console.log(tentukanDeretAritmatika([2,4,60,8,10])) //false
  console.log(tentukanDeretAritmatika([3,6,9,12])) //true
