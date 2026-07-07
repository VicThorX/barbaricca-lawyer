import * as Icons from "lucide-react";

export interface PracticeArea {
  title: string;
  description: string;
  items: string[];
  iconName: keyof typeof Icons;
  highlighted?: boolean;
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Derecho de Familia",
    description: "Asesoramiento legal empático y riguroso para proteger las relaciones familiares y los derechos de los niños y adolescentes.",
    items: [
      "Divorcios vinculares y de común acuerdo",
      "Reclamo de alimentos y cuota alimentaria",
      "Régimen de comunicación y cuidado personal",
      "Filiación y reclamación de paternidad",
      "Responsabilidad parental y curatela",
      "Reconocimiento de hijos e impugnación de paternidad"
    ],
    iconName: "Heart",
    highlighted: true,
  },
  {
    title: "Derecho Informático & Tecnología",
    description: "Protección legal y técnica especializada para software, activos digitales, privacidad de datos y propiedad intelectual.",
    items: [
      "Registro de marcas, patentes y modelos de utilidad ante el INPI",
      "Protección de software, código fuente y algoritmos",
      "Derechos de autor, copyright y licencias de uso tecnológico",
      "Redacción de contratos de software (SaaS, términos y condiciones)",
      "Acuerdos de confidencialidad (NDA) y protección de datos",
      "Defensa técnica ante fraudes y delitos informáticos"
    ],
    iconName: "Code",
    highlighted: true,
  },
  {
    title: "Sucesiones",
    description: "Tramitación y planificación sucesoria integral para resguardar y organizar el patrimonio familiar ante fallecimientos.",
    items: [
      "Sucesiones intestadas (sin testamento)",
      "Sucesiones testamentarias",
      "Redacción de testamentos y legados",
      "Planificación hereditaria y adjudicación de bienes"
    ],
    iconName: "FileText",
    highlighted: false,
  },
  {
    title: "Derecho Inmobiliario y Alquileres",
    description: "Protección integral para propietarios, locadores e inquilinos. Redacción y gestión de contratos y cobranzas.",
    items: [
      "Redacción de contratos de locación (vivienda y comercial)",
      "Redacción de boleto de compraventa",
      "Juicios de desalojos rápidos",
      "Administración de alquileres y gestión de cobranzas",
      "Asesoramiento en transacciones inmobiliarias"
    ],
    iconName: "HomeIcon",
    highlighted: false,
  },
  {
    title: "Litigios, Reclamos y Amparos",
    description: "Defensa activa de sus derechos y patrimonio ante daños, perjuicios o vulneraciones civiles y constitucionales.",
    items: [
      "Demandas por daños y perjuicios (accidentes, contratos)",
      "Amparos de salud, previsionales y constitucionales",
      "Redacción de denuncias penales preliminares y cartas documento",
      "Negociación de acuerdos extrajudiciales"
    ],
    iconName: "Shield",
    highlighted: false,
  },
  {
    title: "Consultoría y Asesoramiento",
    description: "Consultas inmediatas y dictámenes detallados sobre la viabilidad de acciones judiciales y administrativas.",
    items: [
      "Consultas verbales en despacho o virtuales",
      "Consultas evacuadas por escrito",
      "Estudio e información de actuaciones judiciales o administrativas",
      "Dictámenes jurídicos preventivos"
    ],
    iconName: "BookOpen",
    highlighted: false,
  }
];
