import { bookService } from "../services/book-service.js";
import {utilService} from "../services/util-service.js"

// Vue.component('book-list', {
export default {
    // props: ['books'],

    template: `
            <section class="book-add app-layout page-layout">
        <div>
            <label>Search:</label>
            <!-- <input type="text" v-model="x" @input="onSearchInput"> -->
            <!-- <input type="text" v-model="x" @change="onSearchInput"> -->
            <input type="text" v-model="x" @input="onSearchInput">
        </div>
        <ul>
<li v-for="book in this.y.items" :key="book.id">
    <button @click="onAddBook(book)">+</button>
    <b>{{book.volumeInfo.title}}</b> -- {{book.volumeInfo.authors}}
</li>
</ul>
            <!-- <hr><hr><hr> -->
        <!-- {{y}} -->
    </section>
        `,
    data() {
        return {
            x: '',
            y: [],
            bookToSave:{},
        };
    },
    methods: {
        // onSearchDebounce(){
        //     // utilService.debounce(this.onSearchInput,500)
        //     utilService.debounce(alert('hi'),3000)
        // },




        onSearchInput() {
            axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.x}`)
                .then((res) => {
                    this.y = res.data
                    // return data
                });
        },

        onAddBook(googleBook){
            // bookToSave{}
            bookService.addGoogleBook(googleBook);
            this.$router.push('/book')
        }

    },

    computed: {

    },
    components: {
        bookService,
        utilService
    },
    created() {
        // utilService.debounce(alert('hi'),5000)
        // onSearchDebounce()
        //         const prmData = fetch('https://www.googleapis.com/books/v1/volumes?printType=books&q=dog')
        //         .then(res => {return res.json();})
        // console.log(prmData);
    },
    mounted(){
        // onSearchDebounce()
    }
    
}


