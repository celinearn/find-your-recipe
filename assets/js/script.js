let run = document.querySelector('#run');
let listofmeal = document.querySelector('#replacebymeal');
let listofrecette = document.querySelector('#replacebyrecette');
let choose = document.querySelector('#choose');
let recettehasard = document.querySelector('#replacebyhasard');



run.addEventListener("click", () => {
	
	let ingredient = document.getElementById("ingredient").value;

	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
	.then(response => response.json())
	.then(data => {

		// listofmeal.innerHTML = ""
		data.meals.forEach((element) => {
		//     listofmeal.insertAdjacentHTML("beforeend", `<div class="card" data-id="${element.idMeal}">
		//     <div class="poster" style="background-image: url('${element.strMealThumb}')"></div>
		//   <div class="name">${element.strMeal}</div>
		// </div>`)
			    listofmeal.insertAdjacentHTML("beforeend", `<div class="wrapper">
			      <div id="card" data-id="${element.idMeal}"><img src="${element.strMealThumb}"/>
			        <div class="info">
			          <h4 id="titreplat">${element.strMeal}</h4>
			          </br>
			          <a href="#replacebyrecette"><button class="firstbtn" id="therecipe">The Recipe</button></a>
			        </div>
			      </div>
			    </div>`)

		    })
		selectInit();
	})
	// .catch(err => {
	// 	console.error(err);
	// });
});   

function checkforRecette(mealId) {

	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
	.then(response => response.json())
	.then(data => {

		console.log(data.meals[0])

		let mealingredient1 = data.meals[0].strIngredient1;
		let mealingredient2 = data.meals[0].strIngredient2;
		let mealingredient3 = data.meals[0].strIngredient3;
		let mealingredient4 = data.meals[0].strIngredient4;
		let mealingredient5 = data.meals[0].strIngredient5;
		let mealingredient6 = data.meals[0].strIngredient6;
		let mealingredient7 = data.meals[0].strIngredient7;
		let mealingredient8 = data.meals[0].strIngredient8;
		let mealingredient9 = data.meals[0].strIngredient9;
		let mealingredient10 = data.meals[0].strIngredient10;

		let meal = data.meals[0].strMeal;
		let image = data.meals[0].strMealThumb;
		let mealRecette = data.meals[0].strInstructions;
		let mealVideo = data.meals[0].strYoutube;
		let videoId = mealVideo.substr(mealVideo.length - 11);

		console.log(data.meals[0].strInstructions);

		listofrecette.innerHTML = `<br>
		<hr>
		<center><h2 id="nomdurepas">${meal}</h2></center>
		<div id="photoetingredient">
		<div>
		<img class="fit-picture"
		id="imgrecette"
     src="${image}"
     alt="recette"
     width="300px"
     height="100%">
     </div>
     <div id="ing">
     <h3>Ingredients</h3>
		<ul><li>${mealingredient1}</li><li>${mealingredient2}</li><li>${mealingredient3}</li><li>${mealingredient4}</li><li>${mealingredient5}</li><li>${mealingredient6}</li><li>${mealingredient7}</li><li>${mealingredient8}</li></ul>
		</div>
		</div>
		<h3>The recipe</h3>
		<p class="instructions">${mealRecette}</p>
		<div class="container-video">
		<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen class="video"></iframe>
		</div>`

		})

	.catch(err => {
		console.error(err);
	});  

}

function selectInit(){
  let cards = document.querySelectorAll('#card')

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      listofrecette.insertAdjacentHTML('beforeend', card.outerHTML)
      checkforRecette(card.dataset.id)
    })

    
  })
}

//RANDOM RECETTE

choose.addEventListener("click",function() {
	fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
	.then(response => response.json())
	.then(data => {

		let mealRandom = data.meals[0].strMeal;
		let mealRecette = data.meals[0].strInstructions;
		let image = data.meals[0].strMealThumb;
		let mealVideo = data.meals[0].strYoutube;
		let videoId = mealVideo.substr(mealVideo.length - 11);
		let mealingredient1 = data.meals[0].strIngredient1;
		let mealingredient2 = data.meals[0].strIngredient2;
		let mealingredient3 = data.meals[0].strIngredient3;
		let mealingredient4 = data.meals[0].strIngredient4;
		let mealingredient5 = data.meals[0].strIngredient5;
		let mealingredient6 = data.meals[0].strIngredient6;
		let mealingredient7 = data.meals[0].strIngredient7;
		let mealingredient8 = data.meals[0].strIngredient8;
		let mealingredient9 = data.meals[0].strIngredient9;
		let mealingredient10 = data.meals[0].strIngredient10;
	


		recettehasard.innerHTML = `<hr>
		<h3 id="mealrandom">${mealRandom}</h3>
		<div id="photoetingredient">
	<p><img class="fit-picture"
     src="${image}"" width="300px"
     alt="recette" height="100%"></p>
     <div id="ing">
		<h4>Ingredients</h4>
		<ul><li>${mealingredient1}</li><li>${mealingredient2}</li><li>${mealingredient3}</li><li>${mealingredient4}</li><li>${mealingredient5}</li><li>${mealingredient6}</li><li>${mealingredient7}</li><li>${mealingredient8}</li></ul>
		</div>
		</div>
		<h4>The Recipe</h4>
		<p class="instructions">${mealRecette}</p>
		<div class="container-video">
				<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen class="video"></iframe>
				</div>`


	})

	.catch(err => {
		console.error(err);
	});
});


// Wrap every letter in a span
let textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

//Arrow scroll
  let arrowUp = document.getElementById("arrow");
   
  arrowUp.style.display = "none";
      
  window.addEventListener("scroll", () => {
   
  	if(window.scrollY > 300){
   
  		arrowUp.style.display = "block";
  	}
  	else{
   
  		arrowUp.style.display = "none";
  	}
  }, false);

//Parallax
  const toque = document.querySelector("chef");
  maxMove = document.offsetWidth / 30;
  toqueCenterX = toque.offsetLeft + (toque.offsetWidth / 2);
  toqueCenterY = toque.offsetTop + (toque.offsetHeight / 2);

  function getMousePos(xRef, yRef) {
  let panelRect = document.getBoundingClientRect();
  return {
      x: Math.floor(xRef - panelRect.left) / 
        (panelRect.right - panelRect.left)*document.offsetWidth,
      y: Math.floor(yRef - panelRect.top) / 
        (panelRect.bottom - panelRect.top) * document.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - toqueCenterX,
  distY = mousePos.y - toqueCenterY;
  if (Math.abs(distX) < 500 && distY < 200) {
  toque.style.transform = 
    "translate("+(-1 * distX) / 12 + "px," + (-1 * distY) / 12 + "px)";
  }
})
