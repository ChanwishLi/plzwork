import { Timestamp } from "firebase/firestore";

export interface Store{
    id: string;
    name: string;
    userID : string;
    createdAt : Timestamp;
    updatedAt : Timestamp;

}