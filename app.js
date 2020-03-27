new Vue({
    el:'#app',

    data(){
        return{
            name:'Bitcoin',
            img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=001',
            changePercent:-1,
            // prices:[8400,7900,8200,9000,9400,10000],
            price:8200,
            pricesWithDays:[
                { day:'Lunes',value:8400 },
                { day:'Martes',value:7900 },
                { day:'Miercoles',value:8200 },
                { day:'Jueves',value:9000 },
                { day:'Viernes',value:9400 },
                { day:'Sabado',value:10000 },
                { day:'Domingo',value:10200 }
            ],
            showPrices:false //true
        }
    },
    methods:{
        toggleShowPrices(){
            this.showPrices = !this.showPrices
        }
    }

})



// methods: Objeto de la instancia de Vue donde se puede definir funciones, que se pueden utilizar en diferentes contexto, principalmente para atacharse a eventos que pueden ser disparados por la vista.
// v-on directiva que sirve para escuchar eventos del DOM, tales como onclick, onmouseover, mouseout, entre otros, para ejecutar alguna función.