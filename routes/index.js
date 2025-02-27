import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';
import { guadarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros); 

router.get("/viajes", paginaViajes); 

router.get("/viajes/:slug", paginaDetalleViaje); 

router.get("/testimoniales", paginaTestimoniales); 
router.post("/testimoniales", guadarTestimonial); 

export default router;