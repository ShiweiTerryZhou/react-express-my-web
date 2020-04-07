const fs = require('fs');

const projectCards = JSON.parse(
  fs.readFileSync(`${__dirname}/../dummy_data/projectCards.json`)
);

exports.get_projectcards = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: projectCards.length,
    data: { projectCards: projectCards },
  });
};

exports.get_projectcards_index = (req, res) => {
  let projectCard = projectCards.find(
    (el) => el.index === req.params.index * 1
  );
  res.status(200).json({
    status: 'success',
    data: { projectCard },
  });
};

exports.patch_projectcards_index = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.post_projectcards = (req, res) => {
  console.log(req.body);
  let newIndex = projectCards[projectCards.length - 1].index + 1;
  let newProjectCard = Object.assign({ index: newIndex }, req.body);
  projectCards.push(newProjectCard);
  fs.writeFile(
    `${__dirname}/../dummy_data/projectCards.json`,
    JSON.stringify(projectCards),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          data: newProjectCard,
        },
      });
    }
  );
};
