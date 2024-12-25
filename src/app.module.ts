import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LessonModule } from './lesson/lesson.module';
import { CourseModule } from './course/course.module';
import { Lesson } from './lesson/lesson.model';
import { Course } from './course/course.model';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Lesson,Course],
      autoLoadModels: true,
      logging: false,
    }),
    LessonModule,
    CourseModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
