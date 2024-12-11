<script>
    import Header from "./Header.svelte";
    import Navigator from "./Navigator.svelte";

</script>

<Header />
<Navigator />
<main class="ml-64">
    <slot></slot>
</main>