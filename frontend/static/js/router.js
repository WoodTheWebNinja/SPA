import Dashboard from "./views/Dashboard.js";
import Post from "./views/Post.js";
import setting from "./views/setting.js";
import viewPost from "./views/viewPost.js";


//const { Router } = require("express");

const pathToRegex = path => new RegExp("^"+path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")+"$"); 


const getParams = match =>{
      
        const values = match.result.slice(1); 
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
        console.log( values);
        console.log( keys);

        /*
        Comment verifier f(x) map         
        console.log(  Array.from(match.route.path.matchAll(/:(\w+)/g)) );
                
            return {};*/  


        console.log( match);

        return Object.fromEntries(keys.map((key ,i)  =>{
            return [key,values[i]]
        }))
            
                



};


const navigateTo = url => {
    history.pushState(null,null, url);
    router();
};

const router = async () => {

console.log(pathToRegex("/posts/id"));

    const routes = [
       {path: "/", view: Dashboard },
       {path: "/posts", view: Post },
       {path: "/postx/:id/:?wbCode=", view: Post },
       {path: "/posts/:id", view: viewPost },
       {path: "/settings", view: setting }
    ];



   // Tester les routes 
   const potentialMatches = routes.map(route => {
    return {
            route : route,
            result : location.pathname.match(pathToRegex(route.path))
     };

     });


     let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null )

     if (!match) {
        match ={
                    route : routes[0],
                    result: "yo"
        };        
     }

     // Nouvelle instance de view 
  

     const view = new match.route.view(getParams(match));    
     


     document.querySelector("#app").innerHTML = await view.getHtml(); 
    
  


}; 


// Pour gerer le comportement lors du click back 

window.addEventListener("popstate", router); 
document.addEventListener('DOMContentLoaded', ()=> {
    document.body.addEventListener("click", e =>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
            
        }
       
    });

    router();
});

/* 
    const navigateTo = url => {
        history.pushState(null,null,url);
      
        router() ; 
    }
*/
 