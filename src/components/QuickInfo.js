import React from "react";
import styled from "styled-components";

export const QuickInfo = () => {
  const QuickInfoStyles = styled.div`
    margin-top: -1%;
    z-index: 89;
    padding: 1rem 1.25rem 1rem 1.25rem;
    background: #32383d;
    color: white;
    display: flex;
    justify-content: center;
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
    .S {
      font-size: 24px;
    }
    .T {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .E {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .V {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .e {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .N {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
      padding-right: 1rem;
    }
    .H {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .O {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .F {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .E {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .I {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .s {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .ei {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
    }
    .n {
      &:hover {
        transform: rotate(-6deg);
      }
      font-size: 24px;
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
      {/* <div className='name-class'>Steven Hofheins</div> */}
      <div className='S'>S</div>
      <div className='T'>T</div>
      <div className='E'>E</div>
      <div className='V'>V</div>
      <div className='e'>E</div>
      <div className='N'>N</div>
      <div className='H'>H</div>
      <div className='O'>O</div>
      <div className='F'>F</div>
      <div className='H'>H</div>
      <div className='ei'>E</div>
      <div className='I'>I</div>
      <div className='n'>N</div>
      <div className='s'>S</div>
    </QuickInfoStyles>
  );
};
