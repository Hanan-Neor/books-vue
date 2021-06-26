
export default {
    props: ['review'],
    template: `
    <li class="review-preview">
        {{review.name}} |
        {{review.rate}} stars |
        {{dateToShow}}
        <button @click="onDeleteReview">Delete</button>
        <br>
              <p>{{review.review}}</p>

    </li>
          `,
    computed:{
        dateToShow(){
        //    return new Date(+this.review.date).toLocaleString()
           return new Date(+this.review.date).toLocaleDateString()
        }
    },
    methods:{
        onDeleteReview(){
            
        }
    }
}