
const expect = require('chai').expect

// https://pt.wikipedia.org/wiki/Fatorial

const fatorial = (numero) => {
  if(numero === 0)
    return 1
  else
    return numero * fatorial(numero-1)
}

describe('Fatorial',  () => {
  it('O fatorial de 5 deve ser 120', () => {
    const resultado = fatorial(5)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(120)

  })
  it('O fatorial de 4 deve ser 24', () => {
    const resultado = fatorial(4)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(24)
  })
  it('O fatorial de 3 deve ser 6', () => {
    const resultado = fatorial(3)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(6)
  })
  it('O fatorial de 2 deve ser 2', () => {
    const resultado = fatorial(2)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(2)
  })
  it('O fatorial de 0 deve ser 1', () => {
    const resultado = fatorial(0)
    expect(resultado).not.to.be.NaN
    expect(resultado).to.equal(1)
  })
})
