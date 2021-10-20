import React, {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`

  .rateUsContainer {
    display:block;
    padding-top: 15%;
    padding-bottom: 5%;
    width: 100%;
    height: 100vh;
    color:gold !important;
  }
  .instaContainer{
    float: left;
    width:30%;
  }
  .formContainer{
    float: right;
    width: 70%;
    padding-left: 5%;
  }
  .eapps-instagram-feed-posts-grid-load-more-visible{
    opacity: 0%;
    visibility: hidden;
  }
  .email{
    width: 40%;
  }
  .message{
    width: 89%;
    min-height: 25vh;
    height: 25vh;
    max-height: 25vh;
  }
  .btn{
    color: gold;
  }

  @media only screen and (max-width: 800px) {
    h1 {
        text-align: center;
    }
    .rateUsContainer {
     height:150vh;
    }
    .instaContainer{
    width:100%;
    padding-bottom: 5%;
    }
    .opaqueContainerBody{
    flex-direction:column;
    }
    .formContainer{
      width: 100%;
      padding-left: 5%;
      padding-right: 5%;
    }
    .email{
      width: 100%;
    }
    .message{
      width: 100%;
    }
  }
`;

function ContactUsContainer() {
    //FORM CODE
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xrgrdweo",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks for your feedback!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  //end of form code

    return (
        <Styles>
        <div className="rateUsContainer">
            <div className="transparentContainer">
                <div className="opaqueContainer">
                    <div className="pageName">
                        <h1>Rate Us</h1>
                    </div>
                    <div className="opaqueContainerBody">
                        <div className="instaContainer">
                            <div class="elfsight-app-912bc54c-aa3f-4737-8704-67c4606bedf9"></div>
                        </div>
                        <div className="formContainer">
                            <div className="formContainerText">
                            <p>
                                Have some feedback about your recent visit?
                                Tell us what you loved, or how we can improve so we can make your
                                experience better.
                            </p>
                            </div>
                            <form onSubmit={handleOnSubmit}>
                            <div>
                                <label htmlFor="email">Email:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                            <input id="email" type="email" name="email" className="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message: &nbsp;</label>
                            <textarea id="message" name="message" className="message"></textarea>
                            </div>
                            <div style={{ float:'right'}}>
                                <button className="btn btn-dark" type="submit" disabled={serverState.submitting}>
                                Submit
                            </button>
                            </div>
                            {serverState.status && (
                                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                                </p>
                            )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Styles>
    )
}

export default ContactUsContainer
