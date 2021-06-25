import React from 'react';

function MoviesLists(props) {
    const MoviesLists = [
        {
            title :"us",
            description : "Movie talk about rasict",
            posterURL : "https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758",
            rating : "",
            yearofrelease :"2010",
        },
        {
            title :"Concussion",
            description : "",
            posterURL : "https://i.pinimg.com/originals/c2/20/d8/c220d8ea8bbc9c026385f246a8755979.jpg",
            rating : "",
            yearofrelease :"2015",
        },
        {
            title :"Ant-man",
            description : "",
            posterURL : "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
            rating : "",
            yearofrelease :"2016",
        },
        {
            title :"The search",
            description : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mystery-movie-poster-template-design-e5e45559f268e4d20bafd48643b6f8ef_screen.jpg?ts=1579262598",
            posterURL : "",
            rating : "",
            yearofrelease :"2020",
        },
        {
            title :"1917",
            description : "",
            posterURL : "https://images-na.ssl-images-amazon.com/images/I/61Zf5g-xUxL._AC_SL1039_.jpg",
            rating : "",
            yearofrelease :"2021",
        },
        {
            title :"Lockout",
            description : "",
            posterURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazzLX_Xcj76KU7uGiS6cxJQQKUImTGfeFyg&usqp=CAU",
            rating : "",
            yearofrelease :"2015",
        },
        {
            title :"Jhon wick",
            description : "",
            posterURL : "https://imgc.allpostersimages.com/img/posters/john-wick_u-L-F7SH250.jpg?p=0",
            rating : "",
            yearofrelease :"2019",
        },
        {
            title :"Titanic",
            description : "",
            posterURL : "https://images.complex.com/complex/images/fl_lossy,pg_1/wjnhpz3osrai5aningjl/titanic",
            rating : "",
            yearofrelease :"",
        },
        {
            title :"The equalizer 2",
            description : "",
            posterURL : "https://i.pinimg.com/236x/6e/e3/68/6ee368fb71e49bda6cf1019a4eebf00a.jpg",
            rating : "",
            yearofrelease :"2019",
        }
    ]
    
    return (
        <div>
            <h1>Hello i'm the movie list</h1>
            <div>{JSON.stringify(MoviesLists)}</div>
           
        </div>
    );
}

export default MoviesLists;