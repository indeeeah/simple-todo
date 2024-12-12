<script>
    import { link } from "svelte-spa-router";

</script>
<main>
    <h2 class="pb-2">link button</h2>
    <a use:link href="/playground" class="bg-white px-2 py-1 border border-blue-200 text-sm rounded-full transition-colors duration-300 ease-in-out active:bg-blue-200" >button</a>
</main>