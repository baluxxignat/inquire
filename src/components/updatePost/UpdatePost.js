//import React from "react";
import {updatePostById} from "../../services/API";
import Form from "../form/Form";

export default function UpdatePost({id}) {
    const dataFromUser = (data) => {
        console.log(data.title, data.body);
        updatePostById(id, data.title, data.body).then(response => {
            console.log('Post updated', response);
        });
    };

    return (
        <Form action={dataFromUser}/>
    );
}
