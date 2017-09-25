import moment from 'moment'

export default {
  props: ['post'],
  render() {
    const featured_image = this.post._embedded['wp:featuredmedia'][0].media_details.sizes['600'].source_url

    return <li class="fusion-carousel-item" style="margin-left: 44px; width: 236px;">
						<div class="fusion-carousel-item-wrapper" style="visibility: inherit;">

              <div class="fusion-image-wrapper fusion-image-size-fixed" aria-haspopup="true">


              		<a href={this.post.link}>
              				<img src={featured_image}  width="500" height="383" alt={this.post.title} />


              		</a>


              </div>


								<h4 class="fusion-carousel-title" data-fontsize="18" data-lineheight="32">
									<a href={this.post.link} _self="" domPropsInnerHTML={this.post.title.rendered} />
								</h4>

								<div class="fusion-carousel-meta">
									<span class="fusion-date">{moment(this.post.date).format('MMMM Do, YYYY')}</span>

									<span class="fusion-inline-sep">|</span>
									<span><a href="http://travel.cloud/2017/05/08/3-business-travel-problems-and-how-to-fix-them/#respond">0 Comments</a></span>
								</div>
							</div>
					</li>
  }
}
