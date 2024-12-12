<script lang="ts">
    import { CalendarDate } from '@internationalized/date';
    import { todosStore } from '../store';
    import LeftIcon from '$lib/icons/LeftIcon.svelte';
    import RightIcon from '$lib/icons/RightIcon.svelte';
    import { link } from 'svelte-spa-router';

    export let params = {};
    let [year, month, day] = params.date.split('-').map(Number);
    let date = new CalendarDate(year, month, day);
    $: {
        [year, month, day] = [date.year, date.month, date.day];
    }

    let text = '';

    function addTodo() {
        if (!text) return;

        todosStore.update(todosStore => [...todosStore, { id: Math.random(), text, done: false, date: year + '-' + month + '-' + day }]);
        text = '';
    }

    function switchDone(todo: { done: boolean }) {
        todo.done = !todo.done;
        todosStore.update(todosStore => [...todosStore]);
    }

    function deleteTodo(todo: { id: number }) {
        todosStore.update(todosStore => todosStore.filter(t => t.id !== todo.id));
    }

    function subtractDay() {
        date = date.subtract({ days: 1 });
    }

    function addDay() {
        date = date.add({ days: 1 });
    }

</script>

<main class="flex flex-col items-center justify-center h-full -mt-14">
    <h3 class="text-[15px] font-bold pb-2">current is.. {year}.{month}</h3>
    <div class="flex gap-6">
        <a use:link href="/to-do/{date.subtract({days: 1})}" class="border rounded-full flex size-7 justify-center items-center" on:click={subtractDay}>
            <LeftIcon />
        </a>
        <h1 class="text-[60px] font-bold pb-6">{day}</h1>
        <a use:link href="/to-do/{date.add({days:1})}" class="border rounded-full flex size-7 justify-center items-center" on:click={addDay}>
            <RightIcon />
        </a>
    </div>
    <h1 class="text-[40px] font-bold pb-6">To-do List</h1>
    <div class="flex flex-col">
        <div class="flex gap-4 pb-6">
            <input type="text" bind:value={text} class="input" />
            <button on:click={addTodo} class="btn variant-filled">Add</button>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Done</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {#each $todosStore.filter(todo => todo.date === `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`) as todo}
                    <tr>
                        <td>{todo.text}</td>
                        <td class="text-center"><button on:click={() => switchDone(todo)} class="chip {todo.done ? 'variant-filled' : 'variant-soft'}">{todo.done ? 'Yes' : 'No'}</button></td>
                        <td><button on:click={() => deleteTodo(todo)} class="chip variant-soft">Delete</button></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>