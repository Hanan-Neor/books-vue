// import '../cmps/services/book-service.js';
import { bookService } from '../services/book-service.js';
// import '../pages/book-list.js'
import bookList from '../pages/book-list.js'
// import '../cmps/book-filter.js'
import bookFilter from '../cmps/book-filter.js'

// export default {
export default {

    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter"></book-filter>
            <book-list :books="booksToShow"></book-list>
            <!-- {{books}} -->
            <!-- {{booksToShow}} -->
            <!-- {{selectedBook}} -->
        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,

        };
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }

    },

    computed: {
        booksToShow() {
            // return this.books
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.title.toLowerCase();
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr);
            });
            return booksToShow;
        },
    },
    components: {
        bookList,
        bookFilter,

    },
    created() {
        // this.books = bookService.query()
        bookService.query()
            .then(books=> this.books = books)
    }
}
