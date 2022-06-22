<template>
    <div>
        <h1>¡Peleador Encontrad!</h1>
        <h4>{{id}}</h4>  
    </div>

</template>

<script>
export default {
    name: 'foundFighter-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
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