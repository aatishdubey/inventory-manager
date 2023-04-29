import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { APP_NAME } from "src/config";
import { useCognitoAuth } from "src/hooks/useCognitoAuth";

export const Navbar = () => {

  const { userAuth } = useCognitoAuth();

  const [isTransparent, setIsTransparent] = useState(true);

  const toggleTransparency = () => {
    if(window.scrollY > 100) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleTransparency);

    return () => {
      window.removeEventListener("scroll", toggleTransparency);
    }
  }, [])
  

  return (
    <div className={`fixed w-full top-0 z-50 ${!isTransparent ? "bg-white shadow-sm" : ""}`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{APP_NAME}</div>
          <div className="flex items-center">
            {userAuth.accessToken && (
              <div className="mr-4">
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}