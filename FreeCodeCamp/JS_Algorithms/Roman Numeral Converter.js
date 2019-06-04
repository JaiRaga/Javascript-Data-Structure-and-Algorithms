function convertToRoman(num) {
    console.log(num);
    let romanNum = "",
        ref          = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
        for (let i in ref) {
            // console.log(i);
            while (num >= ref[i] && num >=0) {
                romanNum += i;
                num -= ref[i];
            }
        }
        console.log(romanNum);
    return romanNum;
}

convertToRoman(3);
convertToRoman(2500);