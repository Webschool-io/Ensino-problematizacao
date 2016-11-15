``` javascript
const expect = require('chai').expect;

const fatorial = (numero) => {
	let resultado = 1;
	
	while(numero) {
 		resultado = resultado * numero;
		numero--;
	}

	return resultado;
};
```
