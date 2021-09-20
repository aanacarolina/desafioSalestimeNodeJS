const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API em NodeJS para gerenciar os usuários da Salestime",
        "version": "1.0.0",
        "mensagem": "Obrigada pela oportunidade e espero estar no time em breve"
    })
})
module.exports = router