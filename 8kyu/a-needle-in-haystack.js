function findNeedle(haystack){
    for(let i = 0; i < haystack.length; i++){
        if(!haystack.includes('needle')){
            return 'My function didn\'t find anything'
        }

        if(haystack[i] === 'needle'){
            return 'found needle at position' + i;
        }
    }
}