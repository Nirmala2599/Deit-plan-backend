const mongoose =require("mongoose");

const deitSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    breakfast: {
        type: String,
        required: true
    },
    lunch: {
        type: String,
        required: true
        
    },
     snack: {
        type: String,
        required: true
        
    },
    dinner: {
        type: String,
        required: true
    }
}
    );
var deitdata = mongoose.model('deitdata',deitSchema);
module.exports=deitdata;