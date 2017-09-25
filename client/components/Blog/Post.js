import BlogHeader from './Header'
import BlogContent from './Content'
import Related from './Related'
import createHistory from 'history/createBrowserHistory'

import './style.css'

export default {
  props: ['post', 'store'],
  data: function() {
    return {
      triggered: false,
      visible: false
    }
  },
  methods: {
    handleScroll: function() {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
      const elemPos = (this.$el.offsetTop + this.$el.offsetHeight)
      if(scrollPos >= this.$el.offsetTop && scrollPos <= elemPos ) {
        if(!this.visible) {
          const history = createHistory()
          const loc = history.location
          history.push('/'+this.post.link.replace("http://click.detype.com/", ""))
          document.title = this.post.title.rendered
          this.visible = true
        }
      } else {
        if(this.visible) this.visible = false
      }
      if((scrollPos >= (elemPos-window.innerHeight)) && !this.triggered) {
        this.triggered = true
        this.store.commit('NEXT_POST')
      }
    },
    isVisible: function() {
      debugger
    }
  },
  render(h) {
    const featured_image = this.post._embedded['wp:featuredmedia'][0]
    return <div class="fusion-page-title-bar fusion-page-title-bar-none fusion-page-title-bar-center" style={`background-image: url('${featured_image.source_url}')`}>
    <BlogHeader post={this.post} />
      <div id="main">
        <div class="fusion-row"><BlogContent  sidebar={this.$store.state.widgets.sidebar} post={this.post}  /></div>
        <div class="fusion-row"><Related categories={this.post.categories} post={this.post} /></div>
      </div>
    </div>
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
