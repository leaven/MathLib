var MathLib = {
	//获取两个数中间的一个随机数
	getRandomIndex : function(start, end) {
		if(typeof start === 'undefined' || typeof end === 'undefined') {
			return false;
		}
		if(end < start) {
			var mid = start;
			start = end;
			end = mid;
		}
		return start + Math.ceil(Math.random()*(end - start));
	}
}