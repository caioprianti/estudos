const promise = new Promise((resolve, reject)=>{
    const nome = "Fabio"
    if(nome === "Caio"){
        resolve(`Usuario ${nome} encontrado`)
    }else{
        reject(`Usuario ${nome} não encontrado`)
    }
})
promise.then((dado)=>{
    console.log(dado)
}).catch((dado)=>{
    console.log(dado)
})