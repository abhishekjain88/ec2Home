#!/usr/bin/env node

var prime_num = function(n) {
	var j = 0;
	var arr = [];
	for (i = 2; j < n; i++) {
		var flag = false;
		for (k = 2;k <= Math.sqrt(i);k++) {
			if (i % k == 0)	{
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

//Print to console
var fmt = function(arr) {
	return arr.join(",");
};

var test=100;
var fs = require('fs');
var out = fmt(prime_num(test));
var outfile = "assignment2.txt";
fs.writeFileSync(outfile,out);
