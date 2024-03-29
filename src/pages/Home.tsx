import React from "react";
import { stateType } from "../utils/types";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Home = ({ meals }: { meals: stateType[] }) => {
  return (
    <>
      <Nav />
      <main className="grid grid-cols-3 gap-6 p-4">
        <>
          {meals.map((meal) => (
            <Link to={`/single-meal/${meal.idMeal}`} key={meal.idMeal}>
              <figure>
                <img src={meal.strMealThumb} alt="" />
                <figcaption className="font-semibold mt-2">{meal.strMeal}</figcaption>
              </figure>
            </Link>
          ))}
        </>
      </main>
    </>
  );
};

export default Home;
