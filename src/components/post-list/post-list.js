import React from 'react';
import PostListItem from "../post-list-item";
import './post-list.css';



export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
      
    }

    render() {
        const elements = this.props.posts.map(element => {
            const {id, ...itemProps} = element;
            return (
                <li className="list-group-item" key={id}>
                    <PostListItem {...itemProps}/>
                </li>
            )
        })
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}