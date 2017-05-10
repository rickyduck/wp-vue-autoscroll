import RelatedItem from './RelatedItem'

export default {
  props: ['categories', 'post'],
  data: {
    random: 0
  },
  render() {
  //  if(typeof this.random === 'undefined' || this.random === 0) this.random = Math.random()
    const that = this;

    var postsOrdered = this.$store.state.posts.sort(() => {
      return 0.5 - Number('0.'+this.post.id)
    })
    var index = 0

    const posts = postsOrdered.filter((post) => {
      var returnPost = false
      if(index < 3) {

        this.categories.forEach((category) => {
          if(post.categories.includes(category)) {
            returnPost = true
            index++
          }
        })
      }
      return returnPost
    })
    const postItems = posts.map((post) => {
      return <RelatedItem post={post} />
    })
    return <div class="related-posts single-related-posts">
      <div class="fusion-title fusion-title-size-three sep-none fusion-sep-none fusion-border-below-title" style="margin-top:0px;margin-bottom:0px;"><h3 class="title-heading-left" data-fontsize="24" data-lineheight="36">Related Posts</h3></div>
      <div class="fusion-carousel fusion-carousel-title-below-image" data-imagesize="fixed" data-metacontent="yes" data-autoplay="no" data-touchscroll="no" data-columns="3" data-itemmargin="44px" data-itemwidth="180" data-scrollitems="">
        <div class="fusion-carousel-positioner" style="margin-left: -44px; margin-bottom: 20px">
          <div class="fusion-carousel-wrapper" style="display: block; text-align: start; float: none; position: relative; top: auto; right: auto; bottom: auto; left: auto; z-index: auto; width: 840px; margin: 0px; overflow: hidden;">
            <ul class="fusion-carousel-holder clearfix" style="text-align: left; float: none;  margin: 0px; width: 2520px;">
              {postItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}
