import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/meal";
import { mealObjectType } from "../utils/types";

const SingleMealPage = () => {
  const { id } = useParams();
  const [mealObject, setMealObject] = useState<mealObjectType | null>(null);
  // console.log(id);

  useEffect(() => {
    const fetchSingleMeal = async () => {
      try {
        const response = await api.get(`lookup.php?i=${id}`);
        const data = response.data;
        setMealObject(data);
        // console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
        } else {
          console.log(`Error: ${String(err)}`);
        }
      }
    };
    fetchSingleMeal();
  }, []);

  // if(mealObject !== null){

  // }

  const ingridentsArr =
    mealObject &&
    mealObject.meals.map((meal) => Object.keys(meal).slice(9, 29));

  console.log(ingridentsArr);

  mealObject ? console.log() : null;
  return (
    <main className="flex p-6">
      {mealObject &&
        mealObject.meals.map((meal, idx) => (
          <section
            key={idx}
            className="grid lg:grid-cols-2 gap-4 border border-secondary p-4 shadow-md shadow-main rounded-md"
          >
            <img src={meal.strMealThumb} alt="" />
            <div className="lg:mt-12">
              <p className="text-center text-primary text-xl font-bold">
                {meal.strMeal}
              </p>
              <h3 className="mt-8 text-center text-primary text-xl font-bold">
                Ingridents
              </h3>
              <ul className="bg-secondary px-6 py-4 text-primary mt-4 rounded-md">
                {ingridentsArr?.map((ingridents) =>
                  ingridents.map((ingrident) => <li>{meal[ingrident]}</li>)
                )}
              </ul>
              <h3 className="mt-8 text-center text-primary text-xl font-bold">
                Instructions
              </h3>
              <p className="bg-secondary px-6 py-4 text-primary mt-4 rounded-md">
                {meal.strInstructions}
              </p>
            </div>
          </section>
        ))}
    </main>
  );
};

export default SingleMealPage;
