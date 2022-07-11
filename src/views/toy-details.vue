<template>
    <h2>Details:</h2>
    <pre>{{toy}}</pre>
</template>

<script >
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-details',
    data() {
        return {
            toy: null,
        }
    },
    created() {
        const { id } = this.$route.params
        if (id) {
            toyService.getById(id).then((toy) => {
                this.toy = toy
                console.log(toy);
                console.log(this.toy);
            })
            // } else this.toyToEdit = carService.getEmptyCar()
        }
    }
}

</script>

<style >
</style>