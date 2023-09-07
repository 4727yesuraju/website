import mongoose from 'mongoose'

const schema = mongoose.Schema({
    img:{
        type:String
    }
})

const Item = mongoose.model('data',schema);
export default Item;