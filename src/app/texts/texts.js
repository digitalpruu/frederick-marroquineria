const title = "Frederick Marroquinería";
const email = "fredericktunjano@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573502139860";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Frederick Marroquinería, nos dedicamos a la elaboración de productos de marroquinería de alta calidad, incluyendo bolsos, morrales, correas, reatas, accesorios para uso militar y policial, productos para senderismo como carpas, ponchos para lluvia, morrales para camping, así como dotaciones para empresas de vigilancia y dotaciones industriales.",
        description2: "Nuestro compromiso es ofrecer productos duraderos que se adapten a las necesidades de nuestros clientes. Nos enorgullece combinar la excelencia en la manufactura con una profunda responsabilidad ambiental. Cada artículo es confeccionado con materiales de primera y siguiendo prácticas sostenibles que respetan nuestro entorno. Creemos que la calidad y el respeto por el medio ambiente deben ir de la mano. En nuestros diseños, procuramos que los recortes en materiales sean inferiores al 2%, evitando que se genere desperdicio excesivo."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Calidad y responsabilidad ambiental en cada detalle.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "www.facebook.com", // No tiene Facebook
        instagram: "www.instagram.com", // No tiene Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
