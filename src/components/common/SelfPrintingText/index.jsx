"use client";
import React, {useCallback, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
// import { ThemeContext } from "../../../App";

const SelfPrintingText = ({ text, width, duration, fontSize = 16, fps = 60 }) => {
  const [innerHtml, setInnerHtml] = useState(text);
  const [font, setFont] = useState(typeof fontSize === "number" ? fontSize : fontSize[fontSize.length - 1]);
  function getTextWidth(textValue) {
    // здесь можно использовать любой метод для определения ширины текста в пикселях
    // например, можно создать временный элемент DOM и вставить туда текст, а затем получить его ширину
    return textValue.length;
  }

  // const { darkTheme } = useContext(ThemeContext);
  const darkTheme = false;
  const blinkCaret = `
    @keyframes blink-caret {
      from, to { border-color: black }
      50% { border-color: transparent }
    }
    @keyframes blink-caret-dark {
      from, to { border-color: white }
      50% { border-color: transparent }
    }
  `;
  const typing = `
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
  `;

  if (typeof window !== "undefined") {
    const mediaQuery = (array, width) => {
      if (width >= 1280) {
        return array[2];
      } else if (width >= 768) {
        return array[1];
      } else {
        return array[0];
      }
    };
    console.log("client");
    if (typeof fontSize !== "number") {
      const widthScreen = window.innerWidth;
      fontSize = mediaQuery(fontSize, widthScreen);
    }
    if (typeof width !== "number") {
      const widthScreen = window.innerWidth;
      width = mediaQuery(width, widthScreen);
    }
  }
  const splitText = useCallback(() => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const fullWidth = fontSize * getTextWidth(currentLine + " " + word);
      if (fullWidth > width * 2) {
        lines.push({lineText: currentLine, lineWidth: Math.floor(fullWidth / 2)});
        currentLine = word;
      } else {
        currentLine += " " + word;
      }
    }
    const fullWidth = fontSize * getTextWidth(currentLine);
    lines.push({
      lineText: currentLine,
      lineWidth: Math.floor(fullWidth / 2)
    });
    const sumWidth = lines.reduce((accumulator, currentValue) => accumulator + currentValue.lineWidth, 0);
    let delay = 0;
    return (
      <>
        {lines.map((line, index) => {
          const second = Number((line.lineWidth / sumWidth * duration).toFixed(1));
          const countAnimation = index === lines.length - 1 ? "infinite" : Math.round(second / 0.5);
          const styles = {
            borderRight: ".15em solid transparent",
            width: "0%",
            animationName: `${darkTheme ? "blink-caret-dark" : "blink-caret"}, typing`,
            animationDuration: `.5s, ${second}s`,
            animationTimingFunction: `steps(1, end), steps(${fps}, end)`,
            animationIterationCount: `${countAnimation}, 1`,
            animationDelay: `${delay}s, ${delay}s`,
            animationFillMode: "none, forwards"
          };
          delay += second;
          return (
            <div key={index} className={`w-[${line.lineWidth}px] self-printing-text`}>
              <p className="overflow-hidden whitespace-nowrap mx-auto" style={styles}>{line.lineText}</p>
            </div>
          );
        })}
        <style>{blinkCaret}{typing}</style>
      </>
    );
  }, [blinkCaret, darkTheme, duration, fontSize, fps, text, typing, width]);
  useEffect(() => {
    setInnerHtml(splitText());
  }, [splitText]);
  useEffect(() => {
    setFont(fontSize)
  }, [fontSize]);
  return (
    <div className={`text-graySecond text-[${font}px] flex flex-col items-center flex-shrink-0 text-graySecond`}>
      {innerHtml}
    </div>
  );
};

SelfPrintingText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]).isRequired,
  fps: PropTypes.number,
  duration: PropTypes.number
};

export default SelfPrintingText;
