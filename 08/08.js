function isLeapYear(yearInAd){
    if(yearInAd%4==0){
        if(yearInAd%100==0){
            if(yearInAd%400==0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
}
