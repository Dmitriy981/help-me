module.exports = function count(s, pairs) {
    var N = 1;
    
    for(let i = 0; i < pairs.length; i++) {
        if(pairs[i][1] > 50) return 0;
        N *= Math.pow(pairs[i][0], pairs[i][1]);
        if(N > Math.pow(10, 8)) return 0;
    }
    
    var values = [];
    
    var result = 0;
    for(let i = 0; i < N; i++) {
        values.push(i);
        
        for(let j = 0; j < s.length; j++) {
            values = checkS(j, i);
        }

        result += values.length;
        values = [];
    }
    
    return result % 1000000007;
    
    
    function checkS(i, index) {
        let returnValues = [];
        
        for(let m = 0; m < values.length; m++) {
            let isOne = false;
            for(let k = 0; k < pairs.length; k++) {
                if((values[0] + i) % pairs[k][0] == 0) {
                    isOne = true;
                    break;
                }
            }
            
            if ((isOne && s[i] == 0) || (!isOne && s[i] == 1)) {
                returnValues.push(values[0]);
            }
        }
        
        return returnValues;
    }
    
    
    function binpow (a, n) {
        if (n == 0)
            return 1;
        if (n % 2 == 1)
            return binpow (a, n-1) * a;
        else {
            let b = binpow (a, n/2);
            return b * b;
        }
    }
}