<script setup>
import { useData } from 'vitepress'
const { theme } = useData()

const props = defineProps({
    module: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'tip'
    }
})

const version = theme.value.publicVersions?.[props.module] || "0.0.0"
</script>

<template>
    <Badge :type="type" :text="version" />
</template>