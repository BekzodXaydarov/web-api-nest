import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';

export class UpdateLessonDto {
    @ApiProperty({ example: "1-dars", description: "Lesson name" })
    @IsString({})
    name: string

    @ApiProperty({ example: "Html heading", description: "Lesson title" })
    @IsString({})
    title: string

    @ApiProperty({ example: "lorem", description: "Lesson description" })
    @IsString({})
    description: string

    @ApiProperty({ example: "<h1>salom<h2>", description: "Lesson code" })
    @IsString({})
    code: string

    @ApiProperty({ example: 1, description: "Course id" })
    @IsNumber()
    courseId: number
}