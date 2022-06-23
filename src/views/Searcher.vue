<template>
    <div>
        <h1>Buscar un peleador por id</h1>
        <input type="text" v-model="idFighter">
        <button @click="searcherFighter">Buscar</button>
    </div>
</template>

<script>

export default {
    name: 'searcher-view',
    // props: {},
    data: function(){
        return {
            idFighter:"",
        }
    },
    // computed: {},
    methods: {
        searcherFighter(){
            this.$router.push(`/peleador_encontrado/${this.idFighter}`)
        }
    },  
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>

