import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "./user.model";

@Table
export class Post extends Model{

    @Column({primaryKey : true , autoIncrement: true})
    postId : number;

    @Column
    title : string;

    @Column
    content : string;

    @Column
    isPublished : boolean;

    @ForeignKey(()=> User)
    @Column
    authorId : number 
    
    @BelongsTo(()=> User)
    author : User;

    @Column
    date : string;
}