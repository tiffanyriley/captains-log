import React from 'react';

const Index = ({ logs }) => {
    return (
        <div>
            <h1>Index Page</h1>
            <nav>
                <a href="/logs/new">Add New Log</a>
                <br /> <br />
                <a href="/logs/clear">Clear All Logs</a>
            </nav>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        <h2><a href={`/logs/${log._id}`}>{log.title} </a></h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;