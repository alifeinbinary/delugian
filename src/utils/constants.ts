
export const SCALE_LENGTH = 8
export const OCTAVE_LENGTH = 12

export type ScaleStepsType = 'w' | 'h'
export const SCALE_STEP_VALUES: { [key in ScaleStepsType]: number } = {
  w: 2,
  h: 1,
}

export type PTSettingsKeyType =
  | 'show-keyboard'
  | 'midi-input-id'
  | 'language'
  | 'is-sentry-on'

export type PTSettingType = {
  key: PTSettingsKeyType
  type: 'select' | 'checkbox'
  options?: readonly string[]
}

export const AVAILABLE_SETTINGS: readonly PTSettingType[] = [
  {
    key: 'show-keyboard',
    type: 'checkbox',
  },
  {
    key: 'midi-input-id',
    type: 'select',
  },
  {
    key: 'language',
    type: 'checkbox',
  },
  {
    key: 'is-sentry-on',
    type: 'checkbox',
  },
] as const

export * from './midi'

