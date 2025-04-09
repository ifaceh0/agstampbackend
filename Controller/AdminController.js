import StampModel from "../Model/stampModel.js"
import { synchFunc } from "../Utils/SynchFunc.js";


export const allStamps = synchFunc(async (_, res) => {
    const stamps = await StampModel.find();
    res.status(201).json({ success:true, stamps });
});

