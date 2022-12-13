const { v4: uuidv4} = require("uuid")
const express = require("express")
const app = express()
app.use(express.json())
// localhost:3000/projects?title=Node&owner=Caio&page=1
const id = uuidv4()  
const projects = []

function logsRoutes(req, res, next){
    console.log(req)
    const {method, url} = req
}

//GET
app.get("/projects", (req,res) => {
    return res.json(projects)
})
     //POST CRIAÇÂO
app.post("/projects", (req,res) => {
    const {name, owner} = req.body //desestruturação
    const project = {
        id: uuidv4(),
        name,
        owner
    }
    projects.push(project)

    return res.status(201).json(project)
})
     //PUT ATUALIZAÇÂO
app.put("/projects/:id", (req,res) => {
    const {id} = req.params //desestruturação
    const {name, owner} = req.body
    
    const projectIndex = projects.findIndex(p => p.id === id) // p = posição
    if(projectIndex < 0){
        return res.status(404).json({error: "Project not found"}) //erro not found
    }

    if(!name && !owner) {
        return res.status(400).json({error: "Name and owner are required"}) //erro bad request
    }

    const project = {
        id,
        name,
        owner
    }
    projects[projectIndex] = project

    return res.json(project)
})
     //DELETE
app.delete("/projects/:id", (req,res) => {

    const {id} = req.params
    const projectIndex = projects.findIndex((p) =>{ return p === id })
    projects.splice(projectIndex, 1)
    return res.status(204).send()
})

app.listen(3000, () => {
    console.log("O servidor está rodando")
})