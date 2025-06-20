import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthCntx } from "../../Provider/Authproiver";
import { auth } from "../../firebase/firebase.init";

const Nav = () => {
  const {user, signOuts} = useContext(AuthCntx)


      const handleSignout =  () =>{
      signOuts()
      .then(()=>{
        console.log('all ok')
      })
      .catch(error=>{
        console.log(error)
      })
      
    }

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>register</NavLink></li>
        {
          user && <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
        }
    </>

  

    const useKorbo = useContext(AuthCntx);
    console.log(useKorbo)

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <><a className="btn">{user?.email} </a> <button onClick={handleSignout}>SignOut</button></>
        : <Link to="/login">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Nav;
