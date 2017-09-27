import Vue from 'vue'
import Vuex from 'vuex'
import Ajax from 'simple-ajax'
import createHistory from 'history/createBrowserHistory'
//import history from 'history';

Vue.use(Vuex)
const state = {
  //'save_money_business_travel-2'
  initial_post: window.location.pathname.replace(new RegExp('/', 'g'),''),
  current_index: 0,
  current_page: 1,
  per_page: 10,
  end: false,
  prev_post: null,
  posts: [],
  active_post: null,
  displayed_posts: [],
  loading: false,
  api: {
    url: 'http://click.detype.com',
    namespace: '/wp-json/wp/v2/',
    widget_namespace: '/wp-json/wp-rest-api-sidebars/v1/sidebars/'
  },
  widgets: {
    sidebar: null
  },
  button: {
    button_link: null,
    button_text: null
  }
}

const mutations = {
  INITIAL_POST (state) {
    var i = 0
    const urlParams = new URLSearchParams(window.location.search)
    if(urlParams.get("preview")) {
      state.posts.forEach((post) => {
        if(post.id === Number(urlParams.get("p"))){
          state.displayed_posts.push(post)
          state.current_index = i
          state.loading = false
          //dry
        }
        i++
      })

    } else {
      const history = createHistory()
      const loc = history.location

      state.posts.forEach((post) => {
        debugger;
        if(loc.pathname.includes(post.slug)){
          state.displayed_posts.push(post)
          state.current_index = i
          state.loading = false
        }
        i++
      })
    }



  },
  NEXT_POST  (state) {
    const nextIndex = state.current_index+1
    if(!state.posts.length < nextIndex) {
      state.current_index = nextIndex
      state.displayed_posts.push(state.posts[nextIndex])
    }
    if(nextIndex === state.posts.length-7 && !state.end) {
      const last_page = state.posts[state.posts.length];
      const page = state.current_page+1;
      const next_link = `${state.api.url+state.api.namespace}posts?per_page=${state.per_page}&_embed&page=${page}`;
      const req = new Ajax(next_link);
      state.current_page = page;
      req.on("success", (e) => {
        const object = JSON.parse(e.currentTarget.response)
        if(object.length === 0) {
          state.end = true;
        } else {
          state.posts = state.posts.concat(object);

        }
      })
      req.on("error", (e) => {
        console.log(e)
      });
      req.send();
    }
  },

  FILL_POSTS (state, posts) {
    debugger;
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
    commit('FETCH_POST');

    const first_post_link = `${state.api.url+state.api.namespace}posts?slug=${state.initial_post}&_embed`;
    const first_post_req = new Ajax(first_post_link)
    first_post_req.on("success", (e) => {

      const single_post = JSON.parse(e.currentTarget.response)[0]
      const next_link = `${state.api.url+state.api.namespace}posts?per_page=${state.per_page}&before=${single_post.date}&_embed`;
      const post_list_req = new Ajax(next_link);
      post_list_req.on("success", (e) => {

        const object = JSON.parse(e.currentTarget.response);
        object.unshift(single_post);
        commit('FILL_POSTS', object);
        commit('INITIAL_POST');
      });
      post_list_req.send();
    })
    first_post_req.on("error", (e) => {
      console.log(e)
    })
    first_post_req.send()

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
