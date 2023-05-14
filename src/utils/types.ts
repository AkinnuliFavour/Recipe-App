export type stateType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type mealType = {
  [key: string]: any;
};

export type mealObjectType = {
  meals: mealType[];
};
