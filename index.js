testArray = [9,3,2,7,2,5,3,8];

kth = 4


function findKthElement(array, k) {
    // sorted the array
    var sortedArray = array.sort(function(a,b) {
        return a - b
    })

    // remove duplicates in the array
    var uniqueArray = [...new Set(sortedArray)]

    // with unique array, grabbed the element at index 2
    var answer = uniqueArray[k-1]

    if (answer) {
        return answer
    } else {
        return null
    }

}


answer = findKthElement(testArray, kth)
console.log(answer)

