<template>
    <span>filter:</span>
    <input type="text" v-model="filterBy.txt" @input="setFilter" placeholder="Filter by name:">

    <select @change="setFilter" v-model="filterBy.byLabel" multiple>
        <option >Select label</option>
        <option v-for="(label, idx) in labels" :value="label" :key="idx">
            {{ label }}
        </option>
    </select>

    <select @change="setFilter" v-model="filterBy.status">
        <option value="">Select status</option>
        <option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx">
            {{ opt }}
        </option>
    </select>

    <select @change="setFilter" v-model="filterBy.bySort">
      <option value="">Select sort</option>
      <option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx">
        {{ opt }}
      </option>
    </select>


</template>

<script >
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                status: '',
                byLabel: [],
                bySort: '',
            },
            labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery powered'],
            stockOptions: ['In stock', 'Out of stock'],
            sortOptions: [
                'Name - Increasing',
                'Price - Increasing',
                'Created - Increasing',
                'Name - Decreasing',
                'Price - Decreasing',
                'Created - Decreasing',
            ],
        }
    },
    methods: {
        setFilter() {
            if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
            this.$emit('setFilter', this.filterBy)
        }
    }
}
</script>
