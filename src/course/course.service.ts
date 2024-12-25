import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './course.model';
import { Lesson } from 'src/lesson/lesson.model';

@Injectable()
export class CourseService {

  constructor(
    @InjectModel(Course) private readonly courseModel: typeof Course,
  ) { }

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseModel.create(createCourseDto)
  }

  async findAll() {
    return await this.courseModel.findAll({
      include: [Lesson]
    })
  }

  async findOne(id: number) {
    const course = await this.courseModel.findByPk(id, {
      include: [Lesson]
    })
    if (!course) {
      throw new HttpException("Course yo`q", HttpStatus.BAD_REQUEST)
    }
    return course
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseModel.findByPk(id)
    if (!course) {
      throw new HttpException("Course yo`q", HttpStatus.BAD_REQUEST)
    }
    await course.update(updateCourseDto)
    return course
  }

  async remove(id: number) {
    const course = await this.courseModel.findByPk(id)
    if (!course) {
      throw new HttpException("Course yo`q", HttpStatus.BAD_REQUEST)
    }
    await course.destroy()
    return "Course deleted"
  }
}
