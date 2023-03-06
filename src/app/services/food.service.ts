import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAllFood().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
