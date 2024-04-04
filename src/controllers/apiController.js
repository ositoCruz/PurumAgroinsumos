


const productService= require('../data/services/productServices');



module.exports = {
  products: async (req, res) => {
    try {
      let products = await productService.getAll();

      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  productDetail: async (req, res) => {
    try {
      let product = await mainController.detailsProduct(req.params.id);

      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
};