<script lang="ts">
	import { client } from '$lib/client';

	const res = client.users.get();
	console.log(res);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
