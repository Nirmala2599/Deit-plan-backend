const express =require("express");
const mongoose =require("mongoose");

const deit = require("../models/deitdata");

const router =express.Router();

const createDeit =async(req, res) => {
    console.log("Request from Postman: "+req.body);
    
    const newDeit =new deit ({
     title: req.body.title,
      breakfast:req.body.breakfast,
      lunch: req.body.lunch,
      snack: req.body.snack,
      dinner: req.body.dinner,
     
    });
  try{
  await newDeit.save();
    
res.status(201).json(req.body)
      
  }
  catch(error){
    
    res.status(400).json({message: error.message});
   }
};

const getDeits = async(req, res) =>{
    try{
        const Deits = await deit.find();
        res.status(200).json(Deits);

    }
    catch(error){
        res.status(400).json({message: error.message});

    }
}

const getSpecificDeit = async (req, res) => {
    const _id = req.params._id;
    try {
      const Dei = await deit.findOne({_id: _id});
  
      res.status(200).json(Dei);
    }
    catch(error) {
      res.status(400).json({ message: error.message });
    }
  }

const updateDeit = async (req, res) => {
    const _id = req.params.id;
  
    try {
      await deit.findOneAndUpdate({
        _id:_id,
      },
      {
       // title: req.body.title
       // $pop:{ subjects: 1}
      // $addToSet:{title:req.body.title}

      }
      )
   
      res.status(201).json({_id: _id});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteDeit = async (req, res) => {
    const _id = req.params._id;
  
    try {
      await deit.findOneAndRemove({
        _id: _id,
      });
  
      res.status(201).json({_id: _id});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


   
module.exports.createDeit = createDeit;
module.exports.getDeits = getDeits;
module.exports.getSpecificDeit = getSpecificDeit;
module.exports.updateDeit = updateDeit;
module.exports.deleteDeit = deleteDeit;
