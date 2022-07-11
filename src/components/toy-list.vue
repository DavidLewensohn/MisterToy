<template>
    <h3>hi from toy-list</h3>
    <section >
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id" 
        @removeToy="removeToy"/>


    </section>
</template>

<script>
import toyPreview from '../components/toy-preview.vue'
export default {
    props: {
        toys: {
            type: Array,
            required: true,
        },
    },
    components: {
        toyPreview,
    },
    methods: {
        removeToy(toyId) {
            this.$emit('removeToy', toyId)
        },
    },
}
</script>

