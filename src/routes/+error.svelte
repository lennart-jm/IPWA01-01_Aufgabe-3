<script>
  import { page } from "$app/stores";
</script>

<h1>Leider ist dies Seite nicht Verfügbar.</h1>
<p>
  Falls Sie trotzdem Zugriff auf diese Seite beötigen, kontaktieren Sie uns mit
  der Fehlermeldung und der Aufreufenen URL.
</p>
<p>{$page.status}: {$page.error.message}</p>
