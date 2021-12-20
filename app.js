const app = Vue.createApp({
    data(){
        return {
            value: '',
            isVisible: true,
            bgColor: ''
        }
    },
    computed:{
        mainClass: function(){
            return { 
                user1: this.value === 'user1',
                user2: this.value === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        }
    },
    methods: {
        visibility(){
           this.isVisible = !this.isVisible
           console.log(this.isVisible)
        }
    }
})


app.mount("#assignment")