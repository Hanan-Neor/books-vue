

// Vue.component('book-list', {
export default {
    props: ['books'],

    template: `
        <section class="book-list">
            <ul>
                <!-- <li v-for="book in this.books" @click="onBookClick(book.id)"> -->
                <li v-for="book in this.books">
                    <router-link :to="'/book/'+book.id">
                <img :src="book.thumbnail"/>
                <div>
                <p class="book-title">{{book.title}} </p>   
                <p class="book-price">{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</p>
</div>
                </router-link>

                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            // x: books,

        };
    },
    methods: {
        // onBookClick(bookId) {
        //     console.log(bookId);
        //     this.$emit('selected',bookId)

        // }

    },

    computed: {

    },
    components: {

    },
    created() {

    }
}
