const blogCards = require('./../models/blogCardsModel');

exports.get_function = async (req, res) => {
    try {
        const newblogCard = await blogCards.find();
        res.status(200).json({
            status: 'success',
            result: newblogCard.length,
            data: { newblogCard },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err,
        });
    }
};

exports.post_function = async (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};

exports.get_index_function = async (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};

exports.patch_index_function = async (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};

exports.delete_index_function = async (req, res) => {
    res.status(200).json({
        status: 'success',
    });
};