import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercsisesModule } from './Exercsises/exercsises.module';
import { ExerciseEntity } from './Exercsises/Entity/exercise.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'DB.sqlite',
      entities: [ExerciseEntity],
      synchronize: true,
    }),
    ExercsisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
