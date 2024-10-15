const searchbox=document.querySelector('.searchbox');
const searchbutton=document.querySelector('.searchbutton');
const recepiecontainer=document.querySelector('.recepiecontainer');

//Function to get recepies
const fetchRecepies=async (query) => {
    // const data=await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    recepiecontainer.innerHTML="<h2>Fetching RECEPIES</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

    const response =await data.json();
    // console.log(response);



    recepiecontainer.innerHTML=" ";
    response.meals.forEach(meal=>{
        // console.log(meal);
        const recipeDiv=document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`<img src="${meal.strMealThumb}"> 
        <h3>${meal.strMeal}</h3>
        <p> ${meal.strArea}</p>
        <p> ${meal.strCategory}</p>`

        const button=document.createElement('button');
        button.textContent="View Recipe"
        recipeDiv.appendChild(button);


        recepiecontainer.appendChild(recipeDiv);
        

    })
}


searchbutton.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchbox.value.trim();
    fetchRecepies(searchInput);
    // console.log("ButtonClicked");
})