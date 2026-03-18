/**
 * La Roca Restaurant - Main JavaScript
 * Author: Christian Herencia
 * Website: https://christian-freelance.us/
 */

// ========================================
// Translations
// ========================================
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_dishes: "Dishes",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_title: "La Roca Restaurant",
        hero_subtitle: "🇪🇨 100% Ecuadorian Flavor",
        hero_description: "Authentic Ecuadorian cuisine in the heart of Elizabeth, New Jersey",
        btn_order: "Order Online",
        btn_menu: "View Menu",
        about_subtitle: "Our Story",
        about_title: "Welcome to La Roca",
        about_heading: "Authentic Ecuadorian Cuisine Since Day One",
        about_text1: "At La Roca Restaurant, we bring the authentic flavors of Ecuador to Elizabeth, New Jersey. Our dishes are prepared with traditional recipes passed down through generations, using the freshest ingredients and the most authentic spices.",
        about_text2: "When you come to La Roca, you're not just a customer, you're family. Every plate served is a way of embracing our culture and sharing it with you.",
        feature_1: "Made with Love",
        feature_2: "Authentic Recipes",
        feature_3: "Family Atmosphere",
        stat_posts: "Posts",
        stat_followers: "Followers",
        video_title: "Experience Our Passion",
        video_subtitle: "Watch how we prepare our authentic Ecuadorian dishes",
        menu_subtitle: "Our Menu",
        menu_title: "Discover Our Dishes",
        tab_breakfast: "Breakfast",
        tab_appetizers: "Appetizers",
        tab_soups: "Soups",
        tab_ceviches: "Ceviches",
        tab_typical: "Typical Dishes",
        tab_meats: "Meats",
        tab_seafood: "Seafood",
        tab_drinks: "Drinks",
        dish_breakfast_1: "La Roca Breakfast with Mixed Bolón",
        desc_breakfast_1: "Complete Ecuadorian breakfast with mixed bolón",
        dish_breakfast_2: "La Roca Breakfast with La Roca Bolón",
        desc_breakfast_2: "Complete Ecuadorian breakfast with La Roca bolón",
        dish_breakfast_3: "Calentado with Grilled Steak",
        dish_breakfast_4: "Calentado with Grilled Chicken Breast",
        dish_breakfast_5: "Calentado with Grilled Pork Chop",
        dish_breakfast_6: "Green Plantain Tortilla",
        dish_breakfast_7: "Green Plantain Tortilla with 2 Eggs & Steak",
        dish_breakfast_8: "Patacones with Fresh Cheese & 2 Eggs",
        dish_appetizer_1: "Pork Bolón",
        dish_appetizer_2: "Cheese Bolón",
        desc_appetizer_2: "Tasty green plantain fried, then mashed with tropical cheese",
        dish_appetizer_3: "La Roca Bolón",
        dish_appetizer_4: "Mixed Bolón",
        dish_appetizer_5: "Fried Calamari",
        dish_appetizer_6: "Corviche",
        desc_appetizer_6: "Pastry made from green plantain with peanut butter sauce and albacore",
        dish_appetizer_7: "La Roca Corviche",
        desc_appetizer_7: "Pastry made from green plantain with peanut butter sauce, albacore, and shrimps",
        dish_appetizer_8: "Green Plantain Empanadas",
        desc_appetizer_8: "Crispy green plantain turnover stuffed with delicious tropical cheese",
        dish_appetizer_9: "Hayacas",
        desc_appetizer_9: "Moist and sweet cornmeal cake stuffed with slow-cooked chicken",
        dish_appetizer_10: "Humitas",
        desc_appetizer_10: "Fresh homemade style moist corn cake wrapped in corn leave",
        dish_appetizer_11: "Maduros with Cheese",
        dish_appetizer_12: "Yuca Muchines",
        desc_appetizer_12: "Cassava croquettes stuffed with fresh mozzarella cheese",
        dish_appetizer_13: "Grilled Octopus",
        dish_appetizer_14: "Salchipollo",
        dish_appetizer_15: "Dry Sausage",
        dish_soup_1: "Caldo de Bola",
        desc_soup_1: "Beef-stuffed plantain soup served with white rice",
        dish_soup_2: "Caldo de Gallina",
        dish_soup_3: "Caldo de Pata",
        dish_soup_4: "Caldo Marinero",
        desc_soup_4: "Seafood soup served with white rice",
        dish_soup_5: "Viche de Mariscos",
        dish_soup_6: "Caldo de Salchicha",
        dish_soup_7: "Soup of the Day",
        dish_ceviche_1: "Shrimp Ceviche",
        desc_ceviche_1: "Shrimp ceviche served with white rice or chifles",
        dish_ceviche_2: "Crab Ceviche",
        desc_ceviche_2: "Crab meat ceviche served with fried green plantains and rice",
        dish_ceviche_3: "Fish Ceviche",
        desc_ceviche_3: "Fish ceviche served with white rice or chifles",
        dish_ceviche_4: "Mixed Ceviche",
        desc_ceviche_4: "Fish, shrimp, and calamari ceviche served with white rice or chifles",
        dish_ceviche_5: "Albacore Encebollado",
        desc_ceviche_5: "Albacore soup served with white rice or chifles",
        dish_ceviche_6: "Mixed Encebollado",
        desc_ceviche_6: "Albacore soup with shrimp and calamari",
        dish_ceviche_7: "Ceviche Round",
        desc_ceviche_7: "Perfect for sharing - variety of ceviches",
        dish_typical_1: "Bandera Ecuatoriana",
        desc_typical_1: "A tour around Ecuador (guatita, seco de chivo, and ceviche served with yellow rice and sweet plantains)",
        dish_typical_2: "Chaulafan",
        desc_typical_2: "Ecuadorian fried rice made with pork, chicken, shrimp, and eggs",
        dish_typical_3: "Fritada",
        desc_typical_3: "Pork ribs Ecuadorian styled seasoned served with white corn, sweet and green plantains, yapingacho, and onions",
        dish_typical_4: "Guatita",
        desc_typical_4: "Ecuadorian beef tripe cooked with peanut butter and potato served with yellow rice and sweet plantains",
        dish_typical_5: "Seco de Chivo",
        desc_typical_5: "Traditional goat stew served with yellow rice and sweet plantains",
        dish_typical_6: "Seco de Gallina",
        desc_typical_6: "Traditional hen stew served with yellow rice and sweet plantains",
        dish_typical_7: "Yapingachos",
        desc_typical_7: "Potato patties over peanut butter sauce with steak, sausage, sweet plantains, fried eggs, rice, and onions",
        dish_typical_8: "Hornado",
        desc_typical_8: "Traditional Ecuadorian roasted pork",
        dish_typical_9: "Ronda Marinera",
        desc_typical_9: "Seafood platter for sharing",
        dish_meat_1: "Bandeja Paisa",
        desc_meat_1: "Grilled steak, fried pork belly, fried eggs, avocado, arepa, white rice, and beans",
        dish_meat_2: "Grilled Steak (Carne Asada)",
        desc_meat_2: "Marinated sirloin steak served with two sides of your choice",
        dish_meat_3: "Grilled Pork Chops",
        desc_meat_3: "Premium marinated pork chops served with two sides of your choice",
        dish_meat_4: "Grilled Skirt Steak (Entraña)",
        desc_meat_4: "12 oz grilled skirt steak served with our homemade chimichurri sauce and two sides",
        dish_meat_5: "Sea & Land (Mar y Tierra)",
        desc_meat_5: "12 oz grilled skirt steak topped with garlic shrimp",
        dish_meat_6: "Breaded Chicken Breast",
        desc_meat_6: "Breaded chicken breast served with two sides of your choice",
        dish_meat_7: "Breaded Beef Steak",
        desc_meat_7: "Breaded beef steak served with two sides of your choice",
        dish_meat_8: "Grilled Chicken Breast",
        desc_meat_8: "Traditional chicken breast served with two sides of your choice",
        dish_seafood_1: "Rice with Shrimp",
        desc_seafood_1: "Ecuadorian-style shrimp with rice served with a small portion of ceviche and sweet plantains",
        dish_seafood_2: "Seafood Rice",
        desc_seafood_2: "Ecuadorian-style seafood rice served with a small fish ceviche, fried fish, and sweet plantains",
        dish_seafood_3: "Bollo a La Roca",
        desc_seafood_3: "Cooked and grated green plantains with seafood and peanut sauce wrapped in banana leaf",
        dish_seafood_4: "Fish Bollo",
        desc_seafood_4: "Cooked and grated green plantains with fish and peanut sauce wrapped in banana leaf",
        dish_seafood_5: "Garlic Shrimp",
        desc_seafood_5: "Garlic shrimp served with two sides of your choice",
        dish_seafood_6: "Breaded Shrimp",
        desc_seafood_6: "Breaded shrimp with two sides of your choice",
        dish_seafood_7: "Fish Casserole",
        desc_seafood_7: "Albacore casserole made from green plantains with peanut butter sauce",
        dish_seafood_8: "Mixed Casserole",
        desc_seafood_8: "Albacore casserole with shrimp and calamari",
        dish_seafood_9: "Fried Fish Fillet",
        desc_seafood_9: "Sea bass fried filet served with two sides",
        dish_seafood_10: "Whole Fried Snapper",
        desc_seafood_10: "Pargo red snapper served with two sides of your choices",
        dish_seafood_11: "Corvina in Shrimp Sauce",
        dish_drink_1: "Passion Fruit Smoothie (Maracuyá)",
        dish_drink_2: "Blackberry Smoothie (Mora)",
        dish_drink_3: "Naranjilla Smoothie",
        dish_drink_4: "Guanabana Smoothie",
        dish_drink_5: "Mango Smoothie",
        dish_drink_6: "Tree Tomato Smoothie",
        dish_drink_7: "Lemonade",
        dish_drink_8: "Coconut Lemonade",
        dish_drink_9: "Inca Kola",
        dish_drink_10: "Coffee / Tea",
        btn_order_now: "Order Now",
        specialties_subtitle: "House Specialties",
        specialties_title: "Our Signature Dishes",
        specialty_1: "Bolon La Roca",
        specialty_1_desc: "Our signature dish - the ultimate Ecuadorian breakfast experience",
        specialty_2: "Cangrejada Criolla",
        specialty_2_desc: "Three whole crabs served with sweet plantains, white rice, and our amazing curtido",
        specialty_3: "Bandera Ecuatoriana",
        specialty_3_desc: "A tour around Ecuador - guatita, seco de chivo, and ceviche",
        specialty_4: "Chaulafan",
        specialty_4_desc: "Ecuadorian fried rice made with pork, chicken, shrimp, and eggs",
        portfolio_subtitle: "Gallery",
        portfolio_title: "Our Portfolio",
        contact_subtitle: "Contact Us",
        contact_title: "Visit Us Today",
        contact_address_title: "Address",
        contact_phone_title: "Phone",
        contact_hours_title: "Hours",
        contact_hours_mon_thu: "Mon - Thu: 9:00 AM - 10:00 PM",
        contact_hours_fri_sat: "Fri - Sat: 8:00 AM - 11:00 PM",
        contact_hours_sun: "Sun: 8:00 AM - 10:00 PM",
        contact_social_title: "Follow Us",
        footer_description: "Authentic Ecuadorian cuisine in Elizabeth, New Jersey. Experience the flavors of Ecuador with every bite.",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact Info",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_cookies: "Cookie Policy",
        footer_terms: "Terms of Service",
        footer_design: "Design by",
        privacy_title: "Privacy Policy",
        privacy_text: "At La Roca Restaurant, we respect your privacy. This policy outlines how we handle any information collected from our website visitors.",
        privacy_info_collected: "Information Collected",
        privacy_info_collected_text: "We do not collect personal information through our website. Any information shared through social media platforms is governed by their respective privacy policies.",
        privacy_cookies: "Cookies",
        privacy_cookies_text: "Our website may use cookies to enhance user experience. Cookies are small files stored on your device that help us understand how you use our site.",
        privacy_third_party: "Third-Party Links",
        privacy_third_party_text: "Our website contains links to third-party services (Instagram, Toast Tab). We are not responsible for the privacy practices of these external sites.",
        privacy_changes: "Changes to This Policy",
        privacy_changes_text: "We may update this privacy policy from time to time. Please check this page periodically for changes.",
        privacy_contact: "Contact Us",
        privacy_contact_text: "If you have questions about this privacy policy, please contact us at our restaurant or through our social media channels.",
        cookies_policy_title: "Cookie Policy",
        cookies_policy_intro: "This cookie policy explains how La Roca Restaurant uses cookies and similar technologies on our website.",
        cookies_what: "What Are Cookies",
        cookies_what_text: "Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.",
        cookies_types: "Types of Cookies We Use",
        cookies_types_text: "Types of cookies we use",
        cookies_manage: "Managing Cookies",
        cookies_manage_text: "You can control cookies through your browser settings. Most browsers allow you to refuse or accept cookies, or to be notified when a cookie is set.",
        cookies_more_info: "More Information",
        cookies_more_info_text: "For more information about cookies and how to manage them, visit aboutcookies.org or allaboutcookies.org."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_dishes: "Platos",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",
        hero_title: "La Roca Restaurant",
        hero_subtitle: "🇪🇨 Sazón 100% Ecuatoriana",
        hero_description: "Auténtica cocina ecuatoriana en el corazón de Elizabeth, New Jersey",
        btn_order: "Ordenar en Línea",
        btn_menu: "Ver Menú",
        about_subtitle: "Nuestra Historia",
        about_title: "Bienvenidos a La Roca",
        about_heading: "Auténtica Cocina Ecuatoriana Desde el Primer Día",
        about_text1: "En La Roca Restaurant, traemos los sabores auténticos de Ecuador a Elizabeth, New Jersey. Nuestros platos se preparan con recetas tradicionales transmitidas de generación en generación, usando los ingredientes más frescos y las especias más auténticas.",
        about_text2: "Cuando vienes a La Roca, no eres solo un cliente, eres familia. Cada plato servido es una forma de abrazar nuestra cultura y compartirla contigo.",
        feature_1: "Hecho con Amor",
        feature_2: "Recetas Auténticas",
        feature_3: "Ambiente Familiar",
        stat_posts: "Publicaciones",
        stat_followers: "Seguidores",
        video_title: "Experimenta Nuestra Pasión",
        video_subtitle: "Mira cómo preparamos nuestros auténticos platos ecuatorianos",
        menu_subtitle: "Nuestro Menú",
        menu_title: "Descubre Nuestros Platos",
        tab_breakfast: "Desayunos",
        tab_appetizers: "Antojitos",
        tab_soups: "Sopas",
        tab_ceviches: "Ceviches",
        tab_typical: "Platos Típicos",
        tab_meats: "Carnes",
        tab_seafood: "Mariscos",
        tab_drinks: "Bebidas",
        dish_breakfast_1: "Desayuno a La Roca con Bolón Mixto",
        desc_breakfast_1: "Completo desayuno ecuatoriano con bolón mixto",
        dish_breakfast_2: "Desayuno a La Roca con Bolón La Roca",
        desc_breakfast_2: "Completo desayuno ecuatoriano con bolón La Roca",
        dish_breakfast_3: "Calentado con Carne Asada",
        dish_breakfast_4: "Calentado con Pechuga a la Parrilla",
        dish_breakfast_5: "Calentado con Chuleta a la Parrilla",
        dish_breakfast_6: "Tortilla de Verde",
        dish_breakfast_7: "Tortilla de Verde con 2 Huevos c/ Bistec",
        dish_breakfast_8: "Patacones con Queso Fresco y 2 Huevos",
        dish_appetizer_1: "Bolon de Chicharrón",
        dish_appetizer_2: "Bolon de Queso",
        desc_appetizer_2: "Delicioso verde frito y majado con queso tropical",
        dish_appetizer_3: "Bolon La Roca",
        dish_appetizer_4: "Bolon Mixto",
        dish_appetizer_5: "Calamares Fritos",
        dish_appetizer_6: "Corviche",
        desc_appetizer_6: "Pastel de verde con salsa de maní y albacora",
        dish_appetizer_7: "Corviche La Roca",
        desc_appetizer_7: "Pastel de verde con salsa de maní, albacora y camarones",
        dish_appetizer_8: "Empanadas de Verde",
        desc_appetizer_8: "Crujiente empanada de verde rellena de queso tropical",
        dish_appetizer_9: "Hayacas",
        desc_appetizer_9: "Pastel de maíz relleno de pollo cocido lentamente",
        dish_appetizer_10: "Humitas",
        desc_appetizer_10: "Pastel de maíz fresco envuelto en hoja de maíz",
        dish_appetizer_11: "Maduros con Queso",
        dish_appetizer_12: "Muchines de Yuca",
        desc_appetizer_12: "Croquetas de yuca rellenas de queso mozzarella fresco",
        dish_appetizer_13: "Pulpo a la Parrilla",
        dish_appetizer_14: "Salchipollo",
        dish_appetizer_15: "Salchicha Seca",
        dish_soup_1: "Caldo de Bola",
        desc_soup_1: "Sopa de plátano verde relleno de carne con arroz blanco",
        dish_soup_2: "Caldo de Gallina",
        dish_soup_3: "Caldo de Pata",
        dish_soup_4: "Caldo Marinero",
        desc_soup_4: "Sopa de mariscos servida con arroz blanco",
        dish_soup_5: "Viche de Mariscos",
        dish_soup_6: "Caldo de Salchicha",
        dish_soup_7: "Sopa del Día",
        dish_ceviche_1: "Ceviche de Camarón",
        desc_ceviche_1: "Ceviche de camarón servido con arroz blanco o chifles",
        dish_ceviche_2: "Ceviche de Cangrejo",
        desc_ceviche_2: "Ceviche de carne de cangrejo con patacones y arroz",
        dish_ceviche_3: "Ceviche de Pescado",
        desc_ceviche_3: "Ceviche de pescado servido con arroz blanco o chifles",
        dish_ceviche_4: "Ceviche Mixto",
        desc_ceviche_4: "Ceviche de pescado, camarón y calamar con arroz o chifles",
        dish_ceviche_5: "Encebollado de Albacora",
        desc_ceviche_5: "Sopa de albacora servida con arroz blanco o chifles",
        dish_ceviche_6: "Encebollado Mixto",
        desc_ceviche_6: "Sopa de albacora con camarón y calamar",
        dish_ceviche_7: "La Ronda de Ceviches",
        desc_ceviche_7: "Perfecto para compartir - variedad de ceviches",
        dish_typical_1: "Bandera Ecuatoriana",
        desc_typical_1: "Un tour por Ecuador (guatita, seco de chivo y ceviche con arroz amarillo y maduros)",
        dish_typical_2: "Chaulafan",
        desc_typical_2: "Arroz frito ecuatoriano con cerdo, pollo, camarón y huevos",
        dish_typical_3: "Fritada",
        desc_typical_3: "Costillas de cerdo estilo ecuatoriano con maíz, maduros, yapingacho y cebolla",
        dish_typical_4: "Guatita",
        desc_typical_4: "Tripa de res ecuatoriana cocinada con maní y papa, servida con arroz amarillo",
        dish_typical_5: "Seco de Chivo",
        desc_typical_5: "Guiso tradicional de chivo con arroz amarillo y maduros",
        dish_typical_6: "Seco de Gallina",
        desc_typical_6: "Guiso tradicional de gallina con arroz amarillo y maduros",
        dish_typical_7: "Yapingachos",
        desc_typical_7: "Tortillas de papa con salsa de maní, bistec, salchicha, maduros, huevos fritos, arroz y cebolla",
        dish_typical_8: "Hornado",
        desc_typical_8: "Cerdo asado tradicional ecuatoriano",
        dish_typical_9: "Ronda Marinera",
        desc_typical_9: "Plato de mariscos para compartir",
        dish_meat_1: "Bandeja Paisa",
        desc_meat_1: "Bistec a la parrilla, panceta frita, huevos fritos, aguacate, arepa, arroz y frijoles",
        dish_meat_2: "Carne Asada",
        desc_meat_2: "Solomillo de res marinado servido con dos acompañamientos a elección",
        dish_meat_3: "Chuletas a la Parrilla",
        desc_meat_3: "Chuletas de cerdo premium marinadas con dos acompañamientos a elección",
        dish_meat_4: "Entraña a la Parrilla",
        desc_meat_4: "12 oz de entraña a la parrilla con salsa chimichurri casera y dos acompañamientos",
        dish_meat_5: "Mar y Tierra",
        desc_meat_5: "12 oz de entraña a la parrilla con camarones al ajo",
        dish_meat_6: "Milanesa de Pollo",
        desc_meat_6: "Pechuga de pollo empanizada con dos acompañamientos a elección",
        dish_meat_7: "Milanesa de Res",
        desc_meat_7: "Bistec de res empanizado con dos acompañamientos a elección",
        dish_meat_8: "Pechuga a la Parrilla",
        desc_meat_8: "Pechuga de pollo tradicional con dos acompañamientos a elección",
        dish_seafood_1: "Arroz con Camarones",
        desc_seafood_1: "Arroz con camarón estilo ecuatoriano con ceviche y maduros",
        dish_seafood_2: "Arroz Marinero",
        desc_seafood_2: "Arroz con mariscos estilo ecuatoriano con ceviche, pescado frito y maduros",
        dish_seafood_3: "Bollo a La Roca",
        desc_seafood_3: "Verde cocido y majado con mariscos y salsa de maní envuelto en hoja de plátano",
        dish_seafood_4: "Bollo de Pescado",
        desc_seafood_4: "Verde cocido y majado con pescado y salsa de maní envuelto en hoja de plátano",
        dish_seafood_5: "Camarones al Ajillo",
        desc_seafood_5: "Camarones al ajo con dos acompañamientos a elección",
        dish_seafood_6: "Camarones Empanizados",
        desc_seafood_6: "Camarones empanizados con dos acompañamientos a elección",
        dish_seafood_7: "Cazuela de Pescado",
        desc_seafood_7: "Cazuela de albacora hecha de verde con salsa de maní",
        dish_seafood_8: "Cazuela Mixta",
        desc_seafood_8: "Cazuela de albacora con camarón y calamar",
        dish_seafood_9: "Filete de Pescado Frito",
        desc_seafood_9: "Filete de lubina frito con dos acompañamientos",
        dish_seafood_10: "Pargo Frito Entero",
        desc_seafood_10: "Pargo rojo frito con dos acompañamientos a elección",
        dish_seafood_11: "Corvina en Salsa de Camarón",
        dish_drink_1: "Batido de Maracuyá",
        dish_drink_2: "Batido de Mora",
        dish_drink_3: "Batido de Naranjilla",
        dish_drink_4: "Batido de Guanábana",
        dish_drink_5: "Batido de Mango",
        dish_drink_6: "Batido de Tomate de Arbol",
        dish_drink_7: "Limonada",
        dish_drink_8: "Limonada de Coco",
        dish_drink_9: "Inca Kola",
        dish_drink_10: "Café / Té",
        btn_order_now: "Ordenar Ahora",
        specialties_subtitle: "Especialidades de la Casa",
        specialties_title: "Nuestros Platos Estrella",
        specialty_1: "Bolon La Roca",
        specialty_1_desc: "Nuestro plato estrella - la máxima experiencia del desayuno ecuatoriano",
        specialty_2: "Cangrejada Criolla",
        specialty_2_desc: "Tres cangrejos enteros con maduros, arroz blanco y nuestro increíble curtido",
        specialty_3: "Bandera Ecuatoriana",
        specialty_3_desc: "Un tour por Ecuador - guatita, seco de chivo y ceviche",
        specialty_4: "Chaulafan",
        specialty_4_desc: "Arroz frito ecuatoriano con cerdo, pollo, camarón y huevos",
        portfolio_subtitle: "Galería",
        portfolio_title: "Nuestro Portafolio",
        contact_subtitle: "Contáctanos",
        contact_title: "Visítanos Hoy",
        contact_address_title: "Dirección",
        contact_phone_title: "Teléfono",
        contact_hours_title: "Horario",
        contact_hours_mon_thu: "Lun - Jue: 9:00 AM - 10:00 PM",
        contact_hours_fri_sat: "Vie - Sáb: 8:00 AM - 11:00 PM",
        contact_hours_sun: "Dom: 8:00 AM - 10:00 PM",
        contact_social_title: "Síguenos",
        footer_description: "Auténtica cocina ecuatoriana en Elizabeth, New Jersey. Experimenta los sabores de Ecuador en cada bocado.",
        footer_quick_links: "Enlaces Rápidos",
        footer_contact: "Información de Contacto",
        footer_legal: "Legal",
        footer_privacy: "Política de Privacidad",
        footer_cookies: "Política de Cookies",
        footer_terms: "Términos de Servicio",
        footer_design: "Diseño por",
        privacy_title: "Política de Privacidad",
        privacy_text: "En La Roca Restaurant, respetamos tu privacidad. Esta política describe cómo manejamos cualquier información recopilada de los visitantes de nuestro sitio web.",
        privacy_info_collected: "Información Recopilada",
        privacy_info_collected_text: "No recopilamos información personal a través de nuestro sitio web. Cualquier información compartida a través de plataformas de redes sociales se rige por sus respectivas políticas de privacidad.",
        privacy_cookies: "Cookies",
        privacy_cookies_text: "Nuestro sitio web puede usar cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos almacenados en tu dispositivo que nos ayudan a entender cómo usas nuestro sitio.",
        privacy_third_party: "Enlaces de Terceros",
        privacy_third_party_text: "Nuestro sitio web contiene enlaces a servicios de terceros (Instagram, Toast Tab). No somos responsables de las prácticas de privacidad de estos sitios externos.",
        privacy_changes: "Cambios a Esta Política",
        privacy_changes_text: "Podemos actualizar esta política de privacidad de vez en cuando. Por favor, revisa esta página periódicamente para ver cambios.",
        privacy_contact: "Contáctanos",
        privacy_contact_text: "Si tienes preguntas sobre esta política de privacidad, contáctanos en nuestro restaurante o a través de nuestras redes sociales.",
        cookies_policy_title: "Política de Cookies",
        cookies_policy_intro: "Esta política de cookies explica cómo La Roca Restaurant usa cookies y tecnologías similares en nuestro sitio web.",
        cookies_what: "Qué Son las Cookies",
        cookies_what_text: "Las cookies son pequeños archivos de texto que se colocan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a brindarte una mejor experiencia.",
        cookies_types: "Tipos de Cookies que Usamos",
        cookies_types_text: "Tipos de cookies que usamos",
        cookies_manage: "Gestionando Cookies",
        cookies_manage_text: "Puedes controlar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar o aceptar cookies, o ser notificado cuando se establece una cookie.",
        cookies_more_info: "Más Información",
        cookies_more_info_text: "Para más información sobre cookies y cómo gestionarlas, visita aboutcookies.org o allaboutcookies.org."
    }
};

// ========================================
// DOM Elements
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hero Carousel
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.dot');
    const heroPrev = document.querySelector('.hero-btn.prev');
    const heroNext = document.querySelector('.hero-btn.next');
    
    // Menu Tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    // Portfolio Modal
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-nav.prev');
    const modalNext = document.querySelector('.modal-nav.next');
    
    // Legal Modals
    const privacyModal = document.getElementById('privacyModal');
    const cookiesModal = document.getElementById('cookiesModal');
    const privacyLinks = document.querySelectorAll('a[href="#privacy"]');
    const cookiesLinks = document.querySelectorAll('a[href="#cookies"]');
    
    // Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Language Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Current state
    let currentSlide = 0;
    let currentLang = 'en';
    let currentPortfolioIndex = 0;
    let carouselInterval;
    
    // ========================================
    // Functions
    // ========================================
    
    // Update Language
    function updateLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-lang]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update active state on language buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang-code') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Save to localStorage
        localStorage.setItem('laRocaLang', lang);
    }
    
    // Hero Carousel Functions
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            heroDots[i].classList.remove('active');
        });
        
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= heroSlides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }
    
    function prevSlide() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = heroSlides.length - 1;
        }
        showSlide(newIndex);
    }
    
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 5000);
    }
    
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    // Menu Tab Functions
    function showMenuCategory(category) {
        menuTabs.forEach(tab => {
            if (tab.getAttribute('data-category') === category) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        menuCategories.forEach(cat => {
            if (cat.id === category) {
                cat.classList.add('active');
            } else {
                cat.classList.remove('active');
            }
        });
    }
    
    // Portfolio Modal Functions
    function openModal(index) {
        currentPortfolioIndex = index;
        const img = portfolioItems[index].querySelector('img');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevImage() {
        let newIndex = currentPortfolioIndex - 1;
        if (newIndex < 0) {
            newIndex = portfolioItems.length - 1;
        }
        openModal(newIndex);
    }
    
    function showNextImage() {
        let newIndex = currentPortfolioIndex + 1;
        if (newIndex >= portfolioItems.length) {
            newIndex = 0;
        }
        openModal(newIndex);
    }
    
    // Open Legal Modal
    function openLegalModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLegalModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // ========================================
    // Event Listeners
    // ========================================
    
    // Language Switch
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-code');
            updateLanguage(lang);
        });
    });
    
    // Load saved language
    const savedLang = localStorage.getItem('laRocaLang') || 'en';
    updateLanguage(savedLang);
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to Top Button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Mobile Navigation Toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Hero Carousel Controls
    heroPrev.addEventListener('click', () => {
        prevSlide();
        stopCarousel();
        startCarousel();
    });
    
    heroNext.addEventListener('click', () => {
        nextSlide();
        stopCarousel();
        startCarousel();
    });
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopCarousel();
            startCarousel();
        });
    });
    
    // Start carousel
    startCarousel();
    
    // Pause carousel on hover
    const hero = document.querySelector('.hero');
    hero.addEventListener('mouseenter', stopCarousel);
    hero.addEventListener('mouseleave', startCarousel);
    
    // Menu Tabs
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            showMenuCategory(category);
        });
    });
    
    // Portfolio Items
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });
    
    // Modal Controls
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', showPrevImage);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', showNextImage);
    }
    
    // Close modal on background click
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeModal();
            }
        });
    }
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (imageModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
        
        // Close legal modals
        if (e.key === 'Escape') {
            closeLegalModal(privacyModal);
            closeLegalModal(cookiesModal);
        }
    });
    
    // Legal Modal Links
    privacyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalModal(privacyModal);
        });
    });
    
    cookiesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalModal(cookiesModal);
        });
    });
    
    // Close legal modals
    if (privacyModal) {
        const privacyClose = privacyModal.querySelector('.modal-close');
        privacyClose.addEventListener('click', () => closeLegalModal(privacyModal));
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closeLegalModal(privacyModal);
            }
        });
    }
    
    if (cookiesModal) {
        const cookiesClose = cookiesModal.querySelector('.modal-close');
        cookiesClose.addEventListener('click', () => closeLegalModal(cookiesModal));
        cookiesModal.addEventListener('click', (e) => {
            if (e.target === cookiesModal) {
                closeLegalModal(cookiesModal);
            }
        });
    }
    
    // Scroll to Top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !href.startsWith('#privacy') && !href.startsWith('#cookies') && !href.startsWith('#terms')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-item, .specialty-card, .portfolio-item, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id], header[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Preload Images
    function preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const preloadImg = new Image();
                preloadImg.src = src;
            }
        });
    }
    
    preloadImages();
    
    // Console Info
    console.log('%c🇪🇨 La Roca Restaurant Website', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
    console.log('%cDesigned by Christian Herencia', 'color: #2C3E50; font-size: 14px;');
    console.log('%chttps://christian-freelance.us/', 'color: #F39C12; font-size: 12px;');
});
