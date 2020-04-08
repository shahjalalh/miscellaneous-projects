import React from 'react';

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

    render(){
        return (
            <div className="ui container">
                <h1>videos browser...</h1>
            </div>
        );
    }
}

export default App;