/*const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Créer un nouveau rendez-vous
router.post('/book', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer tous les rendez-vous
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.status(200).send(appointments);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
*/
