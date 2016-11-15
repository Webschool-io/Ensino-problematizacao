``` javascript
const expect = require('chai').expect

// https://pt.wikipedia.org/wiki/Fatorial

const fatorial = (numero) => {
  let resultado = 1;

  while(numero) {
    resultado = resultado * numero;
    numero--;
  }

  return resultado;
};
```
