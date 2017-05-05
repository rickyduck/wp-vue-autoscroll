import Vue from 'vue'
import Vuex from 'vuex'
import Ajax from 'simple-ajax'

Vue.use(Vuex)

const state = {
  initial_post: 'save_money_business_travel-2',
  current_index: 0,
  end: false,
  prev_post: null,
  posts: [],
  active_post: null,
  displayed_posts: [],
  loading: false,
  api: {
    url: 'http://travel.cloud',
    namespace: '/wp-json/wp/v2/'
  }
}

const mutations = {
  INITIAL_POST (state) {
    var i = 0
    state.posts.forEach((post) => {
      if(post.slug === state.initial_post){
        state.displayed_posts.push(post)
        state.current_index = i
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
    const next_link = `${state.api.url+state.api.namespace}posts?_embed`
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

  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
