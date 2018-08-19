import React from "react";

const EditExpensePage = (props) => (
    <div>
        editing the expense with the id {props.match.params.id}
    </div>
);

export default EditExpensePage;