//-----arrays-----
let arr = [1,2,3,4,5]
console.log(arr[3])

let arr1 = new Array(4)
arr1[0] = 1
arr1[1] = 2
arr1[2] = 3
arr1[3] = 4
arr1[4] = 5
console.log(arr1)

let arr2 = new Array("iti","meet",'puchu',2,3)
console.log(arr2)

//-----methods of array----

//concatenate

let arr3 = arr.concat(arr1);
console.log(arr3)

//pop and push
arr3.pop()
arr3.pop()
arr3.pop()

console.log(arr3)

console.log(arr3.push(100)) //it gives length of the array
console.log(arr3)

//reverse
arr3.reverse()
console.log(arr3)

//string
let stringArr = arr3.toString()
console.log(stringArr)