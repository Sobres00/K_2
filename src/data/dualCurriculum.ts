import {
  VisualTheme,
  FacultyProfessor,
  AtomicLesson,
  HskTextbookPage
} from '../types';

// Master Fusion of the 3 Selected Concepts: Lotus Sanctuary + Gyeongbok Palace + Sakura Pavilion
export const FUSED_MASTER_DESIGN = {

  title: 'Cyber-Joseon Crystal Sanctuary (Fusión Maestra de los 3 Diseños)',
  subtitle: 'Estanque sagrado de lotos resplandecientes en primer plano, patio del Palacio Real Gyeongbok con faroles encendidos y bruma nocturna con flores de cerezo',
  backgroundArt: './assets/images/design_moonlit_lotus_shield_1793661713115.jpg',
  palaceArtwork: './assets/images/design_cyber_gyeongbok_palace_1793661712994.jpg',
  sakuraArtwork: './assets/images/design_sakura_pavilion_luminous_1793661708961.jpg',
  accentCyan: '#00F0FF',
  accentFuchsia: '#FF2A8D',
  accentGold: '#F59E0B',
  seals: [
    { text: '합격 認', color: '#ff2a55', label: 'Sello de Aprobación Oficial' },
    { text: '열공 勤', color: '#00f0ff', label: 'Sello de Diligencia Imperial' },
    { text: '화이팅! ♡', color: '#ec4899', label: 'Caligrafía Neón' }
  ]
};

// The 3 official concepts unified
export const VISUAL_THEMES: VisualTheme[] = [
  {
    id: 'concept-15',
    name: 'Concepto 15: Santuario de Lotos & Escudos Prismáticos',
    subtitle: 'Estanque sagrado nocturno, flores de loto de agua resplandecientes y escudos de cristal con dispersión prismática',
    tag: '🪷 Lotos & Escudos Prismáticos',
    image: './assets/images/design_moonlit_lotus_shield_1793661713115.jpg',
    accentGlow: 'rgba(0, 240, 255, 0.45)',
    borderColor: 'border-cyan-400/50',
    ambientLight: 'from-cyan-900/30 via-fuchsia-950/20 to-slate-950',
    bgGradient: 'bg-gradient-to-b from-[#060b1c] via-[#090d24] to-[#040611]',
    sealText: '합격 認',
    sealColor: '#ff2a55',
    quote: 'El loto florece en la serenidad nocturna; la disciplina forja la maestría lingüística.'
  },
  {
    id: 'concept-16',
    name: 'Concepto 16: Palacio Real Gyeongbok & Sendero de Faroles',
    subtitle: 'Patio imperial de Gyeongbokgung bajo la luna llena con hileras de faroles de piedra encendidos y celosía Changsal',
    tag: '🏯 Palacio Real Gyeongbok',
    image: './assets/images/design_cyber_gyeongbok_palace_1793661712994.jpg',
    accentGlow: 'rgba(255, 42, 141, 0.45)',
    borderColor: 'border-fuchsia-400/50',
    ambientLight: 'from-purple-900/30 via-pink-950/20 to-slate-950',
    bgGradient: 'bg-gradient-to-b from-[#0f0724] via-[#0d0922] to-[#060413]',
    sealText: '열공 勤',
    sealColor: '#ff0055',
    quote: 'Por el sendero iluminado del Palacio Real, cada trazo y partícula cobran vida imperial.'
  },
  {
    id: 'concept-13',
    name: 'Concepto 13: Sakura Pavilion & Niebla Mística',
    subtitle: 'Inspirado 1:1 en la foto guía: bruma nocturna sobre el lago, pagoda de varios niveles y lluvia de pétalos de cerezo',
    tag: '🌸 Sakura Pavilion & Niebla',
    image: './assets/images/design_sakura_pavilion_luminous_1793661708961.jpg',
    accentGlow: 'rgba(168, 85, 247, 0.45)',
    borderColor: 'border-purple-400/50',
    ambientLight: 'from-fuchsia-900/30 via-indigo-950/20 to-slate-950',
    bgGradient: 'bg-gradient-to-b from-[#0a051d] via-[#0d0726] to-[#05030f]',
    sealText: '화이팅 ♡',
    sealColor: '#ec4899',
    quote: 'Entre la niebla y las flores de cerezo, la fluidez nativa surge paso a paso.'
  }
];


// Dual-Academy Faculty Personas
export const FACULTY_PROFESSORS: Record<'korean' | 'chinese', FacultyProfessor> = {
  korean: {
    id: 'prof-park',
    name: 'Dra. Min-ji Park',
    nativeName: '박민지 박사 / 朴敏智 敎授',
    title: 'Catedrática Emérita de Lingüística Asiática Aplicada',
    chair: 'Cátedra de Didáctica del Hangul para Hispanohablantes',
    university: 'Universidad Nacional de Seúl (SNU) • Docente Invitada en UNAM (México)',
    specialty: 'Morfosintaxis del coreano moderno, dialectología regional (Gyeongsang/Busan) y sociolingüística de Seúl (Hongdae / Itaewon / Gangnam).',
    origin: 'Nativa de Seúl, Corea del Sur (distrito de Yongsan / Itaewon).',
    mexicanAdaptationNote: 'En México solemos entonar las preguntas hacia arriba y usar pronombres enfáticos ("yo soy el que..."). En coreano, el secreto no es conjugar el pronombre, sino pegarle la etiqueta de tema exacta según si la palabra tiene "piso" (받침) o no. ¡Te guiaré con precisión atómica!',
    avatarSeed: 'Minji',
    greetingText: '안녕하세요! 반갑습니다. Bienvenidos a nuestra cátedra de coreano desde nivel cero absoluto. Desglosaremos cada consonante, vocal y partícula con rigor científico y cercanía.',
    greetingAudio: '안녕하세요! 반갑습니다. 한국어 수업에 오신 것을 환영합니다.'
  },
  chinese: {
    id: 'prof-li',
    name: 'Dra. Li Wei',
    nativeName: '李薇 教授 / 博士',
    title: 'Catedrática de Sinología y Fonética Contrastiva',
    chair: 'Cátedra HSK & Evolución Ideográfica',
    university: 'Universidad de Lengua y Cultura de Beijing (BLCU) • Asesora Académica en El Colegio de México (Colmex)',
    specialty: 'Fonética acústica de tonos en mandarín estándar (Putonghua), sandhi tonal, evolución pictográfica del HSK 1 y lenguaje digital de WeChat/Douyin.',
    origin: 'Nativa de Beijing (Haidian), con dominio de variantes de Shanghai, Sichuan y Guangzhou.',
    mexicanAdaptationNote: 'En México usamos inflexiones tonales todo el tiempo sin darnos cuenta: cuando te asombras y dices "¿¡Qué!?" haces exactamente el segundo tono ascendente del chino. Cuando suspiras o dices un "¡No!" tajante, haces el cuarto tono descendente. ¡Aprenderemos a dominar cada trazo y tono sin miedo!',
    avatarSeed: 'LiWei',
    greetingText: '你好！欢迎大家！ Bienvenidos a la cátedra de Chino Mandarín. Analizaremos cada trazo, tono, partícula y evolución pictográfica de tus libros oficiales HSK 1.',
    greetingAudio: '你好！欢迎大家来到中文课堂。让我们从零开始，掌握地道汉语！'
  }
};

// 12 Uploaded HSK 1 Textbook Pages mapped to curriculum
export const HSK_TEXTBOOK_PAGES: HskTextbookPage[] = [
  {
    pageNumber: '025',
    title: 'Lección 1: Regla Fonética del 3er Tono Sandhi y Vocabulario Cultural',
    imagePath: './assets/aistudio/pagina-025_6c5bc759.png',
    lessonNumber: 'HSK 1 - Lección 1',
    focusTopics: ['Regla de Sandhi 3er Tono (3+3 -> 2+3)', 'Bebidas y Comidas en China', 'Práctica Fonética nǐ hǎo -> ní hǎo'],
    audioVocab: [
      { word: '咖啡', pinyin: 'kāfēi', spanish: 'Café' },
      { word: '可乐', pinyin: 'kělè', spanish: 'Refresco de cola' },
      { word: '烤鸭', pinyin: 'kǎoyā', spanish: 'Pato laqueado de Beijing' },
      { word: '火锅', pinyin: 'huǒguō', spanish: 'Caldero mongol / Hotpot' },
      { word: '地图', pinyin: 'dìtú', spanish: 'Mapa' },
      { word: '飞机', pinyin: 'fēijī', spanish: 'Avión' }
    ],
    professorNotes: 'Dra. Li Wei: En esta página oficial vemos el cambio tonal más importante del chino: cuando dos terceros tonos van juntos (nǐ + hǎo), el primero se pronuncia automáticamente como segundo tono (ní hǎo) para que la garganta no se fatigue.'
  },
  {
    pageNumber: '026',
    title: 'Lección 1: Expresiones de Aula y los 5 Trazos Fundamentales',
    imagePath: './assets/aistudio/pagina-026_920badc9.png',
    lessonNumber: 'HSK 1 - Lección 1',
    focusTopics: ['5 Trazos Básicos: 横 (héng), 竖 (shù), 撇 (piě), 点 (diǎn), 捺 (nà)', 'Caracteres 一 (uno) y 二 (dos)', 'Expresiones del Maestro en Clase'],
    coreCharacters: [
      { char: '一', pinyin: 'yī', pictogramOrigin: 'Un solo trazo horizontal representa la unidad primera del universo.', evolution: 'Trazado único de izquierda a derecha (横 héng).' },
      { char: '二', pinyin: 'èr', pictogramOrigin: 'Dos líneas horizontales: la superior representa el Cielo y la inferior la Tierra.', evolution: 'Primero el trazo superior corto, luego el inferior largo (横 héng x 2).' }
    ],
    audioVocab: [
      { word: '上课', pinyin: 'shàngkè', spanish: 'Comienza la clase' },
      { word: '下课', pinyin: 'xiàkè', spanish: 'Termina la clase' },
      { word: '现在休息', pinyin: 'xiànzài xiūxi', spanish: 'Tomamos un descanso ahora' },
      { word: '看黑板', pinyin: 'kàn hēibǎn', spanish: 'Miren la pizarra' },
      { word: '跟我读', pinyin: 'gēn wǒ dú', spanish: 'Lean conmigo en voz alta' }
    ],
    professorNotes: 'Dra. Li Wei: Los caracteres chinos no son garabatos al azar. Son ensamblados a partir de trazos geométricos exactos. Aquí aprendes la regla suprema de caligrafía: de arriba hacia abajo y de izquierda a derecha.'
  },
  {
    pageNumber: '028',
    title: 'Lección 2: Agradecimientos y Despedidas (Xièxie, Bú kèqi, Zàijiàn)',
    imagePath: './assets/aistudio/pagina-028_cc63a346.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Diálogo 1: 谢谢 (Gracias) / 不谢 (De nada)', 'Diálogo 2: 谢谢你 / 不客气', 'Diálogo 3: 再见 (Adiós / Hasta volvernos a ver)'],
    audioVocab: [
      { word: '谢谢', pinyin: 'xièxie', spanish: 'Gracias (la 2da sílaba en tono neutro)' },
      { word: '不谢', pinyin: 'bú xiè', spanish: 'De nada / No hay de qué' },
      { word: '不客气', pinyin: 'bú kèqi', spanish: 'No seas cortés / De nada formal' },
      { word: '再见', pinyin: 'zàijiàn', spanish: 'Adiós (Literal: Volvernos a ver)' }
    ],
    professorNotes: 'Dra. Li Wei: Nota con suma atención el cambio de tono de 不 (bù). Delante de 谢 (xiè) y 客 (kè), que son de 4to tono descendente, 不 se transforma a segundo tono ascendente: ¡bú xiè, bú kèqi!'
  },
  {
    pageNumber: '029',
    title: 'Lección 2: Fonética de Retroflejas (zh, ch, sh, r) y Dentales (z, c, s)',
    imagePath: './assets/aistudio/pagina-029_473978ff.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Consonantes retroflejas: zh, ch, sh, r', 'Consonantes dentales planas: z, c, s', 'Vocabulario ilustrado de 16 palabras monosilábicas'],
    audioVocab: [
      { word: '三', pinyin: 'sān', spanish: 'Tres' },
      { word: '山', pinyin: 'shān', spanish: 'Montaña' },
      { word: '钟', pinyin: 'zhōng', spanish: 'Reloj' },
      { word: '羊', pinyin: 'yáng', spanish: 'Oveja' },
      { word: '菜', pinyin: 'cài', spanish: 'Comida / Verdura' },
      { word: '手', pinyin: 'shǒu', spanish: 'Mano' },
      { word: '熊', pinyin: 'xióng', spanish: 'Oso' },
      { word: '云', pinyin: 'yún', spanish: 'Nube' },
      { word: '星', pinyin: 'xīng', spanish: 'Estrella' },
      { word: '圆', pinyin: 'yuán', spanish: 'Círculo' },
      { word: '人', pinyin: 'rén', spanish: 'Persona' },
      { word: '船', pinyin: 'chuán', spanish: 'Barco' },
      { word: '床', pinyin: 'chuáng', spanish: 'Cama' },
      { word: '吃', pinyin: 'chī', spanish: 'Comer' },
      { word: '热', pinyin: 'rè', spanish: 'Caliente' }
    ],
    professorNotes: 'Dra. Li Wei: Para los hispanohablantes de México, el sonido "sh" de 山 (shān) es idéntico al "shhh" cuando pides silencio, pero enrollando la punta de la lengua hacia el paladar superior.'
  },
  {
    pageNumber: '030',
    title: 'Lección 2: Palabras Disilábicas y el Tono Neutro (轻声 qīngshēng)',
    imagePath: './assets/aistudio/pagina-030_4cc270ad.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Tono Neutro (ligero y corto)', 'Familia: 妈妈 (māma), 爷爷 (yéye), 奶奶 (nǎinai), 爸爸 (bàba)', 'Objetos cotidianos: 桌子 (zhuōzi), 椅子 (yǐzi)'],
    audioVocab: [
      { word: '妈妈', pinyin: 'māma', spanish: 'Mamá' },
      { word: '爷爷', pinyin: 'yéye', spanish: 'Abuelo paterno' },
      { word: '奶奶', pinyin: 'nǎinai', spanish: 'Abuela paterna' },
      { word: '爸爸', pinyin: 'bàba', spanish: 'Papá' },
      { word: '桌子', pinyin: 'zhuōzi', spanish: 'Mesa' },
      { word: '椅子', pinyin: 'yǐzi', spanish: 'Silla' }
    ],
    professorNotes: 'Dra. Li Wei: El tono neutro no lleva tilde tonal en pinyin. Se pronuncia sin fuerza muscular, como si la voz descansara de golpe tras la primera sílaba.'
  },
  {
    pageNumber: '031',
    title: 'Lección 2: Reglas de Posición de Tildes Tonales y Abreviaturas de Pinyin',
    imagePath: './assets/aistudio/pagina-031_459b151a.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Jerarquía de vocales para poner el tono: a > o > e > i / u / ü', 'Regla de iu y ui: el tono va en la última vocal', 'Abreviaciones: iou -> iu, uei -> ui, uen -> un'],
    audioVocab: [
      { word: '休息', pinyin: 'xiūxi', spanish: 'Descansar' },
      { word: '水', pinyin: 'shuǐ', spanish: 'Agua' },
      { word: '春', pinyin: 'chūn', spanish: 'Primavera' }
    ],
    professorNotes: 'Dra. Li Wei: La nemotecnia es simple: ¿hay "a"? El tono va en la "a". Si no hay "a", busca "o" o "e". Si van juntas "i" y "u" (como en xiū o shuǐ), el tono siempre se coloca sobre la segunda.'
  },
  {
    pageNumber: '032',
    title: 'Lección 2: Trazos Compuestos y Caracteres Pictográficos (口 kǒu y 见 jiàn)',
    imagePath: './assets/aistudio/pagina-032_79257435.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Trazo 横折 (héngzhé - horizontal y quiebre)', 'Trazo 竖折 (shùzhé - vertical y quiebre)', 'Trazo 竖钩 (shùgōu - vertical con gancho)', 'Evolución de 口 y 见'],
    coreCharacters: [
      { char: '口', pinyin: 'kǒu', pictogramOrigin: 'Dibujo de una boca humana abierta hablando o comiendo.', evolution: 'En huesos oraculares era un círculo u óvalo; luego se cuadró en 3 trazos: 竖, 横折, 横.' },
      { char: '见', pinyin: 'jiàn', pictogramOrigin: 'Un ojo enorme sobre las piernas de un ser humano caminando para "ver".', evolution: 'Ojo superior (目) simplificado + piernas (儿) con gancho.' }
    ],
    audioVocab: [
      { word: '口', pinyin: 'kǒu', spanish: 'Boca / Abertura' },
      { word: '见', pinyin: 'jiàn', spanish: 'Ver / Encontrarse con alguien' }
    ],
    professorNotes: 'Dra. Li Wei: Fíjate en 口 (kǒu): ¡no se hace de un solo trazo cuadrado! Se hace primero la pared izquierda (竖), luego el techo y la pared derecha en un solo ángulo (横折), y finalmente se cierra el piso (横).'
  },
  {
    pageNumber: '033',
    title: 'Lección 2: Caracteres Pictográficos Fundamentales (山 shān, 小 xiǎo, 不 bù)',
    imagePath: './assets/aistudio/pagina-033_a32572b1.png',
    lessonNumber: 'HSK 1 - Lección 2',
    focusTopics: ['Caracteres 山 (montaña), 小 (pequeño), 不 (no)', 'Evolución desde escritura oracular Jiaguwen', 'Regla de trazos de centro hacia los costados en 小'],
    coreCharacters: [
      { char: '山', pinyin: 'shān', pictogramOrigin: 'Tres picos montañosos escarpados alzándose sobre la tierra.', evolution: 'Pico central alto (竖) + línea base con pico izquierdo (竖折) + pico derecho (竖).' },
      { char: '小', pinyin: 'xiǎo', pictogramOrigin: 'Tres granos diminutos de arena o semillas esparcidas.', evolution: 'Trazo central con gancho (竖钩) + dos puntos laterales (撇 y 点).' },
      { char: '不', pinyin: 'bù', pictogramOrigin: 'Un pájaro que vuela hacia arriba en el cielo y ya no baja.', evolution: 'Trazo horizontal techo (横) + caída inclinada (撇) + vertical (竖) + punto (点).' }
    ],
    audioVocab: [
      { word: '山', pinyin: 'shān', spanish: 'Montaña' },
      { word: '小', pinyin: 'xiǎo', spanish: 'Pequeño / Diminuto' },
      { word: '不', pinyin: 'bù / bú', spanish: 'No (partícula de negación universal)' }
    ],
    professorNotes: 'Dra. Li Wei: En 小 (xiǎo) se aplica la regla "Primero el centro y luego los laterales simétricos". Esto le da equilibrio visual al carácter en la cuadrícula china.'
  },
  {
    pageNumber: '034',
    title: 'Lección 3: ¿Cómo te llamas? (你叫什么名字) y Diálogo de Aula',
    imagePath: './assets/aistudio/pagina-034_6937111b.png',
    lessonNumber: 'HSK 1 - Lección 3',
    focusTopics: ['Verbo 叫 (jiào - llamarse)', 'Pronombre interrogativo 什么 (shénme - qué)', 'Nombre propio 李月 (Lǐ Yuè)', 'Vocabulario de nacionalidades: 中国 (Zhōngguó), 美国 (Měiguó)'],
    audioVocab: [
      { word: '叫', pinyin: 'jiào', spanish: 'Llamarse / Nombrar' },
      { word: '什么', pinyin: 'shénme', spanish: 'Qué' },
      { word: '名字', pinyin: 'míngzi', spanish: 'Nombre' },
      { word: '中国', pinyin: 'Zhōngguó', spanish: 'China (País del Centro)' },
      { word: '美国', pinyin: 'Měiguó', spanish: 'Estados Unidos (País Hermoso)' }
    ],
    professorNotes: 'Dra. Li Wei: En chino no cambiamos el orden de las palabras para hacer una pregunta como en español. Decimos: 你 (Tú) + 叫 (te llamas) + 什么名字 (qué nombre)? Exactamente en el mismo orden que la respuesta.'
  },
  {
    pageNumber: '035',
    title: 'Lección 3: Diálogos 2 y 3 (¿Eres profesor? / ¿Eres estadounidense?)',
    imagePath: './assets/aistudio/pagina-035_2aef0483.png',
    lessonNumber: 'HSK 1 - Lección 3',
    focusTopics: ['Texto 2: 你是老师吗？(¿Eres profesor?)', 'Respuesta negativa: 我不是老师，我是学生。(No soy maestro, soy estudiante)', 'Texto 3: 你是中国人吗？(¿Eres chino?)'],
    audioVocab: [
      { word: '老师', pinyin: 'lǎoshī', spanish: 'Profesor / Maestro' },
      { word: '吗', pinyin: 'ma', spanish: 'Partícula interrogativa de sí/no' },
      { word: '学生', pinyin: 'xuésheng', spanish: 'Estudiante / Alumno' },
      { word: '人', pinyin: 'rén', spanish: 'Persona / Ciudadano' }
    ],
    professorNotes: 'Dra. Li Wei: Para decir la nacionalidad de alguien, la fórmula es matemática: [Nombre del país] + 人 (rén). Por ejemplo: 墨西哥 (Mòxīgē - México) + 人 (rén) = 墨西哥人 (mexicano).'
  },
  {
    pageNumber: '036',
    title: 'Lección 3: Gramática Anatómica de 是 (Ser) y la Etiqueta 吗',
    imagePath: './assets/aistudio/pagina-036_169f7c79.png',
    lessonNumber: 'HSK 1 - Lección 3',
    focusTopics: ['Estructura A 是 B (A es B)', 'Negación: A 不是 B (A no es B con sandhi bú shì)', 'Pregunta binaria de sí/no con la etiqueta 吗 al final'],
    audioVocab: [
      { word: '我是老师', pinyin: 'wǒ shì lǎoshī', spanish: 'Yo soy maestro' },
      { word: '我不是学生', pinyin: 'wǒ bú shì xuésheng', spanish: 'Yo no soy estudiante' },
      { word: '你是中国人吗', pinyin: 'nǐ shì Zhōngguó rén ma', spanish: '¿Eres ciudadano chino?' }
    ],
    professorNotes: 'Dra. Li Wei: ¡Nunca pongas signos de interrogación al inicio en chino! Solo agregas la partícula 吗 (ma) al final de cualquier afirmación y se vuelve pregunta al instante.'
  },
  {
    pageNumber: '037',
    title: 'Lección 3: Corte Anatómico de Pronunciación (j, q, x vs z, c, s)',
    imagePath: './assets/aistudio/pagina-037_b5df8e0e.png',
    lessonNumber: 'HSK 1 - Lección 3',
    focusTopics: ['Articulación dorso-palatal: j, q, x', 'Diferencia con las dentales z, c, s', 'Diagramas anatómicos de posición lingual y labios'],
    audioVocab: [
      { word: '北京', pinyin: 'Běijīng', spanish: 'Pekín' },
      { word: '星期', pinyin: 'xīngqī', spanish: 'Semana' },
      { word: '学习', pinyin: 'xuéxí', spanish: 'Estudiar / Aprender' }
    ],
    professorNotes: 'Dra. Li Wei: Para pronunciar la "x" de chino, sonríe ampliamente con los labios estirados y expulsa aire suavemente entre el dorso lingual y el paladar duro. ¡Es sumamente sedoso y dulce!'
  }
];

// Complete Atomic Lessons: Korean and Chinese
export const ATOMIC_LESSONS: AtomicLesson[] = [
  // ==========================================
  // KOREAN LESSON 1: 은 / 는 (Topic Markers)
  // ==========================================
  {
    id: 'korean-1',
    language: 'korean',
    lessonCode: 'LECCIÓN 1.1 - COREANO',
    title: 'Las Etiquetas del Tema (은 / 는)',
    nativeTitle: '주제격 조사 은 / 는',
    subtitle: 'La regla del "Piso" (받침) y cómo marcar al protagonista de la oración',
    levelBadge: 'Nivel 0: Absoluto Principiante',
    professorIntro: {
      professorName: 'Dra. Min-ji Park (Universidad Nacional de Seúl)',
      academicMessage: '¡Hola a todos mis queridos alumnos en México! En coreano las palabras no flotan sueltas como en español: necesitan un "pegamento" o etiqueta que le diga al cerebro del oyente qué rol cumple esa palabra. Las etiquetas 은 (eun) y 는 (neun) declaran quién es el protagonista del que vamos a hablar.',
      mexicanLearningTip: 'En México decimos "Oye, en cuanto a mí, pues yo opino esto...". Ese "en cuanto a mí..." es exactamente lo que hace 은 o 는 en coreano.'
    },
    foundationRule: {
      headline: 'La Regla Sagrada del Piso (받침 Batchim)',
      subheadline: 'Mira siempre la última sílaba de la palabra antes de pegar la etiqueta',
      ruleLeft: {
        label: '🌸 Sin Piso (Termina en Vocal)',
        condition: 'La última sílaba no tiene consonante abajo que le sirva de piso.',
        indicator: 'Se pega la etiqueta: 는 (neun)',
        why: 'Como termina en vocal suave, se usa 는 que empieza con consonante (ㄴ) para unir el sonido sin chocar.',
        color: 'magenta',
        sample: '저 (Yo) + 는 → 저는'
      },
      ruleRight: {
        label: '🧱 Con Piso (Termina en Consonante)',
        condition: 'La última sílaba tiene una consonante final en el piso inferior (받침).',
        indicator: 'Se pega la etiqueta: 은 (eun)',
        why: 'Como hay consonante en el piso, la vocal redonda ㅇ de 은 permite que la consonante suba y fluya al hablar.',
        color: 'cyan',
        sample: '사람 (Persona) + 은 → 사람은 (se pronuncia 사-라-믄)'
      },
      anatomyBreakdown: {
        title: 'Desglose Anatómico del Pegamento Coreano',
        whatToRemove: 'Nada de la palabra raíz (el sustantivo queda íntegro). Solo se retira la duda ortográfica.',
        whereFrom: 'Del final de la última sílaba del sustantivo.',
        whyRemove: 'No se quita ninguna letra; se agrega 은 o 는 para conectar fonéticamente con la siguiente palabra.',
        whenRemove: 'Siempre que vayas a presentar un tema nuevo o contrastar dos ideas.',
        whatToGlue: 'Pega 는 si la palabra termina en vocal; pega 은 si termina en consonante de apoyo.',
        whyGlue: 'Para que la pronunciación sea suave (ligazón) y no trabe la lengua del hablante.'
      }
    },
    // EXACTLY 16 DETAILED ATOMIC EXAMPLES
    examples16: [
      {
        id: 1,
        original: '저는',
        phoneticGuide: 'chŏ-nŭn (Para mexicanos: "cho-nún", con una "o" abierta y "u" relajada)',
        literalBreakdown: '[저 = Yo (humilde/respetuoso)] + [는 = Etiqueta de tema: Sin piso]',
        naturalSpanish: 'Yo... / En cuanto a mí / Yo soy',
        deconstruction: {
          subjectOrPerson: '저 (Yo)',
          glueParticleOrLabel: '는 (Etiqueta tema sin piso)',
          whatIsRemoved: 'Ninguna letra (저 termina en vocal ㅓ, sin piso inferior)',
          whereIsRemovedFrom: 'Base del bloque silábico',
          whyIsRemoved: 'Al no tener 받침, fluye directo con 는',
          whenIsRemoved: 'En registro formal educado al presentarse',
          whatIsGlued: '는',
          whyThisGlue: 'Termina en vocal ㅓ',
          finalResult: '저는'
        },
        academicNote: 'Dra. Min-ji Park: 저 es la forma humilde y respetuosa para decir "yo". Es la que siempre debes usar al hablar con profesores o personas mayores en Corea.',
        audioText: '저는'
      },
      {
        id: 2,
        original: '사람은',
        phoneticGuide: 'sa-ra-mŭn (Para mexicanos: "sa-ra-mún", la "m" del piso salta al círculo de 은)',
        literalBreakdown: '[사람 = Persona] + [은 = Etiqueta de tema: Con piso]',
        naturalSpanish: 'La persona... / El ser humano...',
        deconstruction: {
          subjectOrPerson: '사람 (Persona)',
          glueParticleOrLabel: '은 (Etiqueta tema con piso)',
          whatIsRemoved: 'Ninguna letra',
          whereIsRemovedFrom: 'Sílaba 람 que tiene piso ㅁ',
          whyIsRemoved: 'La consonante ㅁ (m) en el piso se enlaza con la vocal ㅇ de 은',
          whenIsRemoved: 'Al hablar de una persona o de la gente en general',
          whatIsGlued: '은',
          whyThisGlue: 'Termina en consonante ㅁ (tiene piso)',
          finalResult: '사람은 [사라믄]'
        },
        academicNote: 'Dra. Min-ji Park: ¡Regla de oro de ligazón! En coreano, cuando una consonante en el piso se encuentra con el círculo mudo ㅇ, se muda de casa y suena junto a la vocal.',
        audioText: '사람은'
      },
      {
        id: 3,
        original: '친구는',
        phoneticGuide: 'ch’in-gu-nŭn (Para mexicanos: "chin-gu-nún")',
        literalBreakdown: '[친구 = Amigo/a] + [는 = Etiqueta tema sin piso]',
        naturalSpanish: 'Mi amigo/a... / En cuanto a mi amigo...',
        deconstruction: {
          subjectOrPerson: '친구 (Amigo)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: 'La última sílaba 구 termina en vocal ㅜ (sin piso)',
          finalResult: '친구는'
        },
        academicNote: 'Dra. Min-ji Park: En Corea, "친구" (chingu) se usa estrictamente para amigos de tu misma edad. Para amigos mayores se usan términos de respeto como 언니, 누나, 오빠 o 형.',
        audioText: '친구는'
      },
      {
        id: 4,
        original: '물은',
        phoneticGuide: 'mu-rŭn (Para mexicanos: "mu-rún", la ㄹ del piso suena como "r" suave mexicana)',
        literalBreakdown: '[물 = Agua] + [은 = Etiqueta tema con piso]',
        naturalSpanish: 'El agua... / El agua es...',
        deconstruction: {
          subjectOrPerson: '물 (Agua)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: 'La palabra 물 termina en la consonante piso ㄹ (L/R)',
          finalResult: '물은 [무른]'
        },
        academicNote: 'Dra. Min-ji Park: Cuando la consonante ㄹ está en el piso suena como una "L" mexicana (mul), pero al pegarse a 은 suena como la "r" de "mariposa" (mu-run).',
        audioText: '물은'
      },
      {
        id: 5,
        original: '학생은',
        phoneticGuide: 'hak-saeng-ŭn (Para mexicanos: "jak-seng-ún")',
        literalBreakdown: '[학생 = Estudiante] + [은 = Etiqueta tema con piso]',
        naturalSpanish: 'El estudiante... / Los estudiantes...',
        deconstruction: {
          subjectOrPerson: '학생 (Estudiante)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: 'La sílaba 생 termina en la consonante nasal piso ㅇ (ng)',
          finalResult: '학생은'
        },
        academicNote: 'Dra. Min-ji Park: La consonante ㅇ al final de sílaba suena como la "ng" de "canto" o "running". Por eso 생 + 은 = hak-saeng-un.',
        audioText: '학생은'
      },
      {
        id: 6,
        original: '사과는',
        phoneticGuide: 'sa-gwa-nŭn (Para mexicanos: "sa-gua-nún")',
        literalBreakdown: '[사과 = Manzana / también Disculpa] + [는 = Etiqueta tema sin piso]',
        naturalSpanish: 'La manzana... / En cuanto a la manzana...',
        deconstruction: {
          subjectOrPerson: '사과 (Manzana)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: 'La sílaba 과 es diptongo que termina en vocal ㅘ (sin piso)',
          finalResult: '사과는'
        },
        academicNote: 'Dra. Min-ji Park: Dato cultural divertido: en coreano 사과 significa tanto "manzana" como "pedir perdón". ¡A veces los coreanos regalan una manzana real para pedir disculpas!',
        audioText: '사과는'
      },
      {
        id: 7,
        original: '선생님은',
        phoneticGuide: 'sŏn-saeng-nim-ŭn (Para mexicanos: "son-seng-ni-mún")',
        literalBreakdown: '[선생 = Maestro] + [님 = Sufijo honorífico Don/Doña] + [은 = Etiqueta con piso]',
        naturalSpanish: 'El profesor/a... / El honorable maestro...',
        deconstruction: {
          subjectOrPerson: '선생님 (Profesor honorable)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: '님 termina en la consonante piso ㅁ (m)',
          finalResult: '선생님은 [선생니믄]'
        },
        academicNote: 'Dra. Min-ji Park: El sufijo 님 (nim) eleva el respeto. En México equivale a decir "el Doctor" o "el distinguido profesor".',
        audioText: '선생님은'
      },
      {
        id: 8,
        original: '한국은',
        phoneticGuide: 'han-guk-ŭn (Para mexicanos: "jan-gu-gún", la k se suaviza a g)',
        literalBreakdown: '[한국 = Corea del Sur] + [은 = Etiqueta con piso]',
        naturalSpanish: 'Corea... / En cuanto a Corea...',
        deconstruction: {
          subjectOrPerson: '한국 (Corea)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: '국 termina en la consonante piso ㄱ (k/g)',
          finalResult: '한국은 [한구근]'
        },
        academicNote: 'Dra. Min-ji Park: La consonante ㄱ en el piso pasa como sonido "g" suave hacia 은: han-gu-geun.',
        audioText: '한국은'
      },
      {
        id: 9,
        original: '멕시코는',
        phoneticGuide: 'mek-si-k’o-nŭn (Para mexicanos: "mek-si-co-nún")',
        literalBreakdown: '[멕시코 = México] + [는 = Etiqueta sin piso]',
        naturalSpanish: 'México... / En cuanto a México...',
        deconstruction: {
          subjectOrPerson: '멕시코 (México)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: 'La última sílaba 코 termina en la vocal pura ㅗ (sin piso)',
          finalResult: '멕시코는'
        },
        academicNote: 'Dra. Min-ji Park: En hangul no existe la letra "x" del español mexicano, por eso México se escribe 멕시코 (Mek-si-ko).',
        audioText: '멕시코는'
      },
      {
        id: 10,
        original: '이것은',
        phoneticGuide: 'i-gŏs-ŭn -> i-gŏ-sŭn (Para mexicanos: "i-go-sún")',
        literalBreakdown: '[이것 = Esta cosa / Esto] + [은 = Etiqueta con piso]',
        naturalSpanish: 'Esto... / En cuanto a esta cosa...',
        deconstruction: {
          subjectOrPerson: '이것 (Esto)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: '것 tiene la consonante piso ㅅ (s)',
          finalResult: '이것은 [이거슨]'
        },
        academicNote: 'Dra. Min-ji Park: En el habla rápida informal de Seúl, 이것은 se contrae comúnmente a 이건 (igeon). ¡Apunta ese modismo callejero!',
        audioText: '이것은'
      },
      {
        id: 11,
        original: '책은',
        phoneticGuide: 'ch’aek-ŭn (Para mexicanos: "che-gún")',
        literalBreakdown: '[책 = Libro] + [은 = Etiqueta con piso]',
        naturalSpanish: 'El libro... / En cuanto al libro...',
        deconstruction: {
          subjectOrPerson: '책 (Libro)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: '책 tiene la consonante piso ㄱ (k)',
          finalResult: '책은 [채근]'
        },
        academicNote: 'Dra. Min-ji Park: Fíjate cómo la vocal ㅐ suena idéntica a la "e" mexicana abierta.',
        audioText: '책은'
      },
      {
        id: 12,
        original: '커피는',
        phoneticGuide: 'k’ŏ-p’i-nŭn (Para mexicanos: "co-pi-nún")',
        literalBreakdown: '[커피 = Café] + [는 = Etiqueta sin piso]',
        naturalSpanish: 'El café... / En cuanto al café...',
        deconstruction: {
          subjectOrPerson: '커피 (Café)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: '피 termina en vocal ㅣ (sin piso)',
          finalResult: '커피는'
        },
        academicNote: 'Dra. Min-ji Park: En Corea, tomar un café helado (Iced Americano o 아아 ah-ah) es el pan de cada día, ¡incluso en pleno invierno bajo cero!',
        audioText: '커피는'
      },
      {
        id: 13,
        original: '오늘의 날씨는',
        phoneticGuide: 'o-nŭl-ŭi nal-ssi-nŭn (Para mexicanos: "o-núl-e nal-ssi-nún")',
        literalBreakdown: '[오늘 = Hoy] + [의 = de] + [날씨 = Clima] + [는 = Etiqueta sin piso]',
        naturalSpanish: 'El clima de hoy... / En cuanto al tiempo de hoy...',
        deconstruction: {
          subjectOrPerson: '오늘의 날씨 (El clima de hoy)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: 'La palabra 날씨 termina en vocal ㅣ',
          finalResult: '오늘의 날씨는'
        },
        academicNote: 'Dra. Min-ji Park: 날씨 termina en vocal, por ende recibe 는 sin dudar.',
        audioText: '오늘의 날씨는'
      },
      {
        id: 14,
        original: '방탄소년단은',
        phoneticGuide: 'bang-t’an-so-nyŏn-dan-ŭn (Para mexicanos: "bang-tan-so-ñon-da-nún")',
        literalBreakdown: '[방탄소년단 = BTS / Chicos a prueba de balas] + [은 = Etiqueta con piso]',
        naturalSpanish: 'BTS... / En cuanto a BTS...',
        deconstruction: {
          subjectOrPerson: '방탄소년단 (BTS)',
          glueParticleOrLabel: '은',
          whatIsGlued: '은',
          whyThisGlue: '단 termina en la consonante piso ㄴ (n)',
          finalResult: '방탄소년단은 [방탄소년다는]'
        },
        academicNote: 'Dra. Min-ji Park: La ㄴ del piso salta hacia 은, sonando de corrido: bang-tan-so-nyon-da-neun.',
        audioText: '방탄소년단은'
      },
      {
        id: 15,
        original: '엄마는',
        phoneticGuide: 'ŏm-ma-nŭn (Para mexicanos: "om-ma-nún")',
        literalBreakdown: '[엄마 = Mamá (cariñoso)] + [는 = Etiqueta sin piso]',
        naturalSpanish: 'Mamá... / En cuanto a mi mamá...',
        deconstruction: {
          subjectOrPerson: '엄마 (Mamá)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: '마 termina en vocal ㅏ (sin piso)',
          finalResult: '엄마는'
        },
        academicNote: 'Dra. Min-ji Park: 엄마 es cariñoso ("mami/mamá"). En situaciones formales de respeto se dice 어머니 (eomeoni).',
        audioText: '엄마는'
      },
      {
        id: 16,
        original: '아버지는',
        phoneticGuide: 'a-bŏ-ji-nŭn (Para mexicanos: "a-bo-yi-nún")',
        literalBreakdown: '[아버지 = Papá / Padre] + [는 = Etiqueta sin piso]',
        naturalSpanish: 'Papá... / En cuanto a mi padre...',
        deconstruction: {
          subjectOrPerson: '아버지 (Padre)',
          glueParticleOrLabel: '는',
          whatIsGlued: '는',
          whyThisGlue: '지 termina en vocal ㅣ (sin piso)',
          finalResult: '아버지는'
        },
        academicNote: 'Dra. Min-ji Park: La sílaba 지 (ji) no tiene ninguna consonante abajo, por lo tanto le corresponde 는.',
        audioText: '아버지는'
      }
    ],
    // EXACTLY 20 DETAILED INTERACTIVE EXERCISES
    exercises20: [
      {
        id: 1,
        type: 'particle-select',
        question: '¿Qué etiqueta de tema le corresponde a la palabra 친구 (Amigo)?',
        targetWordOrPhrase: '친구 (chingu)',
        hintForMexicanStudents: 'Mira la última sílaba: 구 (termina en vocal u, no tiene consonante en el piso inferior).',
        options: ['친구 는', '친구 은'],
        correctAnswer: '친구 는',
        explanation: 'Correcto. 구 termina en vocal (sin piso / 받침), por lo tanto se le pega la etiqueta 는.',
        academicInsight: 'Dra. Min-ji Park: La ligazón es fluida: chingu + neun = chinguneun.',
        audioPrompt: '친구'
      },
      {
        id: 2,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 물 (Agua)?',
        targetWordOrPhrase: '물 (mul)',
        hintForMexicanStudents: 'Mira la parte inferior de 물: tiene la consonante ㄹ de piso.',
        options: ['물 은', '물 는'],
        correctAnswer: '물 은',
        explanation: 'Correcto. 물 tiene la consonante piso ㄹ (받침), así que se pega 은 y se lee [무른].',
        academicInsight: 'Dra. Min-ji Park: La ㄹ salta a la vocal de 은 y suena como "mu-rún".',
        audioPrompt: '물'
      },
      {
        id: 3,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 학생 (Estudiante)?',
        targetWordOrPhrase: '학생 (haksaeng)',
        hintForMexicanStudents: 'La última sílaba es 생: abajo tiene el círculo ㅇ como consonante final (piso).',
        options: ['학생 은', '학생 는'],
        correctAnswer: '학생 은',
        explanation: 'Correcto. 생 termina en consonante piso ㅇ (ng), por lo que requiere 은.',
        academicInsight: 'Dra. Min-ji Park: Se lee hak-saeng-eun sin cortar la respiración.',
        audioPrompt: '학생'
      },
      {
        id: 4,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 사과 (Manzana)?',
        targetWordOrPhrase: '사과 (sagwa)',
        hintForMexicanStudents: 'La última sílaba es 과: termina en la vocal ㅘ (sin piso).',
        options: ['사과 는', '사과 은'],
        correctAnswer: '사과 는',
        explanation: 'Correcto. 과 no tiene piso inferior (termina en vocal), por lo que se pega 는.',
        academicInsight: 'Dra. Min-ji Park: Suena sa-gwa-neun de forma limpia.',
        audioPrompt: '사과'
      },
      {
        id: 5,
        type: 'batchim-detector',
        question: '¿La palabra 사람 (Persona) tiene "piso" (받침) en su última sílaba?',
        targetWordOrPhrase: '사람 (saram)',
        hintForMexicanStudents: 'Observa la sílaba 람: ¿hay una letra en el piso inferior?',
        options: ['Sí, tiene piso (la letra ㅁ)', 'No, termina en vocal'],
        correctAnswer: 'Sí, tiene piso (la letra ㅁ)',
        explanation: 'Exacto. La letra cuadrada ㅁ está abajo en el piso de la sílaba 람.',
        academicInsight: 'Dra. Min-ji Park: Al tener 받침, la palabra obligatoriamente toma 은.',
        audioPrompt: '사람'
      },
      {
        id: 6,
        type: 'batchim-detector',
        question: '¿La palabra 저 (Yo humilde) tiene "piso" (받침)?',
        targetWordOrPhrase: '저 (jeo)',
        hintForMexicanStudents: '저 consta únicamente de la consonante ㅈ y la vocal ㅓ.',
        options: ['No tiene piso (termina en vocal ㅓ)', 'Sí tiene consonante inferior'],
        correctAnswer: 'No tiene piso (termina en vocal ㅓ)',
        explanation: 'Exacto. Debajo de la vocal ㅓ no hay ninguna consonante.',
        academicInsight: 'Dra. Min-ji Park: Por eso siempre decimos 저는 (jeoneun).',
        audioPrompt: '저'
      },
      {
        id: 7,
        type: 'particle-select',
        question: '¿Cómo se dice "En cuanto al honorable profesor..."?',
        targetWordOrPhrase: '선생님 (seonsaengnim)',
        hintForMexicanStudents: 'La última sílaba 님 termina en la consonante piso ㅁ.',
        options: ['선생님은', '선생님는'],
        correctAnswer: '선생님은',
        explanation: 'Correcto. 선생님 termina en consonante piso ㅁ, por lo que lleva 은 [선생니믄].',
        academicInsight: 'Dra. Min-ji Park: Excelente aplicación de la regla de ligazón.',
        audioPrompt: '선생님은'
      },
      {
        id: 8,
        type: 'particle-select',
        question: '¿Qué etiqueta le pegamos a 한국 (Corea)?',
        targetWordOrPhrase: '한국 (hanguk)',
        hintForMexicanStudents: '국 termina en la consonante piso ㄱ.',
        options: ['한국은', '한국는'],
        correctAnswer: '한국은',
        explanation: 'Correcto. Termina en consonante inferior ㄱ, por ende se pega 은.',
        academicInsight: 'Dra. Min-ji Park: Se pronuncia [한구근] (han-gu-geun).',
        audioPrompt: '한국'
      },
      {
        id: 9,
        type: 'particle-select',
        question: '¿Qué etiqueta le pegamos a 멕시코 (México)?',
        targetWordOrPhrase: '멕시코 (meksiko)',
        hintForMexicanStudents: 'La última sílaba es 코 (termina en la vocal ㅗ, sin piso).',
        options: ['멕시코는', '멕시코은'],
        correctAnswer: '멕시코는',
        explanation: 'Correcto. 코 termina en vocal pura sin piso, así que lleva 는.',
        academicInsight: 'Dra. Min-ji Park: 멕시코는 es la forma perfecta para decir "En cuanto a México".',
        audioPrompt: '멕시코'
      },
      {
        id: 10,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 책 (Libro)?',
        targetWordOrPhrase: '책 (chaek)',
        hintForMexicanStudents: '책 tiene la consonante piso ㄱ abajo.',
        options: ['책은', '책는'],
        correctAnswer: '책은',
        explanation: 'Correcto. 책 tiene consonante piso ㄱ, por lo que requiere 은 [채근].',
        academicInsight: 'Dra. Min-ji Park: chaek + eun = chae-geun.',
        audioPrompt: '책'
      },
      {
        id: 11,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 커피 (Café)?',
        targetWordOrPhrase: '커피 (keopi)',
        hintForMexicanStudents: '피 termina en vocal ㅣ (sin consonante abajo).',
        options: ['커피는', '커피은'],
        correctAnswer: '커피는',
        explanation: 'Correcto. 커피 termina en vocal ㅣ, por lo tanto se usa 는.',
        academicInsight: 'Dra. Min-ji Park: keopi-neun es suave y melodioso.',
        audioPrompt: '커피'
      },
      {
        id: 12,
        type: 'sentence-build',
        question: '¿Cómo ensamblas la frase: "Yo (tema) + Estudiante + Soy"?',
        hintForMexicanStudents: 'En coreano el verbo "soy" (이에요/예요) SIEMPRE va hasta el final.',
        options: ['저는 학생이에요', '학생은 저예요', '저는 이에요 학생', '학생 이에요 저는'],
        correctAnswer: '저는 학생이에요',
        explanation: '¡Brillante! Estructura anatómica: [저 + 는 = 저는 (Yo-tema)] + [학생 (estudiante)] + [이에요 (soy)].',
        academicInsight: 'Dra. Min-ji Park: En coreano el verbo siempre cierra con broche de oro al final de la oración.',
        audioPrompt: '저는 학생이에요'
      },
      {
        id: 13,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 엄마 (Mamá)?',
        targetWordOrPhrase: '엄마 (eomma)',
        hintForMexicanStudents: '마 termina en vocal ㅏ, sin piso.',
        options: ['엄마는', '엄마은'],
        correctAnswer: '엄마는',
        explanation: 'Correcto. 엄마 termina en la vocal abierta ㅏ, así que le corresponde 는.',
        academicInsight: 'Dra. Min-ji Park: eom-ma-neun.',
        audioPrompt: '엄마'
      },
      {
        id: 14,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 아버지 (Papá/Padre)?',
        targetWordOrPhrase: '아버지 (abeoji)',
        hintForMexicanStudents: '지 termina en vocal ㅣ, sin piso.',
        options: ['아버지는', '아버지은'],
        correctAnswer: '아버지는',
        explanation: 'Correcto. La última sílaba 지 no tiene consonante inferior.',
        academicInsight: 'Dra. Min-ji Park: a-beo-ji-neun.',
        audioPrompt: '아버지'
      },
      {
        id: 15,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 오늘 (Hoy)?',
        targetWordOrPhrase: '오늘 (oneul)',
        hintForMexicanStudents: '늘 termina en la consonante piso ㄹ.',
        options: ['오늘은', '오늘는'],
        correctAnswer: '오늘은',
        explanation: 'Correcto. 늘 tiene piso ㄹ, así que recibe 은 y se pronuncia [오느른].',
        academicInsight: 'Dra. Min-ji Park: 오늘은 날씨가 좋아요 (Hoy hace buen tiempo).',
        audioPrompt: '오늘'
      },
      {
        id: 16,
        type: 'batchim-detector',
        question: 'Al pronunciar 물 + 은 juntos, ¿cómo suena fonéticamente debido a la ligazón?',
        targetWordOrPhrase: '물은',
        hintForMexicanStudents: 'La consonante piso ㄹ se muda hacia el círculo vacío ㅇ de 은.',
        options: ['무른 (mu-rún)', '물-은 (separado con pausa rígida)'],
        correctAnswer: '무른 (mu-rún)',
        explanation: 'Correcto. En coreano la ligazón hace que el sonido ruede como "mu-run".',
        academicInsight: 'Dra. Min-ji Park: En la fonética coreana nunca se hace pausa artificial.',
        audioPrompt: '물은'
      },
      {
        id: 17,
        type: 'slang-match',
        question: 'En Seúl y en redes como KakaoTalk, ¿qué significa la famosa expresión "대박" (Daebak)?',
        targetWordOrPhrase: '대박 (daebak)',
        hintForMexicanStudents: 'Equivalente en México a: ¡Qué genial! / ¡No manches! / ¡Éxito brutal!',
        options: ['¡Genial! / ¡Qué locura de bueno!', 'Hasta luego / Adiós', 'Tengo mucha hambre', 'Por favor disculpe'],
        correctAnswer: '¡Genial! / ¡Qué locura de bueno!',
        explanation: '¡Exacto! Daebak significa un suceso increíble o fantástico.',
        academicInsight: 'Dra. Min-ji Park: Los jóvenes de Hongdae e Itaewon usan 대박 para todo lo impresionante.',
        audioPrompt: '대박'
      },
      {
        id: 18,
        type: 'slang-match',
        question: '¿Qué significa la palabra de moda "인싸" (Inssa) en Seúl?',
        targetWordOrPhrase: '인싸 (inssa)',
        hintForMexicanStudents: 'Viene del inglés "Insider". En México equivale a alguien popular, muy sociable o fiestero.',
        options: ['Persona súper sociable / popular / el alma de la fiesta', 'Persona solitaria y tímida', 'Estudiante de medicina', 'Comida callejera picante'],
        correctAnswer: 'Persona súper sociable / popular / el alma de la fiesta',
        explanation: 'Correcto. "Inssa" es alguien que siempre está con amigos y en los mejores planes.',
        academicInsight: 'Dra. Min-ji Park: Su antónimo es 아싸 (assa, outsider).',
        audioPrompt: '인싸'
      },
      {
        id: 19,
        type: 'particle-select',
        question: '¿Qué etiqueta le corresponde a 방탄소년단 (BTS)?',
        targetWordOrPhrase: '방탄소년단 (Bangtansonyeondan)',
        hintForMexicanStudents: 'La última sílaba es 단 (dan), que termina en la consonante piso ㄴ (n).',
        options: ['방탄소년단은', '방탄소년단는'],
        correctAnswer: '방탄소년단은',
        explanation: 'Correcto. 단 termina en la consonante piso ㄴ, por lo que lleva 은 [방탄소년다는].',
        academicInsight: 'Dra. Min-ji Park: Bang-tan-so-nyeon-da-neun.',
        audioPrompt: '방탄소년단'
      },
      {
        id: 20,
        type: 'batchim-detector',
        question: 'En la palabra 이것 (Esto), ¿la consonante piso ㅅ suena como "s" o como "t" cuando está sola?',
        targetWordOrPhrase: '이것 (igeot)',
        hintForMexicanStudents: 'Cuando una consonante piso no tiene una vocal después, se apaga de golpe.',
        options: ['Suena como una "t" cortada y seca [이것 = igeot]', 'Suena siempre como una "s" silbada'],
        correctAnswer: 'Suena como una "t" cortada y seca [이것 = igeot]',
        explanation: '¡Excelente! En posición de 받침 (piso), la ㅅ se cierra en sonido "t" sordo sin aire.',
        academicInsight: 'Dra. Min-ji Park: Pero si le pegas 은, ¡resucita como "s"! Por eso 이것은 suena [이거슨 igeoseun]. ¡Esa es la magia del Hangul!',
        audioPrompt: '이것'
      }
    ],
    regionalSlang: [
      {
        term: '대박 (Daebak)',
        phonetic: 'te-bak',
        literal: 'Gran calabaza repleta de riquezas',
        meaning: '¡Increíble! / ¡Qué locura! / ¡Asombroso!',
        regionOrContext: 'Itaewon / Hongdae / Seúl',
        mexicanEquivalent: 'Equivalente mexicano: "¡No manches! / ¡Qué chido! / ¡Padrísimo!"',
        exampleDialogue: {
          dialogue: 'A: 나 한국어 시험 100점 맞았어! B: 대박! 축하해!',
          spanish: 'A: ¡Saqué 100 en el examen de coreano! B: ¡No manches, qué fregonada! ¡Felicidades!'
        }
      },
      {
        term: '치맥 (Chimaek)',
        phonetic: 'ch’i-maek',
        literal: 'Acrónimo de 치킨 (pollo frito) + 맥주 (cerveza)',
        meaning: 'El ritual sagrado nocturno de comer pollo crujiente con cerveza helada a la orilla del Río Han.',
        regionOrContext: 'Cultura nocturna de Seúl / Río Han',
        mexicanEquivalent: 'Equivalente mexicano: "Unos tacos al pastor con una chela bien helada"',
        exampleDialogue: {
          dialogue: '오늘 한강 가서 치맥 할래?',
          spanish: '¿Vamos hoy al Río Han a echarnos un pollastre con chelas?'
        }
      },
      {
        term: '와그라노 (Wa-geu-ra-no)',
        phonetic: 'wa-gŭ-ra-no',
        literal: '¿Por qué haces eso? / ¿Qué te pasa?',
        meaning: 'Dialecto regional satoori de Busan y Daegu (Gyeongsang-do).',
        regionOrContext: 'Busan Satoori (부산 사투리)',
        mexicanEquivalent: 'Equivalente mexicano: "¿Qué traes, compa? / ¿Por qué tan acelerado?"',
        exampleDialogue: {
          dialogue: 'A: 야, 와그라노? B: 아무것도 아이다.',
          spanish: 'A: ¡Oye compa! ¿Qué traes? B: No es nada, tranqui.'
        }
      },
      {
        term: 'ㅋㅋ / ㅎㅎ / ㅇㅇ',
        phonetic: 'k-k / h-h / o-o (eung)',
        literal: 'Abreviaturas de teclado Hangul en KakaoTalk e Instagram',
        meaning: 'ㅋㅋ = risa ("jajaja"); ㅎㅎ = risa suave ("jeje"); ㅇㅇ = "응" (sí / enterado / va).',
        regionOrContext: 'KakaoTalk & Redes Sociales en Corea',
        mexicanEquivalent: 'Equivalente mexicano: "jajaja", "jeje", "va / arre"',
        exampleDialogue: {
          dialogue: 'A: 오늘 만날래? B: ㅇㅇ 6시 ㄱㄱ! (ㄱㄱ = gogo)',
          spanish: 'A: ¿Nos vemos hoy? B: Va, ¡a las 6 con todo!'
        }
      }
    ]
  },

  // ==========================================
  // MANDARIN CHINESE LESSON 1: Tones & Nǐ Hǎo
  // ==========================================
  {
    id: 'chinese-1',
    language: 'chinese',
    lessonCode: 'LECCIÓN 1.1 - CHINO MANDARÍN',
    title: 'Los 4 Tonos, Regla de Sandhi y Saludos',
    nativeTitle: '声调与问候：你好与三声变调',
    subtitle: 'Aprende desde nivel cero absoluto la anatomía de los tonos, trazos pictográficos y el saludo 你好',
    levelBadge: 'HSK 1: Módulo Fonético & Trazos',
    professorIntro: {
      professorName: 'Dra. Li Wei (Universidad de Lengua y Cultura de Beijing)',
      academicMessage: '¡Ni hao a todos mis queridos estudiantes! El chino no tiene alfabeto: tiene sílabas con pinyin y caracteres pictográficos milenarios. En esta clase romperemos el mito de que los tonos son difíciles. Los hispanohablantes de México tienen un oído musical natural excelente para dominarlos al primer intento.',
      mexicanLearningTip: 'Cuando en México te dicen algo increíble y preguntas sorprendido "¿¡Quéee!?", tu voz sube del tono medio al agudo: ¡eso es exactamente el 2do tono chino! Cuando das una orden tajante como "¡Ya!", es el 4to tono.'
    },
    foundationRule: {
      headline: 'Los 4 Tonos Sagrados + La Regla del 3er Tono Sandhi',
      subheadline: 'Fórmula anatómica del saludo universal 你好 (nǐ + hǎo → ní hǎo)',
      ruleLeft: {
        label: '🔔 Los 4 Tonos Musicales',
        condition: 'Cada vocal en pinyin lleva una tilde que indica cómo vibra la voz.',
        indicator: '1º Alto plano (ā), 2º Ascendente (á), 3º Baja y sube (ǎ), 4º Descendente tajante (à).',
        why: 'En chino la misma sílaba con diferente tono significa cosas completamente distintas (ej: mā = mamá, mǎ = caballo).',
        color: 'amber',
        sample: 'mā (妈 mamá) vs mǎ (马 caballo)'
      },
      ruleRight: {
        label: '⚡ Regla de Sandhi del 3er Tono (3+3 → 2+3)',
        condition: 'Cuando se juntan dos terceros tonos consecutivos en una misma frase.',
        indicator: 'El primer 3er tono se convierte automáticamente en 2do tono ascendente.',
        why: 'Para la garganta humana es agotador bajar y subir dos veces seguidas. La lengua china cambia el primero para que fluya.',
        color: 'cyan',
        sample: '你 (nǐ 3º) + 好 (hǎo 3º) → se pronuncia [ní hǎo (2º + 3º)]'
      },
      anatomyBreakdown: {
        title: 'Desglose Anatómico del Carácter y Pinyin',
        whatToRemove: 'Se quita la pronunciación del 3er tono de la primera sílaba (nǐ) y se reemplaza por el 2do tono (ní).',
        whereFrom: 'De la primera palabra del par tonal.',
        whyRemove: 'Por eufonía física: evita que la garganta se tranque al hablar rápido.',
        whenRemove: 'Siempre que dos caracteres de 3er tono estén juntos.',
        whatToGlue: 'En la escritura se mantiene el carácter original 你 (persona + tú), pero la voz aplica el tono 2.',
        whyGlue: 'Para que el interlocutor nativo entienda que es un saludo natural y fluido.'
      }
    },
    // EXACTLY 16 DETAILED ATOMIC EXAMPLES
    examples16: [
      {
        id: 1,
        original: '你好',
        phoneticGuide: 'ní hǎo (Para mexicanos: "ni" subiendo como duda, "jao" bajando y subiendo)',
        literalBreakdown: '[你 = Tú (persona亻+ tú 尔)] + [好 = Bueno/Bien (mujer 女 + hijo 子)]',
        naturalSpanish: '¡Hola! (Literal: "Que tú estés bien")',
        deconstruction: {
          subjectOrPerson: '你 (Tú - 3er tono)',
          glueParticleOrLabel: 'Cambio de tono sandhi 3+3 -> 2+3',
          whatIsRemoved: 'La caída profunda del primer 3er tono',
          whereIsRemovedFrom: 'La sílaba nǐ',
          whyIsRemoved: 'Regla de sandhi: dos 3ros tonos seguidos fatigan las cuerdas vocales',
          whenIsRemoved: 'Al juntar 你 (nǐ) y 好 (hǎo)',
          whatIsGlued: 'Se pronuncia con 2do tono ascendente: ní hǎo',
          whyThisGlue: 'Para lograr la máxima fluidez melódica en el saludo',
          finalResult: '你好 [ní hǎo]'
        },
        academicNote: 'Dra. Li Wei: Observa la belleza pictográfica de 好: una mujer (女) abrazando a su hijo recién nacido (子). Para la cosmovisión china antigua, ¡eso representaba la máxima bondad y bienestar!',
        audioText: '你好'
      },
      {
        id: 2,
        original: '您好',
        phoneticGuide: 'nín hǎo (Para mexicanos: "nin" subiendo con respeto, "jao")',
        literalBreakdown: '[您 = Usted formal (Tú 你 + corazón 心 abajo)] + [好 = Bien]',
        naturalSpanish: '¡Hola a usted! / Buenas tardes respetuoso (a mayores o maestros)',
        deconstruction: {
          subjectOrPerson: '您 (Usted formal - 2do tono)',
          glueParticleOrLabel: 'Tono 2 directo + Tono 3',
          whatIsRemoved: 'Nada, porque 您 ya es 2do tono natural; no hay choque de dos terceros tonos',
          whereIsRemovedFrom: 'Ninguno',
          whyIsRemoved: 'No aplica sandhi aquí',
          whenIsRemoved: 'Al hablar con personas mayores o figuras de respeto',
          whatIsGlued: 'Uso del pronombre de corazón 您',
          whyThisGlue: 'Lleva el corazón (心) en la base para demostrar cortesía sincera',
          finalResult: '您好 [nín hǎo]'
        },
        academicNote: 'Dra. Li Wei: Si miras el carácter 您, es 你 (tú) con el radical 心 (corazón) abajo. En la cultura china, decir "usted" significa "poner a la otra persona en tu corazón". ¡Poesía pura!',
        audioText: '您好'
      },
      {
        id: 3,
        original: '谢谢',
        phoneticGuide: 'xiè-xie (Para mexicanos: "shie-shie", la primera tajante, la segunda suave)',
        literalBreakdown: '[谢 = Agradecer (palabra 讠+ brote 身 + pulgada 寸)] + [谢 = tono neutro]',
        naturalSpanish: 'Muchas gracias / Gracias',
        deconstruction: {
          subjectOrPerson: 'Agradecimiento cortés',
          glueParticleOrLabel: 'Tono neutro (轻声) en la segunda sílaba',
          whatIsRemoved: 'El tono descendente en la segunda sílaba',
          whereIsRemovedFrom: 'El segundo 谢谢',
          whyIsRemoved: 'Al duplicar un verbo en chino, la segunda sílaba se vuelve neutra y ligera',
          whenIsRemoved: 'En palabras de cortesía duplicadas',
          whatIsGlued: 'Tono neutro sin tilde',
          whyThisGlue: 'Le da un ritmo ágil y afectuoso al agradecimiento',
          finalResult: '谢谢 [xièxie]'
        },
        academicNote: 'Dra. Li Wei: En la página 028 de tu libro HSK 1 verás que la segunda sílaba no lleva ninguna tilde tonal en pinyin: se pronuncia como un suspiro suave.',
        audioText: '谢谢'
      },
      {
        id: 4,
        original: '不客气',
        phoneticGuide: 'bú kè-qi (Para mexicanos: "bú ke-chi")',
        literalBreakdown: '[不 = No (negación)] + [客气 = Cortés / Ceremonioso]',
        naturalSpanish: 'De nada / No hay de qué (Literal: "No seas tan ceremonioso")',
        deconstruction: {
          subjectOrPerson: 'Fórmula de cortesía',
          glueParticleOrLabel: 'Regla de sandhi del 不 (bù -> bú)',
          whatIsRemoved: 'El 4to tono original de 不 (bù)',
          whereIsRemovedFrom: 'La palabra 不',
          whyIsRemoved: 'Como 客 (kè) es de 4to tono descendente, 不 se convierte en 2do tono ascendente',
          whenIsRemoved: 'Siempre que a 不 le siga cualquier palabra de 4to tono',
          whatIsGlued: 'Tono 2: bú kèqi',
          whyThisGlue: 'Para evitar el choque de dos golpes secos seguidos',
          finalResult: '不客气 [bú kèqi]'
        },
        academicNote: 'Dra. Li Wei: Esta es la segunda regla de sandhi más importante del chino: 不 (bù) solo suena con 4to tono cuando está solo o delante de 1º, 2º o 3º. ¡Delante de otro 4to tono cambia a 2do tono bú!',
        audioText: '不客气'
      },
      {
        id: 5,
        original: '再见',
        phoneticGuide: 'zài-jiàn (Para mexicanos: "dzai-yien", dos 4tos tonos tajantes)',
        literalBreakdown: '[再 = Otra vez / de nuevo] + [见 = Encontrarse / Ver (ojo + piernas)]',
        naturalSpanish: '¡Hasta luego! / Adiós (Literal: "Volvernos a ver")',
        deconstruction: {
          subjectOrPerson: 'Despedida mutua',
          glueParticleOrLabel: 'Dos cuartos tonos plenos (4º + 4º)',
          whatIsGlued: '再 (zài 4º) + 见 (jiàn 4º)',
          whyThisGlue: 'En chino no se desea una despedida definitiva; se decreta con optimismo que nos volveremos a encontrar',
          finalResult: '再见 [zàijiàn]'
        },
        academicNote: 'Dra. Li Wei: En la página 032 de tu libro HSK verás cómo 见 evolucionó de un enorme ojo sobre piernas humanas.',
        audioText: '再见'
      },
      {
        id: 6,
        original: '口',
        phoneticGuide: 'kǒu (Para mexicanos: "kou" con 3er tono que baja y sube)',
        literalBreakdown: '[口 = Boca / Abertura / Radical de hablar]',
        naturalSpanish: 'Boca / Entrada',
        deconstruction: {
          subjectOrPerson: 'Caracter pictográfico puro',
          glueParticleOrLabel: '3 trazos exactos: 竖 (vertical), 横折 (ángulo), 横 (cierre)',
          whatIsGlued: 'Radical que compone verbos como 吃 (comer), 喝 (beber), 叫 (llamarse)',
          finalResult: '口 [kǒu]'
        },
        academicNote: 'Dra. Li Wei: Aparece en la página 032 de tu libro. Cada vez que veas un cuadrito 口 al lado izquierdo de una palabra china, sabrás de inmediato que tiene que ver con la boca, la comida o el habla.',
        audioText: '口'
      },
      {
        id: 7,
        original: '山',
        phoneticGuide: 'shān (Para mexicanos: "shan" alto y sostenido con tono 1)',
        literalBreakdown: '[山 = Montaña (tres picos rocosos)]',
        naturalSpanish: 'Montaña / Sierra',
        deconstruction: {
          subjectOrPerson: 'Elemento natural',
          glueParticleOrLabel: '3 trazos: pico central alto + trazo quebrado + pico lateral',
          finalResult: '山 [shān]'
        },
        academicNote: 'Dra. Li Wei: Consulta la página 033 de tu libro HSK 1: los tres picos montañosos dibujados por los antiguos sabios chinos.',
        audioText: '山'
      },
      {
        id: 8,
        original: '小',
        phoneticGuide: 'xiǎo (Para mexicanos: "shiao" bajando y subiendo en tono 3)',
        literalBreakdown: '[小 = Pequeño (tres granos de arena)]',
        naturalSpanish: 'Pequeño / Diminuto',
        deconstruction: {
          subjectOrPerson: 'Adjetivo de tamaño',
          glueParticleOrLabel: 'Regla caligráfica: primero el trazo central con gancho (竖钩), luego los dos lados (撇 y 点)',
          finalResult: '小 [xiǎo]'
        },
        academicNote: 'Dra. Li Wei: También en la página 033 de tu libro. Su antónimo es 大 (dà - grande: un hombre con los brazos y piernas extendidos al máximo).',
        audioText: '小'
      },
      {
        id: 9,
        original: '我是老师',
        phoneticGuide: 'wǒ shì lǎo-shī (Para mexicanos: "wo shi lao-shi")',
        literalBreakdown: '[我 = Yo] + [是 = Ser / Cópula de identidad] + [老师 = Profesor/a]',
        naturalSpanish: 'Yo soy profesor/a',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          glueParticleOrLabel: '是 (Cópula afirmativa de ser)',
          objectOrModifier: '老师 (Profesor)',
          finalResult: '我是老师'
        },
        academicNote: 'Dra. Li Wei: En chino los verbos jamás se conjugan. 是 sirve para "yo soy", "tú eres", "él es", "nosotros somos". ¡Es maravillosamente simple y directo!',
        audioText: '我是老师'
      },
      {
        id: 10,
        original: '我不是学生',
        phoneticGuide: 'wǒ bú shì xué-sheng (Para mexicanos: "wo bu shi shüe-sheng")',
        literalBreakdown: '[我 = Yo] + [不 = No (con tono sandhi bú)] + [是 = Ser] + [学生 = Estudiante]',
        naturalSpanish: 'Yo no soy estudiante',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          glueParticleOrLabel: '不是 (No soy - con cambio de tono bú shì)',
          objectOrModifier: '学生 (Estudiante)',
          whatIsRemoved: 'El 4to tono de bù',
          whatIsGlued: 'Tono 2 bú ante el 4to tono de shì',
          finalResult: '我不是学生'
        },
        academicNote: 'Dra. Li Wei: Diálogo extraído de la página 035 de tu libro HSK 1. ¡Nunca digas "bù shì"! Siempre di "bú shì" con el segundo tono.',
        audioText: '我不是学生'
      },
      {
        id: 11,
        original: '你是老师吗？',
        phoneticGuide: 'nǐ shì lǎo-shī ma? (Para mexicanos: "ni shi lao-shi ma")',
        literalBreakdown: '[你 = Tú] + [是 = Eres] + [老师 = Profesor] + [吗 = Etiqueta de pregunta de sí/no]',
        naturalSpanish: '¿Eres profesor?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          verbOrAction: '是 (Eres)',
          objectOrModifier: '老师 (Profesor)',
          glueParticleOrLabel: '吗 (Etiqueta interrogativa neutra)',
          finalResult: '你是老师吗？'
        },
        academicNote: 'Dra. Li Wei: En la página 036 verás la fórmula: Oración Afirmativa + 吗 = Pregunta de Sí o No. ¡No requieres invertir el orden de las palabras como en inglés o español!',
        audioText: '你是老师吗'
      },
      {
        id: 12,
        original: '我是中国人',
        phoneticGuide: 'wǒ shì zhōng-guó rén (Para mexicanos: "wo shi zhong-guo ren")',
        literalBreakdown: '[我 = Yo] + [是 = Soy] + [中国 = China] + [人 = Persona / Ciudadano]',
        naturalSpanish: 'Yo soy chino / de nacionalidad china',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          glueParticleOrLabel: '是 (Soy)',
          objectOrModifier: '中国人 (Ciudadano chino)',
          finalResult: '我是中国人'
        },
        academicNote: 'Dra. Li Wei: Para formar cualquier nacionalidad en chino, solo dices el país + 人 (rén). ¡Así de fácil!',
        audioText: '我是中国人'
      },
      {
        id: 13,
        original: '我是墨西哥人',
        phoneticGuide: 'wǒ shì mò-xī-gē rén (Para mexicanos: "wo shi mo-shi-ge ren")',
        literalBreakdown: '[我 = Yo] + [是 = Soy] + [墨西哥 = México] + [人 = Persona]',
        naturalSpanish: 'Yo soy mexicano/a',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          glueParticleOrLabel: '是 (Soy)',
          objectOrModifier: '墨西哥人 (Mexicano)',
          finalResult: '我是墨西哥人'
        },
        academicNote: 'Dra. Li Wei: 墨西哥 (Mòxīgē) es la transliteración fonética oficial de México en caracteres chinos. Con 人 al final significa orgullosamente "mexicano".',
        audioText: '我是墨西哥人'
      },
      {
        id: 14,
        original: '你是美国人吗？',
        phoneticGuide: 'nǐ shì měi-guó rén ma? (Para mexicanos: "ni shi mei-guo ren ma")',
        literalBreakdown: '[你 = Tú] + [是 = Eres] + [美国 = Estados Unidos] + [人 = Persona] + [吗 = ?]',
        naturalSpanish: '¿Eres estadounidense?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          glueParticleOrLabel: '是 (Eres) ... 吗 (Pregunta)',
          objectOrModifier: '美国人 (Estadounidense)',
          finalResult: '你是美国人吗？'
        },
        academicNote: 'Dra. Li Wei: Diálogo 3 de la página 035 de tu libro HSK 1. 美国 (Měiguó) significa literalmente "País Hermoso".',
        audioText: '你是美国人吗'
      },
      {
        id: 15,
        original: '你叫什么名字？',
        phoneticGuide: 'nǐ jiào shén-me míng-zi? (Para mexicanos: "ni yiao shen-me ming-dzi")',
        literalBreakdown: '[你 = Tú] + [叫 = Llamarse] + [什么 = Qué] + [名字 = Nombre]',
        naturalSpanish: '¿Cómo te llamas? / ¿Cuál es tu nombre?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          verbOrAction: '叫 (Llamarse)',
          glueParticleOrLabel: '什么名字 (Qué nombre)',
          finalResult: '你叫什么名字？'
        },
        academicNote: 'Dra. Li Wei: Lección 3, página 034 del libro HSK. En chino los pronombres interrogativos como 什么 no se colocan al inicio: se quedan en el lugar que ocuparía la respuesta.',
        audioText: '你叫什么名字'
      },
      {
        id: 16,
        original: '我叫李月',
        phoneticGuide: 'wǒ jiào lǐ yuè (Para mexicanos: "wo yiao li yüe")',
        literalBreakdown: '[我 = Yo] + [叫 = Me llamo] + [李 = Apellido Li (Ciruelo)] + [月 = Nombre Yue (Luna)]',
        naturalSpanish: 'Me llamo Li Yue',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          verbOrAction: '叫 (Me llamo)',
          objectOrModifier: '李月 (Nombre propio)',
          finalResult: '我叫李月'
        },
        academicNote: 'Dra. Li Wei: El nombre del personaje principal de tu libro HSK 1. En la cultura china el apellido siempre precede al nombre de pila.',
        audioText: '我叫李月'
      }
    ],
    // EXACTLY 20 DETAILED INTERACTIVE EXERCISES
    exercises20: [
      {
        id: 1,
        type: 'tone-sandhi',
        question: 'En el saludo 你好, las palabras 你 (nǐ) y 好 (hǎo) son ambas de 3er tono. ¿Cómo se pronuncia en la vida real según la regla de sandhi?',
        targetWordOrPhrase: '你好 (nǐ hǎo)',
        hintForMexicanStudents: 'Recuerda: la garganta no soporta dos caídas de 3er tono seguidas. La primera sílaba sube.',
        options: ['ní hǎo (2do tono + 3er tono)', 'nǐ hǎo (dos 3ros tonos marcados con pausa rígida)', 'nì hào (dos 4tos tonos secos)'],
        correctAnswer: 'ní hǎo (2do tono + 3er tono)',
        explanation: '¡Exacto! Regla de sandhi: 3 + 3 se transforma automáticamente a 2 + 3.',
        academicInsight: 'Dra. Li Wei: Esta es la clave número uno para sonar como un nativo de Beijing desde el día 1.',
        audioPrompt: '你好'
      },
      {
        id: 2,
        type: 'tone-sandhi',
        question: 'La palabra 不 (bù) es originalmente de 4to tono. Al decir "No es" (不是 bù + shì), ¿qué tono adquiere 不?',
        targetWordOrPhrase: '不是',
        hintForMexicanStudents: 'Delante de otro 4to tono (como shì), 不 no quiere chocar.',
        options: ['bú shì (segundo tono ascendente)', 'bù shì (mantiene el cuarto tono seco)', 'bǔ shì (tercer tono)'],
        correctAnswer: 'bú shì (segundo tono ascendente)',
        explanation: '¡Brillante! Delante de cualquier 4to tono, 不 cambia obligatoriamente a 2do tono (bú shì, bú kèqi).',
        academicInsight: 'Dra. Li Wei: Así lo indica la regla oficial en la página 028 y 035 de tu libro HSK 1.',
        audioPrompt: '不是'
      },
      {
        id: 3,
        type: 'stroke-identify',
        question: 'En la página 026 del libro HSK 1, ¿cómo se llama el trazo horizontal básico presente en el número 一 (uno)?',
        targetWordOrPhrase: '横 (héng)',
        hintForMexicanStudents: 'Es una línea horizontal que se traza de izquierda a derecha.',
        options: ['横 (héng - horizontal)', '竖 (shù - vertical)', '点 (diǎn - punto)', '撇 (piě - diagonal izquierda)'],
        correctAnswer: '横 (héng - horizontal)',
        explanation: 'Correcto. 横 (héng) es la línea horizontal que sienta las bases de la caligrafía china.',
        academicInsight: 'Dra. Li Wei: Se traza firmemente de izquierda a derecha con una pequeña presión final.',
        audioPrompt: '横'
      },
      {
        id: 4,
        type: 'stroke-identify',
        question: 'En la página 032 del libro HSK 1, ¿cuál es el origen pictográfico del carácter 口 (kǒu)?',
        targetWordOrPhrase: '口 (kǒu)',
        hintForMexicanStudents: 'Representa una parte de la cara que se abre para comer y hablar.',
        options: ['Una boca humana abierta', 'Una ventana cuadrada', 'Un cofre de monedas', 'Un ojo cerrado'],
        correctAnswer: 'Una boca humana abierta',
        explanation: 'Correcto. 口 es el dibujo esquemático de una boca humana abierta.',
        academicInsight: 'Dra. Li Wei: Da origen a palabras como 吃 (comer) y 叫 (llamarse).',
        audioPrompt: '口'
      },
      {
        id: 5,
        type: 'particle-select',
        question: 'Para convertir la afirmación "我是学生" (Soy estudiante) en la pregunta "¿Eres estudiante?", ¿qué etiqueta añadimos al final?',
        targetWordOrPhrase: '吗 (ma)',
        hintForMexicanStudents: 'Es la partícula de pregunta de sí/no sin tono (neutra).',
        options: ['你是学生吗？', '你是学生不？', '你是学生什么？', '学生你是吗？'],
        correctAnswer: '你是学生吗？',
        explanation: '¡Correcto! En chino basta con cambiar "yo" (我) por "tú" (你) y añadir 吗 al final de la oración.',
        academicInsight: 'Dra. Li Wei: Gramática anatómica de la página 036 de tu libro.',
        audioPrompt: '你是学生吗'
      },
      {
        id: 6,
        type: 'sentence-build',
        question: '¿Cómo se dice en chino "Yo soy maestro/a"?',
        hintForMexicanStudents: 'Sujeto [我] + Cópula ser [是] + Profesión [老师].',
        options: ['我是老师', '我老师是', '老师是我', '是老师我'],
        correctAnswer: '我是老师',
        explanation: '¡Perfecto! Estructura anatómica: [我 (Yo)] + [是 (Soy)] + [老师 (Profesor)].',
        academicInsight: 'Dra. Li Wei: El orden Sujeto + Verbo + Objeto es idéntico al español.',
        audioPrompt: '我是老师'
      },
      {
        id: 7,
        type: 'particle-select',
        question: '¿Cómo se dice formalmente "De nada" en respuesta a 谢谢 (Gracias)?',
        targetWordOrPhrase: '不客气 (bú kèqi)',
        hintForMexicanStudents: 'Página 028 de tu libro HSK 1.',
        options: ['不客气 (bú kèqi)', '对不起 (duìbuqǐ)', '再见 (zàijiàn)', '没关系 (méi guānxi)'],
        correctAnswer: '不客气 (bú kèqi)',
        explanation: 'Correcto. 不客气 significa literalmente "No seas tan ceremonioso/cortés".',
        academicInsight: 'Dra. Li Wei: Observa el sandhi tonal: bú kèqi.',
        audioPrompt: '不客气'
      },
      {
        id: 8,
        type: 'batchim-detector',
        question: 'En la palabra 再见 (zàijiàn - adiós), ¿cuál es el significado literal del carácter 见 (jiàn)?',
        targetWordOrPhrase: '见 (jiàn)',
        hintForMexicanStudents: 'Página 032 de tu libro: representa un ojo sobre piernas.',
        options: ['Encontrarse / Ver a alguien', 'Despedida para siempre', 'Caminar rápido', 'Dormir'],
        correctAnswer: 'Encontrarse / Ver a alguien',
        explanation: 'Correcto. 再 (otra vez) + 见 (vernos) = "Hasta que nos volvamos a ver".',
        academicInsight: 'Dra. Li Wei: En China despedirse es la promesa de un reencuentro.',
        audioPrompt: '再见'
      },
      {
        id: 9,
        type: 'sentence-build',
        question: '¿Cómo dices "Yo soy mexicano/a" en chino mandarín?',
        hintForMexicanStudents: 'País: 墨西哥 (Mòxīgē) + Persona: 人 (rén).',
        options: ['我是墨西哥人', '我墨西哥是人', '墨西哥人是我', '我是人墨西哥'],
        correctAnswer: '我是墨西哥人',
        explanation: '¡Excelente! [我 (Yo)] + [是 (Soy)] + [墨西哥人 (Mexicano)].',
        academicInsight: 'Dra. Li Wei: Mòxīgē rén: pronunciado con orgullo.',
        audioPrompt: '我是墨西哥人'
      },
      {
        id: 10,
        type: 'particle-select',
        question: 'En el saludo 您好 (nín hǎo), ¿cuándo se debe preferir 您 en vez de 你?',
        targetWordOrPhrase: '您 (nín)',
        hintForMexicanStudents: 'Lleva el corazón (心) abajo para mostrar máximo respeto.',
        options: ['Con profesores, adultos mayores y en situaciones de alta cortesía', 'Solo con niños pequeños', 'Únicamente cuando estás enojado', 'Con amigos íntimos de fiesta'],
        correctAnswer: 'Con profesores, adultos mayores y en situaciones de alta cortesía',
        explanation: 'Correcto. 您 es el pronombre "Usted" que honra al interlocutor.',
        academicInsight: 'Dra. Li Wei: En Beijing es un signo esencial de buena educación.',
        audioPrompt: '您好'
      },
      {
        id: 11,
        type: 'stroke-identify',
        question: 'En la página 033 del libro HSK 1, ¿qué representa pictográficamente el carácter 山 (shān)?',
        targetWordOrPhrase: '山 (shān)',
        hintForMexicanStudents: 'Mira sus tres puntas verticales.',
        options: ['Tres picos de una montaña', 'Tres árboles alineados', 'Un tenedor antiguo', 'Un volcán en erupción'],
        correctAnswer: 'Tres picos de una montaña',
        explanation: 'Correcto. 山 es el dibujo directo de las cordilleras montañosas chinas.',
        academicInsight: 'Dra. Li Wei: El trazo central es el más alto, flanqueado por dos picos menores.',
        audioPrompt: '山'
      },
      {
        id: 12,
        type: 'stroke-identify',
        question: 'En el carácter 小 (xiǎo - pequeño), ¿cuál trazo se dibuja primero según las reglas caligráficas?',
        targetWordOrPhrase: '小 (xiǎo)',
        hintForMexicanStudents: 'Regla del centro simétrico de la página 033.',
        options: ['Primero el trazo vertical central con gancho (竖钩)', 'Primero el punto de la izquierda', 'Primero el punto de la derecha', 'Da igual el orden'],
        correctAnswer: 'Primero el trazo vertical central con gancho (竖钩)',
        explanation: '¡Exacto! Regla caligráfica china: "Primero el centro y luego los costados simétricos".',
        academicInsight: 'Dra. Li Wei: Así se preserva el centro de gravedad del carácter.',
        audioPrompt: '小'
      },
      {
        id: 13,
        type: 'sentence-build',
        question: '¿Cómo le preguntas a alguien "¿Cuál es tu nombre?" en chino?',
        hintForMexicanStudents: 'Lección 3, página 034: 你 + 叫 + 什么名字？',
        options: ['你叫什么名字？', '什么名字你叫？', '你是名字什么？', '叫你名字吗？'],
        correctAnswer: '你叫什么名字？',
        explanation: '¡Brillante! [你 (Tú)] + [叫 (te llamas)] + [什么名字 (qué nombre)].',
        academicInsight: 'Dra. Li Wei: El pronombre interrogativo 什么 se queda donde irá la respuesta.',
        audioPrompt: '你叫什么名字'
      },
      {
        id: 14,
        type: 'particle-select',
        question: 'En la página 030 de tu libro HSK 1, la segunda sílaba de 妈妈 (māma) no lleva tilde. ¿Cómo se llama este tono?',
        targetWordOrPhrase: '轻声 (qīngshēng)',
        hintForMexicanStudents: 'Es un tono ligero, breve y sin tensión muscular.',
        options: ['Tono Neutro (轻声)', 'Cuarto tono', 'Tercer tono', 'Segundo tono'],
        correctAnswer: 'Tono Neutro (轻声)',
        explanation: 'Correcto. El tono neutro descansa suavemente tras la primera sílaba tónica.',
        academicInsight: 'Dra. Li Wei: māma, bàba, yéye, nǎinai... todas las palabras de familia llevan tono neutro.',
        audioPrompt: '妈妈'
      },
      {
        id: 15,
        type: 'particle-select',
        question: '¿Qué significa 中国 (Zhōngguó) literalmente en la historia china?',
        targetWordOrPhrase: '中国 (Zhōngguó)',
        hintForMexicanStudents: '中 significa "centro / medio" y 国 significa "país / reino".',
        options: ['El Reino o País del Centro', 'La Gran Muralla', 'Tierra de dragones', 'El País de la Seda'],
        correctAnswer: 'El Reino o País del Centro',
        explanation: 'Correcto. Los antiguos chinos concebían su civilización en el centro geográfico del mundo conocido.',
        academicInsight: 'Dra. Li Wei: 中 representa una flecha atravesando el centro exacto de una diana.',
        audioPrompt: '中国'
      },
      {
        id: 16,
        type: 'slang-match',
        question: 'En el internet de China (WeChat, Douyin, Bilibili), ¿qué significa el famoso acrónimo "yyds"?',
        targetWordOrPhrase: 'yyds (永远的神 - yǒngyuǎn de shén)',
        hintForMexicanStudents: 'Equivalente en México a: "¡Es el GOAT! / ¡Es un dios absoluto! / ¡Qué chingón!"',
        options: ['¡Es un dios absoluto / El más grande de todos los tiempos (GOAT)!', 'Tengo mucho sueño', 'No quiero trabajar hoy', 'Por favor mándame dinero'],
        correctAnswer: '¡Es un dios absoluto / El más grande de todos los tiempos (GOAT)!',
        explanation: '¡Totalmente! yyds viene de "Yǒng Yuǎn De Shén" (Dios para siempre). Se usa cuando algo o alguien es insuperable.',
        academicInsight: 'Dra. Li Wei: Si ves a un atleta o una comida deliciosa, los jóvenes en China gritan: ¡yyds!',
        audioPrompt: '永远的神'
      },
      {
        id: 17,
        type: 'slang-match',
        question: '¿Qué significa la expresión viral de los jóvenes chinos "摆烂" (bǎi làn)?',
        targetWordOrPhrase: '摆烂 (bǎi làn)',
        hintForMexicanStudents: 'Literal: "Dejar que se pudra". En México equivale a: "Tirar la toalla / me vale queso".',
        options: ['Tirar la toalla / Dejar que las cosas caigan por su propio peso sin estresarse', 'Cocinar comida podrida', 'Ponerse a estudiar toda la noche', 'Ir de compras al centro comercial'],
        correctAnswer: 'Tirar la toalla / Dejar que las cosas caigan por su propio peso sin estresarse',
        explanation: 'Correcto. bǎi làn describe la actitud juvenil de relajarse y no exigirse perfeccionismo extremo.',
        academicInsight: 'Dra. Li Wei: Refleja un fenómeno sociológico contemporáneo de China.',
        audioPrompt: '摆烂'
      },
      {
        id: 18,
        type: 'slang-match',
        question: 'En Beijing, la gente añade el sonido "ér" (儿化音) al final de muchas palabras. ¿Cómo dicen "Aquí" (这儿)?',
        targetWordOrPhrase: '这儿 (zhèr)',
        hintForMexicanStudents: 'En vez de zhèlǐ, los nativos de Beijing enrollan la lengua con un toque simpático.',
        options: ['zhèr (con la lengua enrollada al paladar)', 'zhè-rén (dos palabras separadas)', 'zhèlǐ (forma formal sin acento pekinés)', 'zhè-ma'],
        correctAnswer: 'zhèr (con la lengua enrollada al paladar)',
        explanation: '¡Exacto! El rhotacismo de Beijing (儿化音) es el sello de autenticidad de la capital.',
        academicInsight: 'Dra. Li Wei: Como nativa de Beijing, ¡te aseguro que el érhuà le da un calor humano inigualable a la charla!',
        audioPrompt: '这儿'
      },
      {
        id: 19,
        type: 'tone-sandhi',
        question: '¿Cómo se pronuncia la frase "Yo tampoco soy" (我也不 wǒ yě bù)?',
        targetWordOrPhrase: '我也不',
        hintForMexicanStudents: '我 (3º) + 也 (3º): sandhi entre dos terceros tonos.',
        options: ['wó yě bù (2º + 3º + 4º)', 'wǒ yě bù (sin cambio)', 'wò yè bù'],
        correctAnswer: 'wó yě bù (2º + 3º + 4º)',
        explanation: 'Correcto. El primer 3er tono (我) se pronuncia como 2do tono ascendente (wó).',
        academicInsight: 'Dra. Li Wei: Aplicación avanzada de la regla de sandhi que aprendiste hoy.',
        audioPrompt: '我也不'
      },
      {
        id: 20,
        type: 'particle-select',
        question: 'En la página 034 de tu libro HSK 1, ¿cómo responde Li Yue cuando le preguntan "¿Eres china?"?',
        targetWordOrPhrase: '我是中国人',
        hintForMexicanStudents: 'Respuesta afirmativa de identidad.',
        options: ['我是中国人 (Wǒ shì Zhōngguó rén)', '我不是中国人', '我是美国人', '他是学生'],
        correctAnswer: '我是中国人 (Wǒ shì Zhōngguó rén)',
        explanation: '¡Brillante! Li Yue responde con orgullo: "我是中国人" (Yo soy china).',
        academicInsight: 'Dra. Li Wei: Has completado los 20 ejercicios atómicos con un desempeño de cátedra universitaria. ¡恭喜大家 (Gōngxǐ)!',
        audioPrompt: '我是中国人'
      }
    ],
    regionalSlang: [
      {
        term: 'yyds (永远的神)',
        phonetic: 'yǒng-yuǎn de shén',
        literal: 'Dios por siempre jamás / Inmortal',
        meaning: 'Lo máximo, insuperable, el GOAT de una categoría.',
        regionOrContext: 'WeChat / Douyin / Bilibili / Toda China juvenil',
        mexicanEquivalent: 'Equivalente mexicano: "¡Es el mero mero! / ¡Qué chingonería! / ¡No tiene madre!"',
        exampleDialogue: {
          dialogue: 'A: 这家麻辣烫太好吃了！ B: 简直是 yyds！',
          spanish: 'A: ¡Esta sopa picante está brutal! B: ¡Definitivamente es el GOAT, insuperable!'
        }
      },
      {
        term: '绝绝子 (Juéjuézi)',
        phonetic: 'yüe-yüe-dz',
        literal: 'Extremadamente extraordinario / súper tope',
        meaning: 'Se usa para expresar asombro estético, belleza o exquisitez suprema.',
        regionOrContext: 'Xiaohongshu (RED) & Moda de Shanghai y Beijing',
        mexicanEquivalent: 'Equivalente mexicano: "¡Está perrísimo! / ¡Quedó padrísimo!"',
        exampleDialogue: {
          dialogue: '今天的晚霞绝绝子！',
          spanish: '¡El atardecer de hoy quedó perrísimo, una maravilla!'
        }
      },
      {
        term: '摸鱼 (Mō yú)',
        phonetic: 'muo-yü',
        literal: 'Atrapar peces en aguas turbias',
        meaning: 'Hacerse pato en el trabajo o escuela fingiendo que estás ocupado cuando en realidad estás descansando.',
        regionOrContext: 'Cultura laboral y universitaria en China urbana',
        mexicanEquivalent: 'Equivalente mexicano: "Hacerse pato / hacerse güey en la chamba"',
        exampleDialogue: {
          dialogue: '老板不在，我们稍微摸个鱼吧。',
          spanish: 'El jefe no está, hay que hacernos patos un ratito.'
        }
      },
      {
        term: '哪儿 / 这儿 (Nǎr / Zhèr)',
        phonetic: 'nar / dzher (Beijing érhuà)',
        literal: '¿Dónde? / Aquí (con rhotacismo de Beijing)',
        meaning: 'Forma auténtica y callejera de la capital para indicar lugar con la lengua enrollada.',
        regionOrContext: 'Dialecto pekinés (北京话儿化音)',
        mexicanEquivalent: 'Equivalente mexicano: El "¡Cámara!" o "¡Simón!" de la CDMX',
        exampleDialogue: {
          dialogue: 'A: 你去哪儿？ B: 我在这儿呢！',
          spanish: 'A: ¿A dónde vas? B: ¡Aquí ando, compa!'
        }
      }
    ],
    relatedHskPages: ['025', '026', '028', '029', '030', '031', '032', '033', '034', '035', '036', '037']
  },

  // ==========================================
  // KOREAN LESSON 2: -이에요 / -예요 & Caída de -다
  // ==========================================
  {
    id: 'korean-2',
    language: 'korean',
    lessonCode: 'LECCIÓN 1.2 - COREANO',
    title: 'El Verbo Copulativo Ser (-이에요 / -예요) y la Caída de -다',
    nativeTitle: '서술격 조사 이다 (-이에요 / -예요)',
    subtitle: 'Aprende a decir "Soy / Es / Somos" con el respeto cortés informal de Seúl y la caída del diccionario',
    levelBadge: 'Nivel 0.2: Cópula & Raíz Verbal',
    professorIntro: {
      professorName: 'Dra. Min-ji Park (Universidad Nacional de Seúl)',
      academicMessage: '¡Bienvenidos a la lección 1.2! Hoy develaremos el misterio de los verbos coreanos. En los diccionarios, todos los verbos terminan en "-다" (como 이다 = ser, 가다 = ir, 먹다 = comer). Pero ¡OJO!: ningún coreano habla con "-다" en la vida real. Primero tenemos que "cortarle la cabeza" a esa -다 y pegar la terminación de respeto.',
      mexicanLearningTip: 'En México no dices "Yo ser Juan", dices "Yo soy Juan". En coreano le quitamos el "-다" a "이다" (ser) y según si tu sustantivo tiene piso o no, le pegamos "-이에요" o "-예요".'
    },
    foundationRule: {
      headline: 'La Fórmula Anatómica de Ser: -이에요 vs -예요',
      subheadline: 'Regla del Piso aplicada al verbo ser en estilo cortés educado (해요체)',
      ruleLeft: {
        label: '🌸 Sin Piso (Termina en Vocal)',
        condition: 'El sustantivo que colocas antes del verbo termina en vocal (sin 받침).',
        indicator: 'Se pega: -예요 (ye-yo)',
        why: 'Como termina en vocal, se fusiona directo en dos sílabas suaves: -예요.',
        color: 'magenta',
        sample: '친구 (Amigo) + 예요 → 친구예요 (Es un amigo)'
      },
      ruleRight: {
        label: '🧱 Con Piso (Termina en Consonante)',
        condition: 'El sustantivo que colocas antes del verbo termina en consonante (con 받침).',
        indicator: 'Se pega: -이에요 (i-e-yo)',
        why: 'La vocal 이 actúa como puente amortiguador para que la consonante del piso ruede suavemente.',
        color: 'cyan',
        sample: '학생 (Estudiante) + 이에요 → 학생이에요 (Soy/es estudiante)'
      },
      anatomyBreakdown: {
        title: 'Desglose Anatómico de la Caída de la Raíz -다',
        whatToRemove: 'Se retira obligatoriamente la terminación de diccionario "-다".',
        whereFrom: 'Del final del verbo en infinitivo (이다 -> queda la raíz 이-).',
        whyRemove: 'Porque "-다" solo existe en el papel y el diccionario; en la conversación viva suena frío e impersonal.',
        whenRemove: 'Siempre, cada vez que vayas a hablar o escribir una frase real.',
        whatToGlue: 'Pega "-이에요" si el sustantivo previo tiene piso (받침); pega "-예요" si no tiene piso.',
        whyGlue: 'Para sonar educado, cálido y natural ante cualquier persona en Corea.'
      }
    },
    examples16: [
      {
        id: 1,
        original: '저는 학생이에요',
        phoneticGuide: 'chŏ-nŭn hak-saeng-i-e-yo (Para mexicanos: "cho-nún jak-seng-i-e-yo")',
        literalBreakdown: '[저 = Yo] + [는 = Tema sin piso] + [학생 = Estudiante (con piso ㅇ)] + [이에요 = Soy (con piso)]',
        naturalSpanish: 'Yo soy estudiante',
        deconstruction: {
          subjectOrPerson: '저 (Yo)',
          glueParticleOrLabel: '는 (Tema)',
          objectOrModifier: '학생 (Estudiante)',
          verbOrAction: '이에요 (Soy)',
          whatIsRemoved: '-다 del infinitivo 이다',
          whatIsGlued: '이에요 porque 학생 termina en la consonante piso ㅇ',
          finalResult: '저는 학생이에요'
        },
        academicNote: 'Dra. Min-ji Park: La oración arquetípica para presentarte en la universidad o en el trabajo en Seúl.',
        audioText: '저는 학생이에요'
      },
      {
        id: 2,
        original: '이것은 책이에요',
        phoneticGuide: 'i-gŏ-sŭn ch’ae-gi-e-yo (Para mexicanos: "i-go-sún che-gui-e-yo")',
        literalBreakdown: '[이것 = Esto] + [은 = Tema con piso] + [책 = Libro] + [이에요 = Es]',
        naturalSpanish: 'Esto es un libro',
        deconstruction: {
          subjectOrPerson: '이것 (Esto)',
          glueParticleOrLabel: '은 (Tema con piso)',
          objectOrModifier: '책 (Libro - tiene piso ㄱ)',
          verbOrAction: '이에요 (Es)',
          finalResult: '이것은 책이에요'
        },
        academicNote: 'Dra. Min-ji Park: La consonante ㄱ de 책 sube a la vocal 이, sonando [채기에요 chae-gi-e-yo].',
        audioText: '이것은 책이에요'
      },
      {
        id: 3,
        original: '친구예요',
        phoneticGuide: 'ch’in-gu-ye-yo (Para mexicanos: "chin-gu-ye-yo")',
        literalBreakdown: '[친구 = Amigo (termina en vocal ㅜ)] + [예요 = Es (sin piso)]',
        naturalSpanish: 'Es un amigo / Es mi amiga',
        deconstruction: {
          subjectOrPerson: '친구 (Amigo)',
          verbOrAction: '예요 (Es)',
          whatIsGlued: '예요 porque 친구 no tiene piso',
          finalResult: '친구예요'
        },
        academicNote: 'Dra. Min-ji Park: En coreano se suele omitir el pronombre "él" o "ella" si el contexto ya es obvio.',
        audioText: '친구예요'
      },
      {
        id: 4,
        original: '사과예요',
        phoneticGuide: 'sa-gwa-ye-yo (Para mexicanos: "sa-gua-ye-yo")',
        literalBreakdown: '[사과 = Manzana] + [예요 = Es]',
        naturalSpanish: 'Es una manzana',
        deconstruction: {
          subjectOrPerson: '사과 (Manzana)',
          verbOrAction: '예요 (Es)',
          finalResult: '사과예요'
        },
        academicNote: 'Dra. Min-ji Park: 사과 termina en vocal ㅘ, por lo tanto se pega directamente -예요.',
        audioText: '사과예요'
      },
      {
        id: 5,
        original: '의사예요',
        phoneticGuide: 'ŭi-sa-ye-yo (Para mexicanos: "ui-sa-ye-yo")',
        literalBreakdown: '[의사 = Médico / Doctor] + [예요 = Es/Soy]',
        naturalSpanish: 'Es médico / Soy médico',
        deconstruction: {
          subjectOrPerson: '의사 (Médico)',
          verbOrAction: '예요 (Es)',
          finalResult: '의사예요'
        },
        academicNote: 'Dra. Min-ji Park: 의사 termina en vocal ㅏ (sin piso).',
        audioText: '의사예요'
      },
      {
        id: 6,
        original: '선생님이에요',
        phoneticGuide: 'sŏn-saeng-ni-mi-e-yo (Para mexicanos: "son-seng-ni-mi-e-yo")',
        literalBreakdown: '[선생님 = Profesor honorable (con piso ㅁ)] + [이에요 = Es/Soy]',
        naturalSpanish: 'Es profesor / Soy maestro',
        deconstruction: {
          subjectOrPerson: '선생님 (Profesor)',
          verbOrAction: '이에요 (Es)',
          finalResult: '선생님이에요'
        },
        academicNote: 'Dra. Min-ji Park: 선생님 tiene piso ㅁ, así que se pronuncia ligado: [선생니미에요].',
        audioText: '선생님이에요'
      },
      {
        id: 7,
        original: '한국 사람이에요',
        phoneticGuide: 'han-guk sa-ra-mi-e-yo (Para mexicanos: "jan-guk sa-ra-mi-e-yo")',
        literalBreakdown: '[한국 = Corea] + [사람 = Persona (con piso ㅁ)] + [이에요 = Es/Soy]',
        naturalSpanish: 'Soy coreano / Es coreana',
        deconstruction: {
          subjectOrPerson: '한국 사람 (Persona coreana)',
          verbOrAction: '이에요 (Es/Soy)',
          finalResult: '한국 사람이에요'
        },
        academicNote: 'Dra. Min-ji Park: La fórmula de nacionalidad en coreano: [País] + 사람 + 이에요.',
        audioText: '한국 사람이에요'
      },
      {
        id: 8,
        original: '멕시코 사람이에요',
        phoneticGuide: 'mek-si-k’o sa-ra-mi-e-yo (Para mexicanos: "mek-si-co sa-ra-mi-e-yo")',
        literalBreakdown: '[멕시코 = México] + [사람 = Persona] + [이에요 = Soy/Es]',
        naturalSpanish: 'Soy mexicano/a',
        deconstruction: {
          subjectOrPerson: '멕시코 사람 (Mexicano)',
          verbOrAction: '이에요 (Soy)',
          finalResult: '멕시코 사람이에요'
        },
        academicNote: 'Dra. Min-ji Park: ¡Esta es la frase estrella que dirás cuando pises el aeropuerto de Incheon!',
        audioText: '멕시코 사람이에요'
      },
      {
        id: 9,
        original: '가수예요',
        phoneticGuide: 'ka-su-ye-yo (Para mexicanos: "ga-su-ye-yo")',
        literalBreakdown: '[가수 = Cantante / Ídolo de K-pop] + [예요 = Es/Soy]',
        naturalSpanish: 'Es cantante',
        deconstruction: {
          subjectOrPerson: '가수 (Cantante)',
          verbOrAction: '예요 (Es)',
          finalResult: '가수예요'
        },
        academicNote: 'Dra. Min-ji Park: 가수 termina en vocal ㅜ (sin piso), por lo que lleva -예요.',
        audioText: '가수예요'
      },
      {
        id: 10,
        original: '물이에요',
        phoneticGuide: 'mu-ri-e-yo (Para mexicanos: "mu-ri-e-yo")',
        literalBreakdown: '[물 = Agua (con piso ㄹ)] + [이에요 = Es]',
        naturalSpanish: 'Es agua',
        deconstruction: {
          subjectOrPerson: '물 (Agua)',
          verbOrAction: '이에요 (Es)',
          finalResult: '물이에요 [무리에요]'
        },
        academicNote: 'Dra. Min-ji Park: La ㄹ rueda hacia la vocal 이 sonando como una suave "r" mexicana.',
        audioText: '물이에요'
      },
      {
        id: 11,
        original: '집이에요',
        phoneticGuide: 'chi-bi-e-yo (Para mexicanos: "yi-bi-e-yo")',
        literalBreakdown: '[집 = Casa / Hogar (con piso ㅂ)] + [이에요 = Es/Estoy en]',
        naturalSpanish: 'Es mi casa / Estoy en casa',
        deconstruction: {
          subjectOrPerson: '집 (Casa)',
          verbOrAction: '이에요 (Es)',
          finalResult: '집이에요 [지비에요]'
        },
        academicNote: 'Dra. Min-ji Park: La ㅂ en el piso pasa a sonar como "b" suave: [지비에요].',
        audioText: '집이에요'
      },
      {
        id: 12,
        original: '고양이예요',
        phoneticGuide: 'ko-yang-i-ye-yo (Para mexicanos: "go-yang-i-ye-yo")',
        literalBreakdown: '[고양이 = Gato (termina en vocal ㅣ)] + [예요 = Es]',
        naturalSpanish: 'Es un gato',
        deconstruction: {
          subjectOrPerson: '고양이 (Gato)',
          verbOrAction: '예요 (Es)',
          finalResult: '고양이예요'
        },
        academicNote: 'Dra. Min-ji Park: En Seúl hay cientos de "Cat Cafés" (고양이 카페).',
        audioText: '고양이예요'
      },
      {
        id: 13,
        original: '강아지예요',
        phoneticGuide: 'kang-a-ji-ye-yo (Para mexicanos: "gang-a-yi-ye-yo")',
        literalBreakdown: '[강아지 = Perrito/Cachorro (termina en vocal ㅣ)] + [예요 = Es]',
        naturalSpanish: 'Es un perrito',
        deconstruction: {
          subjectOrPerson: '강아지 (Perrito)',
          verbOrAction: '예요 (Es)',
          finalResult: '강아지예요'
        },
        academicNote: 'Dra. Min-ji Park: 강아지 se usa con inmenso cariño para los cachorros.',
        audioText: '강아지예요'
      },
      {
        id: 14,
        original: '가방이에요',
        phoneticGuide: 'ka-bang-i-e-yo (Para mexicanos: "ga-bang-i-e-yo")',
        literalBreakdown: '[가방 = Bolso / Mochila (con piso ㅇ)] + [이에요 = Es]',
        naturalSpanish: 'Es una mochila / Es un bolso',
        deconstruction: {
          subjectOrPerson: '가방 (Mochila)',
          verbOrAction: '이에요 (Es)',
          finalResult: '가방이에요'
        },
        academicNote: 'Dra. Min-ji Park: 방 termina en consonante piso ㅇ (ng), por lo que lleva -이에요.',
        audioText: '가방이에요'
      },
      {
        id: 15,
        original: '안경이에요',
        phoneticGuide: 'an-gyŏng-i-e-yo (Para mexicanos: "an-gyong-i-e-yo")',
        literalBreakdown: '[안경 = Lentes / Gafas (con piso ㅇ)] + [이에요 = Son]',
        naturalSpanish: 'Son lentes / Son gafas',
        deconstruction: {
          subjectOrPerson: '안경 (Lentes)',
          verbOrAction: '이에요 (Son)',
          finalResult: '안경이에요'
        },
        academicNote: 'Dra. Min-ji Park: En coreano no hay distinción de plural para "son" o "es"; 이에요 sirve para ambos.',
        audioText: '안경이에요'
      },
      {
        id: 16,
        original: '누구예요?',
        phoneticGuide: 'nu-gu-ye-yo? (Para mexicanos: "nu-gu-ye-yo")',
        literalBreakdown: '[누구 = Quién (termina en vocal ㅜ)] + [예요 = Es] + [? = Entonación ascendente]',
        naturalSpanish: '¿Quién es?',
        deconstruction: {
          subjectOrPerson: '누구 (Quién)',
          verbOrAction: '예요 (Es)',
          finalResult: '누구예요?'
        },
        academicNote: 'Dra. Min-ji Park: Al entonar hacia arriba al final, la afirmación se convierte instantáneamente en pregunta.',
        audioText: '누구예요'
      }
    ],
    exercises20: [
      {
        id: 1,
        type: 'particle-select',
        question: '¿Qué terminación del verbo ser le corresponde a la palabra 친구 (Amigo)?',
        targetWordOrPhrase: '친구 (chingu)',
        hintForMexicanStudents: '구 termina en la vocal u (sin piso inferior).',
        options: ['친구예요', '친구이에요'],
        correctAnswer: '친구예요',
        explanation: 'Correcto. Al no tener consonante en el piso, se pega -예요.',
        academicInsight: 'Dra. Min-ji Park: chingu-yeyo fluye con elegancia.',
        audioPrompt: '친구예요'
      },
      {
        id: 2,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 학생 (Estudiante)?',
        targetWordOrPhrase: '학생 (haksaeng)',
        hintForMexicanStudents: '생 termina en la consonante piso ㅇ.',
        options: ['학생이에요', '학생예요'],
        correctAnswer: '학생이에요',
        explanation: 'Correcto. 생 tiene consonante piso ㅇ, por lo que requiere -이에요.',
        academicInsight: 'Dra. Min-ji Park: hak-saeng-i-e-yo.',
        audioPrompt: '학생이에요'
      },
      {
        id: 3,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 물 (Agua)?',
        targetWordOrPhrase: '물 (mul)',
        hintForMexicanStudents: '물 termina en la consonante piso ㄹ.',
        options: ['물이에요', '물예요'],
        correctAnswer: '물이에요',
        explanation: 'Correcto. 물 tiene piso ㄹ, así que recibe -이에요 y se lee [무리에요].',
        academicInsight: 'Dra. Min-ji Park: La ㄹ se une a la vocal 이.',
        audioPrompt: '물이에요'
      },
      {
        id: 4,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 사과 (Manzana)?',
        targetWordOrPhrase: '사과 (sagwa)',
        hintForMexicanStudents: '과 termina en vocal (sin piso).',
        options: ['사과예요', '사과이에요'],
        correctAnswer: '사과예요',
        explanation: 'Correcto. 사과 termina en vocal, por lo que lleva -예요.',
        academicInsight: 'Dra. Min-ji Park: sa-gwa-ye-yo.',
        audioPrompt: '사과예요'
      },
      {
        id: 5,
        type: 'batchim-detector',
        question: '¿Por qué se retira la terminación "-다" de verbos como "이다" al conjugar?',
        hintForMexicanStudents: 'Piensa en los infinitivos del español: comer, ser, vivir.',
        options: ['Porque "-다" solo sirve de etiqueta de diccionario y no se usa al hablar', 'Porque es una falta de ortografía', 'Solo se quita los domingos', 'Porque cambia de significado'],
        correctAnswer: 'Porque "-다" solo sirve de etiqueta de diccionario y no se usa al hablar',
        explanation: '¡Exacto! "-다" es el sello formal de infinitivo del diccionario.',
        academicInsight: 'Dra. Min-ji Park: Para hablar en la vida real, siempre se quita -다 y se pega la terminación adecuada.',
        audioPrompt: '이다'
      },
      {
        id: 6,
        type: 'sentence-build',
        question: '¿Cómo ensamblas: "Yo + soy + mexicano/a"?',
        hintForMexicanStudents: '저 (Yo) + 는 (etiqueta tema) + 멕시코 사람 (mexicano) + 이에요 (soy).',
        options: ['저는 멕시코 사람이에요', '저는 이에요 멕시코 사람', '멕시코 사람 저는 이에요', '사람 멕시코는 저예요'],
        correctAnswer: '저는 멕시코 사람이에요',
        explanation: '¡Magnífico! [저는] + [멕시코 사람] + [이에요]. El verbo siempre cierra al final.',
        academicInsight: 'Dra. Min-ji Park: Pronunciación impecable de un estudiante de cátedra.',
        audioPrompt: '저는 멕시코 사람이에요'
      },
      {
        id: 7,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 의사 (Médico)?',
        targetWordOrPhrase: '의사 (uisa)',
        hintForMexicanStudents: '사 termina en vocal pura.',
        options: ['의사예요', '의사이에요'],
        correctAnswer: '의사예요',
        explanation: 'Correcto. 의사 termina en vocal, por lo tanto lleva -예요.',
        academicInsight: 'Dra. Min-ji Park: ui-sa-ye-yo.',
        audioPrompt: '의사예요'
      },
      {
        id: 8,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 선생님 (Profesor honorable)?',
        targetWordOrPhrase: '선생님 (seonsaengnim)',
        hintForMexicanStudents: '님 termina en la consonante piso ㅁ.',
        options: ['선생님이에요', '선생님예요'],
        correctAnswer: '선생님이에요',
        explanation: 'Correcto. Termina en consonante piso ㅁ, así que recibe -이에요 [선생니미에요].',
        academicInsight: 'Dra. Min-ji Park: Excelente aplicación fonética.',
        audioPrompt: '선생님이에요'
      },
      {
        id: 9,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 가수 (Cantante)?',
        targetWordOrPhrase: '가수 (gasu)',
        hintForMexicanStudents: '수 termina en vocal u, sin consonante abajo.',
        options: ['가수예요', '가수이에요'],
        correctAnswer: '가수예요',
        explanation: 'Correcto. 가수 termina en vocal, así que le corresponde -예요.',
        academicInsight: 'Dra. Min-ji Park: ga-su-ye-yo.',
        audioPrompt: '가수예요'
      },
      {
        id: 10,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 집 (Casa)?',
        targetWordOrPhrase: '집 (jip)',
        hintForMexicanStudents: '집 termina en la consonante piso ㅂ.',
        options: ['집이에요', '집예요'],
        correctAnswer: '집이에요',
        explanation: 'Correcto. Tiene consonante piso ㅂ, por lo tanto lleva -이에요 [지비에요].',
        academicInsight: 'Dra. Min-ji Park: ji-bi-e-yo.',
        audioPrompt: '집이에요'
      },
      {
        id: 11,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 고양이 (Gato)?',
        targetWordOrPhrase: '고양이 (goyangi)',
        hintForMexicanStudents: '이 termina en vocal i, sin consonante en el piso inferior.',
        options: ['고양이예요', '고양이이에요'],
        correctAnswer: '고양이예요',
        explanation: 'Correcto. La última sílaba 이 termina en vocal, por ende lleva -예요.',
        academicInsight: 'Dra. Min-ji Park: go-yang-i-ye-yo.',
        audioPrompt: '고양이예요'
      },
      {
        id: 12,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 가방 (Mochila / Bolso)?',
        targetWordOrPhrase: '가방 (gabang)',
        hintForMexicanStudents: '방 termina en consonante piso ㅇ.',
        options: ['가방이에요', '가방예요'],
        correctAnswer: '가방이에요',
        explanation: 'Correcto. 방 tiene consonante piso ㅇ, por lo que lleva -이에요.',
        academicInsight: 'Dra. Min-ji Park: ga-bang-i-e-yo.',
        audioPrompt: '가방이에요'
      },
      {
        id: 13,
        type: 'particle-select',
        question: '¿Cómo preguntas "¿Quién es?" en coreano de forma educada?',
        targetWordOrPhrase: '누구 (nugu - quién)',
        hintForMexicanStudents: '누구 termina en vocal u (sin piso) + entonación hacia arriba.',
        options: ['누구예요?', '누구이에요?', '누구는?', '누구은?'],
        correctAnswer: '누구예요?',
        explanation: 'Correcto. 누구 + 예요? = 누구예요? (¿Quién es?).',
        academicInsight: 'Dra. Min-ji Park: Frase esencial para contestar el timbre o el teléfono.',
        audioPrompt: '누구예요'
      },
      {
        id: 14,
        type: 'sentence-build',
        question: '¿Cómo ensamblas: "Esto + es + un libro"?',
        hintForMexicanStudents: '이것은 (Esto-tema) + 책 (libro) + 이에요 (es).',
        options: ['이것은 책이에요', '책이에요 이것은', '이것은 이에요 책', '책 이것은 이에요'],
        correctAnswer: '이것은 책이에요',
        explanation: '¡Exacto! [이것은] + [책이에요].',
        academicInsight: 'Dra. Min-ji Park: Orden natural inquebrantable.',
        audioPrompt: '이것은 책이에요'
      },
      {
        id: 15,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 강아지 (Perrito)?',
        targetWordOrPhrase: '강아지 (gangaji)',
        hintForMexicanStudents: '지 termina en vocal.',
        options: ['강아지예요', '강아지이에요'],
        correctAnswer: '강아지예요',
        explanation: 'Correcto. 강아지 termina en vocal, por lo que lleva -예요.',
        academicInsight: 'Dra. Min-ji Park: gang-a-ji-ye-yo.',
        audioPrompt: '강아지예요'
      },
      {
        id: 16,
        type: 'particle-select',
        question: '¿Qué terminación le corresponde a 안경 (Lentes/Gafas)?',
        targetWordOrPhrase: '안경 (angyeong)',
        hintForMexicanStudents: '경 termina en la consonante piso ㅇ.',
        options: ['안경이에요', '안경예요'],
        correctAnswer: '안경이에요',
        explanation: 'Correcto. 경 tiene piso ㅇ, por ende lleva -이에요.',
        academicInsight: 'Dra. Min-ji Park: an-gyeong-i-e-yo.',
        audioPrompt: '안경이에요'
      },
      {
        id: 17,
        type: 'slang-match',
        question: '¿Qué significa la palabra "깐부" (Kkanbu), inmortalizada en series coreanas?',
        targetWordOrPhrase: '깐부 (kkanbu)',
        hintForMexicanStudents: 'Equivalente en México a: Tu carnal del alma / tu compa incondicional.',
        options: ['Amigo del alma / cómplice leal con quien compartes todo', 'Un rival de negocios', 'Comida picante de mercado', 'Un billete de lotería'],
        correctAnswer: 'Amigo del alma / cómplice leal con quien compartes todo',
        explanation: '¡Exacto! 깐부 representa el vínculo más profundo de lealtad entre amigos de infancia.',
        academicInsight: 'Dra. Min-ji Park: Los niños sellaban su hermandad diciendo: "우린 깐부잖아" (Somos compas del alma).',
        audioPrompt: '깐부'
      },
      {
        id: 18,
        type: 'slang-match',
        question: 'En Seúl, cuando alguien dice "멘붕" (Men-bung), ¿a qué se refiere?',
        targetWordOrPhrase: '멘붕 (menbung)',
        hintForMexicanStudents: 'Acrónimo de 멘탈 (mental) + 붕괴 (colapso). En México: "Me dio el tramafate / se me cruzaron los cables".',
        options: ['Colapso mental / entrar en shock o pánico abrumador', 'Tener dolor de estómago', 'Ir de compras a Myeongdong', 'Cantar muy afinado'],
        correctAnswer: 'Colapso mental / entrar en shock o pánico abrumador',
        explanation: 'Correcto. 멘붕 es cuando algo inesperado te deja congelado mentalmente.',
        academicInsight: 'Dra. Min-ji Park: Usadísimo por universitarios en época de exámenes.',
        audioPrompt: '멘붕'
      },
      {
        id: 19,
        type: 'slang-match',
        question: '¿Qué significa el acrónimo viral "JMT" (존맛탱)?',
        targetWordOrPhrase: '존맛탱 (JMT)',
        hintForMexicanStudents: 'Equivalente en México a: "¡Está para chuparse los dedos! / ¡Una delicia con madre!"',
        options: ['Comida extremadamente deliciosa / manjar supremo', 'Llegar tarde al trabajo', 'Pedir prestado dinero', 'Un tipo de zapato deportivo'],
        correctAnswer: 'Comida extremadamente deliciosa / manjar supremo',
        explanation: '¡Totalmente! 존맛탱 (JMT) se pone en fotos de comida en Instagram para indicar sabor insuperable.',
        academicInsight: 'Dra. Min-ji Park: Se pronuncia "Jon-mat-taeng".',
        audioPrompt: '존맛탱'
      },
      {
        id: 20,
        type: 'slang-match',
        question: '¿Qué significa "꿀잼" (Kkul-jaem) en redes sociales coreanas?',
        targetWordOrPhrase: '꿀잼 (kkul-jaem)',
        hintForMexicanStudents: '꿀 (miel) + 재미 (diversión). En México: "¡Está súper botana / divertidísimo!"',
        options: ['Súper divertido / un hitazo muy entretenido', 'Un frasco de miel pura', 'Una película aburrida que da sueño', 'Un mal chiste'],
        correctAnswer: 'Súper divertido / un hitazo muy entretenido',
        explanation: '¡Brillante! 꿀잼 significa diversión dulce como la miel.',
        academicInsight: 'Dra. Min-ji Park: Su antónimo es 노잼 (no-jaem = cero divertido). ¡Has completado los 20 ejercicios!',
        audioPrompt: '꿀잼'
      }
    ],
    regionalSlang: [
      {
        term: '깐부 (Kkanbu)',
        phonetic: 'kkan-bu',
        literal: 'Compañero de canicas que comparte todas sus riquezas',
        meaning: 'Carnal, cómplice absoluto, amigo incondicional para las buenas y las malas.',
        regionOrContext: 'Seúl tradicional & Cultura urbana',
        mexicanEquivalent: 'Equivalente mexicano: "Mi carnal / mi compa del alma"',
        exampleDialogue: {
          dialogue: 'A: 야, 우린 깐부잖아. 네 거 내 거가 어딨어!',
          spanish: 'A: ¡Oye, somos carnales del alma! ¡Lo mío es tuyo!'
        }
      },
      {
        term: '멘붕 (Menbung)',
        phonetic: 'men-bung',
        literal: 'Acrónimo de 멘탈 (mental) + 붕괴 (derrumbe)',
        meaning: 'Shock mental, quedarse en blanco o en pánico.',
        regionOrContext: 'Universitarios de Seúl & Redes Sociales',
        mexicanEquivalent: 'Equivalente mexicano: "Me dio el tramafate / se me cruzaron los cables"',
        exampleDialogue: {
          dialogue: 'A: 핸드폰을 잃어버려서 완전 멘붕이야.',
          spanish: 'A: Perdí mi celular y se me cruzaron todos los cables, entré en pánico total.'
        }
      },
      {
        term: '존맛탱 (JMT)',
        phonetic: 'chon-mat-t’aeng',
        literal: 'Súper sabor estallando en la boca',
        meaning: 'Comida de sabor estratosférico e insuperable.',
        regionOrContext: 'Instagram & Gastronomía callejera de Hongdae',
        mexicanEquivalent: 'Equivalente mexicano: "¡Para chuparse los dedos! / ¡Está con madre!"',
        exampleDialogue: {
          dialogue: 'A: 이 떡볶이 진짜 JMT야!',
          spanish: 'A: ¡Este tteokbokki picante está para chuparse los dedos!'
        }
      },
      {
        term: '꿀잼 (Kkul-jaem)',
        phonetic: 'kkul-chem',
        literal: 'Diversión dulce como la miel',
        meaning: 'Algo extremadamente entretenido o chistoso.',
        regionOrContext: 'YouTube Corea & Juventud',
        mexicanEquivalent: 'Equivalente mexicano: "¡Está súper botana! / ¡Está bien padre!"',
        exampleDialogue: {
          dialogue: 'A: 어제 본 영화 완전 꿀잼이었어!',
          spanish: 'A: ¡La película que vi ayer estuvo súper botana, me reí muchísimo!'
        }
      }
    ]
  },

  // ==========================================
  // MANDARIN CHINESE LESSON 2: 是, 不是 & 吗 (HSK 1 L3)
  // ==========================================
  {
    id: 'chinese-2',
    language: 'chinese',
    lessonCode: 'LECCIÓN 1.2 - CHINO MANDARÍN',
    title: 'La Estructura de Identidad con 是, Negación con 不是 y Preguntas con 吗',
    nativeTitle: '判断句：是字句与否定变调 (不是) 及疑问句 (吗)',
    subtitle: 'Aprende a formular oraciones afirmativas, negativas e interrogativas según el currículo oficial HSK 1',
    levelBadge: 'HSK 1: Módulo Gramatical & Textos 2-3',
    professorIntro: {
      professorName: 'Dra. Li Wei (Universidad de Lengua y Cultura de Beijing)',
      academicMessage: '¡En esta lección dominaremos el corazón sintáctico del idioma chino! A diferencia del español, en mandarín el verbo "ser" (是 shì) nunca se conjuga: no cambia según la persona. Y para preguntar, solo agregamos la etiqueta mágica 吗 (ma) al final sin cambiar el orden de las palabras.',
      mexicanLearningTip: 'En México para negar decimos "No soy". En chino decimos "不是" (bú shì). ¡Cuidado con el tono de 不! Como 是 es de cuarto tono seco, 不 cambia a segundo tono ascendente: ¡bú shì!'
    },
    foundationRule: {
      headline: 'La Cópula de Identidad: 是 (shì) vs 不是 (bú shì)',
      subheadline: 'Fórmula anatómica extraída de las páginas 035 y 036 de tu libro HSK 1',
      ruleLeft: {
        label: '✅ Afirmación con 是 (shì)',
        condition: 'Estructura matemática: [Sujeto] + 是 + [Objeto / Sustantivo].',
        indicator: 'El verbo 是 (shì) es de 4to tono descendente tajante.',
        why: 'Indica equivalencia de identidad absoluta: A = B.',
        color: 'cyan',
        sample: '我是老师 (Wǒ shì lǎoshī - Yo soy profesor)'
      },
      ruleRight: {
        label: '❌ Negación con 不是 (bú shì)',
        condition: 'Se añade 不 delante de 是 para negar la equivalencia: A ≠ B.',
        indicator: 'Regla de Sandhi: bù + shì -> se pronuncia [bú shì (2º + 4º)].',
        why: 'Dos cuartos tonos seguidos suenan agresivos y agotan la laringe. La voz sube en bú.',
        color: 'magenta',
        sample: '我不是学生 (Wǒ bú shì xuésheng - No soy estudiante)'
      },
      anatomyBreakdown: {
        title: 'Desglose Anatómico de la Oración Interrogativa con 吗 (ma)',
        whatToRemove: 'No se retira ninguna palabra ni se invierte el orden del sujeto y verbo.',
        whereFrom: 'El orden de la frase queda 100% intacto.',
        whyRemove: 'El chino es un idioma analítico y posicional: el orden preserva la claridad.',
        whenRemove: 'Para hacer cualquier pregunta cuya respuesta sea Sí o No.',
        whatToGlue: 'Pega la partícula interrogativa neutra 吗 (ma) al final de la oración afirmativa.',
        whyGlue: 'La partícula 吗 actúa como un timbre que convierte toda la frase en pregunta sin esfuerzo.'
      }
    },
    examples16: [
      {
        id: 1,
        original: '我是老师',
        phoneticGuide: 'wǒ shì lǎo-shī (Para mexicanos: "wo shi lao-shi")',
        literalBreakdown: '[我 = Yo] + [是 = Soy] + [老师 = Profesor]',
        naturalSpanish: 'Yo soy profesor/a',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          verbOrAction: '是 (Soy)',
          objectOrModifier: '老师 (Profesor)',
          finalResult: '我是老师'
        },
        academicNote: 'Dra. Li Wei: Página 035, Texto 2 de tu libro HSK 1.',
        audioText: '我是老师'
      },
      {
        id: 2,
        original: '我不是学生',
        phoneticGuide: 'wǒ bú shì xué-sheng (Para mexicanos: "wo bu shi shüe-sheng")',
        literalBreakdown: '[我 = Yo] + [不是 = No soy (con sandhi bú shì)] + [学生 = Estudiante]',
        naturalSpanish: 'Yo no soy estudiante',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          verbOrAction: '不是 (No soy)',
          objectOrModifier: '学生 (Estudiante)',
          whatIsRemoved: 'El 4to tono de bù',
          whatIsGlued: 'Tono 2 bú ante el 4to tono de shì',
          finalResult: '我不是学生'
        },
        academicNote: 'Dra. Li Wei: ¡Acuérdate de la regla de sandhi: bú shì!',
        audioText: '我不是学生'
      },
      {
        id: 3,
        original: '你是老师吗？',
        phoneticGuide: 'nǐ shì lǎo-shī ma? (Para mexicanos: "ni shi lao-shi ma")',
        literalBreakdown: '[你 = Tú] + [是 = Eres] + [老师 = Profesor] + [吗 = ?]',
        naturalSpanish: '¿Eres profesor?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          verbOrAction: '是 (Eres)',
          objectOrModifier: '老师 (Profesor)',
          glueParticleOrLabel: '吗 (Partícula de pregunta)',
          finalResult: '你是老师吗？'
        },
        academicNote: 'Dra. Li Wei: Página 035, Diálogo 2.',
        audioText: '你是老师吗'
      },
      {
        id: 4,
        original: '我是中国人',
        phoneticGuide: 'wǒ shì zhōng-guó rén (Para mexicanos: "wo shi zhong-guo ren")',
        literalBreakdown: '[我 = Yo] + [是 = Soy] + [中国 = China] + [人 = Persona]',
        naturalSpanish: 'Yo soy chino/a',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          verbOrAction: '是 (Soy)',
          objectOrModifier: '中国人 (Ciudadano chino)',
          finalResult: '我是中国人'
        },
        academicNote: 'Dra. Li Wei: Página 035, Texto 3 de tu libro HSK 1.',
        audioText: '我是中国人'
      },
      {
        id: 5,
        original: '我是墨西哥人',
        phoneticGuide: 'wǒ shì mò-xī-gē rén (Para mexicanos: "wo shi mo-shi-ge ren")',
        literalBreakdown: '[我 = Yo] + [是 = Soy] + [墨西哥 = México] + [人 = Persona]',
        naturalSpanish: 'Yo soy mexicano/a',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          verbOrAction: '是 (Soy)',
          objectOrModifier: '墨西哥人 (Mexicano)',
          finalResult: '我是墨西哥人'
        },
        academicNote: 'Dra. Li Wei: Tu carta de presentación al interactuar con nativos de China.',
        audioText: '我是墨西哥人'
      },
      {
        id: 6,
        original: '你是美国人吗？',
        phoneticGuide: 'nǐ shì měi-guó rén ma? (Para mexicanos: "ni shi mei-guo ren ma")',
        literalBreakdown: '[你 = Tú] + [是 = Eres] + [美国人 = Estadounidense] + [吗 = ?]',
        naturalSpanish: '¿Eres estadounidense?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          verbOrAction: '是 (Eres)',
          objectOrModifier: '美国人 (Estadounidense)',
          glueParticleOrLabel: '吗 (Pregunta)',
          finalResult: '你是美国人吗？'
        },
        academicNote: 'Dra. Li Wei: Diálogo 3 de la página 035.',
        audioText: '你是美国人吗'
      },
      {
        id: 7,
        original: '他不是中国人',
        phoneticGuide: 'tā bú shì zhōng-guó rén (Para mexicanos: "ta bu shi zhong-guo ren")',
        literalBreakdown: '[他 = Él] + [不是 = No es] + [中国人 = Ciudadano chino]',
        naturalSpanish: 'Él no es chino',
        deconstruction: {
          subjectOrPerson: '他 (Él)',
          verbOrAction: '不是 (No es)',
          objectOrModifier: '中国人 (Chino)',
          finalResult: '他不是中国人'
        },
        academicNote: 'Dra. Li Wei: 他 (él) y 她 (ella) se pronuncian exactamente igual: tā en primer tono.',
        audioText: '他不是中国人'
      },
      {
        id: 8,
        original: '她叫李月',
        phoneticGuide: 'tā jiào lǐ yuè (Para mexicanos: "ta yiao li yüe")',
        literalBreakdown: '[她 = Ella (radical mujer 女)] + [叫 = Se llama] + [李月 = Li Yue]',
        naturalSpanish: 'Ella se llama Li Yue',
        deconstruction: {
          subjectOrPerson: '她 (Ella)',
          verbOrAction: '叫 (Llamarse)',
          objectOrModifier: '李月 (Li Yue)',
          finalResult: '她叫李月'
        },
        academicNote: 'Dra. Li Wei: Página 034 de tu libro HSK 1.',
        audioText: '她叫李月'
      },
      {
        id: 9,
        original: '这是我的书',
        phoneticGuide: 'zhè shì wǒ de shū (Para mexicanos: "dzhe shi wo de shu")',
        literalBreakdown: '[这 = Esto] + [是 = Es] + [我的 = Mi/Mío] + [书 = Libro]',
        naturalSpanish: 'Este es mi libro',
        deconstruction: {
          subjectOrPerson: '这 (Esto)',
          verbOrAction: '是 (Es)',
          objectOrModifier: '我的书 (Mi libro)',
          finalResult: '这是我的书'
        },
        academicNote: 'Dra. Li Wei: 的 (de) es la etiqueta de posesión ("de mí" = mi).',
        audioText: '这是我的书'
      },
      {
        id: 10,
        original: '那不是水',
        phoneticGuide: 'nà bú shì shuǐ (Para mexicanos: "na bu shi shui")',
        literalBreakdown: '[那 = Eso/Aquello] + [不是 = No es] + [水 = Agua]',
        naturalSpanish: 'Eso no es agua',
        deconstruction: {
          subjectOrPerson: '那 (Eso)',
          verbOrAction: '不是 (No es)',
          objectOrModifier: '水 (Agua)',
          finalResult: '那不是水'
        },
        academicNote: 'Dra. Li Wei: 水 (shuǐ) aparece en la página 031 de tu libro.',
        audioText: '那不是水'
      },
      {
        id: 11,
        original: '你好吗？',
        phoneticGuide: 'nǐ hǎo ma? (Para mexicanos: "ni jao ma")',
        literalBreakdown: '[你 = Tú] + [好 = Bien] + [吗 = ?]',
        naturalSpanish: '¿Cómo estás? / ¿Estás bien?',
        deconstruction: {
          subjectOrPerson: '你 (Tú)',
          verbOrAction: '好 (Bien)',
          glueParticleOrLabel: '吗 (Pregunta)',
          finalResult: '你好吗？'
        },
        academicNote: 'Dra. Li Wei: ¡No confundas 你好 (Hola) con 你好吗 (¿Cómo estás?). Añadir 吗 pregunta por tu estado de salud o ánimo.',
        audioText: '你好吗'
      },
      {
        id: 12,
        original: '我很好',
        phoneticGuide: 'wǒ hěn hǎo -> wó hén hǎo (Para mexicanos: "wo jen jao")',
        literalBreakdown: '[我 = Yo] + [很 = Muy] + [好 = Bien]',
        naturalSpanish: 'Estoy muy bien',
        deconstruction: {
          subjectOrPerson: '我 (Yo)',
          glueParticleOrLabel: 'Sandhi tonal múltiple',
          objectOrModifier: '很好 (Muy bien)',
          finalResult: '我很好'
        },
        academicNote: 'Dra. Li Wei: Como 我 (3º), 很 (3º) y 好 (3º) son tres terceros tonos, 很 se pronuncia como segundo tono (hén).',
        audioText: '我很好'
      },
      {
        id: 13,
        original: '咖啡好喝吗？',
        phoneticGuide: 'kā-fēi hǎo-hē ma? (Para mexicanos: "ca-fei jao-jo ma")',
        literalBreakdown: '[咖啡 = Café] + [好喝 = Rico de tomar] + [吗 = ?]',
        naturalSpanish: '¿Está rico el café?',
        deconstruction: {
          subjectOrPerson: '咖啡 (Café)',
          verbOrAction: '好喝 (Rico de beber)',
          glueParticleOrLabel: '吗 (Pregunta)',
          finalResult: '咖啡好喝吗？'
        },
        academicNote: 'Dra. Li Wei: Vocabulario de la página 025 de tu libro HSK 1.',
        audioText: '咖啡好喝吗'
      },
      {
        id: 14,
        original: '烤鸭很好吃',
        phoneticGuide: 'kǎo-yā hěn hǎo-chī (Para mexicanos: "kao-ya jen jao-chi")',
        literalBreakdown: '[烤鸭 = Pato laqueado] + [很 = Muy] + [好吃 = Sabroso/Rico de comer]',
        naturalSpanish: 'El pato laqueado es muy delicioso',
        deconstruction: {
          subjectOrPerson: '烤鸭 (Pato laqueado)',
          verbOrAction: '好吃 (Delicioso)',
          finalResult: '烤鸭很好吃'
        },
        academicNote: 'Dra. Li Wei: El platillo más famoso de mi ciudad natal, Beijing.',
        audioText: '烤鸭很好吃'
      },
      {
        id: 15,
        original: '我们是好朋友',
        phoneticGuide: 'wǒ-men shì hǎo péng-you (Para mexicanos: "wo-men shi jao peng-you")',
        literalBreakdown: '[我们 = Nosotros] + [是 = Somos] + [好朋友 = Buenos amigos]',
        naturalSpanish: 'Nosotros somos buenos amigos',
        deconstruction: {
          subjectOrPerson: '我们 (Nosotros)',
          verbOrAction: '是 (Somos)',
          objectOrModifier: '好朋友 (Buenos amigos)',
          finalResult: '我们是好朋友'
        },
        academicNote: 'Dra. Li Wei: 朋友 (péngyou) lleva tono neutro en you.',
        audioText: '我们是好朋友'
      },
      {
        id: 16,
        original: '谁是老师？',
        phoneticGuide: 'shéi shì lǎo-shī? (Para mexicanos: "shei shi lao-shi")',
        literalBreakdown: '[谁 = Quién] + [是 = Es] + [老师 = Profesor/a]',
        naturalSpanish: '¿Quién es el profesor?',
        deconstruction: {
          subjectOrPerson: '谁 (Quién)',
          verbOrAction: '是 (Es)',
          objectOrModifier: '老师 (Profesor)',
          finalResult: '谁是老师？'
        },
        academicNote: 'Dra. Li Wei: 谁 (shéi) no necesita 吗 al final porque 谁 ya es un pronombre interrogativo en sí mismo.',
        audioText: '谁是老师'
      }
    ],
    exercises20: [
      {
        id: 1,
        type: 'sentence-build',
        question: 'En la página 035 de tu libro HSK 1, ¿cómo respondes afirmativamente "Yo soy maestro"?',
        hintForMexicanStudents: 'Sujeto [我] + Verbo [是] + Profesión [老师].',
        options: ['我是老师', '我不是老师', '老师是我', '我是学生'],
        correctAnswer: '我是老师',
        explanation: 'Correcto. 我是老师 (Wǒ shì lǎoshī).',
        academicInsight: 'Dra. Li Wei: Estructura directa A 是 B.',
        audioPrompt: '我是老师'
      },
      {
        id: 2,
        type: 'tone-sandhi',
        question: 'Al decir "Yo no soy" (我不是), ¿qué tono tiene la palabra 不?',
        targetWordOrPhrase: '不是',
        hintForMexicanStudents: 'Delante de 是 (4to tono), 不 sube de tono.',
        options: ['bú shì (segundo tono)', 'bù shì (cuarto tono)', 'bǔ shì'],
        correctAnswer: 'bú shì (segundo tono)',
        explanation: '¡Brillante! Regla de sandhi obligatoria: bú shì.',
        academicInsight: 'Dra. Li Wei: En el HSK 1 este sandhi es evaluado con lupa.',
        audioPrompt: '不是'
      },
      {
        id: 3,
        type: 'particle-select',
        question: '¿Qué partícula colocas al final de "你是老师" para que se convierta en la pregunta "¿Eres profesor?"?',
        targetWordOrPhrase: '吗 (ma)',
        hintForMexicanStudents: 'Partícula interrogativa de la página 036.',
        options: ['吗', '呢', '吧', '啊'],
        correctAnswer: '吗',
        explanation: 'Correcto. Oración declarativa + 吗 = Pregunta de sí o no.',
        academicInsight: 'Dra. Li Wei: nǐ shì lǎoshī ma?',
        audioPrompt: '你是老师吗'
      },
      {
        id: 4,
        type: 'sentence-build',
        question: '¿Cómo se dice en chino "Yo no soy chino, soy mexicano"?',
        hintForMexicanStudents: '我不是中国人，我是墨西哥人。',
        options: ['我不是中国人，我是墨西哥人', '我是中国人，我不是墨西哥人', '我是美国人，不是中国人', '他是中国人'],
        correctAnswer: '我不是中国人，我是墨西哥人',
        explanation: '¡Excelente! Estructura anatómica completa de identidad y contraste.',
        academicInsight: 'Dra. Li Wei: Wǒ bú shì Zhōngguó rén, wǒ shì Mòxīgē rén.',
        audioPrompt: '我不是中国人，我是墨西哥人'
      },
      {
        id: 5,
        type: 'particle-select',
        question: 'En la página 035, Diálogo 3, ¿qué significa 美国人 (Měiguó rén)?',
        targetWordOrPhrase: '美国人',
        hintForMexicanStudents: '美国 = Estados Unidos + 人 = Persona.',
        options: ['Estadounidense', 'Mexicano', 'Chino', 'Español'],
        correctAnswer: 'Estadounidense',
        explanation: 'Correcto. Měiguó (País Hermoso) + rén (persona) = Estadounidense.',
        academicInsight: 'Dra. Li Wei: En chino los nombres de países suelen incluir ideogramas auspiciosos.',
        audioPrompt: '美国人'
      },
      {
        id: 6,
        type: 'sentence-build',
        question: '¿Cómo traduces "¿Cómo estás?" al chino?',
        hintForMexicanStudents: 'Tú [你] + Bien [好] + Partícula de pregunta [吗].',
        options: ['你好吗？', '你好！', '你是谁？', '你叫什么？'],
        correctAnswer: '你好吗？',
        explanation: 'Correcto. 你好吗 pregunta por el bienestar de la otra persona.',
        academicInsight: 'Dra. Li Wei: Nǐ hǎo ma?',
        audioPrompt: '你好吗'
      },
      {
        id: 7,
        type: 'particle-select',
        question: 'En la respuesta "我很好" (Estoy muy bien), ¿qué significa la palabra 很 (hěn)?',
        targetWordOrPhrase: '很 (hěn)',
        hintForMexicanStudents: 'Se coloca antes de los adjetivos como enlace armónico.',
        options: ['Muy', 'No', 'Tampoco', 'Ayer'],
        correctAnswer: 'Muy',
        explanation: 'Correcto. 很 significa "muy", pero en chino también sirve de pegamento gramatical para adjetivos.',
        academicInsight: 'Dra. Li Wei: En chino nunca decimos "我好" a secas; siempre usamos "我很好".',
        audioPrompt: '我很好'
      },
      {
        id: 8,
        type: 'particle-select',
        question: 'En la página 025 del libro HSK 1, ¿cómo se dice "Café"?',
        targetWordOrPhrase: '咖啡 (kāfēi)',
        hintForMexicanStudents: 'Observa que ambos caracteres tienen el radical 口 (boca) al lado izquierdo.',
        options: ['咖啡 (kāfēi)', '可乐 (kělè)', '烤鸭 (kǎoyā)', '火锅 (huǒguō)'],
        correctAnswer: '咖啡 (kāfēi)',
        explanation: 'Correcto. 咖啡 es la transliteración de café, con el radical 口 de beber.',
        academicInsight: 'Dra. Li Wei: Ambos caracteres en 1er tono alto y plano: kā-fēi.',
        audioPrompt: '咖啡'
      },
      {
        id: 9,
        type: 'particle-select',
        question: '¿Cómo se dice "Refresco de Cola" en chino (página 025)?',
        targetWordOrPhrase: '可乐 (kělè)',
        hintForMexicanStudents: 'Significa poéticamente "Puede traer alegría".',
        options: ['可乐 (kělè)', '咖啡 (kāfēi)', '牛奶 (niúnǎi)', '茶 (chá)'],
        correctAnswer: '可乐 (kělè)',
        explanation: 'Correcto. 可乐 (kělè) es una de las mejores adaptaciones fonéticas y de significado de la historia.',
        academicInsight: 'Dra. Li Wei: 可 (puede) + 乐 (alegría).',
        audioPrompt: '可乐'
      },
      {
        id: 10,
        type: 'sentence-build',
        question: '¿Cómo dices "Este es mi libro" en chino?',
        hintForMexicanStudents: '这 (Esto) + 是 (es) + 我的 (mi) + 书 (libro).',
        options: ['这是我的书', '那是我的书', '书是我的这', '我是这的书'],
        correctAnswer: '这是我的书',
        explanation: 'Correcto. Zhè shì wǒ de shū.',
        academicInsight: 'Dra. Li Wei: 的 (de) marca la pertenencia de forma nítida.',
        audioPrompt: '这是我的书'
      },
      {
        id: 11,
        type: 'particle-select',
        question: '¿Cuál es el antónimo de 这 (zhè - esto/este)?',
        targetWordOrPhrase: '那 (nà)',
        hintForMexicanStudents: 'Indica algo que está lejos: "eso / aquello".',
        options: ['那 (nà - eso/aquello)', '哪 (nǎ - cuál)', '谁 (shéi - quién)', '什么 (shénme - qué)'],
        correctAnswer: '那 (nà - eso/aquello)',
        explanation: 'Correcto. 这 (zhè = esto cerca) frente a 那 (nà = aquello lejos).',
        academicInsight: 'Dra. Li Wei: Par deíctico fundamental en HSK 1.',
        audioPrompt: '那'
      },
      {
        id: 12,
        type: 'sentence-build',
        question: '¿Cómo preguntas "¿Quién es el profesor?" en chino?',
        hintForMexicanStudents: 'Pronombre: 谁 (shéi) + Verbo: 是 (shì) + Objeto: 老师 (lǎoshī).',
        options: ['谁是老师？', '谁是老师吗？', '老师是谁吗？', '是老师谁？'],
        correctAnswer: '谁是老师？',
        explanation: '¡Brillante! Como ya usamos 谁 (quién), ¡NO se debe añadir 吗!',
        academicInsight: 'Dra. Li Wei: Regla de oro: una oración con pronombre interrogativo (谁, 什么) nunca lleva 吗.',
        audioPrompt: '谁是老师'
      },
      {
        id: 13,
        type: 'particle-select',
        question: 'En la página 028 de tu libro HSK 1, ¿cómo respondes de forma corta a 谢谢 (Gracias)?',
        targetWordOrPhrase: '不谢 (bú xiè)',
        hintForMexicanStudents: 'Dos caracteres solamente.',
        options: ['不谢 (bú xiè)', '对不起 (duìbuqǐ)', '再见 (zàijiàn)', '没关系 (méi guānxi)'],
        correctAnswer: '不谢 (bú xiè)',
        explanation: 'Correcto. 不谢 (bú xiè) es la respuesta informal rápida para "De nada".',
        academicInsight: 'Dra. Li Wei: Nota el sandhi tonal: bú xiè.',
        audioPrompt: '不谢'
      },
      {
        id: 14,
        type: 'stroke-identify',
        question: 'En la página 026 de tu libro, ¿cómo se llama el trazo vertical que baja recto?',
        targetWordOrPhrase: '竖 (shù)',
        hintForMexicanStudents: 'Es una línea vertical de arriba a abajo.',
        options: ['竖 (shù)', '横 (héng)', '撇 (piě)', '点 (diǎn)'],
        correctAnswer: '竖 (shù)',
        explanation: 'Correcto. 竖 (shù) es el trazo vertical vertebral.',
        academicInsight: 'Dra. Li Wei: Se traza firmemente de arriba hacia abajo.',
        audioPrompt: '竖'
      },
      {
        id: 15,
        type: 'stroke-identify',
        question: 'En la página 026, ¿cómo se llama el trazo diagonal que cae hacia la izquierda?',
        targetWordOrPhrase: '撇 (piě)',
        hintForMexicanStudents: 'Trazo curvo descendente hacia la izquierda con punta afilada.',
        options: ['撇 (piě)', '捺 (nà)', '横 (héng)', '竖 (shù)'],
        correctAnswer: '撇 (piě)',
        explanation: 'Correcto. 撇 (piě) desciende grácilmente hacia la izquierda.',
        academicInsight: 'Dra. Li Wei: Junto con 捺 (nà, hacia la derecha) forma el carácter 人 (persona).',
        audioPrompt: '撇'
      },
      {
        id: 16,
        type: 'slang-match',
        question: 'En redes como Bilibili y Douyin, cuando alguien dice "破防" (Pò fáng), ¿qué siente?',
        targetWordOrPhrase: '破防 (pò fáng)',
        hintForMexicanStudents: 'Romper la defensa psicológica. En México: "Me llegó al corazón / me dio directo en la herida".',
        options: ['Conmoverse hasta las lágrimas o quedar emocionalmente vulnerable', 'Ganar una pelea callejera', 'Comprar un auto nuevo', 'Cocinar comida rápida'],
        correctAnswer: 'Conmoverse hasta las lágrimas o quedar emocionalmente vulnerable',
        explanation: '¡Exacto! Pò fáng viene de romper la armadura en videojuegos y se usa cuando una emoción te quiebra.',
        academicInsight: 'Dra. Li Wei: Expresión favorita de la juventud china actual.',
        audioPrompt: '破防'
      },
      {
        id: 17,
        type: 'slang-match',
        question: '¿Qué significa la expresión china de internet "社死" (Shè sǐ)?',
        targetWordOrPhrase: '社死 (shè sǐ)',
        hintForMexicanStudents: 'Acrónimo de 社会性死亡 (muerte social). En México: "Hacer el oso de mi vida".',
        options: ['Pasar una vergüenza pública monumental / muerte social', 'Morirse de hambre', 'Quedarse dormido en el parque', 'Graduarse con honores'],
        correctAnswer: 'Pasar una vergüenza pública monumental / muerte social',
        explanation: '¡Totalmente! 社死 es cuando haces un oso tan tremendo frente a todos que quisieras que la tierra te trague.',
        academicInsight: 'Dra. Li Wei: shè huì xìng sǐ wáng.',
        audioPrompt: '社死'
      },
      {
        id: 18,
        type: 'slang-match',
        question: 'En Beijing, ¿cómo se dice "¿A dónde vas?" con el acento típico de la capital (儿化)?',
        targetWordOrPhrase: '去哪儿 (qù nǎr)',
        hintForMexicanStudents: 'Lleva el sonido ér enrollado al final.',
        options: ['你去哪儿？ (Nǐ qù nǎr?)', '你去哪里？ (Nǐ qù nǎlǐ?)', '你去什么时候？', '你去谁？'],
        correctAnswer: '你去哪儿？ (Nǐ qù nǎr?)',
        explanation: 'Correcto. 哪儿 (nǎr) es la forma genuina y entrañable de Beijing.',
        academicInsight: 'Dra. Li Wei: ¡Orgullo de los callejones (hutongs) pelineses!',
        audioPrompt: '你去哪儿'
      },
      {
        id: 19,
        type: 'sentence-build',
        question: '¿Cómo dices "Nosotros somos buenos amigos"?',
        hintForMexicanStudents: '我们 (Nosotros) + 是 (somos) + 好朋友 (buenos amigos).',
        options: ['我们是好朋友', '他们是朋友', '我是好朋友', '我们好朋友是'],
        correctAnswer: '我们是好朋友',
        explanation: 'Correcto. Wǒmen shì hǎo péngyou.',
        academicInsight: 'Dra. Li Wei: Estructura clara y afectuosa.',
        audioPrompt: '我们是好朋友'
      },
      {
        id: 20,
        type: 'sentence-build',
        question: '¿Cómo traduces "El pato laqueado es muy delicioso" (comida de Beijing)?',
        hintForMexicanStudents: 'Página 025: 烤鸭 (pato laqueado) + 很好吃 (muy rico).',
        options: ['烤鸭很好吃', '咖啡好喝', '可乐很甜', '火锅很辣'],
        correctAnswer: '烤鸭很好吃',
        explanation: '¡Felicitaciones! Kǎoyā hěn hǎochī. Has completado con maestría los 20 ejercicios.',
        academicInsight: 'Dra. Li Wei: ¡Has alcanzado el dominio pleno del módulo HSK 1 con honores!',
        audioPrompt: '烤鸭很好吃'
      }
    ],
    regionalSlang: [
      {
        term: '破防 (Pò fáng)',
        phonetic: 'p’o-fang',
        literal: 'Romper la defensa / armadura quebrada',
        meaning: 'Quedar vulnerable emocionalmente, conmovido hasta las lágrimas o herido por una verdad.',
        regionOrContext: 'Bilibili, Douyin & Juventud en China',
        mexicanEquivalent: 'Equivalente mexicano: "Me dio en la mera madre / me llegó al mero corazón"',
        exampleDialogue: {
          dialogue: 'A: 看到这部电影的结局，我彻底破防了。',
          spanish: 'A: Al ver el final de esta película, me quebré por completo, no pude contener las lágrimas.'
        }
      },
      {
        term: '社死 (Shè sǐ)',
        phonetic: 'she-sz',
        literal: 'Muerte social (社会性死亡)',
        meaning: 'Pasar una vergüenza monumental en público de la que parece imposible recuperarse.',
        regionOrContext: 'Weibo & Cultura universitaria urbana',
        mexicanEquivalent: 'Equivalente mexicano: "Hice el oso de mi vida / trágame tierra"',
        exampleDialogue: {
          dialogue: 'A: 刚才在电梯里认错人叫了声妈，简直社死！',
          spanish: 'A: ¡Acabo de confundir a una señora en el elevador y le dije mamá, qué oso tan colosal, trágame tierra!'
        }
      },
      {
        term: '冲浪 (Chōng làng)',
        phonetic: 'ch’ung-lang',
        literal: 'Surfear olas',
        meaning: 'Navegar y enterarse de todo el chisme y tendencias en redes sociales.',
        regionOrContext: 'Internet de China',
        mexicanEquivalent: 'Equivalente mexicano: "Andar en el chisme / scrolleando en redes"',
        exampleDialogue: {
          dialogue: 'A: 晚上睡不着，在网上冲浪呢。',
          spanish: 'A: No podía dormir, así que ando acá en el chisme navegando en redes.'
        }
      },
      {
        term: '凡尔赛 (Fán\'ěrsài)',
        phonetic: 'fan-er-sai (Versalles)',
        literal: 'Estilo palacio de Versalles',
        meaning: 'Presumir algo con falsa modestia o quejándose hipócritamente para llamar la atención.',
        regionOrContext: 'Xiaohongshu & WeChat Moments',
        mexicanEquivalent: 'Equivalente mexicano: "Presunción disimulada / humilde pero farolero"',
        exampleDialogue: {
          dialogue: 'A: "Ay, mi casa nueva es tan enorme que me canso de caminar"... B: ¡Deja de hacer el Versalles!',
          spanish: 'A: "Qué pesado es tener una casa tan grande"... B: ¡Ya no presumas con disimulo!'
        }
      }
    ]
  }
];

