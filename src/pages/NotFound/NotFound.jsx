import React from 'react'
import styled from "styled-components";
import CatGif from "../../assets/animated/connection-error.gif";

const NotFoundDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .NotFoundBox {
        display: grid;
        grid-template-columns: auto 1fr;
        .NotFoundBoxImg {
            img {
                width: 400px;
            }
        }
        .NotFoundBoxContent {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
    }
`;

function NotFound() {
  return (
    <NotFoundDiv>
        <div className='NotFoundBox'>
            <div className='NotFoundBoxImg'>
                <img src={CatGif} alt="animated-gif" />
            </div>
            <div className='NotFoundBoxContent'>
                <h2>Oops! Page Not Found</h2>
                <p>404 - invalid link error. Please double check the route.</p>
                <a href="/">Back to Home</a>
            </div>
        </div>
    </NotFoundDiv>
  )
}

export default NotFound;