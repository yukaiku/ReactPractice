import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .footer {
      background-color: #222;
      padding: 5% 5% 5%;
      color: gold;
      flex-direction:row;
      display:flex;
  }
  .socialMediaIcon {
      width: 50%;
  }
  .address {
      width: 20%;
      padding-right: 5%:
      text-align:center;
  }

  .social-icon-link {
  color: gold;
  font-size: 30px;
  padding-right: 10%;
  }

  .header {
      text-decoration: underline;
  }
  .footerAddress{
      font-family: Gecade;
  }

  @media screen and (max-width: 820px) {

  .footer {
    flex-direction: column;
    display:flex
    justify-content:center;
    text-align:center;
  }

  .footer > * {
      width: 100%;
  }
}
  
`;

export const Footer = () => (
    <Styles>
        <div className="footer">
            <div className="socialMediaIcon ">
                <div className='social-icons'>
                    <a className='social-icon-link facebook' aria-label='Facebook' href="https://www.facebook.com/miltonmiltonau" target="_blank">
                        <i className='fab fa-facebook-f' />
                    </a>
                    <a className='social-icon-link twitter' aria-label='Twitter' href="https://twitter.com/miltonmilton_au" target="_blank">
                        <i className='fab fa-twitter' />
                    </a>
                    <a className='social-icon-link instagram' aria-label='Instagram' href="https://www.instagram.com/miltonmilton_au/" target="_blank">
                        <i className='fab fa-instagram' />
                    </a>
                    {/* <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <i class='fab fa-linkedin' />
                    </Link> */}
                </div>
            </div>
            <div className="address"><header className="header">Address</header><br/>
                    <p className="footerAddress">3/1  Park Road. Milton. QLD 4064<br/>
                    0432123756<br/>
                    info@miltonmilton.com.au
                    </p>
            </div>
            <div className="tradingHours">
                <header className="header">Trading Hours</header><br/>
                <p className="footerAddress">
                    Monday	11:30am–2:30pm, 5:30–9pm<br />
                    Tuesday	11:30am–2:30pm, 5:30–9pm<br />
                    Wednesday	11:30am–2:30pm, 5:30–9pm<br />
                    Thursday	11:30am–2:30pm, 5:30–9pm<br />
                    Friday	Closed<br />
                    Saturday	11:30am–2:30pm, 5:30–9pm<br />
                    Sunday: Closed <br />
                </p>
            </div>
        </div>
    </Styles>
        
    )

