const mongoose = require('mongoose')
const Playlist = new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 thumbnail:{
    type:String,
    required:true,
 },

 songs:[{
    type:mongoose.Types.ObjectId,
    ref:'Song',
 }],

 owner:{
    type:mongoose.Types.ObjectId,
    ref:'User',
 },
 collaborators:[{
    type:mongoose.Types.ObjectId,
    ref:'User',
 }],

 

})

const playlistModel= mongoose.model('playlist',Playlist)
module.exports=playlistModel