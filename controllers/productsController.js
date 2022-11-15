const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//ver un producto po ID
exports.getProductById= async (req,res,next) => {
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "Producto no encontrado"
        })
    }
    res.status(200).json({
        sucess:true,
        message:"Aquí encuentra la información sobre su producto",
        product
    })
}
//Update un producto
exports.updateProduct= async (req, res, next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){
        return res.status(404).json({ //verifico que el objeto no existe para finalizar el proceso
            success:false,
            message: "Producto no encontrado"
        })
    }
    //si el objeto existe, ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //Valido atributos nuevos o actualizados
        runValidators:true
    });
    //Respuesta de éxito en la actualización
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}
//Eliminar un producto
exports.deleteProduct= async (req, res, next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objetono existe, return termina el método
            success:false,
            message: "Producto no encontrado"
        })
    }

    await product.remove(); //Eliminamos el producto
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente",
    })
}

//Crear nuevo producto /api/producttos
exports.newProduct=async(req,res,next) =>{
    const product= await producto.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}

//Hablamos de FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}


//verProductos(); Llamamos al método creado para probar la consulta

//ver by ID
function verProductosPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))

}
//verProductosPorID('6371e2d31a3ac17f7976da63');