<template>
    <div>
        <h1 v-if="foundFighter">¡Peleador Encontrado!</h1>
        <component-card v-if="foundFighter" :id="id" :name="name" :src="srcImg"></component-card>
        <div v-else>Peleadro no Encontrado</div>
    </div>

</template>

<script>
import data from '/peleadores.json'
import Card from '@/components/Card.vue'
export default {
    name: 'foundFighter-view',
    // props: {},
    data: function(){
        return {
            name:'',
            srcImg:'',
            data:data,
            foundFighter:false
        }
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
    methods: {
        found(){
            let foundFighter= this.data.find((fighter)=>{
                return fighter.id==this.id
            })
            if(foundFighter){
                this.name=foundFighter.nombre
                this.srcImg= foundFighter.imgSrc
                this.foundFighter=true   
            }
  
        }
    },
    // watch: {},
    components: {
        'component-card':Card,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.found()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>