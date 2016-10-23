const expect = require('chai').expect

const type = 'acid'

// base = sal + H2O
// metal = sal

const reagir = (type) => {
  switch (type) {
    case 'base': 
      return ['sal', 'H2O']
      break
    case 'metal': 
      return ['sal']
      break
  }
}
const Acid = {
  reagir
}

describe('Ácido reagindo com Base',  () => {
  it('Resultado deve retornar 2 elementos', () => {
    const type = 'base'
    expect(Acid.reagir(type)).to.have.length(2)
  })
  it('Resultado deve conter apenas sal + H2O', () => {
    const type = 'base'
    const result = ['sal', 'H2O']
    expect(Acid.reagir(type)).to.eql(['sal', 'H2O'])
  })
})
describe('Ácido reagindo com Metal',  () => {
  it('Deve retornar sal', () => {
    const type = 'metal'
    const result = ['sal']
    expect(Acid.reagir(type)).to.have.length(1)
    expect(Acid.reagir(type)).to.contain('sal')
  })
  it('Não pode retornar nada diferente de sal', () => {
    const type = 'metal'
    const result = ['sal']
    expect(Acid.reagir(type)).to.contain('sal', 'H2O')
  })
})