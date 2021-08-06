import axios from "axios";

const getFoodRecipe = (includedIngredients) => {

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=XXX&query=${includedIngredients.join(",+")}`)
    .then((response) => {
      console.log(response.data);
      
    }, (error) => {
      console.log(error)
    });
}





export default getFoodRecipe;

