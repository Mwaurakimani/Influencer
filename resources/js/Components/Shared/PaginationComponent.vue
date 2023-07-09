<template>
    <ul style="width: fit-content" >
        <Link as="li" v-for="link in paginationData.links" :href="link.url != null ? link.url : '#'" :class="{'active-page':link.active == true}">
            <p>{{ formatter(link.label) }}</p>
        </Link>
    </ul>
</template>

<script>

export default {
    setup(){
        return {

        }
    },
    methods:{
        formatter(data){
            let value = parseInt(data)

            if(!Number(value)){
                if (data.includes("Previous")){
                    value = "<<"
                }else {
                    value = ">>"
                }
            }

            return value
        }
    },
    props:['paginationData'],
}


</script>


<style lang="scss" scoped>
@import './../../Pages/sassLoader';

ul {
    width: 100%;
    height: 35px;
    display: flex;
    gap: 7px;
    li{
        cursor: pointer;
        box-shadow: 0 0 6px lightgrey;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            @extend .p3;
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: 100%;
            line-height: 35px;
            text-align: center;
        }

        &:hover{
            background-color: lightpink;
            p{
                color: white;
            }
        }
    }
}

.active-page{
    background-color: var(--t-pink);

    p{
        color: white;
    }
}

.span{
    box-shadow: none;
    align-items: flex-end;
}



@include s-screens {

}
</style>
