import { Button } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-black container-fluid w-100 d-flex h-100 flex-column justify-content-center align-items-center" style={{minHeight:"100vh"}} >
      <h1 className="text-white">Oops!</h1>
      <p className="text-white">Sorry, an unexpected error has occurred.</p>
      <p className="text-white">
        <i>{error.statusText || error.message}</i>
        
      </p>
      <Link to={`/`} className="px-5  rounded-pill text-white text-decoration-none py-2" style={{background:"red"}}>Go to home</Link>   
    </div>
  );
}