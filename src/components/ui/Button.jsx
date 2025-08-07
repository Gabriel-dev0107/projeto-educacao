import React from "react";
import classNames from "classnames";

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const finalClassName = classNames(
    baseClasses,
    className // Permite personalização externa
  );

  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  );
}

