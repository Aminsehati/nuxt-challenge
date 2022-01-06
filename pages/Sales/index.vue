<template>
    <div class="sales-page">
        <HighCharts/>
    </div>
</template>
<script>
import './style.css'
export default {
    mounted(){
        this.getSalesInfo()
    },
    methods:{
        async getSalesInfo(){
            try {
                const httpResponse = await this.$sales.index();
                console.log(httpResponse);
            } catch (error) {
                
            }
        }
    }

}
</script>