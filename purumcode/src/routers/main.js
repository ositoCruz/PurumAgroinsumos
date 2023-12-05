const {Router}= require("express");

const controller= require("../controllers/mainController");

const router= Router();


const routes={
    homeRoute:"/",
    carritoDeComprasRoute: "/carritoDeCompras",
    productDetailRoute: "/product/:id?",
    registerRoute:"/register",  
    loginRoute:"/login",
    aboutRoute:"/about"
};

router.get(routes.homeRoute, controller.homeController);
router.get(routes.carritoDeComprasRoute, controller.carritoDeComprasController);
router.get(routes.productDetailRoute, controller.productDetailController);
router.get(routes.registerRoute, controller.registerController);
router.get(routes.loginRoute, controller.loginController);
router.get(routes.aboutRoute, controller.aboutController);



module.exports=router;

