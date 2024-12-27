const testControllers = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'Success',
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = testControllers;
