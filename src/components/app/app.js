import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {

    const data = [
        {label: "I'm learning React", important: true, id: "qwe"},
        {label: "That's interesting for me", important: false, id: "asd"},
        {label: "I'll become a Front-end developer soon", important: false, id: "zxc"}
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
           
    );
}

export default App;