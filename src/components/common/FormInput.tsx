import { useEffect, useRef, useState } from "react";
import search from "../../assets/icon-search.svg";
import useFetch from "../../data/hooks/useFetch";
import { UserData } from "../../App"

interface FormInputProps {
  userDataState:  UserData | null;
  setUserDataState: React.Dispatch<React.SetStateAction<UserData | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FormInput = ({ userDataState, setUserDataState, setLoading}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string>();
  const [inputState, setInputState] = useState<string>("");
  const { data, loading, error  } = useFetch<UserData>(`https://api.github.com/users/${suggestions || "SantFabio"}`);

  //Método chamando quando o formulário é submetido.
  const userFinder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(loading)
    setUserDataState(data); 
    setInputState(""); 
  };
  //Método chamado sempre que o input sofre uma mudança.
  const autoSuggest = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputState(value);
    setSuggestions(value);
    // setSuggestions(value); 
  };
  //método chamando quando uma ação de teclado ocorre.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      console.log("ArrowDown");
    } else if (e.key === "ArrowUp") {
      console.log("ArrowUp");
      
    } else if (e.key === "Enter") {
      console.log("Enter");
    }
  };
  useEffect(() => {
    setUserDataState(data); 
  })
  return (
    <>
      <section className="mb-4 sm:mb-6">
        <form className="relative" onSubmit={userFinder}>
          <div className="shadow-xl rounded-[0.938rem] bg-pure-white dark:bg-midnight-blue flex justify-between items-center h-[60px] sm:h-[4.313em]">
            <label className="flex justify-center items-center pl-4 pr-2 sm:w-20" htmlFor="search">
              <img src={search} alt="search" className="w-5 h-5 object-contain sm:h-6 sm:w-6"/>
            </label>
            <input 
              className="w-[60%] sm:w-[70%] placeholder:text-[13px] sm:placeholder:text-[18px] dark:text-pure-white dark:placeholder:text-pure-white border-none focus:outline-none bg-transparent" 
              type="text" 
              name="search" 
              value={inputState} 
              onChange={autoSuggest} 
              onKeyDown={handleKeyDown}
              placeholder="Search GitHub username…"
              autoComplete="off"
            />
            { error ? <span className="text-nowrap text-custom-red font-bold absolute right-[8.75rem]">No results</span> : <span></span> }
            <button type="submit" className="btn">Search</button>
          </div>

          <ul className="w-full bg-pure-white dark:bg-midnight-blue rounded-b-[0.938rem] shadow-4xl absolute pt-1 pb-2 top-[3.1rem] sm:top-[3.7rem] z-10 overflow-hidden">
            {[inputState, data?.name].map((item, index) => (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                tabIndex={-1}
                onClick={() => console.log(item)}
                onMouseOver={() => setFocusedIndex(index)} // Handle mouse hover
                className={`px-11 sm:px-[4.7rem] md:px-[5.4rem] hover:bg-slate-gray hover:text-pure-white dark:text-pure-white `}
              >
                {item}
              </li>
            ))}
          </ul>
        </form>
      </section>
    </>
  );
};

export default FormInput;

// import { useRef, useState } from "react";
// import search from "../../assets/icon-search.svg"

// interface FormInputProps {
//   setUserData: React.Dispatch<React.SetStateAction<string | HTMLInputElement | undefined>>
//   error: string | null;
// }

// const FormInput = ({setUserData, error} : FormInputProps) => {
//   const [suggestions, setSuggestions] = useState<HTMLInputElement | null[] >([]);
//   const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
//   const [inputState, setInputState] = useState<HTMLInputElement | string | undefined | null>(null);

//   const userFinder = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setUserData(inputState)
//     if (inputState) {
//       inputState = ""; 
//     }
//   }
//   const autoSuggest = (event: HTMLInputElement) : void => {
//     // event.preventDefault();
//     setInputState(event.value)
//   }

//   return (
//     <>
//       <section className="mb-4 sm:mb-6">
//         <form className="relative" action="" onSubmit={userFinder}>

//             <div className=" shadow-xl rounded-[0.938rem] bg-pure-white dark:bg-midnight-blue flex justify-between items-center h-[60px] sm:h-[4.313em]">
//               <label className="flex justify-center items-center pl-4 pr-2 sm:w-20" htmlFor="search">
//                 <img src={search} alt="search" className="w-5 h-5 object-contain sm:h-6 sm:w-6"/>
//               </label>
//               <input  className="w-[60%] sm:w-[70%] placeholder:text-[13px] sm:placeholder:text-[18px] dark:text-pure-white dark:placeholder:text-pure-white border-none focus:outline-none bg-transparent " type="text" name="search" onChange={autoSuggest} placeholder="Search GitHub username…"/>
//               { error === null ? <span></span> : <span className="text-nowrap text-custom-red font-bold absolute right-[8.75rem]">No results</span> }
//               <button className="btn">Search</button>
//             </div>

//             <ul className="w-full bg-pure-white dark:bg-midnight-blue rounded-b-[0.938rem] shadow-4xl absolute pt-1 pb-2 top-[3.1rem] sm:top-[3.7rem] z-10 overflow-hidden">
//               <li className="px-11 sm:px-[4.7rem] md:px-[5.4rem] hover:bg-slate-gray dark:text-pure-white "></li>
//               <li className="px-11 sm:px-[4.7rem] md:px-[5.4rem] hover:bg-slate-gray dark:text-pure-white"></li>
//             </ul>
//         </form>
//       </section>
//     </>
//   )
// }
// export default FormInput;