import { Module } from '@nestjs/common';
import { LivresService } from './livres.service';
import { LivresController } from './livres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livres } from './src/livres/livres.entity';
// import { LivresController } from './livres.controller';

@Module({
  // imports: [LivresModule],
  imports: [TypeOrmModule.forFeature([Livres])],
  providers: [LivresService],
  controllers: [LivresController]
})
export class LivresModule {}
