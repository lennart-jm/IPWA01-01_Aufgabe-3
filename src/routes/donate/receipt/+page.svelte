<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

{#if form?.success}
    <h1 class="display-5 fw-bold">Spenden Zusammenfassung</h1>
    <p><b>Name:</b> {form?.name}</p>
    <p><b>Spendenziel:</b> {form?.donationDestination}</p>
    <p>
        <b>Angemdelet am Datum:</b>
        {form?.date}<b>, Uhrzeit:</b>
        {form?.time}
    </p>
    <br />
    {#if form?.street}
        <h5>Abholadresse:</h5>
        <p><b>Straße:</b> {form?.street}</p>
        <p><b>Stadt:</b> {form?.city}</p>
        <p><b>PLZ:</b> {form?.postalCode}</p>
    {:else}
        <h5>Spenden werden bei der Geschäftsstelle abgegeben.</h5>
    {/if}

    <br />
    <h5>Angemeldete Kleidungstücke:</h5>
    <ul>
        {#each form?.clothing as c}
            <li>{c}</li>
        {/each}
    </ul>
{:else}
    <h1>Fehler bei Anmeldung der Spende</h1>
    <p>Fehlermeldung: {form?.error}</p>
{/if}
