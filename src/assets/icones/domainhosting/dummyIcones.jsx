import domainIcon2 from "../domainhosting/domain.svg";
import ssdIcon2 from "../domainhosting/ssd.svg";
import sslIcon2 from "../domainhosting/ssl.svg";
import upIcon2 from "../domainhosting/uptime.svg";
import cpanelIcon2 from "../domainhosting/cpanel.svg";
import supportIcon2 from "../domainhosting/customer-care.svg";

import React from "react";

const dummyIcones = {
  domainIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  domainIcon2: <img className="w-6 h-6" src={domainIcon2} alt="domainIcon" />,
  ssdIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  ),
  ssdIcon2: <img className="w-6 h-6" src={ssdIcon2} alt="ssdIcon2" />,

  sslIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  ),
  sslIcon2: <img className="w-6 h-6" src={sslIcon2} alt="sslIcon2" />,
  upIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" />
    </svg>
  ),
  upIcon2: <img className="w-6 h-6" src={upIcon2} alt="upIcon2" />,
  cpanelIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
  ),
  cpanelIcon2: <img className="w-6 h-6" src={cpanelIcon2} alt="cpanelIcon2" />,
  supportIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
    </svg>
  ),
  supportIcon2: (
    <img className="w-6 h-6" src={supportIcon2} alt="supportIcon2" />
  ),
  serverIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 14H4v-4h16v4zM20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11h-2v-2h2v2zm-4 0H9v-2h2v2zm4-4h-2V9h2v2zm-4 0H9V9h2v2z" />
    </svg>
  ),

  cloudIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  ),

  databaseIcon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4C8.1 4 5 4.9 5 6s3.1 2 7 2 7-.9 7-2-3.1-2-7-2zM5 8c0 1.1 3.1 2 7 2s7-.9 7-2v2c0 1.1-3.1 2-7 2s-7-.9-7-2V8zm0 4c0 1.1 3.1 2 7 2s7-.9 7-2v2c0 1.1-3.1 2-7 2s-7-.9-7-2v-2zm7 6c-3.9 0-7-.9-7-2v2c0 1.1 3.1 2 7 2s7-.9 7-2v-2c0 1.1-3.1 2-7-2z" />
    </svg>
  ),
};
export default dummyIcones;
