import React from 'react'

function Bubblesort() {
    let arr = [1,4,5,7,3,2]
    let temp = 0
    for (let i = 0 ; i <= arr.length ; i++){
    for (let j=0 ; j<=arr.length ; j++){
        if (arr[i] < arr[j]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    }
console.log(arr)
  return (
    <>    
          <p>Sorted Array: {arr.join(', ')}</p>
    </>
  )
}

export default Bubblesort