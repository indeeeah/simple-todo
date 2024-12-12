<script>
    import { AppShell } from '@skeletonlabs/skeleton';
    import Header from "./Header.svelte";
    import Navigator from "./Navigator.svelte";

</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-20 p-4">
    <div class="flex size-full min-h-screen flex-col" data-theme="skeleton">
        <Header />
        <div class="flex size-full">
            <div class="bg-surface-500/5 w-20">
                <Navigator />
            </div>
            <main class="flex-1 overflow-y-auto p-4 pt-14">
                <slot></slot>
            </main>
        </div>
    </div>
</AppShell>