<script>
    import donationCountries from "$lib/assets/donationCountries.json";
</script>

<h1 class="display-5 fw-bold">FAQs</h1>
<h4>Was macht genau Kleiderspenden Hamburg?</h4>
<p>
    Kleiderpenden Hamburg kümmert sich darum, das ihre Kleiderspenden in das
    gewünschte Zielland an die Bedürftigen Bürger ohne hohe Kostenverteilt
    werden können.
</p>
<h4>Welche Spendenländer benötigen weshalb Kleiderspenden?</h4>
{#each donationCountries as country}
    <p>
        Das {country.name} benötigt aus folgenden Gründen Spenden: {country.information}
    </p>
{/each}

<h4>Wie finanziert sich das Projekt?</h4>
<p>
    Das Projekt finanziert sich ausschließlich durch Spenden von der Stadt
    Hamburg, sowie diverse Firmen, die sich am Projekt beteiligen.
</p>
