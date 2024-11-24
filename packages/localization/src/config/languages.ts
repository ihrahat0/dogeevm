import { Language } from '../types'

export const AR: Language = { locale: 'ar-SA', language: 'العربية', code: 'ar' }
export const BN: Language = { locale: 'bn-BD', language: 'বাংলা', code: 'bn' }
export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const DE: Language = { locale: 'de-DE', language: 'Deutsch', code: 'de' }
export const EL: Language = { locale: 'el-GR', language: 'Ελληνικά', code: 'el' }
export const ESES: Language = { locale: 'es-ES', language: 'Español', code: 'es-ES' }
export const FR: Language = { locale: 'fr-FR', language: 'Français', code: 'fr' }
export const HI: Language = { locale: 'hi-IN', language: 'हिंदी', code: 'hi' }
export const HU: Language = { locale: 'hu-HU', language: 'Magyar', code: 'hu' }
export const ID: Language = { locale: 'id-ID', language: 'Bahasa Indonesia', code: 'id' }

export const languages: Record<string, Language> = {
  'ar-SA': AR,
  'bn-BD': BN,
  'en-US': EN,
  'de-DE': DE,
  'el-GR': EL,
  'es-ES': ESES,
  'fr-FR': FR,
  'hi-IN': HI,
  'hu-HU': HU,
  'id-ID': ID,
}

const languageList = Object.values(languages)

export default languageList
