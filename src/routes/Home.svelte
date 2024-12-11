<script lang='ts'>
    import {link} from 'svelte-spa-router';

    import { todosStore } from '../store';

    let text = '';

    function addTodo() {
        if (!text) return;

        todosStore.update(todosStore => [...todosStore, { id: Math.random(), text, done: false }]);
        text = '';

    }
</script>

<main>
    <h1>Hello!</h1>
    <h3>make your to-do list</h3>
    <input type="text" bind:value={text} class="bg-blue-400"/>
    <a on:click={addTodo} use:link href="/to-do">Add</a>
</main>