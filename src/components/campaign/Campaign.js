import React, { useState } from "react";
import "./campaign.css";
import { formatDate } from "../../helpers/format-date/formatDate";
import { handleDate } from "../../helpers/handle-date/handleDate";

export default function Campaign(props) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const {
    name,
    description,
    voucher_code,
    voucher_code_expires_days,
    starts_at,
    ends_at,
    is_enabled,
    screenshot_url,
    html,
  } = props.event;

  return (
    <div className="event">
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
      <div className="statusWrap">
        <p className="statusHeading">status</p>
        <p className="status">
          {is_enabled === false && starts_at ? "Inactive" : handleDate(ends_at)}
        </p>
      </div>
      <img src={screenshot_url} alt={name} />
      <div className="dateWrap">
        <p className="date">
          Start Date: <span>{formatDate(starts_at)}</span>
        </p>
        <p className="date">
          End Date: <span>{formatDate(ends_at)}</span>
        </p>
      </div>

      <button className="button" onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Hide More" : "More Info"}
      </button>
      {moreInfo && (
        <div className="voucherSection">
          <h3 className="code">{voucher_code}</h3>
          <p>expires in {voucher_code_expires_days} days</p>
        </div>
      )}
      <button className="button" onClick={() => setShowPreview(!showPreview)}>
        {showPreview ? "Hide Preview" : "Show Preview"}
      </button>
      <div className="preview">
        {showPreview && <iframe title={name} srcdoc={html} />}
      </div>
    </div>
  );
}
