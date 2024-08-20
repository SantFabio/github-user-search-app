
// import useFetch from "./data/hooks/useFetch";
import { ThemeToggle } from "./components/common/ThemeToggle";
// import MainContent from "./components/common/MainContent";
// import { useState } from "react";
import SkeletonLoader from "./components/common/SkeletonLoader";
import search from "./assets/icon-search.svg"
import { useState } from "react";
// import useFetch from "./data/hooks/useFetch";
export interface UserData {
  login: string;
  avatar_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

function App() {
  // const { data, loading, error  } = useFetch<UserData>('https://api.github.com/users/SantFabio');
  const [inputValue, setInputValue] = useState<string>("");

  const userFinder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue('');
  }
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center bg-light-sky dark:bg-dark-navy">
      <div className="container">
        <header className="flex justify-between items-center mt-8 mb-9 ">
            <div className="text-[26px] font-bold text-charcoal dark:text-pure-white translate-y-[-0.140em]">devfinder</div>
            <ThemeToggle />
        </header>
        <section className="mb-4 sm:mb-6">
        <form action="" onSubmit={userFinder}>
          <div className="flex justify-between items-center h-[60px] sm:h-[4.313em] rounded-2xl shadow-3xl bg-pure-white dark:bg-midnight-blue">
            <label className="flex justify-center items-center pl-4 pr-2 sm:w-20" htmlFor="search">
              <img src={search} alt="search" className="w-5 h-5 object-contain sm:h-6 sm:w-6"/>
            </label>
            <input className="w-[60%] sm:w-[70%] placeholder:text-[13px] sm:placeholder:text-[18px] dark:placeholder:text-pure-white border-none focus:outline-none bg-transparent " type="text" name="search" value={inputValue} onChange={handleInput} placeholder="Search GitHub username…"/>
            <button className="btn">Search</button>
          </div>
        </form>
      </section>
        {/* <MainContent data={data} /> */}
        <SkeletonLoader />
      </div>
    </div>
    </>
  )
}

export default App
