import Home from "./Home.svelte";
import ToDo from "./ToDo.svelte";

const routes = {
    '/': Home,
    '/to-do/:date': ToDo,
}

export default routes;