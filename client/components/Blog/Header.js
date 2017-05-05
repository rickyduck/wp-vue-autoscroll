export default {
  props: ['post'],

  render(h) {
    const author = this.post._embedded.author[0]
    const featured_image = this.post._embedded['wp:featuredmedia'][0]
    return <div style="background: rgba(0,0,0,0.4);">

        <div class="fusion-page-title-row">
          <div class="fusion-page-title-wrapper">
          <div class="fusion-page-title-captions">


            <h1 class="entry-title"><a href="http://travel.cloud/2017/04/05/save_money_business_travel-2/" >{this.post.title.rendered}</a></h1>
            <h3>April 5th, 2017 &nbsp;&nbsp;|&nbsp;&nbsp; By <a href={author.link} title="" rel="author">{author.name}</a></h3>
          </div>
          </div>
        </div>
      </div>
  }
}
