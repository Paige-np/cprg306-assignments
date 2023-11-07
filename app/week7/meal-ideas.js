"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if(!response.ok){
        console.log(response);
    }
    const data = await response.json();
    console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas(thisIngredient) {
    try {
      const fetchMeals = await fetchMealIdeas(thisIngredient);
      setMeals(fetchMeals);
    } catch (error) {
      console.log(error);
    }    
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
        <label className="text-xl font-bold text-[#222422]">Meal Ideas</label>
        <ul>
            { meals !== null && meals !== undefined ?
            meals.map((meal) => (
                <li key={meal.idMeal}>
                    <a href={meal.strSource}>{meal.strMeal}</a>
                    <div>{meal.strMeal}</div>
                </li>
            )) : <p>There is no recipe for {ingredient}</p>}
        </ul>
    </div>
    // <div className="max-w-sm ">
    //   <h2 className="text-3xl font-bold text-black">Meal Ideas</h2>
    //   {meals == null ? (
    //     <p className="pt-2 font-bold text-black">
    //       No recipe for {ingredient}
    //     </p>
    //   ) : (
    //     <>
    //       <p className="pt-2 pb-2 font-bold text-black">
    //         Here are some recipes using {ingredient}:
    //       </p>
    //       <ul className="mt-2 space-y-2">
    //         {meals.map((meal) => (
    //           <li key={meal.idMeal}>
    //             <div className="rounded p-2 bg-blue-900 hover:bg-pink-900 cursor-pointer ">
    //               {meal.strMeal}
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    // </div>
  );
}
