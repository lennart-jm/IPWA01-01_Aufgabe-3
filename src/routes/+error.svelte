<script>
  import { page } from "$app/stores";
</script>

<h1 class="display-5 fw-bold">Leider ist diese Seite nicht verfügbar.</h1>
<p class="lead mb-4">
  Falls Sie trotzdem Zugriff auf diese Seite benoetigen, kontaktieren Sie uns mit
  der angezeigten Fehlermeldung und der aufgerufenen URL.
</p>
<p class="lead mb-4">{$page.status}: {$page.error.message}</p>
