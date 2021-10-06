import React from "react";
import {createPost} from "../../services/API";
import Form from "../form/Form";

export default function CreatePost() {
    const dataFromUser = (data) => {
        createPost(data.title, data.body).then(response => {
            console.log('Post created', response);
        });
    };

    return (
        <Form action={dataFromUser}/>
    );
}
