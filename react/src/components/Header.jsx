export default function Header({ name, role }) {
  return (
    <header className="mx-auto w-[calc(100%-2rem)] mt-4 max-w-[1120px] rounded-3xl border border-[#173c34] bg-[#173c34] px-6 py-8 text-[#f5f3ed] md:w-[calc(100%-4rem)] md:mt-10 md:p-12">
    <h1 className="max-w-[18ch] text-balance font-[Georgia,serif] text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08]">{name}</h1>
    <p className="mt-5 max-w-[44ch] text-lg text-[#d5e5cd]">{role}</p>
    <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Розділи резюме">
      <a className="border-b border-[#7a9488] py-[.35rem] hover:border-[#c1e78b] hover:text-[#c1e78b] no-underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42]" href="#about">Про мене</a>{' '}
      <a className="border-b border-[#7a9488] py-[.35rem] hover:border-[#c1e78b] hover:text-[#c1e78b] no-underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42]" href="#education">Освіта</a>{' '}
      <a className="border-b border-[#7a9488] py-[.35rem] hover:border-[#c1e78b] hover:text-[#c1e78b] no-underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42]" href="#experience">Навчальний досвід</a>{' '}
      <a className="border-b border-[#7a9488] py-[.35rem] hover:border-[#c1e78b] hover:text-[#c1e78b] no-underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42]" href="#skills">Навички</a>{' '}
      <a className="border-b border-[#7a9488] py-[.35rem] hover:border-[#c1e78b] hover:text-[#c1e78b] no-underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42]" href="#resources">Ресурси</a>
    </nav>
  </header>
  )
}
