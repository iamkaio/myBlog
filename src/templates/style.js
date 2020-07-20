import styled from "styled-components";

export const ImagePost = styled.div`
  width: 100%;
  height: 60vh;
  background: #DDD;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
`
export const TextPost = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
    box-sizing: border-box;

`
export const HoldTitle = styled.div`
  width: 60vw;
  padding: 25px 15px;
  box-sizing: border-box;
  position: absolute;
  bottom: -15px;
  background: #FFF;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  h1 {
  font-size: 18px;
  font-weight: bold;
  }
  span {
  margin-top: 20px;
  display: flex;
  font-size: 12px;
  }
`