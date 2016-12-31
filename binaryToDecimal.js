function converter(valor, unity) {
	switch (unity.toLowerCase()) {
		case 'd':
			return convertBinaryToDecimal(valor);
			break;
		case 'b':
			return convertDecimalToBinary(valor);
			break;
	}
	return null
}

function convertBinaryToDecimal(valor) {
	const v = valor.toString().split('').reverse().reduce(function (acc, cur, i) {
		acc += (parseInt(cur)) ? Math.pow(2, i) : 0;
		return acc;
	}, 0)
	return v
}

function convertDecimalToBinary(valor) {
	let binary = [128, 64, 32, 16, 8, 4, 2, 1]
	let binario = '';
	binary.forEach((el, i) => {
		if ((valor % el) < valor) {
			binario += '1';
			valor = (valor % el);
		} else {
			binario += '0';
		}
	})
	return binario;
}
console.log(converter('00110101', 'd'));
console.log(converter(53, 'b'));;
