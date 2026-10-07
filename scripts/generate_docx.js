import fs from 'fs';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType
} from 'docx';

function createHeaderCell(text, widthPercent = 35) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill: '006194' },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            bold: true,
            color: 'FFFFFF',
            font: 'Arial',
            size: 21,
          }),
        ],
      }),
    ],
  });
}

function createLabelCell(text, widthPercent = 35) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            bold: true,
            color: '003355',
            font: 'Arial',
            size: 20,
          }),
        ],
      }),
    ],
  });
}

function createInputCell(placeholder = '[Completar aquí...]', widthPercent = 65) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: placeholder,
            color: '666666',
            font: 'Arial',
            size: 20,
            italics: true,
          }),
        ],
      }),
    ],
  });
}

function makeTable(rowsData) {
  const tableRows = rowsData.map(row => {
    return new TableRow({
      children: [
        createLabelCell(row.label),
        createInputCell(row.placeholder || '[Completar información...]'),
      ],
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: tableRows,
  });
}

function makeSectionHeading(title, numberStr) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [
      new TextRun({
        text: `${numberStr}. ${title}`,
        bold: true,
        color: '006194',
        font: 'Arial',
        size: 24,
      }),
    ],
  });
}

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        // Main Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: 'CAJA COMUNAL "FUENTE DE VIDA"',
              bold: true,
              color: '006194',
              font: 'Arial',
              size: 32,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: 'FORMULARIO OFICIAL DE LEVANTAMIENTO DE INFORMACIÓN PARA LA PÁGINA WEB',
              bold: true,
              color: '006D30',
              font: 'Arial',
              size: 22,
            }),
          ],
        }),

        // Guidance Box
        new Paragraph({
          spacing: { before: 100, after: 200 },
          children: [
            new TextRun({
              text: 'Estimado/a Gerente y Equipo Administrativo:\n',
              bold: true,
              font: 'Arial',
              size: 20,
            }),
            new TextRun({
              text: 'Este documento tiene como objetivo recopilar los datos oficiales, reales y actualizados de la institución para cargarlos en la página web oficial. Por favor complete cada uno de los campos en las tablas a continuación. Si algún punto no aplica o está en definición, puede indicarlo.',
              font: 'Arial',
              size: 20,
            }),
          ],
        }),

        // 1. Datos Generales e Identidad
        makeSectionHeading('Identidad Institucional y Legal', '1'),
        makeTable([
          { label: 'Nombre Legal Completo:', placeholder: 'Ej: Caja Comunal Fuente de Vida Sanjapamba' },
          { label: 'RUC o Número de Registro (si aplica):', placeholder: 'Ej: 1890000000001 / En trámite / Registro Comunal' },
          { label: 'Fecha o Año de Fundación:', placeholder: 'Ej: Año 2009 (15 años)' },
          { label: 'Lema o Eslogan Oficial:', placeholder: 'Ej: Creciendo juntos con el fruto de nuestra tierra' },
          { label: 'Comunidad / Parroquia / Cantón / Provincia:', placeholder: 'Ej: Sanjapamba, Parroquia ..., Cantón ..., Chimborazo, Ecuador' },
        ]),

        // 2. Misión, Visión y Propósito
        makeSectionHeading('Misión, Visión y Principios', '2'),
        makeTable([
          { label: '¿Quiénes Somos? (Breve reseña):', placeholder: 'Describa en 2 o 3 párrafos la historia y el rol de la caja en la comunidad...' },
          { label: 'Misión Institucional:', placeholder: 'Razón de ser de la caja y a quiénes sirve...' },
          { label: 'Visión Institucional:', placeholder: 'Hacia dónde se proyecta la institución en los próximos 3 a 5 años...' },
          { label: 'Valores Principales (3 a 5 valores):', placeholder: 'Ej: Transparencia, Solidaridad comunitaria, Trato humano, Confianza...' },
        ]),

        // 3. Cifras e Indicadores Reales
        makeSectionHeading('Cifras y Datos de Impacto para la Web', '3'),
        makeTable([
          { label: 'Años de Trayectoria:', placeholder: 'Ej: +15 años al servicio del agro y la comunidad' },
          { label: 'Número de Socios Activos:', placeholder: 'Ej: Más de 2,400 socios / familias beneficiadas' },
          { label: 'Porcentaje o Tasa de Aprobación de Créditos:', placeholder: 'Ej: 98% de solicitudes aprobadas' },
          { label: 'Monto total colocado en créditos o ahorro (opcional):', placeholder: 'Ej: $150,000 USD administrados / en circulación' },
        ]),

        // 4. Productos de Ahorro
        makeSectionHeading('Servicios de Ahorro', '4'),
        makeTable([
          { label: 'Nombre de la Cuenta de Ahorro a la Vista:', placeholder: 'Ej: Ahorro Comunal y Vista' },
          { label: 'Monto mínimo para abrir la cuenta:', placeholder: 'Ej: $10.00 USD' },
          { label: 'Costo de apertura o mantenimiento:', placeholder: 'Ej: $0.00 (Sin costo de mantenimiento)' },
          { label: 'Tasa de interés que gana el ahorro:', placeholder: 'Ej: 2.5% anual / Rendimiento acordado en asamblea anual' },
          { label: 'Disponibilidad para retiros:', placeholder: 'Ej: Retiro inmediato en ventanilla' },
        ]),

        // 5. Inversiones a Plazo Fijo (DPF)
        makeSectionHeading('Depósitos a Plazo Fijo (DPF)', '5'),
        makeTable([
          { label: 'Monto mínimo de inversión:', placeholder: 'Ej: Desde $100.00 USD' },
          { label: 'Tasa para 90 días:', placeholder: 'Ej: 6.50% anual' },
          { label: 'Tasa para 180 días:', placeholder: 'Ej: 7.50% anual' },
          { label: 'Tasa para 360 días (1 año):', placeholder: 'Ej: 9.50% anual' },
          { label: 'Forma de pago de los intereses:', placeholder: 'Ej: Mensual a la libreta o al vencimiento del plazo' },
          { label: 'Documento que se entrega al socio:', placeholder: 'Ej: Certificado / Póliza de Depósito a Plazo Fijo numerada' },
        ]),

        // 6. Líneas de Crédito y Microcrédito
        makeSectionHeading('Líneas de Crédito Comunitario', '6'),
        makeTable([
          { label: 'Línea 1: Microcrédito Agrícola / Ganadero:', placeholder: 'Destino: Semillas, abonos, ganado, maquinaria. Montos: $... a $...' },
          { label: 'Línea 2: Crédito para Negocios / Comercio:', placeholder: 'Destino: Tiendas, artesanías, mercadería. Montos: $... a $...' },
          { label: 'Línea 3: Crédito Personal / Emergencia:', placeholder: 'Destino: Salud, educación familiar, hogar. Montos: $... a $...' },
          { label: 'Tasa de interés mensual / anual de crédito:', placeholder: 'Ej: 1.2% mensual / 14% anual (ajustar a valor real)' },
          { label: 'Plazos máximos de pago:', placeholder: 'Ej: De 3 a 24 meses / Pagos trimestrales según cosecha' },
          { label: 'Tipo de garantías solicitadas:', placeholder: 'Ej: Aval solidario de 1 socio / Garantía comunitaria' },
          { label: 'Tiempo estimado de desembolso:', placeholder: 'Ej: 24 a 48 horas tras aprobación del comité' },
        ]),

        // 7. Requisitos de Afiliación
        makeSectionHeading('Requisitos Oficiales para Nuevos Socios', '7'),
        makeTable([
          { label: 'Requisito 1 (Documento personal):', placeholder: 'Ej: Cédula de identidad original y copia' },
          { label: 'Requisito 2 (Comprobante de domicilio):', placeholder: 'Ej: Copia de planilla de luz o agua / certificado comunal' },
          { label: 'Requisito 3 (Aporte inicial):', placeholder: 'Ej: Depósito de $10 USD para libreta de ahorros' },
          { label: 'Otros requisitos o cuota de inscripción:', placeholder: 'Ej: Cuota de ingreso de $... USD (si aplica)' },
        ]),

        // 8. Contacto, Ubicación y Horarios
        makeSectionHeading('Datos de Contacto, Ubicación y Horarios de Atención', '8'),
        makeTable([
          { label: 'Dirección física exacta de la oficina:', placeholder: 'Ej: Plaza Central de Sanjapamba, a 150m de la Iglesia' },
          { label: 'Horario de Lunes a Viernes:', placeholder: 'Ej: 08:00 a 12:30 y 14:00 a 17:00' },
          { label: 'Horario de Sábados / Días de Feria:', placeholder: 'Ej: 08:30 a 13:00' },
          { label: 'Número de WhatsApp oficial para atención:', placeholder: 'Ej: +593 99 234 5678' },
          { label: 'Teléfono convencional / fijo:', placeholder: 'Ej: (03) 2... o Celular alternativo' },
          { label: 'Correo electrónico oficial:', placeholder: 'Ej: atencion@fuentedevida-sanjapamba.org' },
          { label: 'Redes sociales (Facebook, TikTok, etc.):', placeholder: 'Ej: facebook.com/cajafuentedevida' },
        ]),

        // 9. Testimonio y Fotografía
        makeSectionHeading('Testimonio de Socio Representativo (Opcional)', '9'),
        makeTable([
          { label: 'Nombre completo del socio o socia:', placeholder: 'Ej: Segundo Chimbolema Masabanda' },
          { label: 'Comunidad / Sector donde reside:', placeholder: 'Ej: Sanjapamba Alto' },
          { label: 'Años como socio/a:', placeholder: 'Ej: 9 años' },
          { label: 'Actividad que realiza:', placeholder: 'Ej: Productor de papa y hortalizas' },
          { label: 'Frase o experiencia vivida con la caja:', placeholder: 'Ej: Breve comentario de cómo la caja le ayudó en su emprendimiento o familia' },
        ]),

        // 10. Firmas y Responsables
        makeSectionHeading('Responsables de la Información Suministrada', '10'),
        makeTable([
          { label: 'Nombre del Gerente General:', placeholder: 'Nombres y Apellidos' },
          { label: 'Nombre del Presidente/a del Directorio:', placeholder: 'Nombres y Apellidos' },
          { label: 'Fecha de llenado de este formulario:', placeholder: 'Día / Mes / Año' },
        ]),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('FORMULARIO_INFORMACION_GERENCIA.docx', buffer);
  console.log('Documento FORMULARIO_INFORMACION_GERENCIA.docx generado con éxito.');
});
