<template>
    <div>
        <h2>{{ sectionTitle }}</h2>
        <ul>
            <li>Phone: 867-5309</li>
            <li>618 Gopher Road, Gravity Falls, Oregon</li>
            <li>Zip code: 90210</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['section-title']
    }
</script>