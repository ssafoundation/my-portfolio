import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="dashboard-body Login-form">
            <div className="about-title login-title">
                <h2>Login<span>Form</span></h2>
            </div>
           
            <form className="Login-form-wrap" onSubmit={handleSubmit(onSubmit)}>
                <input name="example" defaultValue="test" ref={register} />
                <input name="exampleRequired" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
                <p>Don’t have an account? <Link to='/registetion'> Create an account</Link></p>
            </form>
        </div>
    );
};

export default Login;