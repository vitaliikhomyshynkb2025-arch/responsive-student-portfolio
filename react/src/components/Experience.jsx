export default function Experience() {
  return (
    <section className="min-w-0 scroll-mt-4 rounded-[1.25rem] border border-[#d6ddd4] bg-[#fffefa] p-6 md:p-8 target:outline-2 target:outline-offset-3 target:outline-[#7b9a42]" id="experience" aria-labelledby="experience-title">
      <h2 className="mb-5 font-[Georgia,serif] text-[1.65rem] leading-[1.3]" id="experience-title"><span aria-hidden="true" className="align-middle font-[Trebuchet_MS,sans-serif] text-xs text-[#52665d]">03 / </span>Навчальний досвід</h2>
      <article className="[&+article]:mt-6 [&+article]:border-t [&+article]:border-[#d6ddd4] [&+article]:pt-6">
        <h3 className="mb-2 text-base font-bold leading-normal">Дослідження інтернет-безпеки</h3>
        <p className="[&+p]:mt-3">Проаналізував завантаження python.org у Chrome DevTools:</p>
        <ul className="list-disc pl-5 [&>li+li]:mt-2 [&:not(:first-child)]:mt-3">
          <li>Перевірив HTTP-запити, статуси відповідей і часові етапи.</li>
          <li>Дослідив TLS, заголовки та cookie.</li>
          <li>Підготував звіт зі скриншотами й висновками.</li>
        </ul>
      </article>
      <article className="[&+article]:mt-6 [&+article]:border-t [&+article]:border-[#d6ddd4] [&+article]:pt-6">
        <h3 className="mb-2 text-base font-bold leading-normal">Резюме на HTML та React</h3>
        <p className="[&+p]:mt-3">Створив семантичну HTML-сторінку та відтворив її за допомогою компонентів React.</p>
        <p className="[&+p]:mt-3">Зберіг етапи виконання у Git.</p>
      </article>
    </section>
  )
}
