
# Create your models


```

const  { Schema,model }  = require('mongoose');



const getawaySchema = Schema({

    serial_number: {
        type:String,
        required:[true,'The serial number is required'],
        unique:true
    },
    readable_name: {
        type:String,
        required: [true,'The human readable name is required']
    },
    ipv4_address: {
        type:String,
        required:[true,'The IPV4 address is required'],
        unique:true
    },
    peripheral: [{
        type:Schema.Types.ObjectId,
        ref:'Peripheral',
    }]

});



module.exports = model('Getaway',getawaySchema);

```