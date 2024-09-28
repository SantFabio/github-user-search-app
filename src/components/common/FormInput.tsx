import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/icon-search.svg";
import useFetch from "../../data/hooks/useFetch";
import { UserData } from "../../App"

interface FormInputProps {
  userDataState:  UserData | null;
  setUserDataState: React.Dispatch<React.SetStateAction<UserData | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FormInput = ({ setUserDataState, setLoading}: FormInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  
  const [error, setError] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string>("");
  const [inputState, setInputState] = useState<string>("");
  const autoCompleteFetch = useFetch<UserData>(`https://api.github.com/users/${suggestions || "octocat"}`);
  const userFetch = useFetch<UserData>(`https://api.github.com/users/${suggestions || "octocat"}`);

  //Método chamando quando o formulário é submetido.
  const findUser = (userName: string) => {
    setSuggestions(userName);
    setLoading(userFetch.loading)
    setUserDataState(userFetch.data); 
    setInputState(""); 
    setShowSuggestions(false);
    if (userFetch.error) {
      setSuggestions("octocat");
      setError(true);
      setUserDataState(userFetch.data); 
    }
  };
  
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.innerText);
    setSuggestions(e.currentTarget.innerText);
    findUser(e.currentTarget.innerText);
  };

  //Método chamado sempre que o input sofre uma mudança.
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value;
    setShowSuggestions(true);
    setInputState(value);
    setSuggestions(value);
    setActiveSuggestion(0);
    setError(false);
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
  // useEffect(() => {
  //   if (fetch.data) {
  //     setUserDataState(fetch.data); 
  //   }
  // },[fetch.data, setUserDataState]);

  useEffect(() => {
    if (!suggestions) {
      setShowSuggestions(false);
    }
  },[suggestions]);
  
  return (
    <>
      <section className="mb-4 sm:mb-6">
        <form className="relative" onSubmit={(e) => {
            e.preventDefault();
            findUser(inputState);
          }}>
          <div className="shadow-xl rounded-[0.938rem] bg-pure-white dark:bg-midnight-blue flex justify-between items-center h-[60px] sm:h-[4.313em]">
            <label className="flex justify-center items-center pl-4 pr-2 sm:w-20" htmlFor="search">
              <img src={search} alt="search" className="w-5 h-5 object-contain sm:h-6 sm:w-6"/>
            </label>
            <input 
              className="w-[60%] sm:w-[70%] placeholder:text-[13px] sm:placeholder:text-[18px] dark:text-pure-white dark:placeholder:text-pure-white border-none focus:outline-none bg-transparent" 
              type="text" 
              name="search" 
              value={inputState} 
              onClick={() => setError(false)}
              onChange={onChange} 
              onKeyDown={handleKeyDown}
              placeholder="Search GitHub username…"
              autoComplete="off"
            />
            { error ? <span className="text-nowrap text-custom-red font-bold absolute right-[8.75rem] bg-pure-white">No results</span> : <span></span> }
            <button type="submit" className="btn">Search</button>
          </div>

          { !showSuggestions ? "" : <ul className="w-full bg-pure-white dark:bg-midnight-blue rounded-b-[0.938rem] shadow-4xl absolute pt-1 pb-2 top-[3.1rem] sm:top-[3.7rem] z-10 overflow-hidden">
            {[inputState, autoCompleteFetch.data?.login].map((item, index) => (
              //adicionar um navegador
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                tabIndex={-1}
                onClick={onClick}
                onMouseOver={() => setFocusedIndex(index)} // Handle mouse hover
                className={`px-11 sm:px-[4.7rem] md:px-[5.4rem] hover:bg-slate-gray hover:text-pure-white dark:text-pure-white `}
              >
                {item}
              </li>
            ))}
          </ul> }
        </form>
      </section>
    </>
  );
};

export default FormInput;
