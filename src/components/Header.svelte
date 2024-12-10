<script>
    import {link} from 'svelte-spa-router';
</script>

<header class="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <h1 class="text-lg font-bold">My Header</h1>
        <nav class="space-x-4">
            <a use:link href="/" class="hover:text-blue-300 text-white">Home</a>
            <a use:link href="/to-do" class="hover:text-blue-300 text-white">To-do</a>
        </nav>
    </div>
</header>