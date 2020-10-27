import React from "react";
import TypeScript from "./typescript.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage-wrapper">
      <div className="homePage-content">
        <div className="homePage-title-image">
          <img src={TypeScript} alt="TypeScript" />
        </div>
        <div className="homePage-text">
          <span></span>TypeScript and JavaScript Firstly, let’s break one myth
          that most of the beginners have….why is JavaScript dying? Or will
          TypeScript outperform the scope of JavaScript? The answer to these
          questions is straight and simple that TypeScript syntactical superset
          of JavaScript i.e. each and every JavaScript project is fully
          functional in TypeScript which means that JavaScript and TypeScript
          could be considered as two faces of the same coin. It is really good
          to know the research the technology you are going to adapt but the
          most important part is to study complete facts instead of believing
          the myths.
          <p></p>
          <span></span> When you start development using Typescript, most people
          ask that if the JavaScript codebase is still functional in Typescript
          then why do we need to code in TypeScript?
          <p></p>
          <span></span>Okay, the ground reality why most of the companies use
          Typescript is that you can understand the future challenges which you
          may face in javascript but to tackle those challenges you need to use
          TypeScript. As we know that Typescript is robust and also called
          javascript with Type which means JavaScript does not include type in.
          If you are writing your code in JavaScript then you will not tackle
          with errors unless and until your code will be compiled and that
          really affects the efficiency of your code because javascript has a
          very huge library. So it becomes really hard not to make errors. While
          using TypeScript for the same you cannot make errors and if you do so
          you will be informed right at the moment which helps you to smoothly
          work with the coding stuff. You can focus on the logical and designing
          part. This makes building large projects less complicated and that’s
          why it’s one of the main reasons behind TypeScript is globally
          accepted. This is the main point you should keep in mind while
          deciding where you really want to go.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
