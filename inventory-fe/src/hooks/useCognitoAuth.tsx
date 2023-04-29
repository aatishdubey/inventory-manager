import { useEffect, useState } from "react";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUserSession,
  CognitoRefreshToken,
} from "amazon-cognito-identity-js";
import { CLIENT_ID, USER_POOL_ID } from "src/config";

const userPool = new CognitoUserPool({
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
});

export const useCognitoAuth = () => {
  const [userAuth, setUserAuth] = useState<{
    accessToken: string | null;
    refreshToken: CognitoRefreshToken | null;
  }>({
    accessToken: null,
    refreshToken: null
  });
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("accessToken", userAuth.accessToken || "");
  }, [userAuth.accessToken])
  

  useEffect(() => {
    const cognitoUser = userPool.getCurrentUser();

    if (cognitoUser) {
      const session = getCognitoSession(cognitoUser);
      const refreshToken = session?.getRefreshToken();
      if(refreshToken) {
        cognitoUser.refreshSession(refreshToken, (error, session) => {
          if (error) {
            console.error('Error refreshing session:', error);
            return;
          }
          const newAccessToken = session.getAccessToken().getJwtToken();
          const newRefreshToken = session.getRefreshToken();
          setUserAuth({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
          setAuthLoading(false);
        });
      }
    } else {
      setAuthLoading(false);
    }
  }, [])
  

  const authenticateUser = (
    username: string,
    password: string,
    onSuccess?: (result: CognitoUserSession) => void,
    onFailure?: (error: unknown) => void
  ) => {
    setAuthLoading(true);
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        const refreshToken = result.getRefreshToken();
        setUserAuth({
          accessToken,
          refreshToken,
        });
        setAuthLoading(false);
        if (onSuccess) {
          onSuccess(result);
        }
      },
      onFailure: (error) => {
        if (onFailure) {
          onFailure(error);
        }
        setAuthErrorMessage(error.message);
        console.log("Error authenticating user:", error);
      },
    });
  };

  const getCognitoSession = (
    cognitoUser: CognitoUser
  ): CognitoUserSession | null => {
    let session = null;
    cognitoUser.getSession(
      (error: Error | null, result: CognitoUserSession | null) => {
        if (error) {
          console.error("Error getting session:", error);
          return;
        }
        if (result) {
          session = result;
        }
      }
    );
    return session;
  };

  const signOut = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
      localStorage.clear();
      setUserAuth({
        accessToken: null,
        refreshToken: null,
      });
    }
  };

  return {
    authenticateUser,
    signOut,
    userAuth,
    authErrorMessage,
    authLoading
  };
};
