import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Course } from "src/course/course.model";

@Table({ tableName: "lesson" })
export class Lesson extends Model<Lesson> {
   @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
   id: number

   @ApiProperty({ example: "1-dars", description: "Lesson name" })
   @Column({ type: DataType.STRING, allowNull: false })
   name: string

   @ApiProperty({ example: "Html heading", description: "Lesson title" })
   @Column({ type: DataType.STRING, allowNull: false })
   title: string

   @ApiProperty({ example: "lorem", description: "Lesson description" })
   @Column({ type: DataType.STRING, allowNull: false })
   description: string

   @ApiProperty({ example: "<h1>salom<h2>", description: "Lesson code" })
   @Column({ type: DataType.STRING, allowNull: false })
   code: string


   @ForeignKey(() => Course)
   @Column
   courseId: number;

   @BelongsTo(() => Course)
   course: Course;
}