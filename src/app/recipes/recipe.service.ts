import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Hamburger',
            'Test description',
            'https://upload.wikimedia.org/wikipedia/commons/8/85/Hamburger_10000000041715_001080_%2815637928889%29.jpg',
            [ new Ingredient('Meat', 1), new Ingredient('Bun', 2) ]),
        new Recipe('Banana Dessert',
            'Test2 description',
            'https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282319_960_720.jpg',
            [ new Ingredient('Banana', 6), new Ingredient('Chocolate', 3) ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppongList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}
