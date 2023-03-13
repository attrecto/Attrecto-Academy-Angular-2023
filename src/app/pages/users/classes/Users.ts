import { userBadge } from "./userBadge";

export interface User{
    id:number,
    name:string,
    image:string,
    createdAt:number,
    badges:userBadge[];
}