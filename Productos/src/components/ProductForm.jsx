import { useState } from "react";

let nextID = 0;
function ProductForm({productos, setProductos}) {
  const [descripcion, setDescripcion] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar los inputs
    if (descripcion === "" || precioUnitario === "" || descuento === "" || stock === "") {
      alert("Los campos no pueden estar vacios");
      return;
    } else if (descripcion.trim().length < 3) {
      alert("La descripcion debe tener 3 caracteres");
      return;
    }else if (isNaN(precioUnitario) || isNaN(descuento) || isNaN(stock)) {
      alert("Los campos Precio Unitario, Descuento y Stock deben ser números");
      return;
    } else if (parseFloat(precioUnitario) <= 0 || parseFloat(descuento) < 0 || parseFloat(descuento) > 100 || parseInt(stock) < 0) {
      alert("Los campos Precio Unitario y Stock deben ser mayores a 0, y el Descuento debe estar entre 0 y 100");
      return;
    }
    const productoExistente = productos.find(producto => producto.descripcion === descripcion);
    if (productoExistente) {
      alert("El producto ya existe");
      return;
    }

    //calculo el precio con descuento
    const precioConDescuento = parseFloat(precioUnitario) * (1 - parseFloat(descuento) / 100);

    const newProducto = {
      id: nextID++,
      descripcion: descripcion.trim(),
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      stock: parseInt(stock),
      precioConDescuento: precioConDescuento
    };
    setProductos([...productos, newProducto]);
    setDescripcion("");
    setPrecioUnitario("");
    setDescuento("");
    setStock("");
    console.log([...productos, newProducto]);
  }
  return (
    <div>
        <h3 style={{textAlign: "center"}}>Agregar Producto:</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Descripción:</label>
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <br /><br />
            <label>Precio Unitario:</label>
            <input type="number" value={precioUnitario} onChange={(e) => setPrecioUnitario(e.target.value)}/>
            <br /><br />
            <label>Descuento:</label>
            <input type="number" value={descuento} onChange={(e) => setDescuento(e.target.value)}/>
            <br /><br />
            <label>Stock:</label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)}/>
            <br /><br />
            <button type="submit">Agregar</button>
        </form>
    </div>
  )
}