//import React from "react";
import {updatePostById} from "../../services/API";
import Form from "../form/Form";

export default function UpdatePost() {
    const dataFromUser = (data) => {
        updatePostById(data.title, data.body).then(response => {
            console.log('Post created', response);
        });
    };

    return (
        <Form action={dataFromUser}/>
    );
}
