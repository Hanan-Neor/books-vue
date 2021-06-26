import { bookService } from '../services/book-service.js';
import bookReview from '../cmps/book-review.js';


// Vue.component('book-details', {
export default {

    template: `
        <!-- <section class="book-details app-layout" v-if="books.length"> -->
        <section class="book-details app-layout">
            <main>
            <ul>
                <li><b>id:</b> {{book.id}}</li>
            <li><b>title:</b> {{book.title}}</li>
            <li><b>subtitle:</b> {{book.subtitle}}</li>
            <li><b>authors:</b> {{book.authors}}</li>
            <li><b>publishedDate:</b> {{book.publishedDate}}</li>
            <li><b>description:</b> {{book.description}}</li>
            <li><b>pageCount:</b> {{book.pageCount}}</li>
            <li><b>categories:</b> {{book.categories}}</li>
            <li><b>thumbnail:</b> {{book.thumbnail}}</li>
            <li><b>language:</b> {{book.language}}</li>
            <li><b>listPrice:</b> {{book.listPrice}}</li>
            <li><b>amount:</b> {{book.amount}}</li>
            <li><b>currencyCode:</b> {{book.currencyCode}}</li>
            <li><b>isOnSale:</b> {{book.isOnSale}}</li>
        </ul>
        
        <div class="right-side">
        <img :src="book.thumbnail">
        <button><router-link :to="'/book'"> Back to Books </router-link></button>


</div>
</main>
            <!-- id: {{bookToShow.id}}<br>
            title: {{bookToShow.title}}<br>
            subtitle: {{bookToShow.subtitle}}<br>
            authors: {{bookToShow.authors}}<br>
            publishedDate: {{bookToShow.publishedDate}}<br>
            description: {{bookToShow.description}}<br>
            pageCount: {{bookToShow.pageCount}}<br>
            categories: {{bookToShow.categories}}<br>
            thumbnail: {{bookToShow.thumbnail}}<br>
            language: {{bookToShow.language}}<br>
            listPrice: {{bookToShow.listPrice}}<br>
            amount: {{bookToShow.amount}}<br>
            currencyCode: {{bookToShow.currencyCode}}<br>
            isOnSale: {{bookToShow.isOnSale}}<br> -->
            
            <!-- <ul>
                <li v-for="key in bookToShow">{{key}}</li>
            </ul> -->
            <!-- <button @click="exit">X</button> -->


<hr>

<div>
<book-review :book="book"/>
</div>       


        </section>
    `,
    data() {
        return {
            // books: [],
            book: null,
        };
    },
    methods: {
        exit() {
            this.$emit('exit', null);
        }

    },

    computed: {
        bookToShow() {
            // return Object.entries(this.books.find(booke => booke.id === this.book))
            // return this.books.find(booke => booke.id === this.book)
            return this.book
        }

    },
    components: {
        bookReview,

    },
    created() {
        // bookService.query()
        //     .then(books => this.books = books);
        // const id = this.$route.params.bookId;
        const { bookId } = this.$route.params;
        this.book = bookService.getById(bookId);
        //  bookService.getById(bookId)
        //     .then(book=>{
        //         this.book = book;
        //     })
    }
}
