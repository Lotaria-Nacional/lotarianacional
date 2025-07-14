import { useEffect, useRef, useState } from "react";

export type CustomSelectOption = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  placeholder?: string;
  className?: string;
};

function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Escolher",
  className,
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setHighlighted(-1);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Acessibilidade: teclado
  useEffect(() => {
    if (!showDropdown) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowDropdown(false);
        setHighlighted(-1);
        buttonRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        setHighlighted((h) => (h < options.length - 1 ? h + 1 : 0));
      } else if (e.key === "ArrowUp") {
        setHighlighted((h) => (h > 0 ? h - 1 : options.length - 1));
      } else if (e.key === "Enter" && highlighted >= 0) {
        onChange(options[highlighted].value);
        setShowDropdown(false);
        setHighlighted(-1);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showDropdown, highlighted, options, onChange]);

  return (
    <div className={`relative ${className || ""}`} ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        className="h-[38px] w-full bg-white border rounded-[8px] px-3 flex items-center justify-between text-left focus:outline-blue-400"
        aria-haspopup="listbox"
        aria-expanded={showDropdown}
        onClick={() => setShowDropdown((v) => !v)}
        onKeyDown={(e) => {
          if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !showDropdown) {
            setShowDropdown(true);
            setHighlighted(0);
          }
        }}
      >
        <span>
          {options.find((o) => o.value === value)?.label || placeholder}
        </span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showDropdown && (
        <div
          className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-50 max-h-60 overflow-auto"
          role="listbox"
        >
          {options.map((option, idx) => (
            <button
              type="button"
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              className={`w-full text-left px-3 py-2 hover:bg-blue-100 focus:bg-blue-100 ${
                value === option.value ? "bg-blue-50 font-bold" : ""
              } ${highlighted === idx ? "bg-blue-100" : ""}`}
              onClick={() => {
                onChange(option.value);
                setShowDropdown(false);
                setHighlighted(-1);
              }}
              onMouseEnter={() => setHighlighted(idx)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
