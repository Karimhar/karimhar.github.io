let var_div;
function show(obj) {
	if (var_div) {
		var_div.style.display = 'none';
	}
	var_div = document.getElementById('div' + obj.value)
	if (var_div) {
		var_div.style.display = 'block';
	}
}