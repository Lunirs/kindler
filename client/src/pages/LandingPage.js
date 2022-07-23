import React from "react";
import SignUpBtn from "../components/signUpBtn";
import SignInBtn from "../components/signInBtn";
import Hero from "../components/hero";
import Auth from "../utils/auth";
import { TypeOrFieldNameRegExp } from "@apollo/client/cache/inmemory/helpers";

const styles = {
  sloganContainer: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
  },

  slogan: {
    color: "#9CDCFB",

    fontSize: "25px",
    fontWeight: "300",
    letterSpacing: "3px",
  },

  brackets: {
    color: "#F2D700",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  button: {
    flex: "1",
  },
};

const LandingPage = () => {
  if (!Auth.loggedIn()) {
    return (
      <div>
        <div className="sloganContainer" style={styles.sloganContainer}>
          <div>
            <h2 style={styles.slogan}>
              <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
              DEVELOPER <span style={styles.brackets}>&#125;</span>
            </h2>
          </div>
        </div>
        <br />
        <div style={styles.buttonContainer}>
          <SignUpBtn style={styles.button} />
          <SignInBtn style={styles.button} />
        </div>
      </div>
    );
  }
};

export default LandingPage;