import index from "./index.js" ;


export default class extends index {

    constructor(params){
        super(params)
        this.setTitle("Dashboard")
    }



    async getHtml(){
        return `
                <h1> Welcome back Wood <h1>
                <p> <a href="/posts" class="nav__link" data-link>View Post</a></p>
        `;
    }

}
