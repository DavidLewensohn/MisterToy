<template>
    <h2>preview</h2>
    <pre>{{ toy }}</pre>
    <button @click="removeToy(toy._id)">Delete</button>
    <button @click="goToDetails(toy._id)">Details</button>
    <button @click="goToEdit(toy._id)">Edit</button>
</template>

<script >
export default {
    props:{
        toy:{
            type: Object,
            required: true,
        }
    },
    methods:{
        removeToy(toyId){
            this.$emit('removeToy', toyId)
        },
        goToDetails(){
             this.$router.push(`/toy/${this.toy._id}`)
        },
        goToEdit(){
             this.$router.push(`/toy/edit/${this.toy._id}`)
        },
    }

}

</script>

<style scoped>
</style>