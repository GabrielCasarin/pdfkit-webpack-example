<template>
    <text
       :dy="dy"
       x="19.622417"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.64444px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       xml:space="preserve">
            <tspan
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.64444px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
            :dy="dy"
            x="19.622417">
                {{content}}
            </tspan>
    </text>
</template>

<script>
export default {
  props: ['content', 'dy']
}
</script>

<style>

</style>