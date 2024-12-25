import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lesson } from './lesson.model';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson) private readonly lessonRepository: typeof Lesson
  ) { }
  async create(createLessonDto: CreateLessonDto) {
    return await this.lessonRepository.create(createLessonDto)
  }

  async findAll() {
    return await this.lessonRepository.findAll()
  }

  async findOne(id: number) {
    const lesson = await this.lessonRepository.findByPk(id)
    if (!lesson) {
      throw new HttpException("lesson yo`q", HttpStatus.BAD_REQUEST)
    }
    return lesson
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.lessonRepository.findByPk(id)
    if (!lesson) {
      throw new HttpException("lesson yo`q", HttpStatus.BAD_REQUEST)
    }
    await lesson.update(updateLessonDto)
    return lesson
  }

 async remove(id: number) {
    const lesson = await this.lessonRepository.findByPk(id)
    if (!lesson) {
      throw new HttpException("lesson yo`q", HttpStatus.BAD_REQUEST)
    }
    await lesson.destroy()
    return "Lesson deleted"
  }
}
