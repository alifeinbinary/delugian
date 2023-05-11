const de = {
  piano: {
    note: {
      Cb: 'Cb',
      C: 'C',
      'C#': 'C#',
      Db: 'Db',
      D: 'D',
      'D#': 'D#',
      Eb: 'Eb',
      E: 'E',
      'E#': 'E#',
      Fb: 'Fb',
      F: 'F',
      'F#': 'F#',
      Gb: 'Gb',
      G: 'G',
      'G#': 'G#',
      Ab: 'Ab',
      A: 'A',
      'A#': 'A#',
      Bb: 'Bb',
      B: 'B',
      'B#': 'B#',
    },
    numeral: {
      i: 'i',
      I: 'I',
      ii: 'ii',
      iiº: 'iiº',
      II: 'II',
      iii: 'iii',
      III: 'III',
      'III+': 'III+',
      iv: 'iv',
      IV: 'IV',
      v: 'v',
      V: 'V',
      vi: 'vi',
      viº: 'viº',
      VI: 'VI',
      viiº: 'viiº',
      VII: 'VII',
    },
  },
  scales: {
    // Major
    'c-flat-major': 'Cb-Dur',
    'c-major': 'C-Dur',
    'c-sharp-major': 'C#-Dur',
    'd-flat-major': 'Db-Dur',
    'd-major': 'D-Dur',
    'd-sharp-major': 'D#-Dur',
    'e-flat-major': 'Eb-Dur',
    'e-major': 'E-Dur',
    'e-sharp-major': 'E#-Dur',
    'f-flat-major': 'Fb-Dur',
    'f-major': 'F-Dur',
    'f-sharp-major': 'F#-Dur',
    'g-flat-major': 'Gb-Dur',
    'g-major': 'G-Dur',
    'g-sharp-major': 'G#-Dur',
    'a-flat-major': 'Ab-Dur',
    'a-major': 'A-Dur',
    'a-sharp-major': 'A#-Dur',
    'b-flat-major': 'Bb-Dur',
    'b-major': 'B-Dur',
    'b-sharp-major': 'B#-Dur',
    // Minor (Natural)
    'c-minor-natural': 'C natürliches Moll',
    'c-sharp-minor-natural': 'C# natürliches Moll',
    'd-flat-minor-natural': 'Db natürliches Moll',
    'd-minor-natural': 'D natürliches Moll',
    'd-sharp-minor-natural': 'D# natürliches Moll',
    'e-flat-minor-natural': 'Eb natürliches Moll',
    'e-minor-natural': 'E natürliches Moll',
    'e-sharp-minor-natural': 'E# natürliches Moll',
    'f-minor-natural': 'F natürliches Moll',
    'f-sharp-minor-natural': 'F# natürliches Moll',
    'g-flat-minor-natural': 'Gb natürliches Moll',
    'g-minor-natural': 'G natürliches Moll',
    'g-sharp-minor-natural': 'G# natürliches Moll',
    'a-flat-minor-natural': 'Ab natürliches Moll',
    'a-minor-natural': 'A natürliches Moll',
    'a-sharp-minor-natural': 'A# natürliches Moll',
    'b-flat-minor-natural': 'Bb natürliches Moll',
    'b-minor-natural': 'B natürliches Moll',
    'b-sharp-minor-natural': 'B# natürliches Moll',
    // Minor (Melodic)
    'c-minor-melodic': 'C melodisches Moll',
    'c-sharp-minor-melodic': 'C# melodisches Moll',
    'd-flat-minor-melodic': 'Db melodisches Moll',
    'd-minor-melodic': 'D melodisches Moll',
    'd-sharp-minor-melodic': 'D# melodisches Moll',
    'e-flat-minor-melodic': 'Eb melodisches Moll',
    'e-minor-melodic': 'E melodisches Moll',
    'e-sharp-minor-melodic': 'E# melodisches Moll',
    'f-minor-melodic': 'F melodisches Moll',
    'f-sharp-minor-melodic': 'F# melodisches Moll',
    'g-flat-minor-melodic': 'Gb melodisches Moll',
    'g-minor-melodic': 'G melodisches Moll',
    'g-sharp-minor-melodic': 'G# melodisches Moll',
    'a-flat-minor-melodic': 'Ab melodisches Moll',
    'a-minor-melodic': 'A melodisches Moll',
    'a-sharp-minor-melodic': 'A# melodisches Moll',
    'b-flat-minor-melodic': 'Bb melodisches Moll',
    'b-minor-melodic': 'B melodisches Moll',
    'b-sharp-minor-melodic': 'B# melodisches Moll',
  },
  practiceModes: {
    scales: 'Tonleitern',
    chords: 'Akkorde',
    seventhChords: 'Septakkorde',
    fifths: 'Quinten',
  },
  pages: {
    practice: {
      scale: {
        title: 'Tonleiter',
        pingPongHint: 'Ping-Pong Tonleiter Übung umschalten',
        hardModeHint: 'Schweren Modus umschalten',
      },
      mode: {
        title: 'Modus',
        configModeHint: 'In den configmodus wechseln',
        settingsHint: 'Einstellungen öffnen',
      },
    },
    config: {
      title: 'Config',
      questions: {
        key: 'Drücken Sie {{key}} auf Ihrer Tastatur',
        fifth: 'Was ist die perfekte Quinte von {{key}}',
      },
    },
  },
  settings: {
    title: 'Einstellungen',
    options: {
      'show-keyboard': 'Tastatur anzeigen',
      'mute-sound': 'Ton stummschalten',
      'midi-input-id': 'MIDI Eingang',
      language: 'Sprache',
      'is-sentry-on': 'Absturzberichte senden',
    },
  },
}

export default de
