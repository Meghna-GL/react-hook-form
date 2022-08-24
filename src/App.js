import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  //register your component into this form hook. 
  //This will make its value available for both
  // the form validation and submission.

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}