const api_key="7c408f9fd34d4b8bb3f918f6dc696b1e"
//const api_key="93cd06c39d4d4f628f0630b18131a0f3"
// const api_key="1d3a0eefa97b499d8fbc4ee93eeb40b7"
//const url="https://newsapi.org/v2/everything?q="


// variables

const img_btn = document.getElementById("logo")
const sports_btn = document.getElementById("sports")
const finance_btn = document.getElementById("finance")
const tech_btn = document.getElementById("tech")
const politics_btn = document.getElementById("politics")
const entertain_btn = document.getElementById("entertain")
const science_btn = document.getElementById("science")
const search_btn = document.getElementById("searchbtn")

const newsQuery =  document.getElementById("newsquery")
const searchbtn =  document.getElementById("searchbtn")

const newstype =  document.getElementById("newsType")
const newsdetails =  document.getElementById("newsdetails")

// Array : inside this newsdata array our news will be fetched

let newsDataArr = []


// api
const news_headlines = "https://newsapi.org/v2/top-headlines?country=in&apiKey="
const sports_news = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const finance_news= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="
const tech_news = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const politics_news= "https://newsapi.org/v2/everything?q=politics&apiKey="
const entertain_news = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const science_news= "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=";

const search_news="https://newsapi.org/v2/everything?q="

let loader=document.getElementById('preloader')


window.onload = function() {
    
    newstype.innerHTML="<h3>Top Headlines</h3>";
    fetchHeadlines();
};

img_btn.addEventListener("click",function(){
    loader.style.display='flex'
    newstype.innerHTML="<h3>Top Headlines</h3>";
    fetchHeadlines();
})

let foot = document.getElementById("footer_main")

foot.addEventListener("click", (event) => {

    let valu = event.target.textContent;
    newstype.innerHTML="<h3>"+valu+"</h3>"
    console.log(valu)
    fetchnews(valu)
})




sports_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Sports</h3>"

    fetchsportsNews();
    console.log("called sports")

    
})

finance_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Finance</h3>"
    fetchfinanceNews();
    console.log("called finance")
})



tech_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Technology</h3>"
    fetchtechNews();
    console.log("called technology")
})

entertain_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Entertainment</h3>"
    fetchentertainNews();
    console.log("called Entertainment")

    
})

politics_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Politics</h3>"
    fetchpoliticsNews();
    console.log("called politics")

    
})

science_btn.addEventListener("click",function(){

    loader.style.display='flex'
    newstype.innerHTML="<h3>Science</h3>"
    fetchscienceNews();
    console.log("called science")

    
})

search_btn.addEventListener("click", function(){

    loader.style.display='flex'
    newstype.innerHTML ="<h3>Search : "+newsQuery.value+"</h3>";
    fetchQueryNews()
    console.log(newsQuery.value)

})

const fetchnews = async (que) => {
    const response = await fetch(search_news+(que)+"&apiKey="+api_key);

    newsDataArr = []

    if (response.status >= 200 && response.status < 300) {

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else {

        console.log(response.status, response.statusText)
    }

    displayNews()
    loader.style.display = "none"
}


const fetchHeadlines = async () =>{
    const response = await fetch(news_headlines+api_key);

    newsDataArr = [];

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        
    }
    else{

        console.log(response.status,response.statusText)
        newsdetails.innerHTML = "<h5>No Data Found</h5>"
        return 
    }
    displayNews()
    loader.style.display="none"
}


const fetchsportsNews = async () =>{
    const response = await fetch(sports_news+api_key);

    newsDataArr = [];

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr.length)

    } 
    else{

        console.log(response.status,response.statusText)
        newsdetails.innerHTML = "<h5>No Data Found</h5>"
        return 
    }
    displayNews()
    loader.style.display="none"
}   

const fetchfinanceNews = async () =>{
    const response = await fetch(finance_news+api_key)

    newsDataArr = []

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else{

        console.log(response.status,response.statusText)
    }

    displayNews()
    loader.style.display="none"
}  


const fetchtechNews = async () =>{
    const response = await fetch(tech_news+api_key)

    newsDataArr = []

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else{

        console.log(response.status,response.statusText)
    }

    displayNews()
    loader.style.display="none"
}  

const fetchentertainNews = async () =>{
    const response = await fetch(entertain_news+api_key)

    newsDataArr = []

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else{

        console.log(response.status,response.statusText)
    }

    displayNews()
    loader.style.display="none"
}  


const fetchpoliticsNews = async () =>{
    const response = await fetch(politics_news+api_key)

    newsDataArr = []

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else{

        console.log(response.status,response.statusText)
    }

    displayNews()
    loader.style.display="none"
}  

const fetchscienceNews = async () =>{
    const response = await fetch(science_news+api_key)

    newsDataArr = []

    if(response.status>=200 && response.status<300){

        const myjson = await response.json()
        newsDataArr = myjson.articles
        console.log(newsDataArr)
    }
    else{

        console.log(response.status,response.statusText)
    }

    displayNews()
    loader.style.display="none"
}  
const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(search_news+(newsQuery.value)+"&apiKey="+api_key);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews()
    loader.style.display="none"
}

// function displayNews(){

//     newsdetails.innerHTML = "";

//     // if(newsDataArr.length == 0){

//     //     newsdetails.innerHTML = "<h5>No data was Found..</h5>";
//     //     return;
//     // }


//     newsDataArr.forEach(news => {

//         let date = news.publishedAt.split("T")

//         let col = document.createElement('div');
//         col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

//         let card = document.createElement('div');
//         card.className = "p-2";

//         let image = document.createElement('img');
//         image.setAttribute("height","matchparent");
//         image.setAttribute("width","100%");
//         image.src=news.urlToImage;

//         let cardbody = document.createElement('div');

//         let newsHeading = document.createElement('h5');
//         newsHeading.className = "card-title";
//         news.newsHeading.innerHTML = news.title;

//         let dateHeading = document.createElement('h6');
//         dateHeading.className = "text-primary";
//         dateHeading.innerHTML = date[0];

//         let discription = document.createElement('p')
//         discription.className="text-muted";
//         discription.innerHTML=news.discription;


//         col.appendChild(card);
//         card.appendChild(image);
//         card.appendChild(cardBody);
//         cardBody.appendChild(newsHeading);
//         cardBody.appendChild(dateHeading);
//         cardBody.appendChild(discription);
//         cardBody.appendChild(link);

        

//         newsdetails.appendChild(col);


//     });

// }

function displayNews() {


    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');

        col.className="col-sm-12 col-md-3 col-lg-3 p-2 card";
        col.style.border="1px solid grey"
        col.style.margin="2px"
        col.setAttribute("data-aos","fade-in")

        var card = document.createElement('div');
        card.className = "p-2";
        

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn";
        link.style.background="rgb(101, 97, 229)"
        link.style.color="white"
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        
        col.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        

        newsdetails.appendChild(col);
    });

}