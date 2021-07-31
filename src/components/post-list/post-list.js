import React from 'react';
import PostListItem from "../post-list-item";
import './post-list.css';


const PostList = ({posts}) => {
    
    const elements = posts.map(element => {
        const {id, label, important} = element;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                label={label}
                important={important} />
            </li>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;