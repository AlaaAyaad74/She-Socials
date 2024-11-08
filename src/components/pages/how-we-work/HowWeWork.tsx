import React from "react";
import MainTitle from "../../ui/mainTitle/MainTitle";
import Steps from "../../ui/steps/Steps";
import steps from "../../../../data/steps";
function HowWeWork() {
  return (
    <main>
      <MainTitle title="How we work" />
      <Steps steps={steps} />
    </main>
  );
}

export default HowWeWork;
