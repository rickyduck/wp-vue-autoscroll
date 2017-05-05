import BlogPost from '../../components/Blog/Post'
import BlogHeader from '../../components/Blog/Header'

export default {
  render(h) {
    const items = this.$store.state.displayed_posts.map((item, index) => {
      console.log(item)
      return <BlogPost post={item} store={this.$store}/>
    })
    return (
      <div class="page">
        {items}
      </div>
    )
  },
  created() {
    this.$store.dispatch('fetchPosts')
  }
}
