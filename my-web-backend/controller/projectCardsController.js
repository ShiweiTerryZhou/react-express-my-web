const ProjectCards = require('./../models/projectCardsModel');

exports.get_projectcards = async (req, res) => {
  try {
    const newProjectCard = await ProjectCards.find();
    res.status(200).json({
      status: 'success',
      result: newProjectCard.length,
      data: { newProjectCard },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.get_projectcards_index = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

exports.patch_projectcards_index = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

exports.post_projectcards = async (req, res) => {
  try {
    const newProjectCard = await ProjectCards.create(req.body);
    res.status(200).json({
      status: 'success',
      data: { newProjectCard },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};
