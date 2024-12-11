<script lang="ts">
    import { todosStore } from '../store';

    let text = '';

    function addTodo() {
        if (!text) return;

        todosStore.update(todosStore => [...todosStore, { id: Math.random(), text, done: false }]);
        text = '';
    }

    function switchDone(todo: { done: boolean }) {
        todo.done = !todo.done;
        todosStore.update(todosStore => [...todosStore]);
    }

    function deleteTodo(todo: { id: number }) {
        todosStore.update(todosStore => todosStore.filter(t => t.id !== todo.id));
    }

</script>

<main>
    <h1>To-do List</h1>
    <input type="text" bind:value={text} class="bg-blue-400" />
    <button on:click={addTodo}>Add</button>
    <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Done</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                </td>
            </tr>
            {#each $todosStore as todo}
                <tr>
                    <td>{todo.text}</td>
                    <td><button on:click={() => switchDone(todo)}>{todo.done ? 'Yes' : 'No'}</button></td>
                    <td><button on:click={() => deleteTodo(todo)}>Delete</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>