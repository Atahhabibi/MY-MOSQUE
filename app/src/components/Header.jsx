import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const user =false; 

  const handleLogout = () => {
    navigate("/");

    queryClient.removeQueries();
  };

  return (
    <header className=" bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end ">
        {/* USER */}

        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm ">Hello, {user?.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary uppercase"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-3 justify-center items-center px-8 ">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm capitalize btn btn-primary btn-sm"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm  capitalize btn btn-primary btn-sm"
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;