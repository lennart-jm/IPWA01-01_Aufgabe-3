<svelte:head>
    <!-- responsive meta tag von Bootstrap -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kleiderspende Hamburg</title>
    <!-- Bootstrap CDN import -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    />
</svelte:head>

<header>
    <nav
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
        <a
            href="/"
            class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
            <svg
                class="bi me-2"
                width="40"
                height="40"
                role="img"
                viewBox="0 0 834 834"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                ><rect
                    x="0"
                    y="0"
                    width="833.333"
                    height="833.333"
                    style="fill:none;"
                /><g
                    ><rect
                        x="185.359"
                        y="94.482"
                        width="459.402"
                        height="657.075"
                        style="fill:#0087ff;"
                    /><path
                        d="M314.234,218.213l-127.583,-122.46l-186.536,250.38l127.583,122.46l186.536,-250.38Z"
                        style="fill:#0087ff;"
                    /><path
                        d="M643.879,94.127l-127.518,122.548l186.669,250.252l127.518,-122.548l-186.669,-250.252Z"
                        style="fill:#0087ff;"
                    /></g
                ><g
                    transform="matrix(0.697807,0.458126,-0.548815,0.835944,-2614.33,-203.692)"
                    ><text
                        x="2935.75px"
                        y="-1002.76px"
                        style="font-family:'Futura-Bold', 'Futura', sans-serif;font-weight:700;font-size:432.995px;"
                        >KSH</text
                    ></g
                ></svg
            >
            <span>Kleiderspende Hamburg</span>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-dark">Home</a></li>
            <li>
                <a href="/donate" class="nav-link px-2 link-dark"
                    >Jetzt Spenden!</a
                >
            </li>
            <li><a href="/FAQs" class="nav-link px-2 link-dark">FAQs</a></li>
        </ul>

        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2" disabled
                >Login</button
            >
        </div>
    </nav>
</header>

<main class="container">
    <slot />
</main>

<footer class="bd-footer fixed-bottom bg-light py-2 border-top">
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <span class="nav-link px-2 text-muted">© 2023 KSH e.V.</span>
        </li>
        <li class="nav-item">
            <a href="/imprint" class="nav-link px-2 text-muted">Impressum</a>
        </li>
    </ul>
</footer>
