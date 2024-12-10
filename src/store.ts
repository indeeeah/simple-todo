import { writable } from "svelte/store"

let todos = [
    { id: 1, text: "Learn Svelte", done: true },
    { id: 2, text: "Learn Sapper", done: false },
    { id: 3, text: "Build something awesome", done: false },
    { id: 4, text: "Learn TypeScript", done: false }
]

export const todosStore = writable(todos)