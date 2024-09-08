
// import useFetch from "./data/hooks/useFetch";
import { ThemeToggle } from "./components/common/ThemeToggle";
import MainContent from "./components/common/MainContent";
// import { useState } from "react";
import SkeletonLoader from "./components/common/SkeletonLoader";
import {  useState } from "react";
import FormInput from "./components/common/FormInput";
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
  const [userDataState, setUserDataState] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center bg-light-sky dark:bg-dark-navy">
      <div className="container">
        <header className="flex justify-between items-center mt-8 mb-9 ">
            <div className="text-[26px] font-bold text-charcoal dark:text-pure-white translate-y-[-0.140em]">devfinder</div>
            <ThemeToggle />
        </header>
        <FormInput userDataState={userDataState} setUserDataState={setUserDataState} setLoading={setLoading}/>
        {!loading ? <MainContent userDataState={userDataState} /> : <SkeletonLoader />}
      </div>
    </div>
    </>
  )
}

export default App
