import index from "./index.js" ;


export default class extends index {

    constructor(params){
        super(params)
        this.setTitle("Post")
   
    }

    

    async getHtml(){
        console.log(this.params);
        return `
        <form action="postx/2" class="form__link" data-link>

        <label for="fname">First Name</label>
        
        <input type="text" idc="idc" name="wbCode" placeholder="Your name..">
        <input type="submit" value="submit"> </form>
    
    </form>
        `;
    }

}
