

import { Document, Schema,model,models } from "mongoose";

export interface IImage extends Document {
    title: string;
    inferenceType: string;
    publicId: string;
    width?: number;
    height?: number;
    inferenceUrl?: URL;
    aspectRatio?: string;
    author: {
        _id: string ;
        firstName:string;
        lastName:string;

    }; // Assuming author is the ID of the user
}

const ImageSchema = new Schema({
    title :{type:String, required: true},
    inferenceType:{type: String, required: true},
    publicId:{type: String, required: true},
    width:{type: Number},
    height:{type: Number},
    inferenceUrl : {type: URL},
    aspectRatio: {type: String},
    author: {type :Schema.Types.ObjectId, ref: 'User'},
});

const Image = models?.Image || model('Image',ImageSchema)

export default Image;