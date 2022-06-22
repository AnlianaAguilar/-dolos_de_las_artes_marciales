<template>
    <div>
        <h1>¡Peleador Encontrad!</h1>
        <component-card :id="id" :name="nameFighter" :src="scrImg"></component-card>
    </div>

</template>

<script>

import Card from '@/components/Card.vue'
export default {
    name: 'foundFighter-view',
    // props: {},
    data: function(){
        return {
            srcImg:'',
        }
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
    //methods: {}
    // watch: {},
    components: {
        'component-card':Card,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.srcImg = require(`/peleadores.json/${this.id}.imgSrc`)
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>