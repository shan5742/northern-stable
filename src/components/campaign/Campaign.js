import React from "react";
import "./campaign.css";

export default function Campaign(props) {
  const {
    name,
    description,
    voucher_code,
    voucher_code_expires_days,
    starts_at,
    ends_at,
    is_enabled,
    html,
    screenshot_url,
  } = props.event;
  return (
    <div className="event">
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
      <img src={screenshot_url} alt={name} />
      <p>{starts_at}</p>
      <p>{ends_at}</p>
      <p>{is_enabled}</p>
    </div>
  );
}
