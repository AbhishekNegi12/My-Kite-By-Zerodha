import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { FaUser, FaChartBar, FaMoneyBillWave, FaDatabase, FaCoins } from 'react-icons/fa';

const sections = [
  {
    icon: <TiPlusOutline className="me-2" size={22} />, 
    title: 'Account Opening',
    links: [
      'Resident individual',
      'Minor',
      'Non Resident Indian (NRI)',
      'Company, Partnership, HUF and LLP',
      'Glossary',
    ],
  },
  {
    icon: <FaUser className="me-2" size={20} />, 
    title: 'Your Zerodha Account',
    links: [
      'Your Profile',
      'Account modification',
      'Client Master Report (CMR) and Depository Participant (DP)',
      'Nomination',
      'Transfer and conversion of securities',
    ],
  },
  {
    icon: <FaChartBar className="me-2" size={20} />, 
    title: 'Kite',
    links: [
      'IPO',
      'Trading FAQs',
      'Margin Trading Facility (MTF) and Margins',
      'Charts and orders',
      'Alerts and Nudges',
      'General',
    ],
  },
  {
    icon: <FaMoneyBillWave className="me-2" size={20} />,
    title: 'Funds',
    links: [
      'Add money',
      'Withdraw money',
      'Add bank accounts',
      'eMandates',
    ],
  },
  {
    icon: <FaDatabase className="me-2" size={20} />, 
    title: 'Console',
    links: [
      'Portfolio',
      'Corporate actions',
      'Funds statement',
      'Reports',
      'Profile',
      'Segments',
    ],
  },
  {
    icon: <FaCoins className="me-2" size={20} />, 
    title: 'Coin',
    links: [
      'Mutual funds',
      'National Pension Scheme (NPS)',
      'Fixed Deposit (FD)',
      'Features on Coin',
      'Payments and Orders',
      'General',
    ],
  },
];

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-5 text-secondary">To create a ticket, select a relevant topic</h1>
        {sections.map((section, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <h5 className="fw-bold mb-3 d-flex align-items-center">
              {section.icon}
              {section.title}
            </h5>
            <ul className="list-unstyled">
              {section.links.map((link, i) => (
                <li key={i} style={{ lineHeight: '2.2' }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'none',
                      color: '#1976d2',
                      fontWeight: 500,
                      fontSize: '1.05rem',
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;