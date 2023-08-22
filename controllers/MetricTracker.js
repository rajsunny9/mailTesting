const Tracker = require('../Models/TrackModels');

const MetricTracker = async (req,res) => {
    const trackerId = req.query.trackerId;

    const obj = await Tracker.findOne({TrackerId: trackerId});

    res.send(obj);
}

module.exports = MetricTracker;