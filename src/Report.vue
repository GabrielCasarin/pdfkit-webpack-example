<template>
    <svg xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 210 297" height="297mm" width="210mm">
        <g id="layer1">
            <Item v-for="item in items" :key="item.id" :content="item.content" :dy="item.dy"></Item>
            <rect
                y="0.27085829"
                x="0.27085829"
                height="296.45828"
                width="209.45828"
                id="rect17"
                style="fill:none;stroke:#ff0000;stroke-width:0.541716" />
        </g>
    </svg>
</template>

<script>
import Item from './components/Item.vue'
export default {
    name: 'Report',
    props: ['items'],
    components: { Item }
}
</script>

<style>

</style>