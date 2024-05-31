const {StatusCodes}=require('http-status-codes');

class ValidaationError extends Error{
    constructor(error){
        super();
        let explanation=[];
        error.errors.forEach((err)=>{
            explanation.push(err.message);
        });
        this.name="ValidationError";
        this.message="Not able to validate the data sent in request";
        this.explanation=explanation;
        this.statusCode=StatusCodes.BAD_REQUEST;
    }
}

module.exports=ValidaationError;