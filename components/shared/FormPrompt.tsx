import React, { ComponentProps, forwardRef } from "react";
import { ArrowBigLeftDash } from "lucide-react";
import { Button } from "../ui/button";

interface Props extends ComponentProps<"form"> {
  inputProps: ComponentProps<"input">;
  buttonProps: ComponentProps<"button">;
  onSubmit: React.FormEventHandler;
}

const FormPrompt = ({ inputProps, buttonProps, onSubmit }: Props, ref: any) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative  m-auto flex wrapperHero p-5 items-center gap-4 justify-center"
      ref={ref}
    >
      <input
        placeholder="Your question..."
        required
        {...inputProps}
        className="transition h-10 md:h-12 pl-4 pr-12 flex-1 rounded-xl border border-gray-400 text-base"
        type="text"
      />

      <Button
        {...buttonProps}
        type="submit"
        tabIndex={-1}
        className=" buttonPrimary py-6"
      >
        Submit
      </Button>
    </form>
  );
};

export default forwardRef(FormPrompt);