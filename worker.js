onmessage =function(e){
	var number=e.data;
	var fact=function foo(num){
		if(num<=1){
			return 1;
		}
		return num*foo(num-1)
		//return number*arguments.callee(number-1);
	}(number);
	
	
	postMessage(fact);
};