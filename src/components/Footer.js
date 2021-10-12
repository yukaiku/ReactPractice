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
  font-size: 24px;
  padding-right: 2%;
  }

  .header {
      text-decoration: underline;
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
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
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
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <i class='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
            <div className="address"><header className="header">Address</header><br/>
                    ....</div>
            <div className="tradingHours">
                <header className="header">Trading Hours</header><br/>
                    ....
            </div>
        </div>
    </Styles>
        
    )

