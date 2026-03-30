// =============================================================================
// MALER FELDER - ALL EXTRACTED CONTENT FROM EXISTING WEBSITE
// Source: https://malerfelder.ch
// Preserved: All pages, all text content, all legal pages
// =============================================================================

// =============================================================================
// COMPANY INFORMATION (NAP - Name, Address, Phone)
// =============================================================================
export const COMPANY = {
  name: "Maler Patrick Felder GmbH",
  shortName: "Maler Felder",
  founder: "Patrick Felder",
  address: {
    street: "Schulstrasse 34",
    zip: "6037",
    city: "Root",
    country: "Schweiz",
    full: "Schulstrasse 34, 6037 Root"
  },
  contact: {
    phone: "079 530 12 12",
    phoneLink: "+41795301212",
    email: "info@malerfelder.ch",
    website: "https://malerfelder.ch"
  },
  legal: {
    uid: "CHE-162.150.643",
    register: "Handelsregisteramt Kanton Luzern",
    foundedYear: 2025,
    operationalStart: "1. Januar 2026"
  },
  experience: {
    yearsTotal: 16,
    apprenticeshipStart: "August 2010",
    apprenticeshipEnd: "2013",
    certification: "Baustellenleiter SMGV (2019-2021)"
  },
  social: {
    instagram: "https://instagram.com/malerfelder", // Update with actual URL
    facebook: "https://facebook.com/malerfelder",    // Update with actual URL
  }
};

// =============================================================================
// NAVIGATION STRUCTURE (Preserved from existing site)
// =============================================================================
export const NAVIGATION = {
  main: [
    { label: "Startseite", href: "/" },
    { label: "Dienstleistungen", href: "/dienstleistungen" },
    { label: "Kontakt", href: "/kontakt" }
  ],
  footer: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutzerklärung", href: "/datenschutzerklaerung" }
  ],
  cta: [
    { label: "Offerte anfragen", href: "/kontakt", variant: "primary" },
    { label: "Anrufen", href: `tel:${COMPANY.contact.phoneLink}`, variant: "secondary" }
  ]
};

// =============================================================================
// HOME PAGE CONTENT (Startseite)
// =============================================================================
export const HOME = {
  meta: {
    title: "Startseite - Maler Patrick Felder GmbH",
    description: "Mit über 16 Jahren Erfahrung gestaltet die Maler Patrick Felder GmbH Ihr Zuhause. Beratung bis Umsetzung im Raum Luzern – Farbe, Stil, Qualität."
  },
  hero: {
    headline: "Ich bringe Farbe in Ihr Leben!",
    subheadline: "Mit über 16 Jahren Erfahrung und stetiger Weiterbildung bin ich Ihr kompetenter Partner für Malerarbeiten in Ihrer Region. Von der Beratung bis zur fachgerechten Umsetzung gestalte ich Ihr Zuhause ganz nach Ihren Wünschen.",
    ctaPrimary: "Dienstleistungen",
    ctaSecondary: "Über mich"
  },
  // Content sections from original homepage
  sections: [
    {
      title: "Dienstleistungen",
      href: "/dienstleistungen",
      description: "Professionelle Malerarbeiten für Innen und Aussen"
    },
    {
      title: "Über mich",
      href: "/ueber-mich",
      description: "Lernen Sie mich und meine Erfahrung kennen"
    },
    {
      title: "Kontakt",
      href: "/kontakt",
      description: "Nehmen Sie unkompliziert Kontakt auf"
    }
  ]
};

// =============================================================================
// SERVICES PAGE (Dienstleistungen) - ALL SERVICES PRESERVED
// =============================================================================
export const SERVICES = {
  meta: {
    title: "Dienstleistungen - Maler Patrick Felder GmbH",
    description: "Innen- und Fassadenrenovationen, Tapezierarbeiten, Wasserschadensanierung & mehr – Ihre Maler-Experten der Maler Patrick Felder GmbH im Raum Luzern."
  },
  headline: "Dienst­leistungen",
  introduction: "Professionelle Malerarbeiten mit höchstem Qualitätsanspruch für Ihr Zuhause und Ihre Geschäftsräume.",
  services: [
    {
      id: "innenrenovationen",
      number: "01",
      title: "Innenrenovationen",
      description: "Ob frische Wandfarbe, stilvolle Akzente oder eine komplette Raumgestaltung – wir verleihen Ihren Innenräumen neuen Glanz. Mit präziser Handwerksarbeit, hochwertigen Materialien und einem Auge fürs Detail sorgen wir für ein Ergebnis, das begeistert."
    },
    {
      id: "fassadenrenovationen",
      number: "02",
      title: "Fassadenrenovationen",
      description: "Wind, Wetter und Zeit hinterlassen Spuren – wir bringen Ihre Fassade wieder in Topform. Mit fachgerechter Reinigung, professioneller Sanierung und langlebigen Anstrichen schützen wir Ihr Gebäude nicht nur, sondern verleihen ihm auch neuen Glanz."
    },
    {
      id: "tapezierarbeiten",
      number: "03",
      title: "Tapezierarbeiten",
      description: "Ob modern, klassisch oder extravagant – mit der richtigen Tapete verleihen wir Ihren Räumen Charakter und Stil. Wir übernehmen das präzise Entfernen alter Beläge, die professionelle Untergrundvorbereitung und das makellose Anbringen Ihrer Wunsch-Tapete. So entsteht ein harmonisches Raumgefühl, das perfekt zu Ihnen passt."
    },
    {
      id: "moos-schimmel",
      number: "04",
      title: "Moos- und Schimmelbehandlungen",
      description: "Schimmel und Moos sehen nicht nur unschön aus, sie können auch Bausubstanz und Gesundheit beeinträchtigen. Wir entfernen Schimmel und Moos gründlich, nachhaltig und mit umweltverträglichen Methoden. Ob an Wänden, Decken oder Fassaden – wir sorgen für dauerhaft saubere, geschützte Oberflächen."
    },
    {
      id: "wasserschaden",
      number: "05",
      title: "Wasserschaden­sanierungen",
      description: "Nach einem Wasserschaden bringen wir Ihre Wände und Decken wieder in Topform. Wir beseitigen Flecken, Verfärbungen und abgeplatzte Stellen und sorgen für ein gleichmässig schönes Finish. Saubere, präzise Malerarbeit für ein rundum gepflegtes Erscheinungsbild."
    },
    {
      id: "spritz-gips",
      number: "06",
      title: "Kleine Spritz- und Gipserarbeiten",
      description: "Ein Radiator in neuem Glanz erstrahlen lassen oder eine Wand mit neuem Abrieb verputzen. Wir übernehmen kleine Spritz- und Gipserarbeiten. Für eine gepflegte, gleichmässige Oberfläche."
    },
    {
      id: "beton-impraegnierung",
      number: "07",
      title: "Beton- und Steinimprägnierungen",
      description: "Wir reinigen und imprägnieren Beton- und Steinflächen für eine langanhaltend saubere und geschützte Oberfläche. Die Behandlung verhindert das Eindringen von Feuchtigkeit und beugt Moos, Schmutz und Witterungsschäden vor. Für dauerhaft, wiederstandsfähige Flächen."
    },
    {
      id: "bodenmarkierungen",
      number: "08",
      title: "Bodenmarkierungen",
      description: "Wir führen Bodenmarkierungsarbeiten wie das Einzeichnen von Parkplätzen, Zahlen und Buchstaben aus. Mit sauberen Linien und beständigen Farben sorgen wir für klare Orientierung und ein ordentliches Gesamtbild auf Ihrem Parkplatz oder in Ihrer Tiefgarage."
    }
  ]
};

// =============================================================================
// ABOUT PAGE (Über mich) - COMPLETE BIO PRESERVED
// =============================================================================
export const ABOUT = {
  meta: {
    title: "Über mich - Maler Patrick Felder GmbH",
    description: "Lernen Sie das Team der Maler Patrick Felder GmbH kennen – Meisterbetrieb mit Herz, Präzision und Leidenschaft für exzellente Malerarbeiten."
  },
  headline: "Über mich",
  person: {
    name: "Patrick Felder",
    role: "Geschäftsführer / Inhaber"
  },
  biography: [
    "Meine berufliche Laufbahn als Maler begann im August 2010, als ich meine Lehre als Maler EFZ begonnen habe. Nach meiner erfolgreich abgeschlossenen Berufslehre im Jahr 2013 sammelte ich weiterhin umfangreiche Praxiserfahrung.",
    "Zwischen 2019 und 2021 absolvierte ich die Weiterbildung zum Baustellenleiter SMGV, um meine Fach- und Führungskompetenzen gezielt zu erweitern. In den darauffolgenden Jahren fokussierte ich mich intensiv auf die Vorbereitung meiner eigenen Selbstständigkeit.",
    "Im Oktober 2025 gründete ich schliesslich meine eigene Firma, die Maler Patrick Felder GmbH. Der operative Startschuss fiel am 1. Januar 2026, womit ich meine langjährige Erfahrung, mein Fachwissen und meine Leidenschaft für das Malerhandwerk in mein eigenes Unternehmen einbringen kann.",
    "Ich freue mich auf neue Herausforderungen und werde meinen Beruf weiterhin mit hoher Qualität und grossem Engagement weiterführen."
  ],
  timeline: [
    { year: "2010", event: "Lehre als Maler EFZ begonnen" },
    { year: "2013", event: "Berufslehre erfolgreich abgeschlossen" },
    { year: "2019-2021", event: "Weiterbildung zum Baustellenleiter SMGV" },
    { year: "Oktober 2025", event: "Gründung Maler Patrick Felder GmbH" },
    { year: "1. Januar 2026", event: "Operativer Start" }
  ]
};

// =============================================================================
// CONTACT PAGE (Kontakt) - ALL CONTENT PRESERVED
// =============================================================================
export const CONTACT = {
  meta: {
    title: "Kontakt - Maler Patrick Felder GmbH",
    description: "Kontaktieren Sie die Maler Patrick Felder GmbH: unkomplizierte Anfrage, persönlicher Service und professionelle Umsetzung Ihrer Projekte im Raum Luzern."
  },
  headline: "Kontakt",
  subheadline: "Wir freuen uns auf Ihre Anfrage!",
  ctaText: "Möchten Sie Ihr nächstes Projekt umsetzen? Melden Sie sich! Wir helfen Ihnen gerne und unkompliziert weiter.",
  contactMethods: [
    {
      type: "phone",
      label: "Telefon",
      value: COMPANY.contact.phone,
      href: `tel:${COMPANY.contact.phoneLink}`,
      description: "Direkt anrufen"
    },
    {
      type: "email",
      label: "E-Mail",
      value: COMPANY.contact.email,
      href: `mailto:${COMPANY.contact.email}`,
      description: "Schreiben Sie uns"
    }
  ],
  address: {
    label: "Adresse",
    value: `${COMPANY.name}\n${COMPANY.address.street}\n${COMPANY.address.zip} ${COMPANY.address.city}`
  },
  socialHeadline: "Folgen Sie uns auf Social Media"
  // Note: No actual social media links were found on the original site
};

// =============================================================================
// IMPRESSUM PAGE - COMPLETE LEGAL CONTENT PRESERVED
// =============================================================================
export const IMPRESSUM = {
  meta: {
    title: "Impressum - Maler Patrick Felder GmbH",
    description: "Impressum der Maler Patrick Felder GmbH – Schulstrasse 34, 6037 Root, Kontaktangaben & rechtliche Hinweise zur Firma."
  },
  headline: "Impressum",
  sections: {
    contact: {
      title: "Kontakt",
      content: [
        `${COMPANY.name}`,
        `${COMPANY.address.street}`,
        `${COMPANY.address.zip} ${COMPANY.address.city}`,
        ``,
        `Telefon: ${COMPANY.contact.phone}`,
        `E-Mail: ${COMPANY.contact.email}`
      ]
    },
    commercialRegister: {
      title: "Handels­register­eintrag",
      content: [
        `Eingetragener Firmenname: ${COMPANY.name}`,
        `UID: ${COMPANY.legal.uid}`,
        `Handelsregisteramt: Kanton Luzern`
      ]
    },
    copyright: {
      title: "Urheberrechte",
      content: [
        `Der Inhalt und die Struktur dieser Webseite sind urheberrechtlich geschützt. Sämtliche Vervielfältigung von Daten – insbesondere die Verwendung von Codes, Logos, Text- oder Bildmaterial – bedarf der vorherigen Zustimmung. Die ${COMPANY.name} aktualisiert und prüft regelmässig alle Inhalte auf der Seite. Trotzdem ist es möglich, dass sich Informationen inzwischen verändert haben. Die ${COMPANY.name} übernimmt keine Garantie oder Haftung für deren Aktualität, Richtigkeit und Vollständigkeit. Dasselbe gilt auch für alle weiteren Webseiten, auf welche per Link verwiesen wird.`
      ]
    }
  }
};

// =============================================================================
// DATENSCHUTZERKLÄRUNG - COMPLETE LEGAL CONTENT PRESERVED
// =============================================================================
export const DATENSCHUTZ = {
  meta: {
    title: "Datenschutzerklärung - Maler Patrick Felder GmbH",
    description: "Datenschutzerklärung der Maler Patrick Felder GmbH – Ihre Privatsphäre ist uns wichtig."
  },
  headline: "Datenschutzerklärung",
  sections: {
    general: {
      title: "Allgemeine Hinweise",
      content: [
        `${COMPANY.name}, ${COMPANY.address.full}, ${COMPANY.contact.phone}, ${COMPANY.contact.email} ist Betreiber der Webseite ${COMPANY.contact.website} und der darauf angebotenen Dienste und somit verantwortlich für die Erhebung, Verarbeitung und Nutzung von persönlichen Daten und die Vereinbarkeit der Datenbearbeitung mit schweizerischem Recht.`,
        `Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Grundsätzlich erheben wir personenbezogene Daten nur, wenn sie für die Erbringung der konkreten Leistung erforderlich sind. Persönliche Daten werden streng vertraulich behandelt. Es findet keine Weitergabe Ihrer Daten statt, es sei denn wir sind rechtlich dazu verpflichtet (z. B. Anfrage einer Ermittlungsbehörde) oder berechtigt (z. B. im Rahmen einer Auftragsdatenverarbeitung) oder Sie haben einer Weitergabe an Dritte ausdrücklich zugestimmt. Eine Datenweitergabe an Dritte erfolgt insbesondere, soweit dies zur Vertragserfüllung bzw. -abwicklung erforderlich ist. Auch Dritte werden bzw. sind selbstverständlich verpflichtet, Ihre Daten zu schützen und sie nur für den genau vorgegebenen Zweck zu nutzen. Darüber hinaus sind sie verpflichtet, die Daten gemäss dieser Datenschutzerklärung und der geltenden Gesetzeslage zu behandeln. Wir bearbeiten Personendaten für jene Dauer, die für den jeweiligen Zweck oder die jeweiligen Zwecke erforderlich ist. Bei länger dauernden Aufbewahrungspflichten aufgrund von gesetzlichen und sonstigen Pflichten, denen wir unterliegen, passen wir die Bearbeitung entsprechend an.`,
        `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Webseite besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.`,
        `Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.`
      ]
    },
    rights: {
      title: "Anspruch auf Auskunft, Löschung, Berichtigung und Aufbewahrung von Daten",
      content: [
        `Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wir weisen Sie darauf hin, dass wir uns auch in diesem Fall die Forderung eines Nachweises der Identität vorbehalten und dass im Falle der Löschung Ihrer Daten eine Inanspruchnahme unserer Dienste nicht oder nicht in vollem Umfang möglich ist. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.`,
        `Personen, über die wir Personendaten bearbeiten, verfügen über ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde für den Datenschutz. Aufsichtsbehörde für den Datenschutz in der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (https://www.edoeb.admin.ch/edoeb/de/home.html).`,
        `Sie haben das Recht, Ihre Einwilligung zur Bearbeitung der sie betreffenden Personendaten für einen oder mehrere bestimmte Zwecke jederzeit zu widerrufen, wenn die Bearbeitung auf ihrer ausdrücklichen Einwilligung beruht. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmässigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.`,
        `Bitte beachten Sie, dass für bestimmte Daten gesetzliche Aufbewahrungsfristen gelten. Diese Daten müssen bis zum Ablauf der Frist von uns gespeichert werden. Wenn Sie deren Löschung beantragt haben, sperren wir diese Daten in unserem System und nutzen sie ausschliesslich zur Erfüllung der gesetzlichen Pflichten.`
      ]
    },
    changes: {
      title: "Änderung dieser Datenschutzerklärung",
      content: [
        `Wir behalten uns vor, die Datenschutzerklärung von Zeit zu Zeit an neue Gegebenheiten anzupassen. Entsprechende Änderungen gelten mit Wirkung für die Zeit nach Aufschaltung der Änderungen. Folglich empfehlen wir Ihnen, diese Datenschutzerklärung regelmässig einzusehen.`
      ]
    },
    ssl: {
      title: "SSL- bzw. TLS-Verschlüsselung",
      content: [
        `Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.`,
        `Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.`
      ]
    },
    serverLogs: {
      title: "Server-Log-Dateien",
      content: [
        `Beim Zugriff auf unserer Webseite werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Referrer URL, Hostname des zugreifenden Rechners, verwendetes Betriebssystem, Browsertyp und Browserversion. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.`,
        `In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.`
      ]
    },
    cookies: {
      title: "Cookies",
      content: [
        `Diese Webseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.`,
        `Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.`,
        `Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschliessen sowie das automatische Löschen der Cookies beim Schliessen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Webseite eingeschränkt sein.`,
        `Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden gespeichert. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Diensten. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.`
      ]
    },
    contactForm: {
      title: "Kontaktformular",
      content: [
        `Wenn Sie uns per Kontaktformular eine Anfrage zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.`
      ]
    },
    recaptcha: {
      title: "Google reCAPTCHA",
      content: [
        `Wir nutzen Google reCAPTCHA auf unserer Webseite. Betreiber ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.`,
        `Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unserer Webseite (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Webseitenbesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Besucher die Webseite betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des Besuchers auf der Webseite oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet. Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Webseitenbesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.`,
        `Der Betreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.`,
        `Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung von Google entnehmen Sie folgenden Links: https://www.google.com/intl/de/policies/privacy/ und https://www.google.com/recaptcha/intro/android.html.`
      ]
    }
  }
};

// =============================================================================
// GOOGLE REVIEWS DATA (If available - none found on original site)
// This structure is ready for when reviews are provided
// =============================================================================
export const REVIEWS = {
  meta: {
    title: "Bewertungen - Maler Patrick Felder GmbH",
    description: "Lesen Sie, was unsere Kunden über die Maler Patrick Felder GmbH sagen. Echte Google Bewertungen aus dem Raum Luzern."
  },
  headline: "Kundenbewertungen",
  subheadline: "Das sagen unsere Kunden über uns",
  // Note: No reviews found on the existing website
  // This structure is ready for when real Google Reviews are provided
  reviews: [] as Array<{
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: number;
  }>,
  aggregateRating: null as { ratingValue: number; reviewCount: number } | null
};

// =============================================================================
// PROCESS / ABLAUF SECTION (New - not on original but adds value)
// =============================================================================
export const PROCESS = {
  headline: "Ablauf — klar und ohne Umwege",
  steps: [
    {
      number: "01",
      title: "Begehung",
      description: "Wir besichtigen Ihr Objekt vor Ort, besprechen Ihre Wünsche und erarbeiten gemeinsam die optimale Lösung für Ihr Projekt."
    },
    {
      number: "02",
      title: "Offerte",
      description: "Sie erhalten innerhalb kurzer Zeit eine detaillierte, transparente Offerte – ohne versteckte Kosten, ohne Überraschungen."
    },
    {
      number: "03",
      title: "Ausführung",
      description: "Sauber, termingerecht und mit höchster Präzision führen wir die Arbeiten aus. Arbeiten, keine Renderings."
    }
  ]
};

// =============================================================================
// TRUST BADGES / QUALITY MARKS
// =============================================================================
export const TRUST_BADGES = [
  {
    label: "16+ Jahre",
    description: "Erfahrung"
  },
  {
    label: "Baustellenleiter",
    description: "SMGV zertifiziert"
  },
  {
    label: "Region Luzern",
    description: "Ihr lokaler Partner"
  }
];

// =============================================================================
// SERVICE AREA
// =============================================================================
export const SERVICE_AREA = {
  headline: "Einsatzgebiet",
  description: "Wir sind im Raum Luzern und Umgebung für Sie da.",
  areas: ["Luzern", "Root", "Ebikon", "Buchrain", "Dietwil", "Honau", "Perlen"]
};
