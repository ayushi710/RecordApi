var mongoose = require('mongoose');
var Record = mongoose.model('Records');
exports.list_all_records = function (req , res) {
    Record.find({},function (err , record) {
        if(err)
            res.send(err);
        res.json(record);
        
    });
    
};

exports.create_a_record = function (req , res) {
    var new_record = new Record(req.body);
    new_record.save(function (err , record) {
        if(err)
            res.send(err);
        res.json(record);
    })

};

exports.read_a_record = function (req , res) {
    Record.findById(req.param.recordId),function (err, record) {
        if(err)
            res.send(err);
        res.json(record);
    }
};

exports.update_a_record = function(req, res) {
    Record.findOneAndUpdate({_id: req.params.recordId}, req.body, {new: true}, function(err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};

exports.delete_a_record = function (req , res) {
    Record.remove({
        _id : req.param.recordId
    }, function (err , record ) {
        if(err)
            res.send(err);
        res.json({message : "record deleted successfully"});

    });

};