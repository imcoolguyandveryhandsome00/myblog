import{Body,Controller,Get, Param, Req,Post} from"@nestjs/common";
import{CatService} from "./cat.service";
import { ParamsTokenFactory } from "@nestjs/core/pipes";
import { Request } from 'express';
import { CreateCatDTO } from "./cat.dto";
@Controller('cat')
export class CatController{
  constructor(private readonly CatService : CatService){
 
  }
  @Get()
  getIndex(@Req() request : Request) : string{
    let name = request.query['name'];
    let color= request.query['color'] ?? "Black";
   
   
    let resultString = `Cat Listing with name=${request.query['name']} and color=${color}`;
    return resultString
  }
 
  @Get(':id')
  getShow(@Param() params : any) : any{
    return params
  }
  @Post()
  postCreate(@Body() createCatDTO : CreateCatDTO): string{
    let name = createCatDTO.name;
    let sex = createCatDTO.sex;
    let color = createCatDTO.color;
    let age = createCatDTO.age;
    let description = createCatDTO.description;
 
 
    let resultString
     = `Create Cat with name=${name},color=${color}`;
    resultString += `<br/>age=${age}`
    resultString += `<br/>sex=${sex}`
    resultString += `<br/>description=${description}`
    return resultString
  }
}