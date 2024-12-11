<script>
    import { link } from 'svelte-spa-router';

    let navItems = [
      { name: "Home", href: "/" },
      { name: "To-do", href: "/to-do" },
    ];
  </script>
  
  <div class="flex">
    <nav class="bg-gray-800 text-white w-64 fixed top-0 left-0 h-full">
      <div class="p-4 font-bold text-lg border-b border-gray-700">
        My Navigator
      </div>
      <ul class="mt-4 space-y-2">
        {#each navItems as item}
          <li>
            <a
              use:link href={item.href}
              class="block px-4 py-2 hover:bg-gray-700 rounded transition"
            >
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
