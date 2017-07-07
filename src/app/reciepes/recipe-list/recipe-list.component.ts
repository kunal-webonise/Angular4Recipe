import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Chole", "Masala Chole", "http://www.lucyzodion.com/files/cache/669eadc88e7eff7967b77c4aad45375f_f146.jpg" )
  constructor() { }

  ngOnInit() {
  }

}
