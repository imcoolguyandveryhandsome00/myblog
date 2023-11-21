import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { StudentController } from 'student/student.controller';
import { StudentDto } from 'student/student.dto';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CatController,StudentController],
  providers: [AppService,CatService],
})
export class AppModule {}
