import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common'
// import { Livres } from './src/livres/livre.entity'
import { LivresService } from './livres.service'
import { Livres } from './src/livres/livres.entity'


@Controller('livres')
export class LivresController {
  constructor(private readonly livresService: LivresService) {}

  @Get()
  findAll(): Promise<Livres[]> {
    return this.livresService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Livres> {
    return this.livresService.findOne(id)
  }

  @Post()
  create(@Body() createLivreDto: Livres): Promise<Livres> {
    return this.livresService.create(createLivreDto)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateLivreDto: Partial<Livres>
  ): Promise<Livres> {
    return this.livresService.update(id, updateLivreDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.livresService.remove(id)
  }
}