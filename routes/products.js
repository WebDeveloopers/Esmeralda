const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProductos
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta
router.route('/producto/:id').get(getProductById); //ruta para consultar por ID
router.route('/producto/:id').put(updateProduct); //Creación de la ruta para update
router.route('/producto/:id').delete(deleteProduct); //ruta para eliminar producto by ID


module.exports=router;