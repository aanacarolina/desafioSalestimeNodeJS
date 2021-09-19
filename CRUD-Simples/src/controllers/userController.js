const mongoose = require('mongoose')
const User = require('../models/userSchema')


const createUser =  async (req,res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        empresa: req.body.empresa,
        canalDeVendas: req.body.canalDeVendas,
        pipeline: req.body.pipeline,
    })
    const existsUser = await User.findOne({ nome: req.body.nome })
    if (existsUser) {
        return res.status(409).json({ error: "Usuário(a) já cadastrado(a)" })
    }

    try { 
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
        return console.log(error.message)
    }
}

const getAll = async (req, res) => {
    const users = await User.find().populate('user') 
    res.json(users)
}

const getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({message: 'Usuário(a) não encontrado(a)'})
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({message: 'Usuário(a) não encontrado(a)'})
        }

        if (req.body.nome != null) {
            user.nome = req.body.nome
        }
        if (req.body.empresa != null) {
            user.empresa = req.body.empresa
        }
        if (req.body.canalDeVendas != null) {
            user.canalDeVendas = req.body.canalDeVendas
        }
        if (req.body.pipeline != null) {
            user.pipeline = req.body.pipeline
        }
        if (req.body.criadoEm != null) {
            user.criadoEm = req.body.criadoEm
        }
        
        const userUpdated = await user.save()
        res.json(userUpdated)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try{    
        const user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({message: 'Usuário(a) não encontrado(a)'})
        }

        await user.remove()
        res.json({ message: 'Usuário(a) deletado(a) com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createUser,
    getAll,
    getById,
    updateUser,
    deleteUser,
    
}