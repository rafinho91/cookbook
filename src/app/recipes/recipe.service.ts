import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test description', 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'),
        new Recipe('A Test2 Recipe', 'Test2 description', 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'),
        new Recipe('A Test3 Recipe', 'Test3 description', 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}
