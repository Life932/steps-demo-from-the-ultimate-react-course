import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setStep(step > 1 ? step - 1 : step);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep(step < 3 ? step + 1 : step);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className="bg-[#7950f2] text-white"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button className="bg-[#7950f2] text-white" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
