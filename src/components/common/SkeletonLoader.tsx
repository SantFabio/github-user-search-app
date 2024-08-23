

const SkeletonLoader = () => {
  return (
    <>
      <main>
      {/* className="mb-[9rem]" 697c9a */}
        <article className="w-full rounded-2xl bg-white dark:bg-midnight-blue px-6 pt-[2.063em] md:p-12 sm:p-10 pb-12 shadow-4xl grid grid-cols-[5.563em_auto] 
        sm:grid-cols-[9.875rem_auto] md:grid-cols-[9.625rem_auto] md:grid-rows-[4.5rem_auto]">

          <div className="rounded-full h-[4.375em] sm:h-[7.313rem] w-[4.375em] sm:w-[7.313rem] mb-[2.063rem] sm:mb-[1.5rem] md:mb-0 animate-colorChange"></div>
          <header className="md:col-span-2 ">
            <div className="h-9 animate-colorChange mb-2 rounded-[10px]"></div>
            <div className="h-9 animate-colorChange rounded-[10px]"></div>
          </header>

          <section className="h-9 animate-colorChange sm:text-[0.938rem] mb-[1.438rem] sm:mb-[2rem] col-span-2 md:col-start-2 rounded-[10px]">
          </section>
          {/* md:col-start-1 md:col-end-2 */}
          <section className="h-[85px] rounded-[10px] animate-colorChange  sm:pl-6 gap-5 sm:gap-20 mb-6 sm:mb-[2rem] col-span-2 md:col-start-2">
          </section>

          <footer className="h-24 grid sm:grid-cols-2 gap-4 col-span-2 md:col-start-2 animate-colorChange rounded-[10px]">
          </footer>
        </article>
      </main>
      </>
  )
}

export default SkeletonLoader