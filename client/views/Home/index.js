import BlogPost from '../../components/Blog/Post'
import BlogHeader from '../../components/Blog/Header'

export default {
  render(h) {
    const items = this.$store.state.displayed_posts.map((item, index) => {
      console.log(item)
      if(typeof item !== 'undefined') {
        return (<BlogPost post={item} store={this.$store}/>);
      } else {
        return <div></div>;
      }
      //return <BlogPost post={item} store={this.$store}/>
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
