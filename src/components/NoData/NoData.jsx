import styled from "styled-components";
import SearchGif from "../../assets/animated/search.gif"

const NoDataDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    .nodata-container {
        background-color: #fff;
        border-radius: 3px;
        min-width: 260px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            height: 50px;
            padding-inline: 15px;
        }
        p {
            font-weight: 500;
            padding-inline: 15px;
        }
    }
`;

function NoData({text}) {
  return (
    <NoDataDiv>
        <div className="nodata-container">
            <img src={SearchGif} alt="search-gif" />
            <p>{text}</p>
        </div>
    </NoDataDiv>
  )
}

export default NoData;