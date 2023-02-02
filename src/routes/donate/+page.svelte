<script>
    import donationCountries from "$lib/assets/donationCountries.json";

    let handoverAtOffice = false;
    let clothingItems = [""];

    function addClothingItem() {
        clothingItems.push("");
        // to trigger reactivity of svelte
        clothingItems = clothingItems;
        console.log(clothingItems);
    }

    function removeClothingItem(i) {
        clothingItems.splice(i, 1);
        // to trigger reactivity of svelte
        clothingItems = clothingItems;
        console.log("Index: " + i + " Array: " + clothingItems);
    }

    let postalCode;
    // Prueft mittels Regex ob die eingegebene Postleitzahl eine 5 stellige Zahl ist.
    $: postalCodeFormatValid = /^\d{5}$/.test(postalCode);
    // Prueft mittels Regex ob die eingegebene Postleitzahl mit 22 beginnt.
    $: postalCodeValid = /^22\d{3}$/.test(postalCode);
</script>

<div>
    <h1 class="display-5 fw-bold">Kleiderspende Registrieren</h1>

    <form method="POST" action="donate/receipt">
        <div class="row g-3">
            <div class="form-floating col-12">
                <input
                    name="name"
                    type="name"
                    class="form-control"
                    id="name"
                    placeholder="name"
                    required
                />
                <label for="name">Name</label>
            </div>
            <div class="form-floating col-12">
                <select
                    name="donationDestination"
                    type="donationDestination"
                    class="form-select"
                    id="donationDestination"
                    required
                >
                    <option selected>Spenden Zielort wählen</option>
                    {#each donationCountries as country}
                        <option value={country.name}>{country.name}</option>
                    {/each}
                </select>
                <label for="donationDestination">Spenden Zielort</label>
            </div>

            <div class="col-12">
                <input
                    bind:group={handoverAtOffice}
                    value={false}
                    type="radio"
                    class="btn-check"
                    name="transferType"
                    id="pickup"
                    autocomplete="off"
                    checked
                />
                <label class="btn btn-outline-warning px-4" for="pickup"
                    >Abholung</label
                >

                <input
                    bind:group={handoverAtOffice}
                    value={true}
                    type="radio"
                    class="btn-check"
                    name="transferType"
                    id="handoverAtOffice"
                    autocomplete="off"
                />
                <label
                    class="btn btn-outline-warning px-4"
                    for="handoverAtOffice"
                    >Übergabe an der Geschäftsstelle</label
                >
            </div>

            {#if !handoverAtOffice}
                <div class="form-floating col-12">
                    <input
                        name="street"
                        type="street"
                        class="form-control"
                        id="street"
                        placeholder="street"
                        required
                    />
                    <label for="street">Straße und Hausnummer</label>
                </div>
                <div class="form-floating col-md-6">
                    <input
                        name="city"
                        type="city"
                        class="form-control"
                        id="city"
                        placeholder="city"
                        required
                    />
                    <label for="city">Stadt</label>
                </div>
                <div class="form-floating col-md-6">
                    <input
                        bind:value={postalCode}
                        name="postal-code"
                        type="postal-code"
                        class="form-control"
                        id="postal-code"
                        placeholder="postal-code"
                        required
                        pattern="22.&#123;3&#125;"
                    />
                    <label for="postal-code">Postleitzahl</label>
                    {#if !postalCodeValid && postalCodeFormatValid}
                        <div class="text-danger">
                            <p>
                                Die Postleitregion muss Hamburg (22) sein, damit
                                eine Abholung erfolgen kann.
                            </p>
                        </div>
                    {/if}
                    {#if !postalCodeFormatValid}
                        <div class="text-danger">
                            <p>
                                Die Postleitzahl muss eine fünfstellige Zahl
                                sein.
                            </p>
                        </div>
                    {/if}
                </div>
            {/if}

            <div>
                <h2>Informationen der zu spendenden Kleidung:</h2>
            </div>
            {#each clothingItems as c, i}
                <div class="form-floating input-group col-12">
                    <input
                        bind:value={clothingItems[i]}
                        name="clothing"
                        type="clothing"
                        class="form-control"
                        id="clothing"
                        placeholder="clothing"
                        required
                    />
                    <label for="clothing">Kleidungsstück/e</label>
                    {#if i + 1 === clothingItems.length && clothingItems[i] !== ""}
                        <button
                            on:click={addClothingItem}
                            class="btn btn-success"
                            type="button"
                            id="button-addon1">Add</button
                        >
                    {/if}
                    <button
                        on:click={() => removeClothingItem(i)}
                        class="btn btn-danger"
                        type="button"
                        id="button-addon2">Remove</button
                    >
                </div>
            {/each}

            <div class="col-12">
                <button type="submit" class="btn btn-primary btn-lg px-4 gap-3"
                    >Spenden Informationen Senden</button
                >
            </div>
        </div>
    </form>
</div>
