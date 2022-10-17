import index from "./index.js" ;


export default class extends index {

    constructor(params){
        super(params)
        this.setTitle("Setting")
    }



    async getHtml(){
        return `
                <h1> Setting <h1>
                <p> <a href="/posts" class="nav__link" data-link>View Post</a></p>
        `;
    }

}
