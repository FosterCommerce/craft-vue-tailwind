<template>
    <Button>Normal Button</Button>
</template>

<script>
    import Button from '../../src/components/global/Button.vue';

    export default {
        name: 'ButtonNormal',
        components: { Button },
    };
</script>

<include-source>stories/button/ButtonNormal.story.vue</include-source>
