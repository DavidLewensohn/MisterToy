<template>
    <h2>Wellcome to toy shop!</h2>

    <toy-list :toys="toysToShow" @removeToy="removeToy" />
</template>


<script >
import { toyService } from '../services/toy-service.js'
import toyList from "../components/toy-list.vue"

export default {
    name: 'toy-app',
    data() {
        return {}
    },
    created() { },
    methods: {
        removeToy(toyId) {
            this.$store.dispatch({type: 'removeToy', id: toyId})
        },
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
        toysToShow() {
            // add filter by new regex
            return this.toys
        },

    },
    components: {
        toyList
    }
}

</script>

<style>
</style>