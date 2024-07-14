import React from "react";

function LoginButton({ text, primary, secondary }) {
  const baseClasses = "justify-center px-16 py-5 mt-10 text-xl font-semibold whitespace-nowrap rounded-[40px]";
  const primaryClasses = "text-white bg-pink-900";
  const secondaryClasses = "text-pink-900 bg-white border-2 border-pink-900 border-solid";

  return (
    <button className={`${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''}`}>
      {text}
    </button>
  );
}

export default LoginButton;