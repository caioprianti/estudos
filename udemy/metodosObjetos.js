const objeto = {
    nome: "Caio",
    idade: 27
}
//copiando com spread operator
const copia = { ...objeto}
console.log(copia)

//copiando com assign
const copia2 = Object.assign({}, copia) // Copia da copia kk // assign passa varios objetos para um só
console.log(copia2)

//metodos uteis
console.log(Object.keys(copia2)) //mostra chaves
const outroObjeto = {nome: "Daniel", sobrenome: "Teles"}
Object.freeze(outroObjeto) // trava a alteração de valores do objeto
outroObjeto.nome = "Caio" // não vai funcionar devido ao freeze
console.log(outroObjeto.nome)
// ver propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(outroObjeto, "nome"))


