<template>
    <div>
        <h1 class="h1">Peleadores:</h1>
        <div class="container">
            <div class="row ">
                <div class="col my-3">
                    <ul v-for="fighter in fighters" :key="fighter">
                        <a @click="redirecTo(fighter.id)">
                            <li>{{fighter.nombre}}</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '/peleadores.json'
export default {
    name: 'fighters-view',
    // props: {},
    data: function(){
        return {
            fighters:data
        }
    },
    // computed: {},
    methods: {

        redirecTo(i){
            this.$router.push(`/peleador_encontrado/${i}`)
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
    ul{
        display: flex;
        margin-left:40%;
    }
</style>