let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("results");




let getMovie = () => {

    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter the Movie Name</h3>`
    }

    else {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {

                if (data.Response == 'True') {
                    console.log(data)

                    result.innerHTML = `
                <div class="info">
                <img src =${data.Poster} class="poster">

                <div>
                
                <h2>${data.Tittle}</h2>
                
                </div>


                <div class="rating">
                
                <img src ="star.png">
                <h4>${data.imdbRating}</h4>
                
                </div>



                <div class="details">
                
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
                
                </div>


                <div class="genre">
                
                <div>${data.Genre.split(",").
                            join("</div><div>")}</div>
                
                </div>



                </div>


                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                
                `;


                }

                else {
                    result.innerHTML = `<h3 class="msg">{data.Error}</h3>`
                }


            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error occured</h3>`;
            });
    }



};




searchBtn.addEventListener("click", getMovie);

window.addEventListener("load",getMovie)


