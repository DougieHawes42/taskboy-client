import axios from "axios";

import { useState, useEffect, useEffectEvent } from "react";

import "./style.scss";

// components
// utils
import { Route1 } from "../../utils/routes";

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("not yet connected");

  useEffect(() => {
    const fetchMessage = async () => {
      const fetchedMessage = await axios.get(
        `${process.env.REACT_APP_API_URL}/api`,
      );

      setWelcomeMessage(fetchedMessage.data.message);
    };

    fetchMessage();
  }, []);

  const content = <div className="home">{welcomeMessage}</div>;

  return <Route1 title="home" content={content} />;
};

export default Home;
