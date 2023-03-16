if (document.querySelectorAll(`.hljs`)) {
  const {Highlighter} = await import(`@src/highlighter`)
  const highlighter = new Highlighter()

  await Promise.all(
    [...document.querySelectorAll(`.hljs`)].map(applyHighlighter(highlighter))
  )
}

function applyHighlighter(highlighter) {
  return async (el) => {
    const language = findLanguage(el)
    if (!language) return

    const target = el.querySelector(`code`) ?? el
    !target.classList.contains(`hljs`) && target.classList.add(`hljs`)
    await highlighter.highlight(target, language)
  }
}

function findLanguage(el) {
  return [...el.classList]
    .find((className) => className.startsWith(`language-`))
    ?.replace(`language-`, ``)
}

if (import.meta.webpackHot) import.meta.webpackHot.accept()

export {}
