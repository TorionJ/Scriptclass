var divide = {
    num1: 0,
    num2: 0,
    ceil: function(num1, num2){
        var num3 = num1/num2;
        return Math.ceil(num3);
    },
    floor: function(num1, num2){
        var num3 = num1/num2;
        return Math.floor(num3);
    },
    round: function(num1, num2){
        var num3 = num1/num2;
        return Math.round(num3);
    }
}

console.log(divide.ceil(36,11));
console.log(divide.floor(9,4));
console.log(divide.round(3,2));