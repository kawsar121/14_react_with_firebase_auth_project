import { useContext } from "react";
import { AuthCntx } from "../../Provider/Authproiver";
import { useNavigate } from "react-router-dom";

const Login = () => {
      const {loginUser} = useContext(AuthCntx)
      const navigate =useNavigate()
      const handleLogin = (e)=>{
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email,password)

          loginUser(email,password)
          .then(result =>{
            console.log(result)
            e.target.reset()
            navigate("/")
          })
          .catch(error=>{
            console.log(error)
          })

      }

  return (
        <div className="card flex-shrink-0 w-full mt-6 mx-auto max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
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

export default Login;
