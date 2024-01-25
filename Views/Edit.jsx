import React from 'react';

const Edit = ({ log }) => {
    return (
        <div>
            <h1>Edit Log Page</h1>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={log.title} />
                <br /> <br />
                Entry: <input type="text" name="entry" defaultValue={log.entry} />
                <br /> <br />
                Is the Ship Damaged: <input type="checkbox" name="isShipDamaged" defaultChecked={log.isShipDamaged} />
                <br /> <br />
                <button>Update Log</button>
            </form>
        </div>
    );
};

export default Edit;