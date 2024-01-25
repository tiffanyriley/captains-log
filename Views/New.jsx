import React from 'react';

const New = () => {
    return (
        <div>
            <h1>New Log Page</h1>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" />
                <br /> <br />
                Entry: <input type="text" name="entry" />
                <br /> <br />
                Is the Ship Damaged: <input type="checkbox" name="isShipDamaged" />
                <br /> <br />
                <button>Add New Log</button>
            </form>
        </div>
    );
};

export default New;