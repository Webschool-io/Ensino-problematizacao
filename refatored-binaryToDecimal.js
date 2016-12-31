const converter = (valor, unity) => {
	switch (unity.toLowerCase()) {
		case 'd':
			return convertBinaryToDecimal(valor)
			break
		case 'b':
			return convertDecimalToBinary(valor)
			break
	}
}

const convertBinaryToDecimal = (valor) =>
	valor.toString().split('').reverse().reduce((acc, cur, i) =>
		acc += (parseInt(cur)) ? Math.pow(2, i) : 0, 0)

const convertDecimalToBinary = (valor) => [128, 64, 32, 16, 8, 4, 2, 1].map((cur_el, i) =>
	(((valor % cur_el) < valor) && (valor = (valor % cur_el))) ? 1 : 0
).join('')

console.log(converter('00110101', 'd'))
console.log(converter(53, 'b'))
