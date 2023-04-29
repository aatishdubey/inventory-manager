import { Navigate } from "react-router-dom";
import { useCognitoAuth } from "src/hooks/useCognitoAuth";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute = (props: Props) => {
  const { userAuth, authLoading } = useCognitoAuth(); 
  if(!userAuth.accessToken && !authLoading) {
    return (
      <>
        <Navigate to="/login" replace/>
      </>
    )
  }
  return <>{props.children}</>;
}