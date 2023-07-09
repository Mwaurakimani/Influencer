<template>
    <div class="w-[100%] ">
        <div class="rating-box mb-[20px]">
            <header>Review</header>
            <div class="stars mb-[25px]">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <textarea class="h-[100px] w-[100%] mb-[25px]" placeholder="Comment..." v-model="comment"></textarea>
            <button class=" block mx-[auto] purple p2" @click="submitReview">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RatingComponent',
    props:['assignment','user_type'],
    data() {
        return {
            comment: null,
        }
    },
    methods:{
        submitReview(){
            let star = $('.stars .active');

            let payload = {
                rating:star.length,
                comment:this.comment
            }

            this.$emit('rate',payload)
        },
        fillRating(rating){
            let star = $('.stars i');

            for (let it = 0; it < rating ; it++){
                $(star[it]).addClass('active')
            }
        }

    },
    mounted() {
        const stars = document.querySelectorAll(".stars i");

        // Loop through the "stars" NodeList
        stars.forEach((star, index1) => {
            // Add an event listener that runs a function when the "click" event is triggered
            star.addEventListener("click", () => {
                // Loop through the "stars" NodeList Again
                stars.forEach((star, index2) => {
                    // Add the "active" class to the clicked star and any stars with a lower index
                    // and remove the "active" class from any stars with a higher index
                    index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                });
            });
        });

        if (this.user_type == 'influencer'){
            this.comment = this.assignment.influencer_comment??null
            this.fillRating(this.assignment.influencer_rating_count)
        }else {
            this.comment = this.assignment.marketer_comment??null
            this.fillRating(this.assignment.marketer_rating_count)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../Pages/sassLoader";

nav {
    box-shadow: 0 3px 2px lightgrey;
    background-color: white;
    position: static !important;
    cursor: pointer;
}

/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
.rating-box, .comment-box {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
}

.rating-box header {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
}

.rating-box .stars {
    display: flex;
    align-items: center;
    gap: 10px;
}

.stars i {
    color: #e6e6e6;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.2s ease;
}

.stars i.active {
    color: #ff9c1a;
}

//end rating
</style>
