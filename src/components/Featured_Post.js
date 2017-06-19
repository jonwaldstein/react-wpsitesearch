import React from 'react';
import Loader from './Loader';

const FeaturedPost = (props) => {

  if (!props.selectedPost){
    return null
  }

//const SOURCEURL = typeof(props.selectedPost._embedded['wp:featuredmedia'][0].source_url) !== undefined ? props.selectedPost._embedded['wp:featuredmedia'][0].source_url : '';
//const THUMBNAIL_IMAGE = props.selectedPost._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
//const SOURCEURL_THUMBNAIL = SOURCEURL.includes('http') ? SOURCEURL : `${props.sourceUrl}${SOURCEURL}`;
let the_excerpt = props.selectedPost.excerpt.rendered.replace(/(<([^>]+)>)/ig,"");
let the_content = props.selectedPost.content.rendered.replace(/(<([^>]+)>)/ig,"");

  return (
      <div className="col s12 m7">
        {!props.isLoading ? (
          <div className="card">
            <div className="waves-effect waves-block waves-light">
              {/* <img src={SOURCEURL_THUMBNAIL} alt="" className="responsive-img activator"/> */}
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4"><h2>{props.selectedPost.title.rendered}</h2><i className="material-icons right">more_vert</i></span>
              {the_excerpt}
              <p><a className="activator" href="#">Read More</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{props.selectedPost.title.rendered}<i className="material-icons right">close</i></span>
              {the_content}
            </div>
          </div>
        ) : null }

      </div>

  )
}
export default FeaturedPost;
