import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://morning-plateau-38485.herokuapp.com/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));
    }
    return (
        <div>
            <h3>Review our service</h3>


            <form onSubmit={handleSubmit(onSubmit)}>



                <input {...register("name")}
                    placeholder="name"
                    className="p-2 m-2 w-25"
                />
                <br />
                <input {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2 w-25" />
                <br />
                <input {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-25" />
                <br />
                <input {...register("Price", { required: true })}
                    placeholder="Price"
                    className="p-2 m-2 w-25"
                    type="number" />
                <br />


                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="bg-success" type="submit" />
            </form>
        </div>
    );
};

export default Review;