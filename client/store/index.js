import Vue from 'vue'
import Vuex from 'vuex'
import Ajax from 'simple-ajax'
import createHistory from 'history/createBrowserHistory'


Vue.use(Vuex)
const state = {
  //'save_money_business_travel-2'
  initial_post: history.location,
  current_index: 0,
  end: false,
  prev_post: null,
  posts: [],
  active_post: null,
  displayed_posts: [],
  loading: false,
  api: {
    url: 'http://travel.cloud',
    namespace: '/wp-json/wp/v2/',
    widget_namespace: '/wp-json/wp-rest-api-sidebars/v1/sidebars/'
  },
  widgets: {
    sidebar: null
  },
  button: {
    button_link: "https://login.travel.cloud/userSignUp/travel.html",
    button_text: "Sign up – it’s free!"
  }
}

const mutations = {
  INITIAL_POST (state) {
    var i = 0
    const history = createHistory()
    const loc = history.location

    state.posts.forEach((post) => {
      if(loc.pathname.includes(post.slug)){
        state.displayed_posts.push(post)
        state.current_index = i
        state.loading = false
      }
      i++
    })


  },
  NEXT_POST  (state) {
    const nextIndex = state.current_index+1
    if(!state.posts.length < nextIndex) {
      state.current_index = nextIndex
      state.displayed_posts.push(state.posts[nextIndex])
    }
  },
  FILL_POSTS (state, posts) {
    state.posts = posts
  },
  FILL_WIDGETS (state, widget) {
    state.widgets.sidebar = widget
  },
  FETCH_POST (state) {
    state.loading = true
  },
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  fetchPosts ({state, commit, dispatch}) {
    commit('FETCH_POST')
    const next_link = `${state.api.url+state.api.namespace}posts?per_page=100&_embed`
    const req = new Ajax(next_link)
    req.on("success", (e) => {
      const object = JSON.parse(e.currentTarget.response)
      commit('FILL_POSTS', object)
      commit('INITIAL_POST')
    })
    req.on("error", (e) => {
      console.log(e)
    })
    req.send()

  },
  fetchWidgets ({state, commit, dispatch}) {
    const widget_link = `${state.api.url+state.api.widget_namespace}avada-blog-sidebar`
    const req = new Ajax(widget_link)
    req.on("success", (e) => {
      const object = JSON.parse(e.currentTarget.response)
      commit('FILL_WIDGETS', object)

    })
    req.on("error", (e) => {
      console.log(e)
    })
    req.send()
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
