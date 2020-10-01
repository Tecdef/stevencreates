import React from "react";
import styled from "styled-components";

export const QuickInfo = () => {
  const QuickInfoStyles = styled.div`
    margin-top: -1%;
    z-index: 89;
    padding: 1rem 1.25rem 1rem 1.25rem;
    background: #32383d;
    color: white;
    .name-class {
      font-size: 24px;
      text-align: center;
      font-weight: 800;
      padding-bottom: 1rem;
      color: #d99a4e;
    }

    .item-desc {
      display: block;
      font-weight: 600;
      color: #1bc6b4;
      font-size: 18px;
    }
    .place {
      &:hover {
        transform: rotate(6deg);
      }
    }
    .job {
      &:hover {
        transform: rotate(-6deg);
      }
    }
    .role {
      &:hover {
        transform: rotate(10deg);
      }
    }
  `;

  const InfoGridStyles = styled.div`
    max-width: 400px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    /* grid-gap: 0.25; */
    justify-content: space-around;
  `;

  return (
    <QuickInfoStyles>
      <div className='name-class'>Steven Hofheins</div>
      <InfoGridStyles>
        <div className='about-item'>
          <span className='item-desc place'>Utah</span>
        </div>
        <div className='about-item'>
          <span className='item-desc job'>Adobe</span>
        </div>
        <div className='about-item'>
          <span className='item-desc role'>Software Developer</span>
        </div>
      </InfoGridStyles>
    </QuickInfoStyles>
  );
};
