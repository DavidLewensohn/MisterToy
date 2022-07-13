<template>
    <h2>Wellcome to toy shop!</h2>
    <toy-filter @setFilter="setFilter" /><br>
    <router-link to="/toy/edit">Add toy</router-link>

    <toy-list :toys="toys" @removeToy="removeToy" />
</template>


<script >
import toyList from "../components/toy-list.vue"
import toyFilter from "../components/toy-filter.vue"

export default {
    name: 'toy-app',
    data() {
        return {}
    },
    created() { },
    methods: {
        removeToy(toyId) {
            this.$store.dispatch({ type: 'removeToy', id: toyId })
        },
        setFilter(filter) {
            filter = JSON.parse(JSON.stringify(filter));
            this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toysToShow
        },
    },
    components: {
        toyList,
        toyFilter,
    }
}

</script>