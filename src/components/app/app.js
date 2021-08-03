import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';


const App = () => {
    const data = [
        {label: "I'm learning React", important: false, id:1},
        {label: "It's interesting for me", important: false, id:2},
        {label: "I'll become a front-end dev soon", important: false, id:3}
    ];
    return (
       <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
       </div>
    )
}

export default App;



   


