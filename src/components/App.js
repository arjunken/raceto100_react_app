// import logo from "../logo.svg";
import { Container } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
//App level imports
import React from "react";
import Home from "../pages/Home";
import GameTitle from "./GameTitle";
import GameRobo from "../pages/GameRobo";
// import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Scoreboard from "../pages/Scoreboard";
import ProtectedRoute from "../layouts/ProtectedRoute";
import RedirectHome from "../layouts/RedirectHome";
import { auth } from "../firebase";
import ResetPassword from "../pages/ResetPassword";
import RemoteGameLobby from "./RemoteGameLobby";
import RemoteGame from "../pages/RemoteGame";

function App() {
  const userAuth = auth.currentUser;

  return (
    <React.Fragment>
      <Container>
        <GameTitle />
        <Routes>
          <Route
            path="/"
            element={
              <RedirectHome>
                <Home />
              </RedirectHome>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/gamerobo" element={<GameRobo />} />
          <Route path="/remotegame" element={<RemoteGame />} />
          <Route path="/signin" element={!userAuth ? <Signin /> : <Navigate to="/profile" />} />
          <Route path="/resetpassword" element={!userAuth ? <ResetPassword /> : <Navigate to="/profile" />} />
          <Route path="/register" element={!userAuth ? <Register /> : <Navigate to="/profile" />} />
          <Route
            path="/scoreboard"
            element={
              <ProtectedRoute>
                <Scoreboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/*" element={<NotFound />} /> */}
          <Route path="/*" element={<Navigate to={userAuth ? "/profile" : "/"} />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
