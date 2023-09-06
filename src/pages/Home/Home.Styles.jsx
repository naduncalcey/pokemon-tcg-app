import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding:0;
  justify-content: center;
  align-items: center;
  background-color: #101010;   //here is the background color
  background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
  .box-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  
  .heading {
    color: #fff;
    max-width: 500px;
    font-size: 42px;
    line-height: 1.3;
    @media (max-width: 1450px) {
        text-align: center;
    }
  }
  .subtext {
    padding-top: 20px;
    max-width: 450px;
    color: #9c9c9c;
    @media (max-width: 1450px) {
        text-align: center;
    }
  }
  .btn-layout {
    padding-block: 30px 0px;
    display: flex;
    gap: 20px;
    @media (max-width: 1450px) {
        justify-content: center;
    }
    &--primary {
      padding: 20px;
      border: none;
      border-radius: 6px;
      &:hover {
        background: #9c9c9c;
        color: #fff;
        transition: all 0.4s;
      }
    }

    &--secondary {
      padding: 20px;
      border: 1.2px solid #fff;
      border-radius: 6px;
      background: transparent;
      color: #fff;
      &:hover {
        background: #e7e7e7;
        color: #1a1a1a;
        transition: all 0.4s;
      }
    }
  }
  .image {
    img {
      width: 500px;
      @media (max-width: 1450px) {
        padding-top: 20px;
        width: 300px;
      }
    }
    @media (max-width: 1450px) {
      margin: 0 auto;
    }
  }
  .text-gradient{
    background: linear-gradient(109.6deg, #FFD700 0%, #FFA500 50%, #FF4500 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .content{
    padding:0 10px;
  }
`;
