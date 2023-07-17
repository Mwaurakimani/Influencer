<template>
    <div class="holder">
        <div class="w-[100%] bg-red-50 p-[20px]">
            <select>
                <option>Jan</option>
                <option>Jan</option>
                <option>Jan</option>
                <option>Jan</option>
                <option>Jan</option>
                <option>Jan</option>
            </select>
        </div>
        <ul class="calender container w-[100%]">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li v-for="item in calender[0]" :key="item.id" class="">
                {{ item }}
            </li>
            <li v-for="item in calender[1]" :key="item.id" class="date">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>

import {parseInt} from "lodash/string";

export default {
    computed: {
        calender(){
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth()-1

            let date2 = new Date(`${year}-${month}-1`)
            return this.filler(
                date.getDay(),
                this.getDaysInMonth(year, month),
                this.getDaysInMonth(year, (month - 1)),
                this.getDaysInMonth(year, (month + 1))
            )
        }
    },
    data() {
        return {
            name: "this is my name"
        }
    },
    methods:{
        getDaysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        },
        filler(date,days_num,prev_month_days,next_month_days){
            let dates = [
                [],
                []
            ]

            for(let i = 1; i <= days_num; i++){
                dates[1].push(i)
            }

            for(let i = prev_month_days; i > (parseInt(prev_month_days) - parseInt(date)); i--){
                dates[0].unshift("")
            }

            return dates;
        }
    }
}
</script>

<style scoped lang="scss">
.holder {
    width: 100vw;
    height: 100vh;
    background-color: gray;
    display: grid;
    align-content: center;
    .calender {
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-gap: 5px;
        grid-row-gap: 20px;
        background-color: #ecebeb;
        padding: 20px;
        border-radius: 5px;
    }
}

.date{
    background-color: white;
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 5px 6px #d3d3d3;
    transition: all ease-in;

    &:hover{
        background-color: dodgerblue;
        color: white;
        cursor: pointer;
    }
}
</style>
