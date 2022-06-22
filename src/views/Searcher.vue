<template>
    <div>
        <h1>Buscar un peleador por id</h1>
        <input type="text" v-model="idFighter">
        <button>Buscar</button>
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
    //methods: {}
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