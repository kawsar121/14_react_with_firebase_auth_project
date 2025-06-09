import { useContext } from "react";
import { AuthCntx } from "../../Provider/Authproiver";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const {createUser} = useContext(AuthCntx)
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password); 
        
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.targert.reset()
            navigate("/")
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    
    return (
        <div className="card flex-shrink-0 w-full mt-6 mx-auto max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
    );
};

export default Register;