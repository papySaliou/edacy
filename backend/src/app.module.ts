import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivresModule } from './livres/livres.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
 database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LivresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
