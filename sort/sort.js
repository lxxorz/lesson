function bubble_sort(array){
	let size = array.length;
	for(let i = 0; i < size; ++i) {
		for(let j = 0; j < size-i-1; ++j){
			if(array[j] > array[j+1]) {
				[array[j], array[j+1]] = [array[j+1], array[j]];	
			}
		}
	}
}



function quick_sort(array, left = 0, right) {
	right = right ?? array.length;
	right = right > array.length ? array.length : right;
	function adjust(l, r){
		let i = l, j = r-1;
		let t = array[l];
		while(i < j) {
			while(i < j && array[j] > t) --j;
			if(i < j) array[i++] = array[j]; 
			while(i < j && array[i] <= t) ++i;
			if(i < j) array[j--] = array[i];
		}
		array[i] = t;
		return i;
	}
	function sort(l, r){
		if(l < r) {
			let k = adjust(l, r);	
			sort(l, k);
			sort(k+1, r);
		}
	}
	sort(left, right);
}
module.exports = {
	bubble_sort,
	quick_sort,
}
