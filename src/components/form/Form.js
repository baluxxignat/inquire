import React from "react";
import {useForm} from "react-hook-form";

export default function Form({action}) {
    const {register, handleSubmit} = useForm();
return (
    <form onSubmit={handleSubmit(action)}>
        <input type={"text"} placeholder={"title"} {...register("title")}/>
        <input type={"text"} placeholder={"body"} {...register("body")}/>
        <input type={"submit"}/>
    </form>
   );
 }
