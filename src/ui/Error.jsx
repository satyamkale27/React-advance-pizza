import { useNavigate, useRouteError } from "react-router-dom";
import LinksButtons from "./LinksButtons";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinksButtons to="-1">&larr; Go back</LinksButtons>
    </div>
  );
}

export default Error;
