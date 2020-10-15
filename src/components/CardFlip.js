import React from "react";
import styled from "styled-components";
const FlipStyled = styled.div`
  #f1_container {
    position: relative;
    width: 100%;
    height: 10rem;
    z-index: 1;
  }
  #f1_container {
    perspective: 1000;
  }
  #f1_card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s linear;
  }
  #f1_container:hover #f1_card {
    transform: rotateX(180deg);
    /* box-shadow: -5px 5px 5px #aaa; */
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: yellow;
  }
  .face.back {
    display: block;
    transform: rotateX(180deg);
    box-sizing: border-box;
    color: white;
    text-align: center;
    background-color: pink;
  }
`;

const CardFlip = () => {
  /* eslint-disable */
  const LearningFunctions = () => {
    const name = "wes";
    const middle = "topher";
    const last = `bos`;
    const sentence = `shes
    so
    "cool"`;
    console.log(typeof name, typeof middle, typeof last, sentence);
  };

  LearningFunctions();


    let [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => setCount(count + 1), []);

  return (
    <FlipStyled>
      <button onClick={handleClick}>{count}</button>
      <div id='f1_container'>
        <div id='f1_card' className='shadow'>
          <div className='front face'>Front</div>
          <div className='back face center'>
            <p>This is nice for exposing more information about an image.</p>
          </div>
        </div>
      </div>
      <div id='f1_container'>
        <div id='f1_card' className='shadow'>
          <div className='front face'>Front</div>
          <div className='back face center'>
            <p>This is nice for exposing more information about an image.</p>
          </div>
        </div>
      </div>
      <div id='f1_container'>
        <div id='f1_card' className='shadow'>
          <div className='front face'>Front</div>
          <div className='back face center'>
            <p>This is nice for exposing more information about an image.</p>
          </div>
        </div>
      </div>
      <div id='f1_container'>
        <div id='f1_card' className='shadow'>
          <div className='front face'>Front</div>
          <div className='back face center'>
            <p>This is nice for exposing more information about an image.</p>
          </div>
        </div>
      </div>
    </FlipStyled>
  );
};

export default CardFlip;
