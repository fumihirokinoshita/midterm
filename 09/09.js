function gcd(naturalA, naturalB){
    if(naturalA==1 && naturalB==1){
        return 1;
    }else if(naturalA==1 || naturalB==1){
        return 1;
    }else if(naturalA==naturalB){
        return naturalA;
    }else{
        let result = 1;
        let i = 2;
        let end = Math.min(naturalA, naturalB);
        while(i <= end){
            let amariA = naturalA % i;
            let amariB = naturalB % i;
            if(amariA == 0 && amariB == 0){
                result = i;
            }
            i = i + 1;
        }
    return result;
    }
}
