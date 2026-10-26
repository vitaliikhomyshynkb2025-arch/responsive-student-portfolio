export default function Skills({ items }) {
  return (
    <section className="min-w-0 scroll-mt-4 rounded-[1.25rem] border border-[#d6ddd4] bg-[#fffefa] p-6 md:p-8 target:outline-2 target:outline-offset-3 target:outline-[#7b9a42]" id="skills" aria-labelledby="skills-title">
      <h2 className="mb-5 font-[Georgia,serif] text-[1.65rem] leading-[1.3]" id="skills-title"><span aria-hidden="true" className="align-middle font-[Trebuchet_MS,sans-serif] text-xs text-[#52665d]">04 / </span>Навички, які опановую</h2>
      <ul className="list-disc pl-5 [&>li+li]:mt-2 [&:not(:first-child)]:mt-3">
        {items.map((skill) => <li className="pl-1" key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}
