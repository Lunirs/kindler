import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import LandingPage from "./pages/LandingPage";
import DevRec from "./pages/DevOrRec";
import SignUpDev from "./pages/SignUpDev";
import SignUpRec from "./pages/SignUpRec";
import SignUpDevProfile from "./pages/SignUpDevProfile";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const styles = {
  LogoBracket: {
    color: "#179FF6",
  },
  name: {
    color: "#9CDCFB",
    margin: "0 1em",
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <h1 style={styles.name}>
            <span style={styles.LogoBracket}>[</span> KINDLER{" "}
            <span style={styles.LogoBracket}>]</span>
          </h1>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup-type" element={<DevRec />} />
            <Route path="/signup-dev" element={<SignUpDev />} />
            <Route path="/signup-rec" element={<SignUpRec />} />
            <Route path="/signup-dev-profile" element={<SignUpDevProfile />} />
            <Route path="/developers" element={<SignUpDevProfile />} />
            <Route
              path="/:developerID/projects"
              element={<SignUpDevProfile />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
