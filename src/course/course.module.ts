import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from './course.model';
import { Lesson } from 'src/lesson/lesson.model';

@Module({
  imports: [SequelizeModule.forFeature([Course,Lesson])],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService]
})
export class CourseModule { }
