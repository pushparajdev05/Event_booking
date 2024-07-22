const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
        customer: {type: String,
            },
        event: { type: String
            },
        date: { type: String
            },
        seat: { type: String
            },
        ticket: { type: String
            }
    })

module.exports = mongoose.model('customer', customerSchema);
