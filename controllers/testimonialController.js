import { Testimonial } from "../models/Testimoniales.js";

const guadarTestimonial = async (req, res) => {

    // Validar
    const { nombre, correo, mensaje } = req.body;

    const errores = [];
    if(nombre.trim() === '') {
        errores.push({ mensaje: "El Nombre es Obligatorio...." });
    }

    if(correo.trim() === "") {
        errores.push({ mensaje: "El Correo es Obligatorio...." });
    }

    if(mensaje.trim() === "") {
        errores.push({ mensaje: "El Mensaje es Obligatorio...." });
    }
    
    if(errores.length > 0) {

        // Consultar testimoniales exitentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con Errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales          
        })
    } else {

        // Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
    
}

export {
    guadarTestimonial
}