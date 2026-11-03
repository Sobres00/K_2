export type LanguageMode = 'korean' | 'chinese';

export type VisualThemeId = 'concept-15' | 'concept-16' | 'concept-13';

export interface VisualTheme {
  id: VisualThemeId;
  name: string;
  subtitle: string;
  tag: string;
  image: string;
  accentGlow: string;
  borderColor: string;
  ambientLight: string;
  bgGradient: string;
  sealText: string;
  sealColor: string;
  quote: string;
}

export interface FacultyProfessor {
  id: string;
  name: string;
  nativeName: string;
  title: string;
  chair: string;
  university: string;
  specialty: string;
  origin: string;
  mexicanAdaptationNote: string;
  avatarSeed: string;
  greetingText: string;
  greetingAudio: string;
}

export interface AtomicDeconstruction {
  subjectOrPerson: string;
  glueParticleOrLabel?: string;
  objectOrModifier?: string;
  verbOrAction?: string;
  whatIsRemoved?: string;
  whereIsRemovedFrom?: string;
  whyIsRemoved?: string;
  whenIsRemoved?: string;
  whatIsGlued?: string;
  whyThisGlue?: string;
  finalResult: string;
}

// Legacy interfaces for KoreanAppView simulator
export interface PracticeItem {
  id: string;
  korean: string;
  romaja: string;
  spanish: string;
  hasBatchim: boolean;
  correctParticle: '은' | '는' | '이' | '가';
  options: string[];
  explanation: string;
}

export interface ExampleItem {
  subject: string;
  subjectMeaning: string;
  particle: string;
  combined: string;
  pronunciation: string;
  fullMeaning: string;
}

export interface LessonData {
  id: string;
  number: string;
  title: string;
  koreanTitle: string;
  subtitle: string;
  purpose: string;
  ruleDescription: string;
  leftRule: {
    title: string;
    condition: string;
    particle: string;
    color: 'magenta' | 'cyan';
    icon: string;
    sample: string;
  };
  rightRule: {
    title: string;
    condition: string;
    particle: string;
    color: 'cyan' | 'magenta';
    icon: string;
    sample: string;
  };
  examples: ExampleItem[];
  practice: PracticeItem[];
  tipNote: {
    title: string;
    content: string[];
    stickerText: string;
  };
}

export interface StickerItem {
  id: string;
  korean: string;
  romaja: string;
  spanish: string;
  category: 'ánimo' | 'expresión' | 'tradicional' | 'estética';
  color: string;
  borderColor: string;
  iconName?: string;
  rotation: number;
}


export interface GrammarComponent {
  type: 'subject' | 'particle' | 'object' | 'verb' | 'batchim' | 'tone' | 'removal';
  label: string; // e.g. "Sujeto / Persona", "Pegamento / Tema", "Verbo / Cópula"
  text: string;  // e.g. "저", "는", "학생", "이에요"
  phonetic?: string; // e.g. "cho", "nún"
  subtext?: string;  // e.g. "Sin piso", "1er tono"
}

export interface DetailedExample {
  id: number;
  original: string;
  phoneticGuide: string; // Mexican Spanish phonetic anchor (e.g. "yo nún / wǒ shì")
  literalBreakdown: string;
  naturalSpanish: string;
  deconstruction: AtomicDeconstruction;
  academicNote: string; // Explanatory insight from the professor
  audioText: string;
  tags?: string[];
  components?: GrammarComponent[];
  koreanText?: string;
  chineseText?: string;
  chinesePinyin?: string;
}


export interface InteractiveExercise {
  id: number;
  type: 'particle-select' | 'batchim-detector' | 'tone-sandhi' | 'sentence-build' | 'slang-match' | 'stroke-identify';
  question: string;
  targetWordOrPhrase?: string;
  hintForMexicanStudents: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  academicInsight: string;
  audioPrompt?: string;
}

export interface RegionalSlangItem {
  term: string;
  phonetic: string;
  literal: string;
  meaning: string;
  regionOrContext: string; // 'Itaewon / Seúl' | 'Busan Satoori' | 'KakaoTalk' | 'Beijing 儿化' | 'WeChat / Douyin'
  mexicanEquivalent: string; // e.g. "Equivalente en México: ¡No manches! / ¡Qué chido!"
  exampleDialogue: {
    dialogue: string;
    spanish: string;
  };
}

export interface HskTextbookPage {
  pageNumber: string;
  title: string;
  imagePath: string;
  lessonNumber: string;
  focusTopics: string[];
  coreCharacters?: {
    char: string;
    pinyin: string;
    pictogramOrigin: string;
    evolution: string;
  }[];
  audioVocab: {
    word: string;
    pinyin: string;
    spanish: string;
  }[];
  professorNotes: string;
}

export interface AtomicLesson {
  id: string;
  language: LanguageMode;
  lessonCode: string;
  title: string;
  nativeTitle: string;
  subtitle: string;
  levelBadge: string;
  professorIntro: {
    professorName: string;
    academicMessage: string;
    mexicanLearningTip: string;
  };
  foundationRule: {
    headline: string;
    subheadline: string;
    ruleLeft: {
      label: string;
      condition: string;
      indicator: string;
      why: string;
      color: 'cyan' | 'magenta' | 'amber';
      sample: string;
    };
    ruleRight: {
      label: string;
      condition: string;
      indicator: string;
      why: string;
      color: 'cyan' | 'magenta' | 'amber';
      sample: string;
    };
    anatomyBreakdown: {
      title: string;
      whatToRemove: string;
      whereFrom: string;
      whyRemove: string;
      whenRemove: string;
      whatToGlue: string;
      whyGlue: string;
    };
  };
  // Exactly 16 detailed atomic examples
  examples16: DetailedExample[];
  // Exactly 20 detailed exercises
  exercises20: InteractiveExercise[];
  // Regional slang & youth culture module
  regionalSlang: RegionalSlangItem[];
  // Linked textbook pages (if applicable)
  relatedHskPages?: string[];
}
