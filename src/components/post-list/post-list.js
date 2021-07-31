import React from 'react';
import PostListItem from "../post-list-item";
import { ListGroup } from 'reactstrap';
import './post-list.css';



const PostList = ({posts, onDelete}) => {
    
    const elements = posts.map(element => {
        const {id, label, important} = element;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                onDelete={() => onDelete(id)}
                label={label}
                important={important} />
            </li>
        );
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;