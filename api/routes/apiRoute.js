'use strict';
module.exports = function(app) {
    var record = require('../controllers/apiController');

    app.get('/',)
    app.route('/record')
        .get(record.list_all_records)
        .post(record.create_a_record);

    app.route('/record/:recordId')
        .get(record.read_a_record)
        .put(record.update_a_record)
        .delete(record.delete_a_record);

};
