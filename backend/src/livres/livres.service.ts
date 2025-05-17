import { Injectable, NotFoundException } from '@nestjs/common';
// import { Livres } from './src/livres/livre.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Livres } from './src/livres/livres.entity';

@Injectable()
export class LivresService {
    
  constructor(
    @InjectRepository(Livres)
    private livresRepository: Repository<Livres>
  ) {}

  findAll(): Promise<Livres[]> {
    return this.livresRepository.find()
  }

//   findOne(id: number): Promise<Livres> {
//     return this.livresRepository.findOneBy({ id })
//   }
  async findOne(id: number): Promise<Livres> {
    const livre = await this.livresRepository.findOneBy({ id });
    if (!livre) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return livre;
  }

  create(livre: Livres): Promise<Livres> {
    return this.livresRepository.save(livre)
  }

  async update(id: number, updateLivreDto: Partial<Livres>): Promise<Livres> {
    await this.livresRepository.update(id, updateLivreDto);
    const livre = await this.livresRepository.findOneBy({ id });
    if (!livre) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return livre;
  }

//   create(livre: Livres): Promise<Livres> {
//     return this.livresRepository.save(livre)
//   }

//   async update(id: number, updateBookDto: Partial<Livres>): Promise<Livres> {
//     await this.livresRepository.update(id, updateBookDto)
//     return this.livresRepository.findOneBy({ id })
//   }

  async remove(id: number): Promise<void> {
    await this.livresRepository.delete(id)
  }
}