export default function Education() {
  return (
    <section className="min-w-0 scroll-mt-4 rounded-[1.25rem] border border-[#d6ddd4] bg-[#fffefa] p-6 md:p-8 target:outline-2 target:outline-offset-3 target:outline-[#7b9a42]" id="education" aria-labelledby="education-title">
      <h2 className="mb-5 font-[Georgia,serif] text-[1.65rem] leading-[1.3]" id="education-title"><span aria-hidden="true" className="align-middle font-[Trebuchet_MS,sans-serif] text-xs text-[#52665d]">02 / </span>Освіта</h2>
      <h3 className="mb-2 text-base font-bold leading-normal">Національний університет «Львівська політехніка»</h3>
      <p className="[&+p]:mt-3">Кафедра захисту інформації. Група <strong>КБ-208</strong>.</p>
      <p className="[&+p]:mt-3">Курс Prometheus «Безпека в Інтернеті під час війни: практичний курс» —{' '}
        <time dateTime="2026-09-17">17 вересня 2026 року</time>, 15 годин.</p>
    </section>
  )
}
