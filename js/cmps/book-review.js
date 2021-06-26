import { bookService } from "../services/book-service.js";
import reviewList from "./review-list.js";

export default {
    props: ['book'],
    template: `
    <section class="book-review">
        <form @submit="onSubmitRev">
        <label>Name:</label>
            <input v-model="name" type="text" placeholder="Book Reader">
    <select v-model="rate">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
<textarea rows="10" cols="50" v-model="review"></textarea>
<button>Save</button>
</form>
       <review-list :bookReviews="reviews"></review-list>
        <!-- <div>
{{book.reviews[0].name}}
{{book.reviews[0].rate}}
{{book.reviews[0].review}}
</div>
        <div>
{{book.reviews[1].name}}
{{book.reviews[1].rate}}
{{book.reviews[1].review}}
</div> -->
</section>
`,
    data() {
        return {
            // currbook = book,
            name: '',
            rate: 5,
            review: '',
            reviews: [],
        }
    },

    methods: {
        onSubmitRev() {
            if(this.name === '' || this.review ==='')return;
            const reviewObj = { name: this.name, rate: this.rate, date: Date.now(), review: this.review };
            // console.log(reviewObj);
            bookService.addReview(this.$route.params.bookId, reviewObj)
                .then(book => {
                    this.reviews = book.reviews;
                })
                this.name = '';
                this.rate = 5;
                this.review = '';

            // .then(this.$router.push('/book/'+this.$route.params.bookId))
        }


    },
    computed:{
        dateToShow(){
            return ''
        }
    },
    created() {
        console.log(this.book.reviews);
        // this.bb=this.book.reviews
        this.reviews = this.book.reviews;
    },
    components :{
        reviewList
    }


}

// carService.save(this.carToEdit)
// .then(car => this.$router.push('/car'));