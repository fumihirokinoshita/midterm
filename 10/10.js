function calc(arr){
    if(arr[1]=="+" && arr[3]==null){
        return arr[0] + arr[2];
    }else if(arr[1]=="-" && arr[3]==null){
        return arr[0] - arr[2];
    }else{
        let n = 0;
        let a = arr[0];
        while(arr[n]!=null){
            if(arr[n+1]=="+"){
                a = a + arr[n+2];
            }else{
                a = a - arr[n+2];
            }
        n = n + 2;
        }
        return a;
    }
}
