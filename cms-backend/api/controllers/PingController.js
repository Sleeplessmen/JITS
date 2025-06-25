module.exports = {
    ping: async (req, res) => {
        return res.json({ message: 'pong' });
    }
};