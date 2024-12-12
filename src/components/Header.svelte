<script>
    import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
    import { link } from 'svelte-spa-router';
</script>

<AppBar>
    <svelte:fragment slot="lead" >
        <a use:link href="/" class="font-bold">
            simple to-do
        </a> 
    </svelte:fragment>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
