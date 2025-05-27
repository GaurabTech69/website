export function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

