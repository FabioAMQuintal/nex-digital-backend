//import { Recipe, RecipeTags, Tag, Review, Ingredient, RecipeIngredients } from './models'

import User from '../user/User';

const isDev = process.env.NODE_ENV === 'development'

const dbInit = async () => {
  await User.sync({ alter: isDev })
}

export default dbInit;