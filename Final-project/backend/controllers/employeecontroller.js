const Employee = require("../models/Employee");

// add employee
const addemp = async (req,res)=>{

    try {
        const emp = await Employee.create(req.body);
        res.json({
            message:"employee added successfully",
            emp
        });
    } catch(err){
        console.error(err);
    }
}

//view all emp

const getemp = async (req,res)=>{

    try {
        const emp = await Employee.find();
        res.json(emp);
    } catch(err){
        console.error(err);
    }
}
//singel view
const singelemp = async (req,res)=>{

    try {
        const emp = await Employee.findById(req.params.id);
        res.json(emp);
    } catch(err){
        console.error(err);
    }
}

//update
const updateemp = async (req,res)=>{

    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id,req.body, {new:true});
        res.json(emp);
    } catch(err){
        console.error(err);
    }
}

//delete
const deleteemp = async (req,res)=>{

    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({message:"employee deleted successfully"});
    } catch(err){
        console.error(err);
    }
}

module.exports = {addemp,getemp,singelemp,updateemp,deleteemp}