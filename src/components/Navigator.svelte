<script lang="ts">
    import HomeIcon from '$lib/icons/HomeIcon.svelte';
    import ListIcon from '$lib/icons/ListIcon.svelte';
    import { today } from '@internationalized/date';
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';

    $: currentRoute = window.location.hash.slice(1);;

    let now = today('Asia/Seoul');
    let currentTile: number = 0;
    let navItems = [
    { name: "Home", href: "/#/", icon: HomeIcon },
    { name: "To-do", href: "/#/to-do/" + now, icon: ListIcon},
    ];


    onMount(() => {
        const updateRoute = () => {
            currentRoute = window.location.hash.slice(1); // 해시값에서 경로 추출
        };
        window.addEventListener('hashchange', updateRoute);
        return () => window.removeEventListener('hashchange', updateRoute);
    });
</script>

<AppRail>
     {#each navItems as item}
        <AppRailAnchor bind:group={currentTile} name={item.name} selected={currentRoute === item.href.replace('/#', '')} title={item.name} href={item.href}>
            <svelte:fragment slot="lead">
                <svelte:component this={item.icon} />
            </svelte:fragment>
            <span>{item.name}</span>
        </AppRailAnchor>        
    {/each}
</AppRail>
