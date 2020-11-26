import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import "./campaigns.css";
import Campaign from "../campaign/Campaign";

export default function Campaigns() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73`)
      .then((res) => {
        setEvents(res.data);
      });
  }, []);

  if (!events.data) return <Loader />;
  return (
    <div className="campaigns-container">
      {events.data.map((event) => (
        <Campaign event={event} key={event.uuid} />
      ))}
    </div>
  );
}
