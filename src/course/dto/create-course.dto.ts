import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { CreateLessonDto } from "src/lesson/dto/create-lesson.dto";

export class CreateCourseDto {
    @ApiProperty({ example: "HTML", description: "Course name" })
    @IsString()
    name: string

    @ApiProperty({ example: "lorem", description: "Course description" })
    @IsString()
    description: string
}