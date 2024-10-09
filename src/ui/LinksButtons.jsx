import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LinksButtons({ children, to }) {
  const navigate = useNavigate();
  const ClassName = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={ClassName}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={ClassName}>
      {children}
    </Link>
  );
}

export default LinksButtons;
