import { useState } from "react";
import Confetti from "./confetti/Confetti";

interface Props {
  labelClass?: string
  inputClass?: string
}

const WaitlistForm = ({ labelClass, inputClass }: Props) => {
  
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = 'https://script.google.com/macros/s/AKfycbyjdvUA2FTZG5qfNT4Oz_qGVkXD5CNR_0i_lNL4rxIUIisYnz1G0JdiACoGrb67H95toA/exec';

    if(email){
      setLoading(true);
      const formData = new FormData();
      const data = { email };

      Object.keys(data).forEach(key => {
        const capitalizedFistLetter =
          key.charAt(0).toUpperCase() + key.slice(1);
        formData.append(capitalizedFistLetter, String(data[key]));
      });

      await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }).then(() => {
        setEmail('');
        setLoading(false);
        setShowConfetti(true);
      }).catch(() => {
        setEmail('');
        setLoading(false);
      })
    } else {
      setLoading(false);
      return;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Confetti run={showConfetti} />
      <form onSubmit={handleSubmit} className="">
      <div className="flex items-start flex-col">
        <label htmlFor="email" className={`block text-sm font-medium text-gray-900 mb-1 ${labelClass}`}>
          Enter your email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="i.e. northstar@gmail.com"
          required
          className={`w-full border-b bg-transparent border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 py-2 mb-8 ${inputClass}`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md shadow-sm hover:bg-gray-900 transition"
      >
        {loading ? <div className="w-full flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
            </svg>
          </div> : 'Join Waitlist'}
      </button>
    </form>
    </div>
  );
};

export default WaitlistForm;
