//!. Find the Maximum number in an array
function findMax(arr){
    var max=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]<arr[i+1]){
            max=arr[i+1]
        }
    }
    return max
    
}
var arr=[2,10,45,3,50,12,80,20]
console.log(findMax(arr))


//2.count the number of occurences for an element in an array
function countOccurences(arr,num){
    var count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            count++;
        }
    }
    return count
}

var arr=[10,20,40,10,10,70,10]
console.log(countOccurences(arr,10));

//3. Filter even numbers from an array
//using filter method

var arr=[2,10,33,75,26,80,99]
var arr2=arr.filter((item,index)=>{
    return item%2==0
})
console.log(arr2);
