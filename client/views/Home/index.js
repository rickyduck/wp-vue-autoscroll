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
    var display = items;
    if(items.length) {
      display = items;
    } else {
      display = (<div class="lds-css ng-scope">
    <div style="width:100%;height:100%" class="lds-facebook">

        <div></div>
        <div></div>
        <div></div>
      </div></div>);
    }
    return (
      <div class="page">
        {display}
      </div>

    )
  },
  created() {
    this.$store.dispatch('fetchPosts')
  }
}
