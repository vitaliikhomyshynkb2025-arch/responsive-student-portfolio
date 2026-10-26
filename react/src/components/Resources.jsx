export default function Resources() {
  return (
    <section className="min-w-0 scroll-mt-4 rounded-[1.25rem] border border-[#d6ddd4] bg-[#fffefa] p-6 md:p-8 target:outline-2 target:outline-offset-3 target:outline-[#7b9a42] md:col-span-2" id="resources" aria-labelledby="resources-title">
      <h2 className="mb-5 font-[Georgia,serif] text-[1.65rem] leading-[1.3]" id="resources-title"><span aria-hidden="true" className="align-middle font-[Trebuchet_MS,sans-serif] text-xs text-[#52665d]">05 / </span>Навчальні ресурси</h2>
      <ul className="list-disc pl-5 [&>li+li]:mt-2 [&:not(:first-child)]:mt-3">
        <li><a className="underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42] decoration-[#72945a]" href="https://www.w3schools.com/html/">W3Schools — HTML</a></li>
        <li><a className="underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42] decoration-[#72945a]" href="https://web.dev/learn/html">web.dev — Learn HTML</a></li>
        <li><a className="underline underline-offset-4 hover:decoration-2 focus-visible:rounded-xs focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#7b9a42] decoration-[#72945a]" href="https://react.dev/learn">Офіційна документація React</a></li>
      </ul>
    </section>
  )
}
