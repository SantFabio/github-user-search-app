import LocationSvgComp from "../svg/LocationSvgComp"
import WebsiteSvgComp from "../svg/WebsiteSvgComp"
import TwitterSvgComp from "../svg/TwitterSvgComp"
import CompanySvgComp from "../svg/CompanySvgComp"

import useDate from "../../data/hooks/useDate"
import { UserData } from "../../App"

interface dataUser {
    data : UserData | null;
}

const MainContent = ({ data } : dataUser) => {
    const date = useDate(data?.created_at.substring(0,10) || "");
  return (
    <>
      <main>
      {/* className="mb-[9rem]" */}
        <article className="w-full rounded-2xl bg-pure-white dark:bg-midnight-blue px-6 pt-[2.063em] md:p-12 sm:p-10 pb-12 shadow-4xl grid grid-cols-[5.563em_auto] 
        sm:grid-cols-[9.875rem_auto] md:grid-cols-[9.625rem_auto] md:grid-rows-[4.5rem_auto]">

          <img className="rounded-full w-[4.375em] sm:w-[7.313rem] mb-[2.063rem] sm:mb-[1.5rem] md:mb-0 " src={data?.avatar_url} alt={data?.name} />
          <header className="text-[13px] md:col-span-2">
            <div>
              <h1 className=" text-base sm:text-[1.625rem] font-bold text-charcoal dark:text-pure-white md:max-w-60">{data?.name}</h1>
              <p className="text-blue-primary sm:text-base">@{data?.login}</p>
            <time className="sm:text-[0.938rem] md:float-end md:translate-y-[-200%] dark:text-pure-white">{`Joined ${date}`}</time>
            </div>
          </header>

          <section className="text-[0.813rem] sm:text-[0.938rem] mb-[1.438rem] sm:mb-[2rem] col-span-2 md:col-start-2">
            <p className="dark:text-pure-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
          </section>
          {/* md:col-start-1 md:col-end-2 */}
          <section className="h-[85px] rounded-[10px] bg-light-sky dark:bg-dark-navy text-[11px] sm:text-[13px] parent-div flex 
          justify-center sm:justify-start sm:pl-6 items-center gap-5 sm:gap-20 mb-6 sm:mb-[2rem] col-span-2 md:col-start-2">
            <div className="w-[4.938em]">
              <span className="dark:text-pure-white">Repos</span>
              <strong className="text-base sm:text-[22px] dark:text-pure-white">{data?.public_repos}</strong>
            </div>
            <div className="w-[5.063em]">
              <span className="dark:text-pure-white">Followers</span>
              <strong className="text-base sm:text-[22px] dark:text-pure-white">{data?.followers}</strong>
            </div>
            <div className="w-[5.563em] ">
              <span className="dark:text-pure-white">Following</span>
              <strong className="text-base sm:text-[22px] dark:text-pure-white">{data?.following}</strong>
            </div> 
          </section>

          <footer className="text-[13px] sm:text-[15px] grid sm:grid-cols-2 gap-4 col-span-2 md:col-start-2">
            <div className="grid grid-cols-[2.063em_auto] gap-y-4 gap-x-[3px] ">
              <LocationSvgComp location={data?.location}/><p className={ data?.location ? 'dark:text-pure-white': ''}>{data?.location == null ? "Not Available" : data?.location}</p>
              <WebsiteSvgComp blog={data?.blog}/><p className={ data?.blog ? 'dark:text-pure-white': ''}><a>{data?.blog == null || data?.blog  == "" ? "Not Available" : data?.blog}</a></p>
            </div>
            <div className="grid grid-cols-[2.063em_auto] gap-y-4 gap-x-[3px]">
              <TwitterSvgComp twitter={data?.twitter_username} /> <p className={ data?.twitter_username ? 'dark:text-pure-white': ''}>{data?.twitter_username == null ? "Not Available" : data?.twitter_username}</p>
              <CompanySvgComp login={data?.login} /><p className={ data?.login ? 'dark:text-pure-white': ''}>@{data?.login == null ? "Not Available" : data?.login}</p>
            </div>
          </footer>
        </article>
      </main>
    </>
  )
}

export default MainContent