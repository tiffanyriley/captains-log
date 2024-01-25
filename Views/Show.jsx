import React from 'react';

const Show = ({ log }) => {
    return (
        <div>
            <p><a href="/logs">Back to Index</a></p>
            <h1>Show Page</h1>
            <h2>{log.title}</h2>
            <p>{log.entry}</p>
            <p>{log.isShipDamaged ? "Ship is damaged..." : "Ship is not damaged yet"}</p>
            <a href={`/logs/${log._id}/edit`}><button>Edit</button></a>
            <br />

            <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form>
        </div>
    );
};

export default Show;