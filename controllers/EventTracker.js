
const Tracker = require('../Models/TrackModels');

const EventTracker = async (req,res) => {
    console.log(req.query.trackerId);
    const trackerId = req.query.trackerId;
    let exists = await Tracker.findOne({TrackerId: trackerId});
    if(exists){
        exists.openby += 1;
        await exists.save();
    }
    else{
        await new Tracker({
            TrackerId: trackerId,
            openby: 1
        }).save();

        
    }
    res.send({msg: "success"});
    
}


module.exports = EventTracker;