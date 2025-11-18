import React from "react";
export function Button({
  className = "",
  children,
  onClick,
  disabled,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition ${className}`}
    >
      {children}
    </button>
  );
}
