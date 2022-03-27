const mongoose = require("mongoose");

const Player = require("../models/player");
const StatPlayer = require("../models/statisticPlayer");
const CompPlayer = require("../models/competencePlayer");

const UpdatePlayer = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send({ Message: "Error: Competence ID invalid !" });
  }
  const player = await Player.findOneAndUpdate(
    { _id: req.params.id },
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthDate: req.body.birthDate,
      picture: req.body.picture,
      email: req.body.email,
      sex: req.body.sex,
      birthplace: req.body.birthplace,
      scholar: req.body.scholar,
      schoolType: req.body.schoolType,
      country: req.body.country,
      tel: req.body.tel,
      weight: req.body.weight,
      height: req.body.height,
      LeftRight: req.body.LeftRight,
      active: req.body.active,
    },
    { new: true }
  );
  //update statPlayer
  const statPlayer = await StatPlayer.deleteMany({
    playerId: req.params.id,
  });
  Array.from(req.body.stats).forEach((stats) => {
    const statsPlayer = new StatPlayer({
      statId: stats,
      playerId: player._id,
    });
    statsPlayer.save();
  });
  //update compPlayer
  const compPlayer = await CompPlayer.deleteMany({
    playerId: req.params.id,
  });
  Array.from(req.body.comp).forEach((comp) => {
    const compPlayer = new CompPlayer({
      compId: comp,
      playerId: player._id,
    });
    compPlayer.save();
  });

  if (!player) {
    return res.status(404).send({ Message: "ERROR ! " });
  }
  res.json(player);
};

module.exports = {
  UpdatePlayer,
};