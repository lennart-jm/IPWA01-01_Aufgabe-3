<script>
    import donationCountries from "$lib/assets/donationCountries.json";
</script>

<h1 class="display-5 fw-bold">FAQs</h1>
<h4>Was macht genau Kleiderspenden Hamburg?</h4>
<p>
    Kleiderpenden Hamburg kümmert sich darum, dass ihre Kleiderspenden in das
    gewünschte Krisengebiet an die bedürftigen Menschen ohne hohe Kosten verteilt
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
    Das Projekt finanziert sich ausschließlich durch Spenden der Stadt
    Hamburg und diverse Firmen, die sich am Projekt beteiligen.
</p>
