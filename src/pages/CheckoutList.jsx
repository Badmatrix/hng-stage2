import { useState } from "react";
import FormDisplay from "../components/FormDisplay";
import InfoForm from "../components/InfoForm";
import Button from "../components/Button";

export default function CheckoutList() {
  window.scroll(0, 0);

  const [step, setStep] = useState(0);
  function handleNext() {
    if (step === 0) setStep((step) => step + 1);
    window.scroll(0,0)
  }
  function handlePrev() {
    if (step === 1) setStep((step) => step - 1);
    window.scroll(0, 150);

  }
  return (
    <div className="mx-10 my-5 capitalize mb-10 lg:mb-20">
      <header className="text-wine-700 leading-loose font-bold tracking-widest my-3">
        <h1 className=" text-4xl py-2">checkout</h1>
        <h2 className=" text-2xl py-1">personal information</h2>
      </header>
      <form className="my-5 lg:grid grid-cols-2 gap-10">
        <InfoForm type={`${step !== 0 ? "hidden" : ""}`} />
        <FormDisplay type={`${step !== 1 ? "hidden" : ""}`} />
      </form>
      <div className="flex gap-5 justify-end lg:hidden">
        {step === 1 ? (
          <Button onclick={handlePrev} type="bg-wine-400 hover:bg-wine-500">
            &larr; back
          </Button>
        ) : (
          <Button onclick={handleNext}>next &rarr;</Button>
        )}
      </div>
    </div>
  );
}
