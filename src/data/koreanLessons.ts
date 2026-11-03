import { LessonData, StickerItem } from '../types';

export const KOREAN_LESSONS: LessonData[] = [
  {
    id: 'lesson-1-topic',
    number: 'Lección 1.2',
    title: 'Las Etiquetas del Tema',
    koreanTitle: '주제격 조사 (은 / 는)',
    subtitle: 'Marca quién es el protagonista de la frase',
    purpose: 'Marcan el tema principal de la oración, es decir, de quién o de qué vas a hablar o destacar ante tu interlocutor.',
    ruleDescription: 'Regla: La última letra (Regla del Piso / 받침)',
    leftRule: {
      title: 'Sin piso',
      condition: 'Termina en vocal',
      particle: '는',
      color: 'magenta',
      icon: 'music',
      sample: '저 (Yo) + 는 = 저는'
    },
    rightRule: {
      title: 'Con piso',
      condition: 'Termina en consonante',
      particle: '은',
      color: 'cyan',
      icon: 'blocks',
      sample: '사람 (Persona) + 은 = 사람은'
    },
    examples: [
      {
        subject: '저',
        subjectMeaning: 'Yo',
        particle: '는',
        combined: '저는',
        pronunciation: 'Chó-neun',
        fullMeaning: 'En cuanto a mí / Yo soy...'
      },
      {
        subject: '사람',
        subjectMeaning: 'Persona',
        particle: '은',
        combined: '사람은',
        pronunciation: 'Sa-ram-eun',
        fullMeaning: 'En cuanto a la persona...'
      },
      {
        subject: '한국',
        subjectMeaning: 'Corea',
        particle: '은',
        combined: '한국은',
        pronunciation: 'Han-guk-eun',
        fullMeaning: 'En cuanto a Corea...'
      },
      {
        subject: '날씨',
        subjectMeaning: 'El clima',
        particle: '는',
        combined: '날씨는',
        pronunciation: 'Nal-ssi-neun',
        fullMeaning: 'En cuanto al clima...'
      }
    ],
    practice: [
      {
        id: 'p1',
        korean: '친구',
        romaja: 'chin-gu',
        spanish: 'Amigo',
        hasBatchim: false,
        correctParticle: '는',
        options: ['는', '은'],
        explanation: 'Termina en la vocal "구" (u), por lo tanto NO tiene piso (batchim). Se usa "는".'
      },
      {
        id: 'p2',
        korean: '물',
        romaja: 'mul',
        spanish: 'Agua',
        hasBatchim: true,
        correctParticle: '은',
        options: ['는', '은'],
        explanation: 'Termina en la consonante final "ㄹ" (l), es decir, TIENE piso. Se usa "은".'
      },
      {
        id: 'p3',
        korean: '학생',
        romaja: 'hak-saeng',
        spanish: 'Estudiante',
        hasBatchim: true,
        correctParticle: '은',
        options: ['는', '은'],
        explanation: 'Termina en la consonante final "ㅇ" (ng), por lo que TIENE piso. Se usa "은".'
      },
      {
        id: 'p4',
        korean: '사과',
        romaja: 'sa-gwa',
        spanish: 'Manzana',
        hasBatchim: false,
        correctParticle: '는',
        options: ['는', '은'],
        explanation: 'Termina en la vocal compuesta "와" (wa), NO tiene piso. Se usa "는".'
      },
      {
        id: 'p5',
        korean: '선생님',
        romaja: 'seon-saeng-nim',
        spanish: 'Profesor / Maestro',
        hasBatchim: true,
        correctParticle: '은',
        options: ['는', '은'],
        explanation: 'Termina en la consonante final "ㅁ" (m) en "님", TIENE piso. Se usa "은".'
      },
      {
        id: 'p6',
        korean: '커피',
        romaja: 'keo-pi',
        spanish: 'Café',
        hasBatchim: false,
        correctParticle: '는',
        options: ['는', '은'],
        explanation: 'Termina en vocal "피" (i), NO tiene piso. Se usa "는".'
      }
    ],
    tipNote: {
      title: 'Recuerda:',
      content: [
        '저는 = Yo (formal) soy / En cuanto a mí',
        '사람은 = La persona es / En cuanto a la persona',
        'El tema se marca para comparar o establecer el foco.'
      ],
      stickerText: '화이팅! ♡'
    }
  },
  {
    id: 'lesson-2-subject',
    number: 'Lección 1.3',
    title: 'Las Etiquetas de Sujeto',
    koreanTitle: '주격 조사 (이 / 가)',
    subtitle: 'Marca quién ejecuta directamente la acción',
    purpose: 'Indican el sujeto gramatical exacto que realiza la acción o estado en la oración, respondiendo a "¿quién?" o "¿qué?".',
    ruleDescription: 'Regla de terminación fonética (Piso / 받침)',
    leftRule: {
      title: 'Sin piso',
      condition: 'Termina en vocal',
      particle: '가',
      color: 'magenta',
      icon: 'music',
      sample: '비 (Lluvia) + 가 = 비가'
    },
    rightRule: {
      title: 'Con piso',
      condition: 'Termina en consonante',
      particle: '이',
      color: 'cyan',
      icon: 'blocks',
      sample: '밥 (Arroz/Comida) + 이 = 밥이'
    },
    examples: [
      {
        subject: '비',
        subjectMeaning: 'Lluvia',
        particle: '가',
        combined: '비가 와요',
        pronunciation: 'Pi-ga wa-yo',
        fullMeaning: 'La lluvia cae (llueve)'
      },
      {
        subject: '밥',
        subjectMeaning: 'Comida',
        particle: '이',
        combined: '밥이 맛있어요',
        pronunciation: 'Pa-bi ma-si-sseo-yo',
        fullMeaning: 'La comida está deliciosa'
      },
      {
        subject: '고양이',
        subjectMeaning: 'Gato',
        particle: '가',
        combined: '고양이가 귀여워요',
        pronunciation: 'Ko-yang-i-ga kwi-yeo-wo-yo',
        fullMeaning: 'El gato es tierno'
      }
    ],
    practice: [
      {
        id: 's1',
        korean: '날씨',
        romaja: 'nal-ssi',
        spanish: 'El clima',
        hasBatchim: false,
        correctParticle: '가',
        options: ['가', '이'],
        explanation: 'Termina en vocal "씨" (i), sin consonante final abajo. Se usa "가".'
      },
      {
        id: 's2',
        korean: '책',
        romaja: 'chaek',
        spanish: 'Libro',
        hasBatchim: true,
        correctParticle: '이',
        options: ['가', '이'],
        explanation: 'Tiene consonante de piso "ㄱ" (k). Se usa "이".'
      },
      {
        id: 's3',
        korean: '엄마',
        romaja: 'eom-ma',
        spanish: 'Mamá',
        hasBatchim: false,
        correctParticle: '가',
        options: ['가', '이'],
        explanation: 'Termina en vocal "마" (a), sin piso. Se usa "가".'
      },
      {
        id: 's4',
        korean: '집',
        romaja: 'jip',
        spanish: 'Casa',
        hasBatchim: true,
        correctParticle: '이',
        options: ['가', '이'],
        explanation: 'Tiene consonante de piso "ㅂ" (p). Se usa "이".'
      }
    ],
    tipNote: {
      title: 'Diferencia Clave:',
      content: [
        '은/는 resalta el tema o contrasta.',
        '이/가 resalta la persona o cosa específica que ejecuta la acción.'
      ],
      stickerText: '대박! ★'
    }
  }
];

export const KOREAN_STICKERS: StickerItem[] = [
  {
    id: 'stk-hwaiting',
    korean: '화이팅! ♡',
    romaja: 'Hwa-i-ting!',
    spanish: '¡Ánimo! / ¡Tú puedes!',
    category: 'ánimo',
    color: 'from-pink-500 to-rose-400',
    borderColor: 'border-pink-400/60',
    rotation: -4
  },
  {
    id: 'stk-daebak',
    korean: '대박! ✨',
    romaja: 'Dae-bak!',
    spanish: '¡Increíble! / ¡Genial!',
    category: 'expresión',
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-300/60',
    rotation: 6
  },
  {
    id: 'stk-jjang',
    korean: '짱! 👑',
    romaja: 'Jjang!',
    spanish: '¡El mejor! / ¡Número uno!',
    category: 'expresión',
    color: 'from-fuchsia-400 to-purple-600',
    borderColor: 'border-fuchsia-300/60',
    rotation: -3
  },
  {
    id: 'stk-jalhaesseo',
    korean: '잘했어요! 🌸',
    romaja: 'Jal-haet-seo-yo!',
    spanish: '¡Bien hecho! / ¡Excelente!',
    category: 'ánimo',
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-300/60',
    rotation: 5
  },
  {
    id: 'stk-saranghae',
    korean: '사랑해요 💖',
    romaja: 'Sa-rang-hae-yo',
    spanish: 'Te quiero / Con amor',
    category: 'expresión',
    color: 'from-pink-400 to-purple-500',
    borderColor: 'border-pink-300/60',
    rotation: -5
  },
  {
    id: 'stk-kkot',
    korean: '벚꽃 (Beotkkot) 🌸',
    romaja: 'Flor de Cerezo',
    spanish: 'Símbolo de primavera y renacimiento',
    category: 'estética',
    color: 'from-rose-300 to-pink-500',
    borderColor: 'border-rose-300/60',
    rotation: 2
  },
  {
    id: 'stk-lotus',
    korean: '연꽃 (Yeonkkot) 🪷',
    romaja: 'Flor de Loto',
    spanish: 'Sabiduría y pureza tradicional',
    category: 'tradicional',
    color: 'from-purple-400 to-indigo-500',
    borderColor: 'border-purple-300/60',
    rotation: -2
  },
  {
    id: 'stk-dojang',
    korean: '합격 認',
    romaja: 'Hab-gyeok (Sello Real)',
    spanish: 'Aprobado / Sello de Maestría',
    category: 'tradicional',
    color: 'from-red-500 to-rose-600',
    borderColor: 'border-red-400/80',
    rotation: 4
  }
];

export const HANGUL_STRUCTURE_INFO = {
  title: 'Anatomía del Hangul: La "Regla del Piso" (받침 - Batchim)',
  subtitle: 'Cómo se arma una sílaba en coreano y por qué cambia la etiqueta',
  blocks: [
    {
      role: 'Consonante Inicial (초성)',
      sample: 'ㅅ (s)',
      color: 'border-cyan-400/60 text-cyan-300',
      description: 'El techo o inicio de la sílaba'
    },
    {
      role: 'Vocal Medial (중성)',
      sample: 'ㅏ (a)',
      color: 'border-fuchsia-400/60 text-fuchsia-300',
      description: 'El núcleo de sonido vocal'
    },
    {
      role: 'Consonante Final o Piso (종성 / 받침)',
      sample: '람 (r + a + ㅁ[m])',
      color: 'border-amber-400/60 text-amber-300',
      description: 'El piso inferior que sostiene la sílaba: determina si usas 은 o 는'
    }
  ]
};
