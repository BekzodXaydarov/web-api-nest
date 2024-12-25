import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table, } from "sequelize-typescript";
import { Lesson } from "src/lesson/lesson.model";

@Table({ tableName: "course" })
export class Course extends Model<Course> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({example:"HTML",description:"Course name"})
    @Column({type:DataType.STRING,allowNull:false})
    name: string

    @ApiProperty({example:"lorem",description:"Course description"})
    @Column({type:DataType.STRING,allowNull:false})
    description: string

    @HasMany(() => Lesson)
    lessons: Lesson[];
}