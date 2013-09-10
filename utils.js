function rand(min, max, repeat) {
﻿	if (!min) min = 1;
	if (!repeat) repeat = 1;
﻿		max = max ? max-min+1 : 10;
	var result = 0;
	for (var i=0; i < repeat; i++) {
		var temp = Math.floor((Math.random()*max)+min)
		result = temp > result ? temp : result;
	}
	return result;
﻿}

function d10() {
﻿	var min = 1,
		max = 10;
	var temp = Math.floor((Math.random()*max)+min);
	if (temp == 10) temp += Math.floor((Math.random()*max)+min);
	return temp;
﻿}