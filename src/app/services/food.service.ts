import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

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
  getllTags():Tag[]{
    return sample_tags
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag==='All'?
    this.getAllFood():
    this.getAllFood().filter(food=>food.tags?.includes(tag));
  }
}
