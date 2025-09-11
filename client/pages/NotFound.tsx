import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[901px] flex items-center justify-center bg-gray-100 font-normal">
      <div className="text-center font-normal">
        <div
          className="mb-4"
          style={{ font: "700 36px/40px Aldrich, sans-serif" }}
        >
          <p>
            <span style={{ color: "rgb(0, 0, 0)" }}>404</span>
          </p>
        </div>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-blue-500 underline"
          style={{
            display: "inline",
            textDecoration: "underline solid rgb(59, 130, 246)",
            color: "rgb(59, 130, 246)",
          }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
