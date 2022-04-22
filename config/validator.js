const yup = require("yup")


function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string().require("fill me").min(2).max(50),
        email:yup.string().require("expect an emeil").min(8).max(30),
        password:yup.string().require("fill me").min(8).max(100)

    })
     return userSchema.validate(data)

}
module.exports = validate;
