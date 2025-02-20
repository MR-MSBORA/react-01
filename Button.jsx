const Button = ({ value, onClick ,className="" , ...props}) => {
    return (
      <button
        {...props}
        onClick={() => onClick(value)} // ✅ Fix: Pass value correctly
        className={`bg-black w-20 h-12 text-white border border-white text-2xl rounded-lg hover:bg-gray-500 shadow-none  ${className}`}
      >
        {value}
      </button>
    );
  };
  
  export default Button;
  