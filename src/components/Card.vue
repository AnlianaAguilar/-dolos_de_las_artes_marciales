<template>
    <div>
        <h1>id:{{id}}</h1>
        <h1>Nombre{{name}}</h1>
        <img :src="src" alt="img">
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        id:{
            type:Number
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