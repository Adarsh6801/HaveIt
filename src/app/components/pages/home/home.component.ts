import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[]=[]
  constructor(private foodServices:FoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      console.log(params.searchTerm,'hi this is adarsh');
      
      if(params.searchTerm){
      this.foods=this.foodServices.getAllFoodsBySearchTerm(params.searchTerm);
      console.log('hiii');
      }
      else{
      this.foods=foodServices.getAllFood()
      }
    })
  }
}
