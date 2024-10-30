---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /
title: "{{ site.title}} | {{ page.title }}"
---
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{site.title}} Coming Soon Page</title>
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/bd-coming-soon.css">
</head>

<body class="min-vh-100 d-flex flex-column">
    <div class="bg-overlay bg-video bg-gradient">
        <div class="container-fluid"><!-- main container -->
            <video autoplay muted loop id="bg-palm-trees">
                <source src="/assets/videos/mountain.mp4" type="video/mp4">
            </video>
            <header>
                <div class="container">
                    <nav class="navbar navbar-dark bg-transparent">
                        <a class="navbar-brand" href="#">
                            <img class="img-fluid" style="width: 150px; height:150px;" src="assets/images/white-logo.png" alt="Vital Energy Logo">
                        </a>
                        <span class="navbar-text ml-auto d-none d-sm-inline-block">+57 333 265-3017</span>
                        <span class="navbar-text d-none d-sm-inline-block"><a href="mailto:shop.vitalenergy@gmail.com">shop.vitalenergy@gmail.com</a></span>
                    </nav>
                </div>
            </header>
            <main class="my-auto">
                <div class="container">
                    <h1 class="page-title">Vital Energy Shop</h1>
                    <p class="page-description">Pronto estaremos contigo. Estamos preparando algo cool que sabemos te va a encantar. Síguenos en redes sociales y manténte al tanto de las novedades.
                    </p>
                    <p>Contáctanos</p>
                    <nav class="footer-social-links">
                        <a href="https://www.facebook.com/VitalEnergyShop/" class="social-link"><i class="mdi mdi-facebook-box"></i></a>
                        <a href="https://www.instagram.com/vitalenergy.shop/" class="social-link"><i class="mdi mdi-instagram"></i></a>
                        <a href="https://wa.me/573332653017?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20uno%20de%20sus%20productos" class="social-link"><i class="mdi mdi-whatsapp"></i></a>
                        <a href="../colageno-magnesio-extractos-magicos" class="social-link"><i class="mdi mdi-linkedin"></i></a>
                    </nav>
                </div>
            </main>
        </div>
    </div> 
</body>

</html>