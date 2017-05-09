import BlogHeader from '../../components/Blog/Header'
import BlogContent from '../../components/Blog/Content'
import Vuesible from 'vuesible'
import createHistory from 'history/createBrowserHistory'

import './style.css'

export default {
  mixins: [Vuesible()],
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
          history.push('/'+this.post.link.replace("http://travel.cloud/", ""))
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
    return <div appeared="isVisible()" class="fusion-page-title-bar fusion-page-title-bar-none fusion-page-title-bar-center" style={`background-image: url('${featured_image.source_url}')`}>
    <BlogHeader post={this.post} />
    <div id="main"><div class="fusion-row"><BlogContent button={this.$store.state.button} post={this.post} sidebar={this.$store.state.widgets.sidebar} /></div></div>
    </div>
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
