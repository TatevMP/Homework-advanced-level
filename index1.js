1. Given a number. Write a recursive function that reverse the number. Return the new
number.


function reverseNumber(number) {
    if (number < 10)
     return number
    const lastDigit = number % 10
    const remainingDigits = Math.floor(number / 10)
    return Number(String(lastDigit) + String(reverseNumber(remainingDigits)))
}



2. Given a number and an array. Find the second occurrence of the number in the array.
Consider that the occurrence of each element in the array is at least two. (recursive)


function findSecondOccurrence(arr, num, index = 0, count = 0) {
    if (index >= arr.length) {
        return -1
    }
    if (arr[index] === num) {
        count++
    }
    if (count === 2) {
        return index
    }
    return findSecondOccurrence(arr, num, index + 1, count)
}



3. Given a substring and a string. Find how many times the substring occurred in the string.
(For getting substring of the string use str.substring(startIndex, endIndex),
str.substr(startIndex, length) ) (recursive)


function countSubstringOccurrences(str, substring, startIndex = 0, count = 0) {
    if (startIndex >= str.length) {
        return count
    }
     const nextIndex = str.indexOf(substring, startIndex)
    if (nextIndex !== -1) {
        count++
        return countSubstringOccurrences(str, substring, nextIndex + 1, count);
    }
    return count
}




4. Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;
have been replaced by &quot;3.14&quot;.


function replacePi(str) {
    if (str.length === 0 || !str.includes("pi")) {
        return str
    }
    const index = str.indexOf("pi")
    const replacedStr = str.substring(0, index) + "3.14" + str.substring(index + 2)
    return replacePi(replacedStr)
}




5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
    function that concats arrays).


    function flattenArray(arr) {
        let flattened = []
        function concatArrays(arr1, arr2) {
            for (let i = 0; i < arr2.length; i++) {
                arr1.push(arr2[i])
            }
            return arr1
        }
        function flatten(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    flatten(arr[i]);
                } else {
                    flattened.push(arr[i])
                }
            }
        }
         flatten(arr)
        return flattened
    }
    
    // or

    function flattenArray(arr) {
        let flattened = []

        function concatArrays(arr1, arr2) {
            for (let i = 0; i < arr2.length; i++) {
                arr1.push(arr2[i])
            }
            return arr1
        }
            function flatten(arr) {
            arr.forEach(element => {
                if (Array.isArray(element)) {
                    flatten(element)
                } else {
                    flattened.push(element)
                }
            })
        }
    
        flatten(arr)
        return flattened
    }
    
    // or without using concat

    function flattenArray(arr) {
        let flattened = []
      
        function flattenHelper(arr) {
          arr.forEach(item => {
            if (Array.isArray(item)) {
              flattenHelper(item)
            } else {
              flattened.push(item)
            }
          })
        }
      
        flattenHelper(arr)
        return flattened
      }
      
      



      6. Given a number. Write a function that calculates its sum of the digits and if that sum has
      more than 1 digit find the sum of digits of that number. Repeat that process if needed
      and return the result. (recursive)



      function sumOfDigits(num) {
        const digits = num.toString().split('').map(Number)
        const sum = digits.reduce((acc, curr) => acc + curr, 0)
        if (sum < 10) {
          return sum
        } else {
          return sumOfDigits(sum)
        }
      }
      
