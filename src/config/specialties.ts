export type SpecialtyIconName =
  | "Heart"
  | "Code"
  | "FileText"
  | "HomeIcon"
  | "Shield"
  | "BookOpen";

export interface SpecialtyFAQ {
  question: string;
  answer: string;
}

export interface SpecialtyProcessStep {
  title: string;
  description: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  h1Title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  items: string[];
  requirements: string[];
  processSteps: SpecialtyProcessStep[];
  faqs: SpecialtyFAQ[];
  iconName: SpecialtyIconName;
  highlighted?: boolean;
  contactFormArea: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "derecho-de-familia-mar-del-plata",
    title: "Derecho de Familia",
    shortTitle: "Derecho de Familia",
    seoTitle:
      "Abogado de Familia y Divorcios en Mar del Plata | Dr. Martín Barbaricca",
    seoDescription:
      "Abogado especialista en Derecho de Familia en Mar del Plata y General Pueyrredón. Divorcio exprés, cuota alimentaria, cuidado personal, régimen de comunicación y filiación. Consulta directa.",
    seoKeywords: [
      "abogado de familia mar del plata",
      "abogado divorcio mar del plata",
      "divorcio expres mar del plata",
      "cuota alimentaria mar del plata",
      "regimen de comunicacion abogado mar del plata",
      "cuidado personal hijos mar del plata",
      "filiacion paternidad mar del plata",
      "juzgados de familia mar del plata",
    ],
    h1Title: "Abogado de Derecho de Familia y Divorcios en Mar del Plata",
    subtitle:
      "Patrocinio letrado ante los Juzgados de Familia del Departamento Judicial de Mar del Plata y toda la Provincia de Buenos Aires.",
    description:
      "Asesoramiento legal empático y riguroso para proteger las relaciones familiares, el patrimonio conyugal y los derechos de niños y adolescentes.",
    longDescription: [
      "En el Estudio Jurídico del Dr. Martín Luis Barbaricca (T° XII F° 197 CAMDP) abordamos los conflictos de Derecho de Familia combinando sensibilidad humana, estricta confidencialidad y firmeza procesal ante los Tribunales de Familia de Mar del Plata.",
      "Priorizamos acuerdos rápidos y sustentables en etapas de mediación o consejería de familia para evitar el desgaste emocional y económico, pero contamos con la solvencia litigiosa necesaria cuando la defensa de los derechos de nuestros clientes o el interés superior del niño exige una intervención judicial inmediata.",
    ],
    items: [
      "Divorcios vinculares unilaterales y de común acuerdo (Divorcio Exprés)",
      "Reclamo, aumento, reducción y ejecución de cuota alimentaria",
      "Régimen de comunicación (visitas) y plan de parentalidad",
      "Cuidado personal compartido o unilateral (tenencia)",
      "Liquidación y compensación económica de la comunidad conyugal",
      "Filiación, reconocimiento de hijos e impugnación de paternidad",
      "Responsabilidad parental, guarda, tutela y curatela / determinación de la capacidad",
    ],
    requirements: [
      "DNI del solicitante y datos básicos del grupo familiar.",
      "Acta o certificado de matrimonio actualizado (para trámites de divorcio).",
      "Partidas de nacimiento de los hijos menores o mayores que estudien.",
      "Comprobantes de gastos de los hijos e ingresos aproximados (para cuota alimentaria).",
      "Documentación de bienes muebles o inmuebles (si existe convenio regulador patrimonial).",
    ],
    processSteps: [
      {
        title: "1. Diagnóstico Confidencial",
        description:
          "Evaluamos su situación familiar y patrimonial en entrevista presencial en Mar del Plata o por videollamada, definiendo la estrategia legal más rápida y menos conflictiva.",
      },
      {
        title: "2. Propuesta de Convenio o Etapa Previa",
        description:
          "Redactamos el convenio regulador (cuidado personal, alimentos, atribución de vivienda y división de bienes) o iniciamos la etapa previa ante los Juzgados de Familia.",
      },
      {
        title: "3. Medidas Provisionales e Impulso Digital",
        description:
          "De ser urgente, solicitamos alimentos provisorios o medidas cautelares de inmediato a través del portal electrónico de la SCBA.",
      },
      {
        title: "4. Sentencia e Inscripción Registral",
        description:
          "Obtenemos la sentencia judicial o homologación del acuerdo y gestionamos el oficio digital al Registro de las Personas.",
      },
    ],
    faqs: [
      {
        question:
          "¿Cuánto tarda un divorcio exprés en los Tribunales de Mar del Plata?",
        answer:
          "El divorcio por presentación conjunta (de común acuerdo) suele demorar entre 2 y 4 meses en los Juzgados de Familia del Departamento Judicial de Mar del Plata. Si es unilateral (lo pide uno solo de los cónyuges sin necesitar el consentimiento del otro), el plazo habitual es de 3 a 6 meses dependiendo de las notificaciones.",
      },
      {
        question:
          "¿Cómo se calcula la cuota alimentaria y hasta qué edad corresponde?",
        answer:
          "La cuota alimentaria se fija según las necesidades de los hijos (vivienda, educación, salud, vestimenta, esparcimiento) y la capacidad económica de ambos progenitores, incluyendo el valor económico de las tareas de cuidado cotidiano. Es obligatoria hasta los 21 años, y se extiende hasta los 25 años si el hijo estudia o se capacita y no puede sostenerse por medios propios.",
      },
      {
        question:
          "¿Qué pasa si el progenitor obligado no paga la cuota alimentaria?",
        answer:
          "Ante el incumplimiento, solicitamos medidas de ejecución inmediata: embargo de haberes o cuentas bancarias, retención directa por el empleador, inscripción en el Registro de Deudores Alimentarios Morosos de la Provincia de Buenos Aires, prohibición de salida del país o suspensión de licencias de conducir.",
      },
      {
        question:
          "¿Puedo divorciarme si no tengo el acta de matrimonio o mi ex pareja no quiere firmar?",
        answer:
          "Sí. En el Código Civil y Comercial argentino basta la voluntad de uno solo de los cónyuges para decretar el divorcio, sin necesidad de explicar causas ni contar con la firma del otro. Además, nuestro estudio puede gestionar digitalmente las partidas ante el Registro Provincial de las Personas.",
      },
    ],
    iconName: "Heart",
    highlighted: true,
    contactFormArea: "Derecho de Familia",
  },
  {
    slug: "derecho-informatico-propiedad-intelectual",
    title: "Derecho Informático & Tecnología",
    shortTitle: "Derecho Informático",
    seoTitle:
      "Abogado en Derecho Informático, Marcas y Software | Dr. Martín Barbaricca",
    seoDescription:
      "Abogado con formación en Ingeniería en Software en Mar del Plata y Buenos Aires. Registro de marcas INPI, depósito de software DNDA, contratos SaaS, NDA y delitos informáticos.",
    seoKeywords: [
      "abogado derecho informatico",
      "abogado derecho informatico mar del plata",
      "abogado propiedad intelectual software",
      "registro de marcas inpi mar del plata",
      "contratos de software saas abogado",
      "abogado delitos informaticos",
      "proteccion legal codigo fuente dnda",
      "terminos y condiciones web abogado argentina",
    ],
    h1Title:
      "Abogado Especialista en Derecho Informático, Software y Marcas",
    subtitle:
      "El diferencial único de combinar casi 20 años de abogacía con formación en Ingeniería en Software para blindar sus activos tecnológicos y digitales.",
    description:
      "Protección legal y técnica especializada para software, activos digitales, privacidad de datos y propiedad intelectual en toda la Argentina.",
    longDescription: [
      "El Dr. Martín Luis Barbaricca reúne una doble competencia excepcional en el ámbito jurídico argentino: es Abogado matriculado (T° XII F° 197 CAMDP) y cuenta con formación académica en Ingeniería en Software. Esto nos permite comprender a fondo la arquitectura técnica de un sistema, el ciclo de desarrollo ágil, el licenciamiento de código fuente y las vulnerabilidades de seguridad.",
      "Asesoramos a empresas de tecnología, startups, agencias digitales, desarrolladores independientes y comercios electrónicos en Mar del Plata, la Provincia de Buenos Aires y todo el país para proteger su propiedad intelectual y prevenir contingencias contractuales o regulatorias.",
    ],
    items: [
      "Registro y custodia de marcas, patentes y modelos de utilidad ante el INPI",
      "Inscripción de software, código fuente y algoritmos en la DNDA (Derechos de Autor)",
      "Redacción y negociación de contratos tecnológicos: SaaS, desarrollo a medida, SLA y licencias",
      "Términos y Condiciones de uso, Políticas de Privacidad y adecuación a Ley 25.326 (Datos Personales)",
      "Acuerdos de Confidencialidad (NDA), propiedad de código con empleados/contractors y no competencia",
      "Asesoramiento y preservación de evidencia digital ante fraudes bancarios, phishing y delitos informáticos",
    ],
    requirements: [
      "Denominación de marca, logotipo y rubro comercial (para búsquedas fonéticas y registro en INPI).",
      "Descripción funcional del sistema o plataforma digital (para contratos SaaS o Términos y Condiciones).",
      "Muestras de código fuente o documentación técnica (para depósito de obra de software en DNDA).",
      "Capturas, encabezados de correos, hashes o registros de transacciones (en casos de fraude o incidente informático).",
    ],
    processSteps: [
      {
        title: "1. Auditoría Técnica y Legal",
        description:
          "Analizamos su proyecto tecnológico, software o marca identificando riesgos de propiedad intelectual, licencias open-source, protección de datos y responsabilidad civil.",
      },
      {
        title: "2. Blindaje Registral (INPI / DNDA)",
        description:
          "Realizamos el estudio de factibilidad marcaria, presentamos las solicitudes ante el INPI y gestionamos el depósito legal de software y bases de datos.",
      },
      {
        title: "3. Ingeniería Contractual a Medida",
        description:
          "Redactamos contratos de desarrollo, licencias SaaS, NDAs y Términos y Condiciones alineados con la lógica real de su producto digital.",
      },
      {
        title: "4. Defensa y Evidencia Digital",
        description:
          "En caso de incumplimientos, plagio o fraudes electrónicos, articulamos reclamos, pericias informáticas y acciones judiciales preservando la cadena de custodia digital.",
      },
    ],
    faqs: [
      {
        question:
          "¿Cómo se protege legalmente un software o aplicación en Argentina?",
        answer:
          "En Argentina el software se protege mediante la Ley 11.723 de Propiedad Intelectual, inscribiendo la obra (publicada o inédita) ante la Dirección Nacional del Derecho de Autor (DNDA). Complementariamente, el nombre comercial e isologotipo de la aplicación deben registrarse como marca ante el INPI para evitar que terceros utilicen una denominación igual o similar.",
      },
      {
        question:
          "¿De quién es el código fuente cuando contrato a un programador freelance o software factory?",
        answer:
          "Sin un contrato de desarrollo de software o cesión de derechos de propiedad intelectual debidamente redactado, suelen surgir disputas graves sobre la titularidad del repositorio y los derechos de explotación o modificación. Redactamos contratos con cláusulas claras de 'work for hire' y cesión patrimonial total junto con acuerdos de confidencialidad (NDA).",
      },
      {
        question:
          "¿Qué hacer ante una estafa virtual, phishing o vaciamiento de cuenta bancaria?",
        answer:
          "Es fundamental actuar de inmediato: realizar el desconocimiento formal ante la entidad bancaria o billetera virtual, preservar toda la evidencia digital sin alterarla y cursar intimación fehaciente. La jurisprudencia actual responsabiliza a las entidades financieras por fallas en el deber de seguridad (Ley de Defensa del Consumidor), permitiendo reclamar la restitución de fondos y la nulidad de créditos preaprobados fraudulentos.",
      },
      {
        question:
          "¿Por qué elegir un abogado con formación en Ingeniería en Software?",
        answer:
          "Un abogado tradicional suele desconocer conceptos críticos como repositorios Git, APIs, infraestructura cloud, entregables de sprints, niveles de servicio (SLA) o vulnerabilidades técnicas. La formación en Ingeniería en Software del Dr. Barbaricca garantiza contratos sin vacíos técnicos y defensas judiciales con precisión pericial.",
      },
    ],
    iconName: "Code",
    highlighted: true,
    contactFormArea: "Derecho Informático y Propiedad Intelectual",
  },
  {
    slug: "sucesiones-y-herencias-mar-del-plata",
    title: "Sucesiones",
    shortTitle: "Sucesiones y Herencias",
    seoTitle:
      "Abogado de Sucesiones y Herencias en Mar del Plata | Dr. Martín Barbaricca",
    seoDescription:
      "Estudio Jurídico especialista en Sucesiones en Mar del Plata y Provincia de Buenos Aires. Declaratoria de herederos, tracto abreviado, testamentos y partición de bienes.",
    seoKeywords: [
      "abogado sucesiones mar del plata",
      "sucesiones mar del plata",
      "declaratoria de herederos mar del plata",
      "cuanto cuesta una sucesion en provincia de buenos aires",
      "sucesion tracto abreviado mar del plata",
      "abogado herencias mar del plata",
      "testamentos mar del plata",
      "iniciar sucesion buenos aires",
    ],
    h1Title:
      "Abogado Especialista en Sucesiones y Herencias en Mar del Plata",
    subtitle:
      "Gestión ágil de declaratorias de herederos, inscripciones por tracto abreviado y planificación hereditaria en Mar del Plata y toda la Provincia de Buenos Aires.",
    description:
      "Tramitación y planificación sucesoria integral para resguardar, regularizar y organizar el patrimonio familiar ante fallecimientos.",
    longDescription: [
      "Iniciar una sucesión a tiempo permite regularizar la titularidad de los bienes familiares, disponer la venta de inmuebles mediante tracto abreviado sin demoras y evitar la pérdida de valor patrimonial o conflictos entre coherederos.",
      "Nuestro estudio tramita sucesiones ab-intestato (sin testamento) y testamentarias ante los Juzgados Civiles y Comerciales del Departamento Judicial de Mar del Plata y de toda la Provincia de Buenos Aires, utilizando el sistema de gestión electrónica para acelerar cada etapa procesal.",
    ],
    items: [
      "Sucesiones ab-intestato (sin testamento) y obtención rápida de Declaratoria de Herederos",
      "Sucesiones testamentarias y protocolización de testamentos ológrafos o por acto público",
      "Venta rápida de inmuebles heredados mediante el sistema de Tracto Abreviado",
      "Acuerdos de partición privada y adjudicación de bienes entre herederos",
      "Cesión de derechos y acciones hereditarias",
      "Acciones de colación, reducción y defensa de la porción legítima hereditaria",
      "Planificación sucesoria preventiva, donaciones con reserva de usufructo y redacción de testamentos",
    ],
    requirements: [
      "Certificado o partida de defunción del causante.",
      "Partidas que acrediten el vínculo (acta de matrimonio y partidas de nacimiento de los herederos).",
      "Nota: Si no posee las partidas físicas, nuestro estudio las gestiona digitalmente.",
      "Títulos de propiedad (escrituras de inmuebles, títulos de automotores, datos de cuentas bancarias).",
      "Testamento original (únicamente en caso de sucesión testamentaria).",
    ],
    processSteps: [
      {
        title: "1. Recopilación de Partidas y Apertura",
        description:
          "Verificamos o solicitamos las partidas digitales y presentamos el escrito de inicio sucesorio ante el Juzgado Civil y Comercial competente.",
      },
      {
        title: "2. Publicación de Edictos y Oficios",
        description:
          "Diligenciamos electrónicamente el oficio al Registro de Juicios Universales, Registro de Testamentos y la publicación de edictos en el Boletín Oficial.",
      },
      {
        title: "3. Declaratoria de Herederos",
        description:
          "Vencido el plazo de edictos, el juez dicta la Declaratoria de Herederos reconociendo formalmente a los sucesores.",
      },
      {
        title: "4. Denuncia de Bienes e Inscripción / Tracto Abreviado",
        description:
          "Solicitamos informes de dominio e inhibición, valuación fiscal y orden de inscripción registral o autorización para escriturar directamente a nombre de un comprador (tracto abreviado).",
      },
    ],
    faqs: [
      {
        question:
          "¿Cuánto demora obtener la Declaratoria de Herederos en Mar del Plata?",
        answer:
          "Con la digitalización de los juzgados civiles de la Provincia de Buenos Aires y la publicación electrónica de edictos, la Declaratoria de Herederos suele obtenerse en un plazo estimado de 3 a 5 meses desde la presentación completa de las partidas.",
      },
      {
        question:
          "¿Puedo vender una propiedad en sucesión antes de terminar todo el trámite?",
        answer:
          "Sí. Una vez dictada la Declaratoria de Herederos y cumplidos los informes de ley y la tasa de justicia sobre el bien, se solicita la orden de inscripción y el escribano interviniente puede escriturar directamente a favor del comprador mediante la figura de 'Tracto Abreviado', ahorrando tiempo y costos de una doble escrituración.",
      },
      {
        question:
          "¿Es necesario que todos los herederos estén de acuerdo para iniciar la sucesión?",
        answer:
          "No. Cualquier heredero legitimado puede iniciar el juicio sucesorio por su cuenta y notificar a los demás coherederos para que se presenten a hacer valer sus derechos en el expediente.",
      },
      {
        question:
          "¿Cómo se abonan los honorarios y gastos de una sucesión?",
        answer:
          "Los gastos iniciales (bono, jus previsional, oficios y edictos) son reducidos, mientras que la Tasa de Justicia y los honorarios profesionales (regulados por la Ley 14.967 de la Provincia de Buenos Aires) se abonan recién en la última etapa al momento de inscribir o vender los bienes, pudiendo acordarse facilidades o pago contra la venta del inmueble.",
      },
    ],
    iconName: "FileText",
    highlighted: false,
    contactFormArea: "Sucesiones",
  },
  {
    slug: "derecho-inmobiliario-desalojos-alquileres",
    title: "Derecho Inmobiliario y Alquileres",
    shortTitle: "Inmobiliario y Desalojos",
    seoTitle:
      "Abogado de Desalojos, Alquileres y Contratos en Mar del Plata | Dr. Barbaricca",
    seoDescription:
      "Abogado especialista en Derecho Inmobiliario en Mar del Plata. Juicios de desalojo por falta de pago o vencimiento, contratos de alquiler, boletos de compraventa y ejecución de deudas.",
    seoKeywords: [
      "abogado desalojos mar del plata",
      "juicio de desalojo mar del plata",
      "abogado inmobiliario mar del plata",
      "contratos de alquiler mar del plata",
      "boleto de compraventa abogado mar del plata",
      "ejecucion de alquileres impagos",
      "desalojo por falta de pago buenos aires",
    ],
    h1Title:
      "Abogado Inmobiliario: Desalojos, Alquileres y Contratos en Mar del Plata",
    subtitle:
      "Seguridad jurídica para propietarios, inversores, consorcios e inquilinos en el mercado inmobiliario de Mar del Plata y la costa atlántica.",
    description:
      "Protección integral para propietarios, locadores e inquilinos. Redacción de contratos blindados, juicios de desalojo y cobro de alquileres.",
    longDescription: [
      "En una plaza inmobiliaria tan dinámica como Mar del Plata y el Partido de General Pueyrredón, contar con contratos de locación y boletos de compraventa técnicamente sólidos es la diferencia entre una inversión segura y un litigio prolongado.",
      "Patrocinamos a propietarios en juicios de desalojo (por falta de pago, vencimiento contractual, intrusión o comodato) y juicios ejecutivos por cobro de alquileres y expensas, aplicando las herramientas procesales de entrega anticipada del inmueble previstas en el Código Procesal Civil y Comercial de la Provincia de Buenos Aires.",
    ],
    items: [
      "Juicios de desalojo por falta de pago, vencimiento de contrato, tenencia precaria o intrusión",
      "Solicitud de desocupación inmediata / entrega anticipada del inmueble (Art. 676 bis / ter CPCCBA)",
      "Juicio ejecutivo por cobro de alquileres adeudados contra inquilinos y garantes/fiadores",
      "Redacción de contratos de locación de vivienda permanente, temporaria y comercial bajo normativa vigente",
      "Redacción y revisión de boletos de compraventa, señas, reservas y fideicomisos inmobiliarios",
      "Acciones de escrituración, división de condominio y prescripción adquisitiva (usucapión)",
    ],
    requirements: [
      "Contrato de locación original o instrumento que acredite el vínculo (si lo hubiere).",
      "Escritura o documentación que acredite la titularidad o legitimación sobre el inmueble.",
      "Detalle de meses de alquiler, impuestos o expensas adeudadas.",
      "Datos del inquilino, ocupantes y garantes para cursar la intimación previa por Carta Documento.",
    ],
    processSteps: [
      {
        title: "1. Intimación Fehaciente (Carta Documento)",
        description:
          "Redactamos y enviamos la intimación legal obligatoria al inquilino y fiadores otorgando el plazo de ley para regularizar la deuda o restituir el inmueble.",
      },
      {
        title: "2. Demanda de Desalojo y Cobro Ejecutivo",
        description:
          "Vencido el plazo sin respuesta satisfactoria, interponemos la demanda de desalojo y, por vía paralela, la ejecución de alquileres con embargo sobre garantes.",
      },
      {
        title: "3. Traba de Litis y Pedido de Entrega Anticipada",
        description:
          "Notificada la demanda, impulsamos las medidas procesales para obtener la restitución del inmueble en el menor tiempo posible.",
      },
      {
        title: "4. Lanzamiento y Recupero Patrimonial",
        description:
          "Ejecutamos la sentencia hasta la efectiva toma de posesión del inmueble libre de ocupantes y el cobro de las sumas adeudadas.",
      },
    ],
    faqs: [
      {
        question:
          "¿Cuántos meses de atraso se necesitan para iniciar un desalojo por falta de pago?",
        answer:
          "La ley exige la falta de pago de dos (2) períodos consecutivos de alquiler. Cumplido ese extremo, se cursa una intimación por carta documento otorgando un plazo no menor a 10 días corridos para abonar lo adeudado; si no se cancela, queda habilitada la vía judicial de desalojo.",
      },
      {
        question:
          "¿Se puede reclamar el desalojo y el cobro de los alquileres adeudados al mismo tiempo?",
        answer:
          "Sí, pero tramitan en dos expedientes paralelos y complementarios: por un lado el juicio de desalojo (cuyo único objeto es recuperar la tenencia del inmueble) y por otro el juicio ejecutivo de cobro de alquileres (donde se embargan sueldos, cuentas o inmuebles del inquilino y de los garantes para cobrar la deuda más intereses y costas).",
      },
      {
        question:
          "¿Qué pasa si alquilé de palabra (sin contrato escrito) o presté un inmueble y no se quieren ir?",
        answer:
          "También es posible recuperar la propiedad mediante un juicio de desalojo por vencimiento de comodato (préstamo gratuito) o tenencia precaria, previa intimación fehaciente por carta documento revocando el préstamo y exigiendo la restitución en plazo legal.",
      },
      {
        question:
          "¿Por qué es importante que un abogado redacte el contrato de alquiler o boleto de compraventa?",
        answer:
          "Los modelos genéricos de internet suelen contener cláusulas nulas o garantías mal constituidas (por ejemplo, omitir la figura de fiador principal pagador con renuncia a los beneficios de excusión y división) que luego impiden embargar al garante o demoran meses el juicio de desalojo.",
      },
    ],
    iconName: "HomeIcon",
    highlighted: false,
    contactFormArea: "Derecho Inmobiliario / Alquileres",
  },
  {
    slug: "amparos-danos-y-perjuicios-mar-del-plata",
    title: "Litigios, Reclamos y Amparos",
    shortTitle: "Amparos y Daños",
    seoTitle:
      "Abogado de Amparos de Salud y Daños y Perjuicios en Mar del Plata | Dr. Barbaricca",
    seoDescription:
      "Interposición urgente de Amparos de Salud contra obras sociales y prepagas en Mar del Plata. Demandas por daños y perjuicios, accidentes de tránsito e incumplimientos contractuales.",
    seoKeywords: [
      "abogado amparos de salud mar del plata",
      "amparo obra social prepaga mar del plata",
      "abogado danos y perjuicios mar del plata",
      "abogado accidentes de transito mar del plata",
      "reclamo incumplimiento contractual mar del plata",
      "medida cautelar salud urgente",
    ],
    h1Title:
      "Abogado de Amparos de Salud, Reclamos Civiles y Daños en Mar del Plata",
    subtitle:
      "Acciones judiciales urgentes (Medidas Cautelares) y patrocinio en reclamos indemnizatorios por daños y perjuicios.",
    description:
      "Defensa activa de sus derechos y patrimonio ante daños, perjuicios o vulneraciones civiles, contractuales y de cobertura médica.",
    longDescription: [
      "Cuando una obra social o empresa de medicina prepaga niega o demora injustificadamente una cirugía, medicación oncológica o de alto costo, prótesis, internación domiciliaria o cobertura por discapacidad, el tiempo es crítico. Interponemos acciones de Amparo de Salud con pedido de Medida Cautelar urgente para lograr la cobertura en cuestión de días.",
      "Asimismo, representamos a particulares y empresas en reclamos integrales de Daños y Perjuicios derivados de accidentes de tránsito, responsabilidad civil, incumplimientos contractuales y defensa del consumidor.",
    ],
    items: [
      "Amparos de salud urgentes contra Obras Sociales y Empresas de Medicina Prepaga",
      "Medidas cautelares por cobertura al 100% en discapacidad (CUD), tratamientos, cirugías, prótesis y medicamentos",
      "Reclamos contra desafiliaciones arbitrarias o aumentos abusivos de prepagas",
      "Demandas por daños y perjuicios (accidentes de tránsito, responsabilidad civil y profesional)",
      "Reclamos por incumplimiento contractual, vicios ocultos y defensa del consumidor",
      "Redacción estratégica de cartas documento, intimaciones y denuncias preliminares",
    ],
    requirements: [
      "Prescripción u orden médica detallada indicando diagnóstico y carácter urgente (para Amparos de Salud).",
      "Credencial de afiliado, Certificado Único de Discapacidad (CUD, si aplica) y negativa o silencio de la obra social/prepaga.",
      "Datos del siniestro, denuncia policial/administrativa, fotos y certificados médicos (para accidentes de tránsito).",
      "Contratos, facturas, recibos e intercambios previos (para reclamos por incumplimiento contractual).",
    ],
    processSteps: [
      {
        title: "1. Intimación Previa o Vía Urgente",
        description:
          "Intimamos administrativamente o por carta documento en plazos perentorios (24/48 hs en casos de salud) para constituir en mora a la entidad o compañía aseguradora.",
      },
      {
        title: "2. Interposición de Medida Cautelar / Mediación",
        description:
          "En amparos de salud solicitamos una medida cautelar innovativa de cumplimiento inmediato; en daños y perjuicios iniciamos la Mediación Prejudicial Obligatoria.",
      },
      {
        title: "3. Producción de Prueba Técnica y Pericial",
        description:
          "Impulsamos pericias médicas, mecánicas, contables o informáticas para acreditar de forma contundente la totalidad de los rubros indemnizatorios.",
      },
      {
        title: "4. Acuerdo Transaccional o Sentencia Firme",
        description:
          "Negociamos una indemnización integral satisfactoria o llevamos el litigio hasta la sentencia definitiva y su ejecución.",
      },
    ],
    faqs: [
      {
        question:
          "¿En cuánto tiempo se resuelve una medida cautelar en un Amparo de Salud?",
        answer:
          "Una vez presentada la demanda de amparo con la orden médica que acredita la urgencia y la negativa o demora de la obra social/prepaga, los jueces suelen resolver la medida cautelar ordenando la cobertura provisoria inmediata dentro de las 48 a 96 horas hábiles.",
      },
      {
        question:
          "¿Qué pasa si la obra social no responde por escrito sino que solo niega de palabra?",
        answer:
          "La negativa verbal es una práctica común para dilatar el reclamo. Nuestro estudio presenta una nota formal con cargo de recepción o envía un telegrama/carta documento intimando en 48 horas; el simple silencio de la entidad ya configura negativa tácita suficiente para acudir a la justicia.",
      },
      {
        question:
          "¿Cuánto tiempo tengo para reclamar por un accidente de tránsito?",
        answer:
          "El plazo de prescripción para reclamar daños y perjuicios por responsabilidad civil extracontractual (como un accidente de tránsito) es de tres (3) años desde la fecha del hecho. Sin embargo, es fundamental intervenir de inmediato para preservar pruebas, cámaras de seguridad y testigos.",
      },
      {
        question:
          "¿Es obligatorio pasar por mediación antes de iniciar un juicio de daños en Provincia de Buenos Aires?",
        answer:
          "Sí, en la Provincia de Buenos Aires rige la Mediación Prejudicial Obligatoria (Ley 13.951) para la mayoría de los reclamos patrimoniales de daños y perjuicios, lo cual muchas veces permite alcanzar un acuerdo indemnizatorio rápido sin necesidad de esperar todo el proceso judicial.",
      },
    ],
    iconName: "Shield",
    highlighted: false,
    contactFormArea: "Reclamos Civiles / Daños y Perjuicios",
  },
  {
    slug: "consultoria-juridica-buenos-aires",
    title: "Consultoría y Asesoramiento",
    shortTitle: "Consultoría Jurídica",
    seoTitle:
      "Consultoría Jurídica Presencial y Online en Mar del Plata y PBA | Dr. Barbaricca",
    seoDescription:
      "Consultas legales presenciales en Mar del Plata y Batán, o por videollamada en toda la Provincia de Buenos Aires. Dictámenes jurídicos, cartas documento y estudio de expedientes.",
    seoKeywords: [
      "consulta abogado mar del plata",
      "asesoramiento legal mar del plata",
      "abogado online provincia de buenos aires",
      "abogado batan general pueyrredon",
      "redaccion carta documento mar del plata",
      "estudio de expedientes judiciales scba",
    ],
    h1Title:
      "Consultoría Jurídica Presencial y Online en Mar del Plata y Provincia de Buenos Aires",
    subtitle:
      "Diagnóstico legal preciso, redacción de instrumentos y seguimiento de expedientes judiciales en los 20 Departamentos Judiciales bonaerenses.",
    description:
      "Consultas inmediatas y dictámenes detallados sobre la viabilidad de acciones judiciales, contractuales y administrativas.",
    longDescription: [
      "Una consulta jurídica preventiva a tiempo evita errores irreversibles antes de firmar un contrato, responder una intimación o tomar una decisión patrimonial o familiar.",
      "Brindamos atención personalizada en Mar del Plata y Batán (Partido de General Pueyrredón), así como consultas por videollamada (Google Meet, Zoom o WhatsApp) para clientes en cualquier localidad de la Provincia de Buenos Aires, respaldados por el sistema de gestión judicial 100% electrónica de la Suprema Corte (SCBA).",
    ],
    items: [
      "Consultas jurídicas verbales presenciales en Mar del Plata o por videollamada",
      "Consultas evacuadas por escrito y elaboración de dictámenes jurídicos preventivos",
      "Redacción y contestación estratégica de Cartas Documento y Telegramas Laborales/Civiles",
      "Auditoría, vista y diagnóstico de expedientes judiciales en trámite (sistema MEV SCBA)",
      "Segunda opinión profesional sobre litigios complejos o convenios antes de firmar",
      "Asesoramiento jurídico continuo para profesionales, comercios y empresas tecnológicas",
    ],
    requirements: [
      "Breve reseña cronológica de los hechos o de la duda legal a resolver.",
      "Copia o fotografía legible de cualquier contrato, intimación o carta documento recibida (atención: las cartas documento tienen plazos estrictos de contestación).",
      "Número de expediente y juzgado radicado (en caso de solicitar auditoría de un juicio ya iniciado).",
    ],
    processSteps: [
      {
        title: "1. Contacto Directo por WhatsApp o Formulario",
        description:
          "Nos envía el motivo de su consulta para asignarle un turno prioritario presencial o virtual (en casos urgentes como cartas documento, atendemos en el día).",
      },
      {
        title: "2. Análisis Previo de Documentación",
        description:
          "Revisamos los documentos, contratos o actuaciones judiciales antes de la reunión para aprovechar al máximo el tiempo de entrevista.",
      },
      {
        title: "3. Entrevista y Hoja de Ruta Legal",
        description:
          "Explicamos en lenguaje claro sus derechos, los riesgos reales, los costos estimados y las alternativas de acción extrajudicial o judicial.",
      },
      {
        title: "4. Ejecución Inmediata",
        description:
          "Si decide avanzar con una carta documento, convenio o demanda, el importe de la consulta inicial se bonifica dentro de la gestión encomendada.",
      },
    ],
    faqs: [
      {
        question:
          "Recibí una Carta Documento, ¿cuánto tiempo tengo para responderla?",
        answer:
          "Es fundamental consultar de inmediato. Según el tipo de intimación (locativa, contractual, familiar o laboral), los plazos suelen oscilar entre 48 horas y 10 días corridos. No contestar en término o responder sin patrocinio letrado puede generar presunciones en su contra o el reconocimiento tácito de reclamos.",
      },
      {
        question:
          "¿Cómo funcionan las consultas jurídicas por videollamada para el interior de la Provincia?",
        answer:
          "Coordinamos día y horario por WhatsApp, usted nos adelanta la documentación en PDF o foto, y mantenemos la reunión por Google Meet, Zoom o videollamada de WhatsApp con la misma dedicación y validez que en el estudio. Gracias al portal digital de la SCBA, podemos litigar en cualquier Departamento Judicial bonaerense sin que usted deba trasladarse.",
      },
      {
        question:
          "¿Puedo pedir una segunda opinión si ya tengo un juicio iniciado en otro estudio?",
        answer:
          "Sí, dentro del marco ético profesional y con los datos de radicación del expediente podemos analizar el estado procesal de la causa y brindarle un informe claro sobre su situación actual y las etapas pendientes.",
      },
      {
        question:
          "¿Atienden consultas de clientes en Batán, Sierra de los Padres, Miramar o Balcarce?",
        answer:
          "Sí. Cubrimos de forma directa todo el Partido de General Pueyrredón (Mar del Plata, Batán, Sierra de los Padres) y localidades vecinas del Departamento Judicial de Mar del Plata (Miramar, Mar Chiquita, Balcarce), además del resto de la Provincia de Buenos Aires.",
      },
    ],
    iconName: "BookOpen",
    highlighted: false,
    contactFormArea: "Otro Asunto",
  },
];

export function getSpecialtyBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
