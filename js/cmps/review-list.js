import reviewPreview from "./review-preview.js"; 
 
 export default {
     props: ['bookReviews'],
     template: `
      <ul class="reviews">
          <review-preview  v-for="review in bookReviews" :key="review.id" :review="review"></review-preview>
    </ul>
     `,

    
components:{
    reviewPreview
}
 }