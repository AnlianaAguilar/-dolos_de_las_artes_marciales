<template>
    <div class="container">
        <p class="h5"><strong>id:</strong> {{id}}</p>
        <p class="h5"><strong>Nombre:</strong> {{name}}</p>
        <img class="rounded mx-auto d-block" :src="src" alt="img">
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        id:{
            type:String
        },
        name:{
            type:String
        },
        src:{
            type:String
        }
    },
    data: function(){
        return {}
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