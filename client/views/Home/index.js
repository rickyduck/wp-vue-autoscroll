import BlogPost from '../../components/Blog/Post'
import BlogHeader from '../../components/Blog/Header'
import './style.css'

export default {
  render(h) {
    const items = this.$store.state.displayed_posts.map((item, index) => {
      console.log(item)
      return <BlogPost post={item} store={this.$store}/>
    })
    const loadingClass = this.$store.state.loading ? " loading" : ""
    const loadingHTML = this.$store.state.loading ? <div class='uil-ripple-css' style='transform:scale(0.46);'><div></div><div></div></div> : ""
    return (
      <div class={`page`+loadingClass}>
        {loadingHTML}
        {items}
      </div>
    )
  },
  created() {
    this.$store.dispatch('fetchPosts')
    this.$store.dispatch('fetchWidgets')
  }
}
