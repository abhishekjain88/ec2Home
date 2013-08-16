#!/usr/bin/env node

var prime_num = function(n) {
var arr = [];
var j = 0;

for (i=2; j<n; i++) {
    flag = false;
    for (k=2;k<=Math.sqrt(i);k++) {
	if (i%k === 0) {
	    flag = true;
	    break;
	}
    }
    if (!flag) {
	arr.push(i);
	j++;
    }
}
return arr;
};

var fmt_prime = function(arr) {
    return arr.join(",");
};

var test = 100;
var fs = require('fs');
var outfile = "testfile.txt";
var out = fmt_prime(prime_num(test));
fs.writeFileSync(outfile,out);
console.log("Success!!");
