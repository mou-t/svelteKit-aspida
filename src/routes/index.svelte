<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { client } from '$lib/client';
	export const load: Load = async () => {
		const res = client.users.get();
		console.log(res);
		return {};
	};
</script>

<script lang="ts">
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
