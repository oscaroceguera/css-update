import { useState } from "react";
import {
  Container,
  BoxContainer,
  BoxItem,
  RangeContainer,
  Universe,
  Planet,
  Moon,
} from "./styled";
import "./App.css";

const Box = ({ transform }) => {
  return (
    <BoxContainer>
      <BoxItem transform={transform} />
    </BoxContainer>
  );
};

const INITIAL_STATE = {
  translationPixel: { x: "0", y: "0" },
  translationPercent: { x: "0", y: "0" },
  scale: { x: "0", y: "0" },
  combining: { x: "0", y: "0" },
  rotate: "0",
  skew: "0",
};

function App() {
  const [state, setState] = useState(INITIAL_STATE);

  const handlerChange = (section) => (e) => {
    setState({
      ...state,
      [section]: {
        ...state[section],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handlerChangeOnlyValue = (section) => (e) => {
    setState({
      ...state,
      [section]: e.target.value,
    });
  };

  const {
    translationPixel: { x: translationPixelX, y: translationPixelY },
    translationPercent: { x: translationPercentX, y: translationPercentY },
    scale: { x: scaleX, y: scaleY },
    combining: { x: combiningX, y: combiningY },
    rotate,
    skew,
  } = state;

  const translatePX = `translate(${translationPixelX}px, ${translationPixelY}px)`;
  const translatePerc = `translate(${translationPercentX}%, ${translationPercentY}%)`;
  const scale = `scale(${scaleX}, ${scaleY})`;
  const _rotate = `rotate(${rotate}deg)`;
  const _skew = `skew(${skew}deg)`;
  const combining = `rotate(${combiningX}deg) translateX(${combiningY}px)`;

  return (
    <div className="App">
      <h1>TRANSFORM</h1>
      <h2>Translation</h2>
      <Container>
        <Box transform={translatePX} />
        <p>transform: {translatePX}</p>
        <RangeContainer>
          <p>X</p>
          <input
            type="range"
            name="x"
            min="-100"
            max="100"
            onChange={handlerChange("translationPixel")}
            value={translationPixelX}
          />
          <p>Y</p>
          <input
            type="range"
            name="y"
            min="-100"
            max="100"
            onChange={handlerChange("translationPixel")}
            value={translationPixelY}
          />
        </RangeContainer>
      </Container>
      <br />
      <Container>
        <Box transform={translatePerc} />
        <div>
          <p>transform: {translatePerc}</p>
          <RangeContainer>
            <p>X</p>
            <input
              type="range"
              name="x"
              min="-100"
              max="100"
              onChange={handlerChange("translationPercent")}
              value={translationPercentX}
            />
            <p>Y</p>
            <input
              type="range"
              name="y"
              min="-100"
              max="100"
              onChange={handlerChange("translationPercent")}
              value={translationPercentY}
            />
          </RangeContainer>
        </div>
      </Container>
      <h2>Scale</h2>
      <Container>
        <Box transform={scale} />
        <div>
          <p>transform: {scale}</p>
          <RangeContainer>
            <p>X</p>
            <input
              type="range"
              name="x"
              min="0"
              max="2"
              step="0.01"
              onChange={handlerChange("scale")}
              value={scaleX}
            />
            <p>Y</p>
            <input
              type="range"
              name="y"
              min="0"
              max="2"
              step="0.01"
              onChange={handlerChange("scale")}
              value={scaleY}
            />
          </RangeContainer>
        </div>
      </Container>
      <h2>Rotate</h2>
      <Container>
        <Box transform={_rotate} />
        <div>
          <p>transform: {_rotate}</p>
          <RangeContainer>
            <p>X</p>
            <input
              type="range"
              min="-360"
              max="540"
              onChange={handlerChangeOnlyValue("rotate")}
              value={rotate}
            />
          </RangeContainer>
        </div>
      </Container>
      <h2>Skew</h2>
      <Container>
        <Box transform={_skew} />
        <div>
          <p>transform: {_skew}</p>
          <RangeContainer>
            <p>X</p>
            <input
              type="range"
              min="-45"
              max="45"
              onChange={handlerChangeOnlyValue("skew")}
              value={skew}
            />
          </RangeContainer>
        </div>
      </Container>
      <h2>Combining</h2>
      <Container>
        <Box transform={combining} />
        <div>
          <p>transform: {combining}</p>
          <RangeContainer>
            <p>rotate</p>
            <input
              type="range"
              name="x"
              min="0"
              max="180"
              onChange={handlerChange("combining")}
              value={combiningX}
            />
            <p>translateX</p>
            <input
              type="range"
              name="y"
              min="0"
              max="100"
              onChange={handlerChange("combining")}
              value={combiningY}
            />
          </RangeContainer>
        </div>
      </Container>
      <h2>Universe</h2>
      <Universe>
        <Planet />
        <Moon />
      </Universe>
    </div>
  );
}

export default App;
