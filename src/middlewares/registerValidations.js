const {check}= require("express-validator");

let registerValidations= [
    check('fullName').notEmpty().withMessage("El nombre no puede estar Vacio"),
    check('username').notEmpty().withMessage("El Apellido no puede estar Vacio"), 
    check('email').notEmpty().withMessage("El email no puede estar Vacio"), 
    check('email').isEmail().withMessage("El email ingresado es invalido"),
    // check('password').isLength({min: 6}).withMessage("La contraseña debe tener minimo 6 caracteres"),
    // check('confirm_password').isLength({min: 6}).withMessage("La confirmacion de la contraseña debe tener minimo 6 caracteres"),
    // check('confirm_password').custom((value, {req})=>  {
    //     if(!req.body.password == value){
    //         throw new Error ('Las contraseñas deben ser iguales')
    //     }
    //     return true;
    // }),
    // check('image').custom((value, {req})=>{
    // if(req.file== undefined){
    //     throw new Error ('Debe elegir una imagen con formato: JPG o JPEG o PNG');
    // }
    // return true;
    // })
    

    // check('password ').notEmpty().withMessage("La contraseña no puede estar Vacio"),
]

module.exports= registerValidations;