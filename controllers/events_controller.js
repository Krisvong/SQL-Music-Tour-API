//DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')

// Import the Event model
const { Event } = db

// FIND ALL EVENTS SHOW ROUTE
events.get('/', async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [['start_time', 'ASC']],
      where: {
        name: {
          [Op.like]: `%${req.query.name ? req.query.name : ''}%`
        }
      }
    })
    res.status(200).json(foundEvents)
  } catch (error) {
    res.status(500).json(error)
  }
})

// FIND ONE EVENT
events.get('/:id', async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id }
    })
    if (foundEvent) {
      res.status(200).json(foundEvent)
    } else {
      res.status(404).json({ message: 'Event not found' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// CREATE AN EVENT POST ROUTE
events.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body)
    res.status(200).json({
      message: 'Successfully inserted a new event',
      data: newEvent
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE AN EVENT PUT ROUTE
events.put('/:id', async (req, res) => {
  try {
    const updatedEvents = await Event.update(req.body, {
      where: { event_id: req.params.id }
    })
    res.status(200).json({
      message: `Successfully updated ${updatedEvents[0]} event(s)`
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE AN EVENT
events.delete('/:id', async (req, res) => {
  try {
    const deletedEvents = await Event.destroy({
      where: { event_id: req.params.id }
    })
    res.status(200).json({
      message: `Successfully deleted ${deletedEvents} event(s)`
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// EXPORT
module.exports = events
