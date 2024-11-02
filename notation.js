function mean(arr){
    let s=0
    for(i=0;i<arr.length;i++){
        s=s+arr[i]
        

    }
    let moy=s/arr.length

    console.log(moy)
}
ar=[1,2,3,4,5,7]
mean(ar)