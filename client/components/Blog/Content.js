export default {
  props: ['post', 'button', 'sidebar'],
  render() {
    const button = this.post.acf.button_link ? this.post.acf : this.button

    return <div>
      <div id="content" style="float: left;">



    			<article id={`post-`+this.post.id} class="post post-1713 type-post status-publish format-standard has-post-thumbnail hentry category-travel">
            <div class="post-content" domPropsInnerHTML={this.post.content.rendered} />
            <div class="button">
              <div class="fusion-button-wrappercenter">
                <a class="fusion-button button-flat button-pill button-large button-inverse" href={button.button_link} target="_self">
                  <b class="">{button.button_text}</b>
                </a>
              </div>
            </div>
    							<div class="fusion-sharing-box fusion-single-sharing-box share-box">
    				<h4>Like this article? Share it!</h4>
    				<div class="fusion-social-networks"><div class="fusion-social-networks-wrapper"><a  class="fusion-social-network-icon fusion-tooltip fusion-facebook fusion-icon-facebook" style="color:#bebdbd;" href="http://www.facebook.com/sharer.php?m2w&amp;s=100&amp;p&#091;url&#093;=http://travel.cloud/2017/04/05/save_money_business_travel-2/&amp;p&#091;images&#093;&#091;0&#093;=http://travel.cloud/wp-content/uploads/2017/04/iStock-512892492.jpg&amp;p&#091;title&#093;=What%20is%20a%20travel%20policy%2C%20why%20do%20you%20need%20one%20and%20how%20will%20it%20save%20you%20money%3F" target="_blank" rel="noopener noreferrer" title="Facebook"><span class="screen-reader-text">Facebook</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-twitter fusion-icon-twitter" style="color:#bebdbd;" href="https://twitter.com/share?text=What%20is%20a%20travel%20policy%2C%20why%20do%20you%20need%20one%20and%20how%20will%20it%20save%20you%20money%3F&amp;url=http%3A%2F%2Ftravel.cloud%2F2017%2F04%2F05%2Fsave_money_business_travel-2%2F" target="_blank" rel="noopener noreferrer" title="Twitter"><span class="screen-reader-text">Twitter</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-linkedin fusion-icon-linkedin" style="color:#bebdbd;" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://travel.cloud/2017/04/05/save_money_business_travel-2/&amp;title=What%20is%20a%20travel%20policy%2C%20why%20do%20you%20need%20one%20and%20how%20will%20it%20save%20you%20money%3F&amp;summary=Generally%20speaking%2C%20anything%20with%20the%20word%20%26%2339%3Bpolicy%26%2339%3B%20in%20it%20seems%20like%20a%20complete%20snoozefest%2C%20right%3F%0D%0A%0D%0AIf%20you%20think%20of%20all%20of%20your%20favourite%20policies%20next%20time%20you%20can%26%2339%3Bt%20sleep%20then%20you%26%2339%3Bll%20certainly%20nod%20off%20within%20seconds.%0D%0A%0D%0AWell%2C%20grab%20some%20matchsticks%20to%20wedge%20your%20lids%20open%2C%20because%20no%20matter%20how%20dry%20you%20think%20policies" target="_blank" rel="noopener noreferrer" title="Linkedin"><span class="screen-reader-text">Linkedin</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-reddit fusion-icon-reddit" style="color:#bebdbd;" href="http://reddit.com/submit?url=http://travel.cloud/2017/04/05/save_money_business_travel-2/&amp;title=What%20is%20a%20travel%20policy%2C%20why%20do%20you%20need%20one%20and%20how%20will%20it%20save%20you%20money%3F" target="_blank" rel="noopener noreferrer" title="Reddit"><span class="screen-reader-text">Reddit</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-tumblr fusion-icon-tumblr" style="color:#bebdbd;" href="http://www.tumblr.com/share/link?url=http%3A%2F%2Ftravel.cloud%2F2017%2F04%2F05%2Fsave_money_business_travel-2%2F&amp;name=What%20is%20a%20travel%20policy%2C%20why%20do%20you%20need%20one%20and%20how%20will%20it%20save%20you%20money%3F&amp;description=Generally%20speaking%2C%20anything%20with%20the%20word%20%26%2339%3Bpolicy%26%2339%3B%20in%20it%20seems%20like%20a%20complete%20snoozefest%2C%20right%3F%0D%0A%0D%0AIf%20you%20think%20of%20all%20of%20your%20favourite%20policies%20next%20time%20you%20can%26%2339%3Bt%20sleep%20then%20you%26%2339%3Bll%20certainly%20nod%20off%20within%20seconds.%0D%0A%0D%0AWell%2C%20grab%20some%20matchsticks%20to%20wedge%20your%20lids%20open%2C%20because%20no%20matter%20how%20dry%20you%20think%20policies" target="_blank" rel="noopener noreferrer" title="Tumblr"><span class="screen-reader-text">Tumblr</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-googleplus fusion-icon-googleplus" style="color:#bebdbd;" href="https://plus.google.com/share?url=http://travel.cloud/2017/04/05/save_money_business_travel-2/" onclick="javascript:window.open(this.href,&#039;&#039;, &#039;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&#039;);return false;" target="_blank" rel="noopener noreferrer" title="Googleplus"><span class="screen-reader-text">Googleplus</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-pinterest fusion-icon-pinterest" style="color:#bebdbd;" href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Ftravel.cloud%2F2017%2F04%2F05%2Fsave_money_business_travel-2%2F&amp;description=Generally%20speaking%2C%20anything%20with%20the%20word%20%26%2339%3Bpolicy%26%2339%3B%20in%20it%20seems%20like%20a%20complete%20snoozefest%2C%20right%3F%0D%0A%0D%0AIf%20you%20think%20of%20all%20of%20your%20favourite%20policies%20next%20time%20you%20can%26%2339%3Bt%20sleep%20then%20you%26%2339%3Bll%20certainly%20nod%20off%20within%20seconds.%0D%0A%0D%0AWell%2C%20grab%20some%20matchsticks%20to%20wedge%20your%20lids%20open%2C%20because%20no%20matter%20how%20dry%20you%20think%20policies&amp;media=http%3A%2F%2Ftravel.cloud%2Fwp-content%2Fuploads%2F2017%2F04%2FiStock-512892492.jpg" target="_blank" rel="noopener noreferrer" title="Pinterest"><span class="screen-reader-text">Pinterest</span></a><a  class="fusion-social-network-icon fusion-tooltip fusion-mail fusion-icon-mail fusion-last-social-icon" style="color:#bebdbd;" href="mailto:?&#115;&#117;&#098;&#106;ect=What i&#115;&#032;a &#116;r&#097;&#118;&#101;&#108; poli&#099;y&#044; &#119;&#104;y &#100;&#111;&#032;&#121;&#111;&#117; nee&#100; &#111;ne&#032;&#097;nd&#032;&#104;ow w&#105;l&#108;&#032;&#105;t&#032;s&#097;&#118;e&#032;y&#111;&#117; mone&#121;&#063;&#038;&#098;&#111;&#100;y&#061;&#104;tt&#112;&#058;/&#047;&#116;rav&#101;&#108;.c&#108;&#111;u&#100;/&#050;017&#047;0&#052;/&#048;5/&#115;&#097;v&#101;_mo&#110;&#101;y&#095;bus&#105;&#110;es&#115;_&#116;r&#097;v&#101;&#108;-2&#047;" target="_self" rel="noopener noreferrer" title="Email"><span class="screen-reader-text">Email</span></a><div class="fusion-clearfix"></div></div></div>			</div>





    		<div id="respond" class="comment-respond">
    		<h3 id="reply-title" class="comment-reply-title">Leave A Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="/2017/04/05/save_money_business_travel-2/#respond" style="display:none;">Cancel reply</a></small></h3>
        <form action="http://travel.cloud/wp-comments-post.php" method="post" id="commentform" class="comment-form">
  				<div id="comment-textarea">
            <label class="screen-reader-text" for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="45" rows="8" aria-required="true" required="required" tabindex="0" class="textarea-comment" placeholder="Comment..."></textarea>
          </div>
          <div id="comment-input">
            <input id="author" name="author" type="text" value="" placeholder="Name (required)" size="30" aria-required='true' required='required' />
            <input id="email" name="email" type="email" value="" placeholder="Email (required)" size="30" aria-describedby="email-notes" aria-required='true' required='required' />
            <input id="url" name="url" type="url" value="" placeholder="Website" size="30" /></div>
            <p class="aiowps-captcha">
              <label for="aiowps-captcha-answer">Please enter an answer in digits:</label>
              <div class="aiowps-captcha-equation">
                <strong>three &#215; three = <input type="hidden" name="aiowps-captcha-string-info" id="aiowps-captcha-string-info" value="260wbgjhzd" />
                <input type="hidden" name="aiowps-captcha-temp-string" id="aiowps-captcha-temp-string" value="1493902933" />
                <input type="text" size="2" id="aiowps-captcha-answer" name="aiowps-captcha-answer" value="" autocomplete="off" /></strong>
              </div>
            </p>
            <p class="form-submit">
              <input name="submit" type="submit" id="comment-submit" class="fusion-button fusion-button-default" value="Post Comment" />
              <input type='hidden' name='comment_post_ID' value={this.post.id} id='comment_post_ID' />
              <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
            </p>
          </form>
    			</div>

					</article>
        </div>
        <div id="sidebar" class="sidebar fusion-widget-area fusion-content-widget-area" style="float: right;" domPropsInnerHTML={this.sidebar.rendered} />

      </div>;
    }
}
