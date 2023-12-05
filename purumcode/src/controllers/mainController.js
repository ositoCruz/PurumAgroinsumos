const path= require("path");



const controller= {
    homeController: (req, res)=>{
        res.render(path.resolve("./views/index"))
    },

    carritoDeComprasController: (req,res)=>{
        res.render(path.resolve("./views/carritoDeCompras"))
    },

    productDetailController: (req,res)=>{

       const { id } = req.params;

        const data ={
            id:id,
        }

       const dataabo ={
        name: "Abono Organico",
        descripcion:"Mejora su crecimiento, salud y floración con este abono" ,
        precio: 7500.99,
        stock: "En stock",
        pic: "/images/abono-organico.jpg",
    };
    const datafert={
       
        name: "Fertilizante",
        descripcion:"es un biofertilizante que actúa promoviendo el crecimiento",
        precio: 1200.99,
        stock: "En stock",
        pic:"/images/fertilizante.jpg"
    };
    const dataherb ={
        
        name: "Herbicida",
        descripcion:"Herbicida Atila de Afrasa es un herbicida sistémico no selectivo.",
        precio: 1200.99,
        stock: "En stock",
        pic: "/images/Herbicida-atrina.jpg"
    };
    const datainsec ={
        
        name: "Insectisida",
        descripcion:"Sustancia básica insecticida, acaricida y fungicida.",
        precio: 8500.99,
        stock: "En stock",
        pic:"/images/insecticida-organico.jpg"
    };
    const datasol ={
        
        name: "Solucion para fertilizante",
        descripcion:"Solución nutricional con alto contenido en Potasio.",
        precio: 3500.99,
        stock: "En stock",
        pic:"/images/Solucion-para-fertilizantes.jpg"

    };

    

        res.render(path.resolve("./views/productDetail"),  { data, dataabo, datafert, dataherb, datainsec, datasol } )

    },


    loginController: (req,res)=>{
        res.render(path.resolve("./views/login"))
    },

    registerController: (req,res)=>{
        res.render(path.resolve("./views/register"))
    },

    aboutController: (req,res)=>{
        res.render(path.resolve("./views/about"))
    },


}


module.exports=controller;