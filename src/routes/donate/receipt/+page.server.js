

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        // Import all send form data 
        const fulldate = new Date(Date.now());

        const data = await request.formData();
        const name = data.get('name');
        const donationDestination = data.get('donationDestination');
        const street = data.get('street');
        const city = data.get('city');
        const postalCode = data.get('postal-code');
        const clothing = data.getAll('clothing');

        //console.log(name);
        //console.log("Value ist: " + clothing);


        if (postalCode && !/22.{3}/.test(postalCode)) {
            return {
                success: false,
                error: "ungülitge Abholadresse"
            };
        }

        // Hier in z.B. Datenbank Speichern... 

        return {
            success: true,
            time: fulldate.toLocaleTimeString('de-DE'),
            date: fulldate.toLocaleDateString('de-DE'),
            name: name,
            donationDestination: donationDestination,
            street: street,
            city: city,
            postalCode: postalCode,
            clothing: clothing
        };

    }
};