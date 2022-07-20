function max(...arr){
    maximum=-Infinity;
    for(i=0; i<arr.length; i++){
        if(arr[i]>maximum){
            maximum=arr[i];
        }
    }
    console.log(maximum)
}
max(1,2,3,4)
