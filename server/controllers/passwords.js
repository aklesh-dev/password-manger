import mongoose from "mongoose";
import PassOP from "../models/password.js";

export const getPass = async (req, res) => {
    try {
        const pass = await PassOP.find();
        res.status(200).json(pass);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPass = async (req, res) => {
    const { site, username, password } = req.body;
    const newPass = new PassOP({ site, username, password });
    try {
        await newPass.save();
        res.status(201).json(newPass);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePass = async (req, res) => {
    const { id: _id } = req.params;
    const pass = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No password with that id');
    }

    const updatedPass = await PassOP.findByIdAndUpdate(_id, pass, { new: true });

    res.json(updatedPass);
};


export const deletePass = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No password with id: ${id}`);
    }
    try {
        console.log(`Attempting to delete password with id: ${id}`);
        const deletePass = await PassOP.findByIdAndDelete(id);
        if (!deletePass) {
            return res.status(404).json({message: "Password not found"});
        }
        res.json({ message: 'Password deleted successfully' });
    } catch (error) {
        console.error('Error deleting password:', error);
        res.status(500).send(error.message);
    }
};
