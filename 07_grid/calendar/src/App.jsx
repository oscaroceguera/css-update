import React from "react";
import styled from "styled-components";

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

function App() {
  return (
    <>
      <Calendar>
        {DAYS.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
      </Calendar>
      <br />
      <Wrapper>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </Wrapper>
    </>
  );
}

const Calendar = styled.div`
  border: 3px solid;
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  gap: 4px;
  width: max-content;
  padding: 16px;
`;

const Day = styled.div`
  border: 2px solid;
  border-radius: 4px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  min-height: 100%;
  justify-items: center;

  div {
    width: 50%;
  }

  div::after {
    content: "'";
  }

  .one {
    background: pink;
    justify-self: end;
  }
  .two {
    background: lavender;
  }
  .three {
    background: peachpuff;
    justify-self: start;
  }
`;

export default App;
