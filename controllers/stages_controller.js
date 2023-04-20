//DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

// FIND ALL STAGES INDEX ROUTE
stages.get('/', async (req, res) => {
  try {
    const foundStages = await Stage.findAll()
    res.status(200).json(foundStages)
  } catch (error) {
    res.status(500).json(error)
  }
})

// SHOW ROUTE
stages.get('/:id', async (req, res) => {
  try {
    const foundStage = await Stage.findByPk(req.params.id)
    if (foundStage) {
      res.status(200).json(foundStage)
    } else {
      res.status(404).json({ message: 'Stage not found' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// CREATE ROUTE
stages.post('/', async (req, res) => {
  try {
    const newStage = await Stage.create(req.body)
    res.status(200).json({
      message: 'Successfully inserted a new stage',
      data: newStage
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE ROUTE
stages.put('/:id', async (req, res) => {
  try {
    const updatedStages = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id
      }
    })
    res.status(200).json({
      message: `Successfully updated ${updatedStages[0]} stage(s)`
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE ROUTE
stages.delete('/:id', async (req, res) => {
  try {
    const deletedStages = await Stage.destroy({
      where: {
        stage_id: req.params.id
      }
    })
    res.status(200).json({
      message: `Successfully deleted ${deletedStages} stage(s)`
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

//EXPORT
module.exports = stages
