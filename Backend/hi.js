// function countUniqueValues(arr){
//     for (let i=0; i<arr.length ;i++){
//     let reference1=arr[0];
//     let reference2=arr[i]
//     if (reference1!==reference2){
//         arr[i]=reference1
//     }
//     }
    
// }

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

function validAnagram(str1, str2){
    //check if length of string is the same
    if (str1.length !== str2.length){
       return false 
    }
    //if length is the same, create an object for each string, key=character, value=frequency of character
    let frequency1={}
    let frequency2={}
    
    //populate frequency 1 
    for (let char in str1){
        frequency1[char]= (frequency1[char] || 0) + 1
    }
    
    //populate frequency 2
    for (let char in str2){
        frequency2[char]=(frequency2[char] || 0) + 1
    }

    //check if character is in the other string, if its not return false
    for (let key in frequency1){
        if (!frequency2[key]){
            return false
        }
    // if charcter is in the other string, check if the frequency of chracter is the same, else return false
        if(frequency1[key] !== frequency2[key]){
            return false
        }
    }
     return true
}
