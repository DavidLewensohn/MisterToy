<template>
    <h2>Edit:</h2>
    <pre>{{ toyToEdit }}</pre>
    <section class="toy-edit">
        <form @submit.prevent="saveToy">
            <div class="form-control">
                <label for="txt">Toy name:</label>
                <input required v-model="toyToEdit.name" id="txt" type="text" 
                    placeholder="Enter your toy name here..." />
            </div>
            <div class="form-control">
                <label for="price">Price:</label>
                <input required v-model.number="toyToEdit.price" id="price" type="number" />
            </div>
            <div class="btn-group">
                <button @click="saveToy">save</button>
                <button @click="goBack" >go back</button>
            </div>
        </form>
    </section>
</template>

<script >
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-edit',
    data() {
        return {
            toyToEdit: null,
        }
    },
    created() {
        const { id } = this.$route.params
        if (id) {
            toyService.getById(id).then((toy) => {
                this.toyToEdit = toy
            })
            // } else this.toyToEdit = toyService.getEmptyToy()
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit })
                .then(()=> this.$router.push('/toy'))
        }
    }
}
</script>
