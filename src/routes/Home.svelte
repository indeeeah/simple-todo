<script lang='ts'>
    import {link} from 'svelte-spa-router';
    import { InputChip } from '@skeletonlabs/skeleton';

    import { todosStore } from '../store';
    import Calendar from '$lib/components/ui/calendar/calendar.svelte';
    import { today } from '@internationalized/date';

    let list: string[] = [];

    let now = today('Asia/Seoul');
    let value: any = today('Asia/Seoul');

    function addTodo() {
        if (!list.length) return;

        todosStore.update(todos => {
            const newTodos = list.map(e => ({ id: Math.random(), text: e, done: false, date: `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}` }));
            return [...todos, ...newTodos];
        });
    }
</script>

<main class="flex flex-col items-center justify-center h-full -mt-14">
    <h1 class="text-[50px] font-bold pb-4">Hello!</h1>
    <h3 class="text-[26px] font-bold pb-4">make your to-do list</h3>
    <Calendar bind:value />
    <div class="flex pb-4">
        <InputChip bind:value={list} name="chips" placeholder="Only English" allowDuplicates/>
    </div>
    <div class="flex gap-4 justify-center items-center">
        <a on:click={addTodo} use:link href="/to-do/{now}" class="btn variant-filled">{!list.length ? 'Go List Page' : 'Add'}</a>
    </div>
</main>