import React from 'react';

import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/streams/new" className="ui button primary">
                    Create Stream
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui called list">
                    <h3>lists...</h3>
                    {this.renderCreate()}
                </div>
            </div>
        );
    }
}

export default StreamList;
