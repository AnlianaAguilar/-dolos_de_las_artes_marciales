<template>
    <div class="container">
        <h1 class="h1 my-3">Buscar un peleador por id</h1>
        <input type="text" placeholder="Ingrese el número de peleador" v-model="idFighter">
        <button class="mx-2 btn btn-secondary" @click="searcherFighter">Buscar</button>
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
            this.$router.push(`/peleador_encontrado/${this.idFighter}`) //redireccion programativa
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
    input{
        width: 250px;
        height: 35px;
    }
</style>

