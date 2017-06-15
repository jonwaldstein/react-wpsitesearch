import React from 'react';

const PostListItem = (props) => {
  return(
    <a href="#!" className="collection-item" onClick={() => props.onSinglePostSelect(props.singlePost)}>
      {props.singlePost.title.rendered}
    </a>
  );

}
export default PostListItem;
