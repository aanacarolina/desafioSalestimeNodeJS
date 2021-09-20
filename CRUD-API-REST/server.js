const app = require("./src/app")

const PORT = process.env.PORT || 7171

app.listen(PORT, ()=>{
    console.log(`Servidor a todo vapor na Porta: ${PORT}`)
})