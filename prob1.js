// Find the average of elements present at odd index of the following array

let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let arr1=[];
for(let i=1; i<=arr.length; i++){
  if(i%2==1){
    arr1.push(arr[i-1]);
  }
};

let avg = arr1.reduce(function(acc,cur){
  return acc+cur
},0);

console.log(avg/arr1.length);