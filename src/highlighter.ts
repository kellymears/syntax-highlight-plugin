import type {Language} from 'highlight.js'
import hljs from 'highlight.js/core'

import 'highlight.js/styles/github-dark.css'

/**
 * Highlighter instance singleton
 *
 * @public
 */
export class Highlighter {
  /**
   * Languages
   */
  public languages = new Set<string>()

  /**
   * Class constructor
   */
  public constructor() {
    this.highlight = this.highlight.bind(this)
    this.importLanguage = this.importLanguage.bind(this)
    this.registerLanguage = this.registerLanguage.bind(this)
    this.registerLanguages = this.registerLanguages.bind(this)
  }

  /**
   * Transform highlight.js language aliases to basename
   */
  public transformName(name: string): string {
    return name?.toLowerCase().replace(` `, `-`).split(`,-`).pop()
  }

  /**
   * Transform highlight.js language aliases to basename
   */
  public async importLanguage(language: string) {
    return language === `blade`
      ? await import(`highlightjs-blade`).then(({default: blade}) => blade)
      : await import(
          `highlight.js/languages/${this.transformName(language)}`
        ).then(({default: language}) => language)
  }

  /**
   * register highlight.js languages
   */
  public async registerLanguages(languages: Language[`subLanguage`]) {
    await Promise.all(
      (Array.isArray(languages) ? languages : [languages])
        .filter((language) => !hljs.listLanguages().includes(language))
        .map(this.transformName)
        .map(this.registerLanguage)
    )
  }

  /**
   * register highlight.js language
   */
  public async registerLanguage(language: string) {
    if (hljs.listLanguages().includes(language)) return
    if (language === `html`) language = `xml`

    const languageFn = await this.importLanguage(language)
    hljs.registerLanguage(this.transformName(language), languageFn)

    const additionalLanguages: Array<string> = []
    const {subLanguage, contains}: Language = languageFn(hljs)

    await Promise.all(
      [
        ...(contains ?? []).flatMap(({subLanguage}) => subLanguage),
        ...(Array.isArray(subLanguage) ? subLanguage : [subLanguage]),
      ]
        .filter(Boolean)
        .map((language) => {
          this.languages.add(language)
          return language
        })
        .map(this.registerLanguages)
    )

    await this.registerLanguages(additionalLanguages)
  }

  /**
   * highlight code
   */
  public async highlight(el, language: string) {
    if (!hljs.listLanguages().includes(language)) {
      await this.registerLanguage(language)
    }

    hljs.highlightElement(el)
  }
}
