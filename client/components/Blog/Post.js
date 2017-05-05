import BlogHeader from '../../components/Blog/Header'
import BlogContent from '../../components/Blog/Content'
import './style.css'

export default {
  props: ['post', 'store'],
  data: function() {
    return {
      triggered: false
    }
  },
  methods: {
    handleScroll: function() {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
      const elemPos = this.$el.offsetTop + this.$el.offsetHeight - 800
      if((scrollPos >= elemPos) && !this.triggered) {
        this.triggered = true
        this.store.commit('NEXT_POST')
      }
    },
  },
  render(h) {
    const featured_image = this.post._embedded['wp:featuredmedia'][0]
    return <div class="fusion-page-title-bar fusion-page-title-bar-none fusion-page-title-bar-center" style={`background-image: url('${featured_image.source_url}')`}>
    <BlogHeader post={this.post} />
    <div id="main"><div class="fusion-row"><BlogContent post={this.post} /></div></div>
    </div>
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
