const questions = [
  {
    "text": "Un sistema informativo di un'organizzazione è:",
    "answers": [
      {
        "text": "un sistema informatico che rappresenta l'informazione esclusivamente attraverso dati",
        "correct": false
      },
      {
        "text": "un componente che consente di gestire le informazioni di interesse per la stessa",
        "correct": true
      },
      {
        "text": "un componente del sistema informatico dell'organizzazione",
        "correct": false
      },
      {
        "text": "un insieme di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "Un sistema informatico di un'organizzazione è:",
    "answers": [
      {
        "text": "una parte del sistema informativo che gestisce informazioni con tecnologia informatica",
        "correct": true
      },
      {
        "text": "una parte non automatizzata del sistema informativo",
        "correct": false
      },
      {
        "text": "un calcolatore elettronico",
        "correct": false
      },
      {
        "text": "un sinonimo del sistema informativo",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel contesto dei sistemi informativi, l'informazione può essere definita come:",
    "answers": [
      {
        "text": "un insieme di simboli che debbono essere elaborati",
        "correct": false
      },
      {
        "text": "un sinonimo di dato",
        "correct": false
      },
      {
        "text": "ciò che è immediatamente presente alla conoscenza, prima di ogni elaborazione",
        "correct": false
      },
      {
        "text": "notizia che consente di avere conoscenza più o meno esatta di fatti, situazioni, modi di essere",
        "correct": true
      }
    ]
  },
  {
    "text": "Nel contesto dei sistemi informativi, un dato:",
    "answers": [
      {
        "text": "è ciò che è immediatamente presente alla conoscenza, prima di ogni elaborazione",
        "correct": true
      },
      {
        "text": "è un sinonimo di informazione",
        "correct": false
      },
      {
        "text": "non necessita di interpretazione per fornire informazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Un DataBase Management System deve garantire:",
    "answers": [
      {
        "text": "sicurezza, manutenibilità, efficienza ed efficacia",
        "correct": false
      },
      {
        "text": "privatezza, durata, condivisione, economicità",
        "correct": false
      },
      {
        "text": "privatezza, affidabilità, efficienza ed efficacia",
        "correct": true
      },
      {
        "text": "economicità, velocità, affidabilità, efficienza",
        "correct": false
      }
    ]
  },
  {
    "text": "I DBMS nascono per gestire collezioni di dati:",
    "answers": [
      {
        "text": "eterogenee, piccole, private",
        "correct": false
      },
      {
        "text": "grandi, persistenti e condivise",
        "correct": true
      },
      {
        "text": "piccole, persistenti e private",
        "correct": false
      },
      {
        "text": "grandi, eterogenee e private",
        "correct": false
      }
    ]
  },
  {
    "text": "Con modello dei dati ci si riferisce a un:",
    "answers": [
      {
        "text": "linguaggio di programmazione",
        "correct": false
      },
      {
        "text": "meccanismo per definire nuovi tipi di dati",
        "correct": false
      },
      {
        "text": "insieme di record omogenei",
        "correct": false
      },
      {
        "text": "insieme di costrutti utilizzati per organizzare i dati di interesse e descriverne la dinamica",
        "correct": true
      }
    ]
  },
  {
    "text": "Lo schema di una base di dati:",
    "answers": [
      {
        "text": "ne rappresenta i valori attuali",
        "correct": false
      },
      {
        "text": "ne descrive la struttura, ed è sostanzialmente invariante nel tempo",
        "correct": true
      },
      {
        "text": "è una struttura che varia molto rapidamente nel tempo",
        "correct": false
      },
      {
        "text": "è l'insieme dei valori di una tabella",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale dei seguenti modelli dei dati è un modello concettuale:",
    "answers": [
      {
        "text": "reticolare",
        "correct": false
      },
      {
        "text": "relazionale",
        "correct": false
      },
      {
        "text": "a oggetti",
        "correct": false
      },
      {
        "text": "Entity-Relationship",
        "correct": true
      }
    ]
  },
  {
    "text": "L'architettura standardizzata per DBMS è:",
    "answers": [
      {
        "text": "su tre livelli: schema logico, interno ed esterno",
        "correct": true
      },
      {
        "text": "su quattro livelli: schema fisico, interno, esterno e concettuale",
        "correct": false
      },
      {
        "text": "su tre livelli: schema fisico, concettuale e logico",
        "correct": false
      },
      {
        "text": "su due livelli: schema logico e fisico",
        "correct": false
      }
    ]
  },
  {
    "text": "Sono modelli logici tradizionali:",
    "answers": [
      {
        "text": "i modelli gerarchico, reticolare e relazionale",
        "correct": true
      },
      {
        "text": "i modelli a oggetti, relazionale e NoSQL",
        "correct": false
      },
      {
        "text": "i modelli gerarchico,  relazionale e basato su XML",
        "correct": false
      },
      {
        "text": "i modelli gerarchico, reticolare e a oggetti",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale di questi modelli logici è basato su valori",
    "answers": [
      {
        "text": "il modello gerarchico",
        "correct": false
      },
      {
        "text": "il modello reticolare",
        "correct": false
      },
      {
        "text": "il modello a oggetti",
        "correct": false
      },
      {
        "text": "il modello relazionale",
        "correct": true
      }
    ]
  },
  {
    "text": "Il modello relazionale è stato proposto nel 1970, ma è stato reso disponibile in DBMS reali solo nel 1981. Perché",
    "answers": [
      {
        "text": "non è stato apprezzato nei primi anni dopo la sua presentazione",
        "correct": false
      },
      {
        "text": "ha richiesto l'individuazione di realizzazioni efficienti e di hardware adeguato",
        "correct": true
      },
      {
        "text": "non era facile da comprendere, essendo basato su concetti non intuitivi",
        "correct": false
      },
      {
        "text": "non aveva una forte base matematica",
        "correct": false
      }
    ]
  },
  {
    "text": "Si dice prodotto cartesiano di due insiemi D1 e D2 (D1 x D2):",
    "answers": [
      {
        "text": "qualunque combinazione di n valori appartenenti a D1 o a D2",
        "correct": false
      },
      {
        "text": "l'insieme formato dalle coppie (v1, v2) e (v2, v1), dove v1 è un elemento di D1 e v2 è un elemento di D2",
        "correct": false
      },
      {
        "text": "l'insieme formato dalle coppie ordinate (v1, v2) dove v1 è un elemento di D1 e v2 è un elemento di D2",
        "correct": true
      },
      {
        "text": "l'intersezione dei due insiemi D1 e D2",
        "correct": false
      }
    ]
  },
  {
    "text": "Il grado di un prodotto cartesiano tra insiemi è:",
    "answers": [
      {
        "text": "il numero di insiemi coinvolti",
        "correct": true
      },
      {
        "text": "il numero di operazioni necessarie per risolvere il prodotto",
        "correct": false
      },
      {
        "text": "la potenza del prodotto",
        "correct": false
      },
      {
        "text": "un sottoinsieme dei domini della relazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione matematica sui domini D1, …, Dn è:",
    "answers": [
      {
        "text": "il grado del prodotto cartesiano degli  insiemi D1, …, Dn",
        "correct": false
      },
      {
        "text": "la cardinalità del prodotto cartesiano degli insiemi D1, …, Dn",
        "correct": false
      },
      {
        "text": "è sempre equivalente al prodotto cartesiano degli insiemi D1, …, Dn",
        "correct": false
      },
      {
        "text": "un sottoinsieme del prodotto cartesiano tra D1, …, Dn, domini della relazione",
        "correct": true
      }
    ]
  },
  {
    "text": "Una base di dati nel modello relazionale:",
    "answers": [
      {
        "text": "non può avere riferimenti tra relazioni diverse",
        "correct": false
      },
      {
        "text": "è costituita da più relazioni con attributi, collegate da valori comuni sulle tuple",
        "correct": true
      },
      {
        "text": "ha riferimenti espliciti tra dati, come i puntatori",
        "correct": false
      },
      {
        "text": "è un qualsiasi insieme di tabelle",
        "correct": false
      }
    ]
  },
  {
    "text": "E' un vantaggio del modello logico basato su valori:",
    "answers": [
      {
        "text": "il legame tra rappresentazione fisica e logica",
        "correct": false
      },
      {
        "text": "il fatto che l'informazione è interamente contenuta nei valori",
        "correct": true
      },
      {
        "text": "non ha puntatori, nemmeno nel livello fisico",
        "correct": false
      },
      {
        "text": "non consente di trasferire facilmente informazioni tra vari contesti",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel modello relazionale, uno schema di relazione è costituito da:",
    "answers": [
      {
        "text": "un nome della relazione e da un insieme di attributi",
        "correct": true
      },
      {
        "text": "un insieme di schemi di relazione con nomi diversi",
        "correct": false
      },
      {
        "text": "un insieme di tuple",
        "correct": false
      },
      {
        "text": "un insieme di relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Una istanza di relazione, o semplicemente relazione, è:",
    "answers": [
      {
        "text": "un insieme di relazioni",
        "correct": false
      },
      {
        "text": "un insieme di tuple",
        "correct": true
      },
      {
        "text": "una relazione con un singolo dominio",
        "correct": false
      },
      {
        "text": "costituita da un simbolo e un insieme di attributi",
        "correct": false
      }
    ]
  },
  {
    "text": "Qual è il modo corretto per rappresentare l'assenza di informazione in una relazione",
    "answers": [
      {
        "text": "usare il valore nullo",
        "correct": true
      },
      {
        "text": "usare valori di dominio non utilizzati",
        "correct": false
      },
      {
        "text": "usare la stringa \"\" (stringa nulla)",
        "correct": false
      },
      {
        "text": "usare un numero molto grande",
        "correct": false
      }
    ]
  },
  {
    "text": "Il valore nullo:",
    "answers": [
      {
        "text": "è un valore del dominio",
        "correct": false
      },
      {
        "text": "non è un valore del dominio",
        "correct": true
      },
      {
        "text": "è un valore di un dominio presente nella relazione ma non del dominio in cui viene inserito",
        "correct": false
      },
      {
        "text": "è un puntatore",
        "correct": false
      }
    ]
  },
  {
    "text": "La presenza di un valore nullo in una relazione può indicare che:",
    "answers": [
      {
        "text": "il valore è sempre inesistente",
        "correct": false
      },
      {
        "text": "il valore è sconosciuto, inesistente o senza informazione",
        "correct": true
      },
      {
        "text": "il valore è sempre senza informazione",
        "correct": false
      },
      {
        "text": "Il valore è sconosciuto o inesistente",
        "correct": false
      }
    ]
  },
  {
    "text": "Un vincolo di integrità:",
    "answers": [
      {
        "text": "è unico per ogni relazione",
        "correct": false
      },
      {
        "text": "rende corretta una base di dati",
        "correct": false
      },
      {
        "text": "è una funzione matematica che restituisce il grado della relazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Un vincolo di integrità non è supportato dal DBMS scelto",
    "answers": [
      {
        "text": "Non può verificarsi, in quanto i DBMS supportano nativamente tutti i vincoli di integrità",
        "correct": false
      },
      {
        "text": "In tal caso, la base di dati non è adatta al DBMS",
        "correct": false
      },
      {
        "text": "In tal caso, l'utente o il programmatore dell'applicazione devono far verificare il rispetto del vincolo",
        "correct": true
      },
      {
        "text": "E' sempre vero, in quanto nessun vincolo di integrità è supportato da un DBMS",
        "correct": false
      }
    ]
  },
  {
    "text": "Il soddisfacimento di un vincolo di dominio:",
    "answers": [
      {
        "text": "Riguarda singoli valori",
        "correct": true
      },
      {
        "text": "E' definito a livello di ennupla",
        "correct": false
      },
      {
        "text": "Coinvolge due o più relazioni",
        "correct": false
      },
      {
        "text": "Innesca un ulteriore vincolo di integrità",
        "correct": false
      }
    ]
  },
  {
    "text": "Una chiave è:",
    "answers": [
      {
        "text": "una superchiave minimale della relazione",
        "correct": false
      },
      {
        "text": "un insieme di attributi che identificano le ennuple di una relazione",
        "correct": true
      },
      {
        "text": "una superchiave della relazione",
        "correct": false
      },
      {
        "text": "un singolo attributo che identifica gli altri attributi della relazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Una superchiave minimale è:",
    "answers": [
      {
        "text": "una superchiave con non più di un attributo",
        "correct": false
      },
      {
        "text": "un insieme di attributi che identificano le ennuple di una relazione",
        "correct": false
      },
      {
        "text": "la superchiave che non contiene ennuple uguali",
        "correct": false
      },
      {
        "text": "una superchiave che non contiene altre superchiavi",
        "correct": true
      }
    ]
  },
  {
    "text": "Una chiave di una relazione:",
    "answers": [
      {
        "text": "è sempre unica",
        "correct": false
      },
      {
        "text": "è unica se ha un solo attributo",
        "correct": false
      },
      {
        "text": "è sempre l'unica superchiave della relazione",
        "correct": false
      },
      {
        "text": "può non essere unica",
        "correct": true
      }
    ]
  },
  {
    "text": "Una chiave primaria in una relazione:",
    "answers": [
      {
        "text": "consente di identificare le ennuple e realizzare i riferimenti ad altre relazioni",
        "correct": true
      },
      {
        "text": "non può essere usata come riferimento ad altre relazioni",
        "correct": false
      },
      {
        "text": "è una chiave che può contenere valori nulli",
        "correct": false
      },
      {
        "text": "contiene almeno due ennuple uguali",
        "correct": false
      }
    ]
  },
  {
    "text": "In una base di dati, le correlazioni tra relazioni diverse:",
    "answers": [
      {
        "text": "devono essere coerenti",
        "correct": true
      },
      {
        "text": "non sono possibili",
        "correct": false
      },
      {
        "text": "sono possibili sono tra diverse basi di dati",
        "correct": false
      },
      {
        "text": "sono possibili solo se una delle due relazioni non ha una chiave primaria",
        "correct": false
      }
    ]
  },
  {
    "text": "Un vincolo di integrità referenziale fra gli attributi X di una relazione R1 e un'altra relazione R2:",
    "answers": [
      {
        "text": "impone ai valori su X in R1 di comparire come valori di una chiave di R2",
        "correct": false
      },
      {
        "text": "impone ai valori su X in R1 di comparire come valori della chiave primaria di R2",
        "correct": true
      },
      {
        "text": "impone ai valori di R2 di comparire come chiave primaria in R1",
        "correct": false
      },
      {
        "text": "impone ai valori su X in R1 di NON comparire come valori della chiave primaria di R2",
        "correct": false
      }
    ]
  },
  {
    "text": "Un vincolo di integrità referenziale è:",
    "answers": [
      {
        "text": "un vincolo di ennupla",
        "correct": false
      },
      {
        "text": "un vincolo intrarelazionale",
        "correct": false
      },
      {
        "text": "un vincolo di dominio",
        "correct": false
      },
      {
        "text": "un vincolo interrelazionale",
        "correct": true
      }
    ]
  },
  {
    "text": "Nel caso di vincoli di integrità referenziale multipli su più attributi:",
    "answers": [
      {
        "text": "gli attributi coinvolti in entrambe le relazioni devono essere una chiave",
        "correct": false
      },
      {
        "text": "l'ordine degli attributi non è significativo",
        "correct": false
      },
      {
        "text": "l'ordine degli attributi è significativo",
        "correct": true
      },
      {
        "text": "gli attributi coinvolti in entrambe le relazioni devono essere una chiave primaria",
        "correct": false
      }
    ]
  },
  {
    "text": "In una base di dati, una foreign key è:",
    "answers": [
      {
        "text": "un vincolo di ennupla",
        "correct": false
      },
      {
        "text": "un vincolo interrelazionale",
        "correct": true
      },
      {
        "text": "un vincolo intrarelazionale",
        "correct": false
      },
      {
        "text": "un vincolo di dominio",
        "correct": false
      }
    ]
  },
  {
    "text": "Il comportamento standard nel caso di una violazione di un vincolo di integrità referenziale causata",
    "answers": [
      {
        "text": "duplicare la ennupla prima di eliminarla",
        "correct": false
      },
      {
        "text": "eliminare tutte le ennuple coinvolte anche in altre relazioni",
        "correct": false
      },
      {
        "text": "consentire l'operazione ma segnalarlo all'utente",
        "correct": false
      },
      {
        "text": "rifiutare l'operazione",
        "correct": true
      }
    ]
  },
  {
    "text": "Se si utilizza l'eliminazione a cascata per gestire violazioni di vincoli di integrità referenziale causati",
    "answers": [
      {
        "text": "nelle altre relazioni legate dal vincolo, vengono eliminate le ennuple coinvolte",
        "correct": true
      },
      {
        "text": "vengono eliminate solo ennuple che non contengono una chiave primaria",
        "correct": false
      }
    ]
  },
  {
    "text": "Se si utilizza l'introduzione di valori nulli per gestire violazioni di vincoli di integrità referenziale causati",
    "answers": [
      {
        "text": "vengono eliminate a cascata le altre ennuple legate dal vincolo",
        "correct": false
      },
      {
        "text": "si cancella interamente la relazione coinvolta nel vincolo",
        "correct": false
      }
    ]
  },
  {
    "text": "Se si elimina una ennupla in una relazione in cui è definita una foreign key:",
    "answers": [
      {
        "text": "viene sempre rigettata l'eliminazione",
        "correct": false
      },
      {
        "text": "vengono eliminate a cascata le altre ennuple legate dal vincolo",
        "correct": false
      },
      {
        "text": "la risposta è diversa in base alle azioni compensative previamente definite",
        "correct": true
      }
    ]
  },
  {
    "text": "Un valore nullo di un attributo di una relazione R1 su sui vi è un vincolo di integrità referenziale con una",
    "answers": [
      {
        "text": "non è mai ammesso",
        "correct": false
      },
      {
        "text": "è ammesso solo se NULL è anche incluso nella chiave primaria della relazione R2",
        "correct": false
      },
      {
        "text": "può essere ammesso, se i vincoli sono meno restrittivi",
        "correct": true
      },
      {
        "text": "è ammesso se è NULL un valore di dominio dell'attributo della relazione R1",
        "correct": false
      }
    ]
  },
  {
    "text": "I linguaggi di interrogazione per basi di dati relazionali possono essere:",
    "answers": [
      {
        "text": "Né dichiarativi né procedurali",
        "correct": false
      },
      {
        "text": "Solo procedurali",
        "correct": false
      },
      {
        "text": "Solo dichiarativi",
        "correct": false
      },
      {
        "text": "Dichiarativi e Procedurali",
        "correct": true
      }
    ]
  },
  {
    "text": "Gli operatori insiemistici si applicano solo a:",
    "answers": [
      {
        "text": "Relazioni definite su attributi differenti",
        "correct": false
      },
      {
        "text": "Relazioni definite sugli stessi attributi",
        "correct": false
      },
      {
        "text": "Relazioni con attributi misti",
        "correct": true
      },
      {
        "text": "Relazioni con chiavi primarie",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore Unione applicato a due relazioni R1 ed R2 produce:",
    "answers": [
      {
        "text": "Una relazione con tutte le tuple che appartengono a R2",
        "correct": false
      },
      {
        "text": "Una relazione con tutte le tuple che appartengono a R1",
        "correct": false
      },
      {
        "text": "Una relazione con tutte le tuple che appartengono o a R1 o a R2 o a entrambi",
        "correct": true
      },
      {
        "text": "Una relazione vuota",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore Intersezione, applicato a due relazioni R1 ed R2, produce:",
    "answers": [
      {
        "text": "Una relazione con tutte le tuple che appartengono a entrambe le relazioni R1 ed R2",
        "correct": true
      },
      {
        "text": "Una relazione con tutte le tuple che appartengono a R2",
        "correct": false
      },
      {
        "text": "Una relazione vuota",
        "correct": false
      },
      {
        "text": "Una relazione con tutte le tuple che appartengono a R1",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore Differenza, applicato a due relazioni R1 ed R2, produce:",
    "answers": [
      {
        "text": "Una relazione che contiene tutte le tuple di R1 e R2",
        "correct": false
      },
      {
        "text": "Una relazione che contiene le tuple che appartengono a R1 e non a R2",
        "correct": true
      },
      {
        "text": "Una relazione che contiene le tuple che appartengono solo a R2",
        "correct": false
      },
      {
        "text": "Una relazione che contiene le tuple che appartengono sia a R1 sia a R2",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore Ridenominazione è un operatore",
    "answers": [
      {
        "text": "Con un solo argomento",
        "correct": true
      },
      {
        "text": "Con almeno due argomenti",
        "correct": false
      },
      {
        "text": "Con nessun argomento",
        "correct": false
      },
      {
        "text": "Con almeno tre argomenti",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore Ridenominazione:",
    "answers": [
      {
        "text": "Cambia il nome di una relazione",
        "correct": false
      },
      {
        "text": "Cambia il nome di almeno una coppia di attributi",
        "correct": false
      },
      {
        "text": "Cambia il nome di uno schema di database",
        "correct": false
      },
      {
        "text": "Cambia il nome di un attributo",
        "correct": true
      }
    ]
  },
  {
    "text": "La selezione è un operatore:",
    "answers": [
      {
        "text": "Nullo",
        "correct": false
      },
      {
        "text": "Monadico",
        "correct": true
      },
      {
        "text": "Biadico",
        "correct": false
      },
      {
        "text": "Triadico",
        "correct": false
      }
    ]
  },
  {
    "text": "La condizione dell'operatore Selezione è:",
    "answers": [
      {
        "text": "Una espressione algebrica",
        "correct": false
      },
      {
        "text": "Una espressione booleana",
        "correct": true
      },
      {
        "text": "Una espressione aritmetica",
        "correct": false
      },
      {
        "text": "Una espressione funzionale",
        "correct": false
      }
    ]
  },
  {
    "text": "Selezione e proiezione sono operatori:",
    "answers": [
      {
        "text": "Paralleli",
        "correct": false
      },
      {
        "text": "Identici",
        "correct": false
      },
      {
        "text": "Sovrapposti",
        "correct": false
      },
      {
        "text": "Ortogonali",
        "correct": true
      }
    ]
  },
  {
    "text": "L'operatore di join consente di:",
    "answers": [
      {
        "text": "correlare dati contenuti in relazioni se sono identiche tra loro",
        "correct": false
      },
      {
        "text": "correlare dati contenuti nella stessa relazione",
        "correct": false
      },
      {
        "text": "correlare dati contenuti in almeno tre relazioni",
        "correct": false
      },
      {
        "text": "correlare dati contenuti in relazioni diverse",
        "correct": true
      }
    ]
  },
  {
    "text": "Il risultato del join naturale è:",
    "answers": [
      {
        "text": "prodotto sull'unione degli attributi degli operandi",
        "correct": true
      },
      {
        "text": "prodotto sull'intersezione degli attributi degli operandi",
        "correct": false
      },
      {
        "text": "prodotto sulla differenza degli attributi degli operandi",
        "correct": false
      },
      {
        "text": "produce sempre un insieme vuoto",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel caso di un join completo, le ennuple che contribuiscono al risultato sono:",
    "answers": [
      {
        "text": "tutte le ennuple delle due relazioni",
        "correct": true
      },
      {
        "text": "qualche ennupla di ogni relazione",
        "correct": false
      },
      {
        "text": "nessuna delle ennuple delle due relazioni",
        "correct": false
      },
      {
        "text": "solo le chiavi delle due relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La cardinalità del join è pari:",
    "answers": [
      {
        "text": "al numero di ennuple appartenenti alla relazione sinistra",
        "correct": false
      },
      {
        "text": "al numero di ennuple appartenenti alla relazione differenza",
        "correct": false
      },
      {
        "text": "al numero di ennuple appartenenti alla relazione risultante",
        "correct": true
      },
      {
        "text": "al numero di ennuple appartenenti alla relazione destra",
        "correct": false
      }
    ]
  },
  {
    "text": "Il join naturale è un operatore:",
    "answers": [
      {
        "text": "transitivo",
        "correct": false
      },
      {
        "text": "transitivo e associativo",
        "correct": false
      },
      {
        "text": "commutativo e associativo",
        "correct": true
      },
      {
        "text": "commutativo e transitivo",
        "correct": false
      }
    ]
  },
  {
    "text": "Il join esterno estende le ennuple che verrebbero tralasciate dal join naturale con:",
    "answers": [
      {
        "text": "il valore zero",
        "correct": false
      },
      {
        "text": "il valore nullo",
        "correct": true
      },
      {
        "text": "nessun valore",
        "correct": false
      },
      {
        "text": "un valore non presente nel dominio dell'attributo specifico",
        "correct": false
      }
    ]
  },
  {
    "text": "Il join sinistro:",
    "answers": [
      {
        "text": "mantiene tutte le ennuple del primo operando, estendendole con valori nulli, se necessario",
        "correct": true
      },
      {
        "text": "mantiene tutte le ennuple del primo operando, estendendole con valori negativi, se necessario",
        "correct": false
      },
      {
        "text": "mantiene tutte le ennuple del secondo operando, estendendole con valori nulli, se necessario",
        "correct": false
      },
      {
        "text": "mantiene tutte le ennuple dei due operandi, estendendoli con valori nulli, se necessario",
        "correct": false
      }
    ]
  },
  {
    "text": "Il Semijoin è un operatore:",
    "answers": [
      {
        "text": "Unario",
        "correct": false
      },
      {
        "text": "Binario",
        "correct": true
      },
      {
        "text": "Biunivoco",
        "correct": false
      },
      {
        "text": "Ternario",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operatore di theta-Join equivale a:",
    "answers": [
      {
        "text": "una proiezione seguita dal join naturale",
        "correct": false
      },
      {
        "text": "una proiezione seguita da una selezione",
        "correct": false
      },
      {
        "text": "una selezione seguita da una proiezione",
        "correct": false
      },
      {
        "text": "un prodotto cartesiano seguito da una selezione",
        "correct": true
      }
    ]
  },
  {
    "text": "Se la condizione di selezione nel theta-join è una congiunzione di atomi di uguaglianza (=) allora viene chiamato:",
    "answers": [
      {
        "text": "prodotto cartesiano",
        "correct": false
      },
      {
        "text": "equi-Join",
        "correct": true
      },
      {
        "text": "join completo",
        "correct": false
      },
      {
        "text": "join naturale",
        "correct": false
      }
    ]
  },
  {
    "text": "Nelle basi di dati relazionali, le relazioni di base hanno un contenuto:",
    "answers": [
      {
        "text": "sempre in relazione con un'altra relazione base",
        "correct": false
      },
      {
        "text": "dipendente da altre relazioni",
        "correct": false
      },
      {
        "text": "autonomo",
        "correct": true
      },
      {
        "text": "generato da almeno due operatori",
        "correct": false
      }
    ]
  },
  {
    "text": "Con quale livello interagisce l'utente, nell'architettura standard a 3 livelli di una base di dati",
    "answers": [
      {
        "text": "Concettuale",
        "correct": false
      },
      {
        "text": "Logico",
        "correct": false
      },
      {
        "text": "Interno",
        "correct": false
      },
      {
        "text": "Esterno",
        "correct": true
      }
    ]
  },
  {
    "text": "Il contenuto delle relazioni derivate, in una base di dati relazionale:",
    "answers": [
      {
        "text": "è autonomo",
        "correct": false
      },
      {
        "text": "è funzione del contenuto di altre relazioni",
        "correct": true
      },
      {
        "text": "dipende esclusivamente dall'operatore di join",
        "correct": false
      },
      {
        "text": "dipende esclusivamente dall'operatore di proiezione",
        "correct": false
      }
    ]
  },
  {
    "text": "E' possibile utilizzare le viste per disciplinare gli accessi degli utenti alla base di dati",
    "answers": [
      {
        "text": "Si, tramite le autorizzazioni di accesso",
        "correct": true
      },
      {
        "text": "No",
        "correct": false
      },
      {
        "text": "Si, ma solo se la base di dati è non relazionale",
        "correct": false
      },
      {
        "text": "No, non esistono autorizzazione di accesso su viste",
        "correct": false
      }
    ]
  },
  {
    "text": "Nelle basi di dati relazionali, le tipologie di viste sono:",
    "answers": [
      {
        "text": "una",
        "correct": false
      },
      {
        "text": "due",
        "correct": true
      },
      {
        "text": "tre",
        "correct": false
      },
      {
        "text": "quattro",
        "correct": false
      }
    ]
  },
  {
    "text": "Nei DBMS attuali, le viste materializzate sono supportate:",
    "answers": [
      {
        "text": "raramente",
        "correct": true
      },
      {
        "text": "sempre",
        "correct": false
      },
      {
        "text": "sempre, ma solo nei DBMS non relazionali",
        "correct": false
      },
      {
        "text": "mai",
        "correct": false
      }
    ]
  },
  {
    "text": "Le relazioni virtuali, definite per mezzo di espressioni del linguaggio di interrogazione, sono:",
    "answers": [
      {
        "text": "sempre memorizzate nella base di dati",
        "correct": false
      },
      {
        "text": "memorizzate nella base di dati ma solo in DBMS relazionali",
        "correct": false
      },
      {
        "text": "memorizzate nella base di dati su scelta dell'operatore",
        "correct": false
      },
      {
        "text": "mai memorizzate nella base di dati",
        "correct": true
      }
    ]
  },
  {
    "text": "Uno svantaggio rilevante delle viste materializzate è che:",
    "answers": [
      {
        "text": "appesantiscono gli aggiornamenti",
        "correct": true
      },
      {
        "text": "appesantiscono l'operazione di proiezione",
        "correct": false
      },
      {
        "text": "appesantiscono l'operazione di join",
        "correct": false
      },
      {
        "text": "appesantiscono l'operazione di selezione",
        "correct": false
      }
    ]
  },
  {
    "text": "Interrogazioni riferite a viste:",
    "answers": [
      {
        "text": "vengono risolte solo se non ci sono valori nulli",
        "correct": false
      },
      {
        "text": "non è possibile riferire interrogazioni a viste",
        "correct": false
      },
      {
        "text": "vengono risolte  sostituendo alla vista la sua definizione, componendo le interrogazioni",
        "correct": true
      },
      {
        "text": "per la risoluzione, richiedono prima un'aggiornamento delle relazioni di base",
        "correct": false
      }
    ]
  },
  {
    "text": "Usare le viste nelle ristrutturazioni di basi di dati:",
    "answers": [
      {
        "text": "è utile, perché si possono creare viste che corrispondono a relazioni non più presenti nella base di dati",
        "correct": true
      },
      {
        "text": "non è utile, perché non ci sono utenti o applicazioni che usino le nuove relazioni",
        "correct": false
      },
      {
        "text": "è utile, perché velocizzano la progettazione concettuale, logica e fisica",
        "correct": false
      },
      {
        "text": "non è utile, perché richiedono ulteriore spazio di memorizzazione nella base di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "SQL è un linguaggio che :",
    "answers": [
      {
        "text": "offre solo le funzionalità DDL (Data Definition Language)",
        "correct": false
      },
      {
        "text": "offre solo le funzionalità DML (Data Manipulation Language)",
        "correct": false
      },
      {
        "text": "offre le funzionalità sia DDL (Data Definition Language) sia DML (Data Manipulation Language)",
        "correct": true
      },
      {
        "text": "non offre funzionalità per la definizione e la manipolazione di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "Oggi, le funzionalità complete (Full SQL) previste da SQL-2 sono offerte da:",
    "answers": [
      {
        "text": "tutti i sistemi commerciali",
        "correct": false
      },
      {
        "text": "nessun sistema commerciale",
        "correct": true
      },
      {
        "text": "solo da alcuni sistemi commerciali",
        "correct": false
      },
      {
        "text": "solo da sistemi commerciali di basi di dati non relazionali",
        "correct": false
      }
    ]
  },
  {
    "text": "Una tupla in SQL si indica con:",
    "answers": [
      {
        "text": "COLUMN",
        "correct": false
      },
      {
        "text": "ROW",
        "correct": true
      },
      {
        "text": "TABLE",
        "correct": false
      },
      {
        "text": "SCHEMA",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, i domini elementari sono:",
    "answers": [
      {
        "text": "tipi di dati definiti dall'utente a partire da quelli elementari",
        "correct": false
      },
      {
        "text": "un insieme di relazioni della base di dati",
        "correct": false
      },
      {
        "text": "un insieme di attributi della base di dati",
        "correct": false
      },
      {
        "text": "tipi di dati messi direttamente a disposizione dal linguaggio",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, per rappresentare stringhe di lunghezza fissa pari a 12 caratteri, si utilizza:",
    "answers": [
      {
        "text": "char(12)",
        "correct": true
      },
      {
        "text": "varchar(12)",
        "correct": false
      },
      {
        "text": "numeric(12)",
        "correct": false
      },
      {
        "text": "decimal(12)",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, con la notazione numeric(4,2), si rappresentano numeri:",
    "answers": [
      {
        "text": "con 4 cifre significative totali, di cui massimo 2 dopo la virgola",
        "correct": true
      },
      {
        "text": "numeri solo positivi con 4 cifre significative totali, di cui massimo 2 dopo la virgola",
        "correct": false
      },
      {
        "text": "numeri solo negativi con 4 cifre significative totali, di cui massimo 2 dopo la virgola",
        "correct": false
      },
      {
        "text": "numeri con 6 cifre significative totali, di cui massimo 2 dopo la virgola",
        "correct": false
      }
    ]
  },
  {
    "text": "Quali di questi domini elementari è stato definito solo in SQL-3:",
    "answers": [
      {
        "text": "character",
        "correct": false
      },
      {
        "text": "smallint",
        "correct": false
      },
      {
        "text": "boolean",
        "correct": true
      },
      {
        "text": "date",
        "correct": false
      }
    ]
  },
  {
    "text": "L'istruzione SQL \"create table\":",
    "answers": [
      {
        "text": "definisce uno schema di relazione, di cui specifica attributi; domini e vincoli sono definiti in altre istruzioni",
        "correct": false
      },
      {
        "text": "replica uno schema di relazione in una nuova istanza",
        "correct": false
      },
      {
        "text": "definisce uno schema di relazione, di cui specifica attributi, domini e vincoli",
        "correct": true
      },
      {
        "text": "definisce lo schema della base di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il vincolo \"primary key\":",
    "answers": [
      {
        "text": "non è obbligatorio in ogni tabella",
        "correct": false
      },
      {
        "text": "deve essere presente almeno una volta in ogni tabella",
        "correct": false
      },
      {
        "text": "può essere utilizzato solo se la chiave primaria include un solo attributo",
        "correct": false
      },
      {
        "text": "deve essere presente una sola volta per ogni tabella",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, \"primary key\" definisce:",
    "answers": [
      {
        "text": "Definisce una chiave minimale",
        "correct": false
      },
      {
        "text": "Definisce una tupla primaria",
        "correct": false
      },
      {
        "text": "Definisce una chiave primaria",
        "correct": true
      },
      {
        "text": "Definisce una chiave esterna",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il vincolo NOT NULL:",
    "answers": [
      {
        "text": "è un vincolo intrarelazionale che indica che il valore nullo non è ammesso come valore dell'attributo",
        "correct": true
      },
      {
        "text": "è un vincolo intrarelazionale che indica che uno specifico valore di un attributo in una riga non è nullo",
        "correct": false
      },
      {
        "text": "è un vincolo di integrità referenziale",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il vincolo UNIQUE:",
    "answers": [
      {
        "text": "può essere applicato solo a un singolo attributo",
        "correct": false
      },
      {
        "text": "può essere applicato a un singolo attributo o a un insieme di attributi",
        "correct": true
      },
      {
        "text": "è unico (ce ne può essere solo uno) in ogni tabella",
        "correct": false
      },
      {
        "text": "è unico (ce ne può essere solo uno) in ogni schema di base di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il vincolo PRIMARY KEY:",
    "answers": [
      {
        "text": "consente di specificare un vincolo di integrità referenziale",
        "correct": false
      },
      {
        "text": "consente di specificare una superchiave, e può comparire più volte in ogni tabella",
        "correct": false
      },
      {
        "text": "consente di specificare la chiave primaria, e può comparire solo una volta in ogni tabella",
        "correct": true
      },
      {
        "text": "consente di specificare lo schema della tabella",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, in presenza di un vincolo di integrità referenziale, l'attributo della tabella esterna:",
    "answers": [
      {
        "text": "può non essere oggetto di vincolo",
        "correct": false
      },
      {
        "text": "deve essere oggetto almeno di un vincolo NOT NULL",
        "correct": false
      },
      {
        "text": "deve essere oggetto almeno di un vincolo PRIMARY KEY",
        "correct": false
      },
      {
        "text": "deve essere oggetto almeno di un vincolo UNIQUE",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, qual è la differenza tra i costrutti REFERENCES e FOREIGN KEY:",
    "answers": [
      {
        "text": "entrambi definiscono un vincolo intrarelazionale, ma FOREIGN KEY non consente valori null",
        "correct": false
      },
      {
        "text": "entrambi definiscono un vincolo intrarelazionale, ma REFERENCES non consente valori null",
        "correct": false
      }
    ]
  },
  {
    "text": "Il seguente codice SQL create table Corsi (",
    "answers": [
      {
        "text": "l'attributo Matricola sia una chiave primaria della tabella Studenti",
        "correct": false
      },
      {
        "text": "l'attributo Studente sia una chiave primaria della tabella Corso",
        "correct": false
      }
    ]
  },
  {
    "text": "Il seguente codice in SQLcreate table Attaccanti(",
    "answers": [
      {
        "text": "l'attributo Codice sia una chiave primaria della tabella Giocatori",
        "correct": true
      },
      {
        "text": "l'attributo Giocatore sia una chiave primaria della tabella Attaccanti",
        "correct": false
      }
    ]
  },
  {
    "text": "Il seguente codice SQLcreate table Rottamazione (",
    "answers": [
      {
        "text": "L'aggiornamento dei valori degli attributi Targa e Modello della tabella Auto non è ammesso",
        "correct": false
      }
    ]
  },
  {
    "text": "L'istruzione SQLalter table Persona add column CF varchar(16)",
    "answers": [
      {
        "text": "L'inserimento di un nuovo valore per l'attributo CF nella prima riga della tabella Persona",
        "correct": false
      },
      {
        "text": "La modifica del tipo dell'attributo CF nella tabella Persona",
        "correct": false
      },
      {
        "text": "L'eliminazione della colonna CF dalla tabella Persona",
        "correct": false
      },
      {
        "text": "L'aggiunta di una nuova colonna CF nella tabella Persona",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, se nel comando DROP viene specificato cascade:",
    "answers": [
      {
        "text": "L'eliminazione non viene consentita se è presente un vincolo di integrità referenziale",
        "correct": false
      }
    ]
  },
  {
    "text": "Le interrogazioni nel linguaggio SQL sono espresse in modo:",
    "answers": [
      {
        "text": "procedurale",
        "correct": false
      },
      {
        "text": "programmativo",
        "correct": false
      },
      {
        "text": "funzionale",
        "correct": false
      },
      {
        "text": "dichiarativo",
        "correct": true
      }
    ]
  },
  {
    "text": "Il query optimizer è un componente dei DBMS relazionali che:",
    "answers": [
      {
        "text": "corregge le query in SQL mentre vengono scritte dall'operatore",
        "correct": false
      },
      {
        "text": "elimina gli spazi e i caratteri di fine linea dalle query",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il risultato di una SELECT è:",
    "answers": [
      {
        "text": "un record",
        "correct": false
      },
      {
        "text": "una tabella",
        "correct": true
      },
      {
        "text": "uno schema",
        "correct": false
      },
      {
        "text": "un attributo",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, l'istruzioneSELECT Stipendio AS StipendioMensile",
    "answers": [
      {
        "text": "produce una tabella con valori mediati tra i due attributi StipendioMensile e Stipendio",
        "correct": false
      },
      {
        "text": "Produce una tabella vuota poichè l'attributo StipendioMensile non esiste",
        "correct": false
      },
      {
        "text": "Produce una tabella con il nome dell'attributo Stipendio ridenominato in StipendioMensile",
        "correct": true
      },
      {
        "text": "Produce una tabella con il nome dell'attributo StipendioMensile ridenominato in Stipendio",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, la clausola SELECT specifica:",
    "answers": [
      {
        "text": "le tabelle da includere nel prodotto cartesiano",
        "correct": false
      },
      {
        "text": "gli elementi dello schema della tabella risultato",
        "correct": true
      },
      {
        "text": "le condizioni che devono verificare le righe delle tabelle",
        "correct": false
      },
      {
        "text": "la gestione dei valori nulli",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale dei seguenti caratteri speciali può comparire come argomento della clausola SELECT:",
    "answers": [
      {
        "text": "@",
        "correct": false
      },
      {
        "text": "*",
        "correct": true
      },
      {
        "text": "#",
        "correct": false
      },
      {
        "text": "§",
        "correct": false
      }
    ]
  },
  {
    "text": "In una query SQL, la clausola FROM specifica:",
    "answers": [
      {
        "text": "un insieme di schemi",
        "correct": false
      },
      {
        "text": "un insieme di ennuple",
        "correct": false
      },
      {
        "text": "un insieme di attributi",
        "correct": false
      },
      {
        "text": "un insieme di tabelle",
        "correct": true
      }
    ]
  },
  {
    "text": "In una query SQL, un join può essere specificato tramite condizioni:",
    "answers": [
      {
        "text": "nella clausola FROM",
        "correct": true
      },
      {
        "text": "nella clausola WHERE",
        "correct": false
      },
      {
        "text": "utilizzando il carattere speciale *",
        "correct": false
      },
      {
        "text": "nella clausola SELECT",
        "correct": false
      }
    ]
  },
  {
    "text": "Per selezionare attributi con valori nulli, il linguaggio SQL fornisce il predicato:",
    "answers": [
      {
        "text": "IS LIKE NULL",
        "correct": false
      },
      {
        "text": "IS",
        "correct": false
      },
      {
        "text": "IS NULL",
        "correct": true
      },
      {
        "text": "IS NOT LIKE NULL",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale delle seguenti stringhe soddisfa l'espressione booleana inclusa nella seguente clausola WHERE: LIKE '_e%i'",
    "answers": [
      {
        "text": "verdi",
        "correct": true
      },
      {
        "text": "esperti",
        "correct": false
      },
      {
        "text": "tremendi",
        "correct": false
      },
      {
        "text": "nero",
        "correct": false
      }
    ]
  },
  {
    "text": "E' possibile trovare una corrispondenza tra le interrogazioni in SQL  e le interrogazioni espresse in algebra",
    "answers": [
      {
        "text": "Si, sempre",
        "correct": false
      },
      {
        "text": "No. Non è possibile passare da un linguaggio dichiarativo a uno procedurale",
        "correct": false
      },
      {
        "text": "Si, ma solo per interrogazioni semplici in SQL",
        "correct": true
      },
      {
        "text": "Si, ma solo se l'interrogazione in SQL coinvolge una singola tabella",
        "correct": false
      }
    ]
  },
  {
    "text": "L'interrogazione specifica i passi da compiere per estrarre le informazioni:",
    "answers": [
      {
        "text": "nei linguaggi dichiarativi",
        "correct": false
      },
      {
        "text": "nel linguaggi ad oggetti",
        "correct": false
      },
      {
        "text": "in tutti i linguaggi per basi di dati",
        "correct": false
      },
      {
        "text": "nei linguaggi procedurali",
        "correct": true
      }
    ]
  },
  {
    "text": "La seguente query in SQL:  SELECT *",
    "answers": [
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione",
        "correct": true
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una proiezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione seguita da una proiezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione seguita da una ridenominazione",
        "correct": false
      }
    ]
  },
  {
    "text": "La seguente query in SQL:  SELECT Nome, Reddito",
    "answers": [
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una proiezione",
        "correct": true
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione seguita da una proiezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una proiezione seguita da una ridenominazione",
        "correct": false
      }
    ]
  },
  {
    "text": "La seguente query in SQL:  SELECT Nome, Reddito",
    "answers": [
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una proiezione",
        "correct": false
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una selezione seguita da una proiezione",
        "correct": true
      },
      {
        "text": "tradotta in algebra relazionale, equivale ad una proiezione seguita da una ridenominazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella traduzione da un'interrogazione in SQL ad una in algebra relazionale, la clausola SELECT:",
    "answers": [
      {
        "text": "indica condizione e attributi della selezione in algebra relazionale",
        "correct": false
      },
      {
        "text": "indica le tabelle da includere nel join naturale (con previe ridenominazioni, se necessarie)",
        "correct": false
      },
      {
        "text": "indica il tipo di join da utilizzare nell'interrogazione in algebra relazionale",
        "correct": false
      },
      {
        "text": "indica gli attributi su cui eseguire una proiezione in algebra relazionale",
        "correct": true
      }
    ]
  },
  {
    "text": "Nella traduzione da un'interrogazione in SQL ad una in algebra relazionale, la clausola WHERE:",
    "answers": [
      {
        "text": "indica condizione e attributi della selezione in algebra relazionale",
        "correct": true
      },
      {
        "text": "indica le tabelle da includere nel join naturale (con previe ridenominazioni, se necessarie)",
        "correct": false
      },
      {
        "text": "indica il tipo di join da utilizzare nell'interrogazione in algebra relazionale",
        "correct": false
      },
      {
        "text": "indica gli attributi su cui eseguire una proiezione in algebra relazionale",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella traduzione da un'interrogazione in SQL ad una in algebra relazionale, la clausola FROM:",
    "answers": [
      {
        "text": "indica condizione e attributi della selezione in algebra relazionale",
        "correct": false
      },
      {
        "text": "indica le tabelle da includere nel join naturale (con previe ridenominazioni, se necessarie)",
        "correct": true
      },
      {
        "text": "indica il tipo di join da utilizzare nell'interrogazione in algebra relazionale",
        "correct": false
      },
      {
        "text": "indica gli attributi su cui eseguire una proiezione in algebra relazionale",
        "correct": false
      }
    ]
  },
  {
    "text": "Il join naturale equivale a un prodotto cartesiano. Questa affermazione è:",
    "answers": [
      {
        "text": "vera, se però gli insiemi degli attributi delle due relazioni sono disgiunti",
        "correct": true
      },
      {
        "text": "vera, sempre",
        "correct": false
      },
      {
        "text": "falsa",
        "correct": false
      },
      {
        "text": "falsa, se le relazioni non hanno attributi in comune",
        "correct": false
      }
    ]
  },
  {
    "text": "La seguente query in SQL:    SELECT A.Padre",
    "answers": [
      {
        "text": "π(A.Padre) ( A ⋈(A.Padre=P.Figlio) P )",
        "correct": false
      },
      {
        "text": "σ(A.Padre) ( A ⋈(A.Padre=P.Figlio) P )",
        "correct": false
      },
      {
        "text": "π(A.Padre) ( A ⋈(A.Nome=P.Figlio) P )",
        "correct": true
      },
      {
        "text": "σ(A.Padre) ( A ⋈(A.Nome=P.Figlio) P )",
        "correct": false
      }
    ]
  },
  {
    "text": "In una query SQL, la parola chiave DISTINCT va inserita:",
    "answers": [
      {
        "text": "subito prima della clausola SELECT",
        "correct": false
      },
      {
        "text": "subito dopo la clausola WHERE",
        "correct": false
      },
      {
        "text": "subito prima della clausola WHERE",
        "correct": false
      },
      {
        "text": "Subito dopo la clausola SELECT",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, l'eliminazione dei duplicati:",
    "answers": [
      {
        "text": "E' sempre necessaria dopo ogni operazione di proiezione",
        "correct": false
      },
      {
        "text": "Non è mai necessaria",
        "correct": false
      },
      {
        "text": "Deve essere specificata da chi scrive l'interrogazione",
        "correct": true
      },
      {
        "text": "E' sempre necessaria dopo ogni operazione di selezione",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella sintassi alternativa introdotta in SQL-2 per la specifica del JOIN, la condizione di JOIN:",
    "answers": [
      {
        "text": "non compare come argomento nella clausola WHERE",
        "correct": true
      },
      {
        "text": "compare come argomento nella clausola SELECT",
        "correct": false
      },
      {
        "text": "compare come argomento nella clausola WHERE",
        "correct": false
      },
      {
        "text": "compare come argomento nella clausola DISTINCT",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella sintassi alternativa introdotta in SQL-2 per la specifica del JOIN, il parametro \"TipoJoin\" va specificato nella",
    "answers": [
      {
        "text": "DISTINCT",
        "correct": false
      },
      {
        "text": "FROM",
        "correct": true
      },
      {
        "text": "SELECT",
        "correct": false
      },
      {
        "text": "WHERE",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, nel caso di un JOIN INTERNO, se per una riga in una tabella non ne esiste una corrispondente nell'altra",
    "answers": [
      {
        "text": "la riga viene comunque considerata",
        "correct": false
      },
      {
        "text": "la riga viene considerata solo se la tabella è stata specificata nella clausola FROM",
        "correct": false
      },
      {
        "text": "la riga viene considerata solo se la condizione è stata specificata nella clausola WHERE",
        "correct": false
      },
      {
        "text": "la riga non viene considerata",
        "correct": true
      }
    ]
  },
  {
    "text": "Utilizzando la sintassi con join esplicito, la query:  SELECT P.Figlio, P.Padre, M.Madre",
    "answers": [
      {
        "text": "SELECT P.Figlio, P.Padre,  M.MadreFROM Paternità P JOIN Maternità M ON P.Figlio=M.Figlio",
        "correct": true
      },
      {
        "text": "SELECT P.Figlio, P.Padre,  M.MadreFROM Paternità P LEFT JOIN Maternità M ON P.Figlio=M.Figlio",
        "correct": false
      },
      {
        "text": "SELECT P.Figlio, P.Padre,  M.MadreFROM Paternità P FULL JOIN Maternità M ON P.Figlio=M.Figlio",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella sintassi alternativa introdotta in SQL-2 per la specifica del JOIN, il FULL JOIN rappresenta:",
    "answers": [
      {
        "text": "il join interno esteso con le righe escluse di entrambe le tabelle",
        "correct": true
      },
      {
        "text": "il join esterno esteso con le righe escluse di entrambe le tabelle",
        "correct": false
      },
      {
        "text": "il join interno limitato alle sole righe di entrambe le tabelle",
        "correct": false
      },
      {
        "text": "il join interno esteso con le righe incluse di entrambe le tabelle",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella sintassi alternativa introdotta in SQL-2 per la specifica del JOIN, il LEFT JOIN rappresenta:",
    "answers": [
      {
        "text": "il join interno esteso con le righe escluse di entrambe le tabelle",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella sintassi alternativa introdotta in SQL-2 per la specifica del JOIN, il RIGHT JOIN rappresenta:",
    "answers": [
      {
        "text": "il join interno esteso con le righe escluse di entrambe le tabelle",
        "correct": false
      }
    ]
  },
  {
    "text": "La query SQL  SELECT DISTINCT P.Padre, M.Madre",
    "answers": [
      {
        "text": "i figli di cui sia noto o il padre o la madre",
        "correct": false
      },
      {
        "text": "padre e madre di ogni figlio, includendo anche i casi in cui è noto solo il padre",
        "correct": false
      },
      {
        "text": "padre e madre di ogni figlio, includendo anche i casi in cui è nota solo la madre",
        "correct": false
      },
      {
        "text": "padre e madre di ogni figlio, includendo anche i casi in cui è noto solo il padre o solo la madre",
        "correct": true
      }
    ]
  },
  {
    "text": "Gli operatori insiemistici in SQL sono:",
    "answers": [
      {
        "text": "uno",
        "correct": false
      },
      {
        "text": "due",
        "correct": false
      },
      {
        "text": "tre",
        "correct": true
      },
      {
        "text": "quattro",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale dei seguenti non è un operatore insiemistico disponibile in SQL:",
    "answers": [
      {
        "text": "SELECT",
        "correct": true
      },
      {
        "text": "UNION",
        "correct": false
      },
      {
        "text": "INTERSECT",
        "correct": false
      },
      {
        "text": "EXCEPT",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, l'operatore insiemistico EXCEPT prende anche il nome di:",
    "answers": [
      {
        "text": "INTERSECT",
        "correct": false
      },
      {
        "text": "UNION",
        "correct": false
      },
      {
        "text": "PLUS",
        "correct": false
      },
      {
        "text": "MINUS",
        "correct": true
      }
    ]
  },
  {
    "text": "Quali operatori insiemistici in SQL non sono sostituibili con altri costrutti del linguaggio:",
    "answers": [
      {
        "text": "tutti",
        "correct": false
      },
      {
        "text": "solo UNION",
        "correct": true
      },
      {
        "text": "solo INTERSECT",
        "correct": false
      },
      {
        "text": "solo EXCEPT",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, si può utilizzare un operatore insiemistico tra due tabelle:",
    "answers": [
      {
        "text": "se gli schemi delle tabelle sono identici",
        "correct": false
      },
      {
        "text": "se gli attributi coinvolti delle due tabelle sono in pari numero e hanno stessi domini",
        "correct": false
      },
      {
        "text": "se gli attributi coinvolti delle due tabelle sono in pari numero e hanno domini compatibili",
        "correct": true
      },
      {
        "text": "sempre",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, nell'unione con l'operatore UNION:",
    "answers": [
      {
        "text": "gli elementi duplicati vengono raddoppiati",
        "correct": false
      },
      {
        "text": "gli elementi duplicati vengono eliminati",
        "correct": true
      },
      {
        "text": "gli elementi duplicati non vengono eliminati",
        "correct": false
      },
      {
        "text": "gli elementi duplicati vengono posti a NULL",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, l'unica colonna della tabella risultato della query seguente  SELECT Nome",
    "answers": [
      {
        "text": "nome",
        "correct": true
      },
      {
        "text": "cognome",
        "correct": false
      },
      {
        "text": "result",
        "correct": false
      },
      {
        "text": "NULL",
        "correct": false
      }
    ]
  },
  {
    "text": "INTERSECT è l'operatore insiemistico SQL di:",
    "answers": [
      {
        "text": "differenza",
        "correct": false
      },
      {
        "text": "unione",
        "correct": false
      },
      {
        "text": "intersezione",
        "correct": true
      },
      {
        "text": "complemento",
        "correct": false
      }
    ]
  },
  {
    "text": "EXCEPT è l'operatore insiemistico SQL di:",
    "answers": [
      {
        "text": "differenza",
        "correct": true
      },
      {
        "text": "unione",
        "correct": false
      },
      {
        "text": "intersezione",
        "correct": false
      },
      {
        "text": "complemento",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, una variabile viene definita attraverso la parola chiave:",
    "answers": [
      {
        "text": "WITH",
        "correct": false
      },
      {
        "text": "FROM",
        "correct": false
      },
      {
        "text": "WHERE",
        "correct": false
      },
      {
        "text": "AS",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, uno pseudonimo (un alias) esiste:",
    "answers": [
      {
        "text": "per tutta la durata della sessione di collegamento al database",
        "correct": false
      },
      {
        "text": "finchè un singolo utente effettua tutte le sue query",
        "correct": false
      },
      {
        "text": "solo per la durata della query",
        "correct": true
      },
      {
        "text": "finchè non viene modificato lo schema del database",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, l'utilizzo degli alias consente di scrivere interrogazioni:",
    "answers": [
      {
        "text": "più chiare e compatte",
        "correct": true
      },
      {
        "text": "più complesse",
        "correct": false
      },
      {
        "text": "con clausole WHERE ottimizzate",
        "correct": false
      },
      {
        "text": "più efficienti",
        "correct": false
      }
    ]
  },
  {
    "text": "SQL permette di ordinare i risultati di una query mediante la clausola:",
    "answers": [
      {
        "text": "SORT BY",
        "correct": false
      },
      {
        "text": "SELECT BY",
        "correct": false
      },
      {
        "text": "ORDER",
        "correct": false
      },
      {
        "text": "ORDER BY",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, il valore di default dell'ordinamento dei risultati, se non diversamente specificato nella clausola ORDER BY,",
    "answers": [
      {
        "text": "discendente",
        "correct": false
      },
      {
        "text": "ascendente",
        "correct": true
      },
      {
        "text": "casuale",
        "correct": false
      },
      {
        "text": "ascendente per attributi pari, discendente per i dispari",
        "correct": false
      }
    ]
  },
  {
    "text": "In un'interrogazione SQL, la parola chiave ANY, specifica che:",
    "answers": [
      {
        "text": "la riga soddisfa la condizione per tutti gli elementi restituiti dall'interrogazione interna",
        "correct": false
      },
      {
        "text": "la riga soddisfa la condizione per almeno uno degli elementi restituiti dall'interrogazione interna",
        "correct": true
      },
      {
        "text": "la riga soddisfa sempre la condizione",
        "correct": false
      },
      {
        "text": "la riga soddisfa la condizione solo se clausola FROM è assente",
        "correct": false
      }
    ]
  },
  {
    "text": "In un'interrogazione SQL, la parola chiave ALL, specifica che la riga soddisfa la condizione solo se:",
    "answers": [
      {
        "text": "tutti i valori sono presenti tra gli elementi restituiti dall'interrogazione nidificata",
        "correct": false
      },
      {
        "text": "nessun elemento restituito dall'interrogazione nidificata rende vero il confronto",
        "correct": false
      },
      {
        "text": "almeno un elemento restituito dall'interrogazione nidificata rende vero il confronto",
        "correct": false
      },
      {
        "text": "tutti gli elementi restituiti dall'interrogazione nidificata rendono vero il confronto",
        "correct": true
      }
    ]
  },
  {
    "text": "L'operatore logico IN accetta come parametro un'interrogazione nidificata e restituisce VERO se:",
    "answers": [
      {
        "text": "il valore è presente nel risultato dell'interrogazione nidificata",
        "correct": true
      },
      {
        "text": "il valore non è presente nel risultato dell'interrogazione nidificata",
        "correct": false
      },
      {
        "text": "il valore è presente nella query esterna",
        "correct": false
      },
      {
        "text": "il valore è nullo",
        "correct": false
      }
    ]
  },
  {
    "text": "Il linguaggio SQL prevede che la nidificazione delle interrogazioni possa avvenire:",
    "answers": [
      {
        "text": "solo nella clausola SELECT",
        "correct": false
      },
      {
        "text": "nella clausole SELECT, FROM o WHERE",
        "correct": true
      },
      {
        "text": "solo nella clausola WHERE",
        "correct": false
      },
      {
        "text": "solo nella clausola FROM",
        "correct": false
      }
    ]
  },
  {
    "text": "Si può ottenere una \"catena di interrogazioni\" in SQL:",
    "answers": [
      {
        "text": "tramite interrogazioni nidificate in clausola FROM",
        "correct": true
      },
      {
        "text": "tramite interrogazioni nidificate in clausola SELECT",
        "correct": false
      },
      {
        "text": "tramite interrogazioni nidificate in clausola WHERE",
        "correct": false
      },
      {
        "text": "tramite due interrogazioni scritte una dopo l'altra",
        "correct": false
      }
    ]
  },
  {
    "text": "In algebra relazionale, tutte le condizioni vengono valutate:",
    "answers": [
      {
        "text": "su tutte le tuple contemporaneamente",
        "correct": false
      },
      {
        "text": "su un sottoinsieme di almeno due tuple",
        "correct": false
      },
      {
        "text": "su una tupla alla volta",
        "correct": true
      },
      {
        "text": "su una tupla che però non abbia valori NULL",
        "correct": false
      }
    ]
  },
  {
    "text": "Quanti operatori aggregati sono previsti dallo standard SQL:",
    "answers": [
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "5",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, un operatore aggregato va inserito nella clausola:",
    "answers": [
      {
        "text": "SELECT",
        "correct": true
      },
      {
        "text": "FROM",
        "correct": false
      },
      {
        "text": "WHERE",
        "correct": false
      },
      {
        "text": "ALIAS",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, le interrogazioni con operatori aggregati sono utilizzate ogni qual volta vi sia necessità di valutare:",
    "answers": [
      {
        "text": "proprietà di un singolo valore di un attributo",
        "correct": false
      },
      {
        "text": "proprietà di tabelle con vincoli interrelazionali",
        "correct": false
      },
      {
        "text": "proprietà che dipendono da singole tuple",
        "correct": false
      },
      {
        "text": "proprietà che dipendono da insiemi di tuple",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, l'operatore aggregato di media (AVG) restituisce:",
    "answers": [
      {
        "text": "la media aritmetica dei valori di una colonna di testi",
        "correct": false
      },
      {
        "text": "la media aritmetica dei valori di una colonna numerica",
        "correct": true
      },
      {
        "text": "la media aritmetica ponderata dei valori di una colonna numerica",
        "correct": false
      },
      {
        "text": "la media aritmetica dei valori di una colonna numerica e alfanumerica",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, l'operatore aggregato totale (SUM) restituisce:",
    "answers": [
      {
        "text": "la somma di parte di una colonna numerica",
        "correct": false
      },
      {
        "text": "la somma di una colonna di testi",
        "correct": false
      },
      {
        "text": "la somma di una colonna numerica",
        "correct": true
      },
      {
        "text": "la somma di una colonna alfanumerica",
        "correct": false
      }
    ]
  },
  {
    "text": "La seguente query SQL sulla tabella Persone(Nome,Età,Reddito):  SELECT nome, max(Reddito)",
    "answers": [
      {
        "text": "restituisce il nome e il reddito della persona con il reddito più alto",
        "correct": false
      },
      {
        "text": "restituisce il nome e il reddito della persona con il reddito più basso",
        "correct": false
      },
      {
        "text": "restituisce tutti i nomi e i redditi della persone",
        "correct": false
      },
      {
        "text": "non è corretta",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, gli operatori aggregati possono essere applicati a sottoinsiemi di righe attraverso la clausola:",
    "answers": [
      {
        "text": "GROUP BY",
        "correct": true
      },
      {
        "text": "GROUP",
        "correct": false
      },
      {
        "text": "ALIAS",
        "correct": false
      },
      {
        "text": "GROUP WITH",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, nelle interrogazioni con raggruppamento, nella clausola SELECT può comparire:",
    "answers": [
      {
        "text": "tutti gli attributi elencati nella clausola FROM",
        "correct": false
      },
      {
        "text": "solo gli stessi attributi usati nella clausola GROUP BY",
        "correct": false
      },
      {
        "text": "solo un sottoinsieme degli attributi usati nella clausola GROUP BY",
        "correct": true
      },
      {
        "text": "i soli attributi presenti nella clausola WHERE",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, la clausola HAVING consente di valutare condizioni:",
    "answers": [
      {
        "text": "su singole tuple",
        "correct": false
      },
      {
        "text": "su sottoinsiemi",
        "correct": true
      },
      {
        "text": "su colonne",
        "correct": false
      },
      {
        "text": "su schemi",
        "correct": false
      }
    ]
  },
  {
    "text": "Il comando SQL:   INSERT INTO NomeTabella [ Attributi ]",
    "answers": [
      {
        "text": "inserisce una nuova tabella nello schema di base di dati",
        "correct": false
      },
      {
        "text": "inserisce un nuovo attributo in una tabella",
        "correct": false
      },
      {
        "text": "inserisce singole righe nella tabella",
        "correct": true
      },
      {
        "text": "inserisce un insieme di righe nella tabella",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, se in un comando INSERT non sono presenti tutti gli attributi della tabella, i valori di quegli attributi:",
    "answers": [
      {
        "text": "l'inserimento viene rifiutato",
        "correct": false
      },
      {
        "text": "assumono il valore di default se previsto",
        "correct": true
      },
      {
        "text": "assumono sempre il valore nullo",
        "correct": false
      },
      {
        "text": "assumono un valore casuale",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, utilizzando la seconda forma del comando INSERT (con clausola SELECT):",
    "answers": [
      {
        "text": "si possono inserire insiemi di righe in una tabella",
        "correct": true
      },
      {
        "text": "si può inserire una sola riga in una tabella",
        "correct": false
      },
      {
        "text": "si può inserire solo un singolo attributo in una tabella",
        "correct": false
      },
      {
        "text": "si può inserire una nuova colonna in una tabella",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, se un comando INSERT viola un vincolo di NOT NULL definito sull'attributo:",
    "answers": [
      {
        "text": "viene eliminato il vincolo sull'attributo",
        "correct": false
      },
      {
        "text": "viene eliminata la tabella",
        "correct": false
      },
      {
        "text": "viene inserito il valore di default",
        "correct": false
      },
      {
        "text": "l'inserimento viene rifiutato",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, il comando UPDATE consente di:",
    "answers": [
      {
        "text": "aggiornare solo una riga di una tabella",
        "correct": false
      },
      {
        "text": "aggiornare solo una colonna di una tabella",
        "correct": false
      },
      {
        "text": "aggiornare sempre tutte le righe di una tabella",
        "correct": false
      },
      {
        "text": "aggiornare uno o più attributi in righe di una tabella che soddisfano l'eventuale condizione",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, la sintassi del comando UPDATE consente di inserire come nuovo valore oggetto della modifica:",
    "answers": [
      {
        "text": "solo il risultato della valutazione di un'espressione o il valore nullo",
        "correct": false
      },
      {
        "text": "solo il risultato della valutazione di un'espressione o il risultato di un'interrogazione",
        "correct": false
      },
      {
        "text": "il risultato della valutazione di un'espressione, il risultato di un'interrogazione, o il valore nullo",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, il comando DELETE:",
    "answers": [
      {
        "text": "elimina sempre intere tabelle",
        "correct": false
      },
      {
        "text": "elimina lo schema di una tabella",
        "correct": false
      },
      {
        "text": "elimina attributi da una tabella",
        "correct": false
      },
      {
        "text": "elimina righe da una tabella",
        "correct": true
      }
    ]
  },
  {
    "text": "In SQL, nel comando DELETE in cui la clausola WHERE viene omessa:",
    "answers": [
      {
        "text": "si mettono a NULL tutti i valori della tabella",
        "correct": false
      },
      {
        "text": "si cancellano tutte le righe della tabella",
        "correct": true
      },
      {
        "text": "si cancella lo schema della tabella",
        "correct": false
      },
      {
        "text": "si eliminano le righe che contengono valori nulli",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, la differenza tra i comandi DROP e DELETE è:",
    "answers": [
      {
        "text": "DROP opera anche sullo schema della base di dati; DELETE solo sull'istanza",
        "correct": true
      },
      {
        "text": "DELETE opera anche sullo schema della base di dati; DROP solo sull'istanza",
        "correct": false
      },
      {
        "text": "non vi è differenza se per DROP si specifica l'opzione CASCADE",
        "correct": false
      },
      {
        "text": "non vi è differenza se per DROP si specifica l'opzione RESTRICT",
        "correct": false
      }
    ]
  },
  {
    "text": "In SQL, qualora esistano altre tabelle legate a MiaTabella da un vincolo di integrirà referenziale con politica di",
    "answers": [
      {
        "text": "non ci sono differenze",
        "correct": false
      },
      {
        "text": "DROP non può essere utilizzato se MiaTabella è referenziata in vincoli di integrità referenziale",
        "correct": false
      }
    ]
  },
  {
    "text": "Qual è la funzione principale del comando COMMIT in una transazione",
    "answers": [
      {
        "text": "Annullare tutte le modifiche effettuate dalla transazione",
        "correct": false
      },
      {
        "text": "Iniziare una nuova transazione",
        "correct": false
      },
      {
        "text": "Salvare permanentemente tutte le modifiche effettuate dalla transazione",
        "correct": true
      },
      {
        "text": "Sospendere temporaneamente la transazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Qual è l'effetto di un rollback in una transazione",
    "answers": [
      {
        "text": "Salva tutti gli aggiornamenti",
        "correct": false
      },
      {
        "text": "Annulla tutti gli aggiornamenti",
        "correct": true
      },
      {
        "text": "Duplica gli aggiornamenti",
        "correct": false
      },
      {
        "text": "Non ha effetto sugli aggiornamenti",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale comando SQL è usato per annullare una transazione",
    "answers": [
      {
        "text": "commit",
        "correct": false
      },
      {
        "text": "rollback",
        "correct": true
      },
      {
        "text": "cancel",
        "correct": false
      },
      {
        "text": "abort",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale delle proprietà acide assicura che una transazione sia eseguita completamente o per nulla",
    "answers": [
      {
        "text": "Consistenza",
        "correct": false
      },
      {
        "text": "Isolamento",
        "correct": false
      },
      {
        "text": "Persistenza",
        "correct": false
      },
      {
        "text": "Atomicità",
        "correct": true
      }
    ]
  },
  {
    "text": "Quale delle proprietà acide garantisce che una transazione sia un'unità indivisibile di esecuzione",
    "answers": [
      {
        "text": "Consistenza",
        "correct": false
      },
      {
        "text": "Persistenza",
        "correct": false
      },
      {
        "text": "Isolamento",
        "correct": false
      },
      {
        "text": "Atomicità",
        "correct": true
      }
    ]
  },
  {
    "text": "Quale delle proprietà acide assicura che una transazione porti il database da uno stato valido a un altro",
    "answers": [
      {
        "text": "Persistenza",
        "correct": false
      },
      {
        "text": "Atomicità",
        "correct": false
      },
      {
        "text": "Consistenza",
        "correct": true
      },
      {
        "text": "Isolamento",
        "correct": false
      }
    ]
  },
  {
    "text": "Cosa succede se una transazione viola un vincolo di integrità durante la sua esecuzione",
    "answers": [
      {
        "text": "La transazione viene automaticamente confermata",
        "correct": false
      },
      {
        "text": "La transazione viene annullata e il database viene riportato allo stato precedente",
        "correct": true
      },
      {
        "text": "Il sistema ignora la violazione e continua l'esecuzione",
        "correct": false
      },
      {
        "text": "La transazione viene sospesa fino alla risoluzione del vincolo",
        "correct": false
      }
    ]
  },
  {
    "text": "Qual è la funzione principale dell'isolamento nelle transazioni",
    "answers": [
      {
        "text": "Migliorare le prestazioni del database",
        "correct": false
      },
      {
        "text": "Garantire che le transazioni siano eseguite in modo indipendente l'una dall'altra",
        "correct": true
      },
      {
        "text": "Ridurre il tempo di esecuzione delle transazioni",
        "correct": false
      },
      {
        "text": "Aumentare la capacità di archiviazione del database",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale livello di isolamento delle transazioni permette di leggere dati non ancora confermati",
    "answers": [
      {
        "text": "Serializable",
        "correct": false
      },
      {
        "text": "Read Committed",
        "correct": false
      },
      {
        "text": "Read Uncommitted",
        "correct": true
      },
      {
        "text": "Repeatable Read",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale livello di isolamento garantisce che le transazioni siano completamente isolate",
    "answers": [
      {
        "text": "Read Uncommitted",
        "correct": false
      },
      {
        "text": "Serializable",
        "correct": true
      },
      {
        "text": "Read Committed",
        "correct": false
      },
      {
        "text": "Repeatable Read",
        "correct": false
      }
    ]
  },
  {
    "text": "La fase iniziale del ciclo di vita di un sistema informativo è:",
    "answers": [
      {
        "text": "Progettazione logica",
        "correct": false
      },
      {
        "text": "Raccolta e analisi dei requisiti",
        "correct": false
      },
      {
        "text": "Studio di fattibilità",
        "correct": true
      },
      {
        "text": "Implementazione",
        "correct": false
      }
    ]
  },
  {
    "text": "La fase si concentra sull'ottimizzazione delle prestazioni del sistema attraverso la gestione dei parametri fisici dei",
    "answers": [
      {
        "text": "Progettazione logica",
        "correct": false
      },
      {
        "text": "Progettazione fisica",
        "correct": true
      },
      {
        "text": "Validazione e collaudo",
        "correct": false
      },
      {
        "text": "Progettazione concettuale",
        "correct": false
      }
    ]
  },
  {
    "text": "L'obiettivo della progettazione concettuale in una base dati è:",
    "answers": [
      {
        "text": "Tradurre lo schema concettuale in uno schema logico",
        "correct": false
      },
      {
        "text": "Ottimizzare le operazioni sui dati",
        "correct": false
      },
      {
        "text": "Rappresentare le specifiche informali della realtà di interesse",
        "correct": true
      },
      {
        "text": "Verificare la completezza delle operazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La fase del ciclo di vita del sistema informativo in cui si costruisce e popola la base di dati è:",
    "answers": [
      {
        "text": "Progettazione logica",
        "correct": false
      },
      {
        "text": "Implementazione",
        "correct": true
      },
      {
        "text": "Progettazione concettuale",
        "correct": false
      },
      {
        "text": "Funzionamento",
        "correct": false
      }
    ]
  },
  {
    "text": "Il modello comunemente usato nella progettazione logica delle basi di dati è:",
    "answers": [
      {
        "text": "Modello Entità-Relazione",
        "correct": true
      },
      {
        "text": "Modello relazionale",
        "correct": false
      },
      {
        "text": "Modello a oggetti",
        "correct": false
      },
      {
        "text": "Modello gerarchico",
        "correct": false
      }
    ]
  },
  {
    "text": "La tecnica che viene utilizzata nella progettazione logica per verificare la qualità dello schema logico è:",
    "answers": [
      {
        "text": "Normalizzazione",
        "correct": true
      },
      {
        "text": "Indicizzazione",
        "correct": false
      },
      {
        "text": "Astrazione",
        "correct": false
      },
      {
        "text": "Decomposizione",
        "correct": false
      }
    ]
  },
  {
    "text": "Lo schema fisico in una base di dati rappresenta:",
    "answers": [
      {
        "text": "La struttura concettuale dei dati",
        "correct": false
      },
      {
        "text": "Il modello logico dei dati",
        "correct": false
      },
      {
        "text": "I parametri fisici di memorizzazione dei dati",
        "correct": true
      },
      {
        "text": "Le operazioni sui dati",
        "correct": false
      }
    ]
  },
  {
    "text": "La fase del ciclo di vita di un sistema informativo che coinvolge l'interazione con gli utenti per definire le",
    "answers": [
      {
        "text": "Validazione",
        "correct": false
      },
      {
        "text": "Raccolta e analisi dei requisiti",
        "correct": true
      },
      {
        "text": "Progettazione concettuale",
        "correct": false
      },
      {
        "text": "Funzionamento",
        "correct": false
      }
    ]
  },
  {
    "text": "L'obiettivo della fase di validazione e collaudo nel ciclo di vita di un sistema informativo è:",
    "answers": [
      {
        "text": "Creare il prototipo del sistema",
        "correct": false
      },
      {
        "text": "Verificare la qualità e il corretto funzionamento del sistema",
        "correct": true
      },
      {
        "text": "Implementare il codice dei programmi",
        "correct": false
      },
      {
        "text": "Definire i requisiti hardware e software",
        "correct": false
      }
    ]
  },
  {
    "text": "La fase che prevede la creazione dello schema logico è:",
    "answers": [
      {
        "text": "Progettazione concettuale",
        "correct": false
      },
      {
        "text": "Progettazione fisica",
        "correct": false
      },
      {
        "text": "Progettazione logica",
        "correct": true
      },
      {
        "text": "Validazione e collaudo",
        "correct": false
      }
    ]
  },
  {
    "text": "La rappresentazione grafica che viene utilizzata per le entità in uno schema E-R è:",
    "answers": [
      {
        "text": "Un rombo con il nome dell'entità",
        "correct": false
      },
      {
        "text": "Un cerchio con il nome dell'entità",
        "correct": false
      },
      {
        "text": "Un rettangolo con il nome dell'entità",
        "correct": true
      },
      {
        "text": "Un triangolo con il nome dell'entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Le entità nel modello E-R rappresentano:",
    "answers": [
      {
        "text": "Classi di oggetti con proprietà comuni ed esistenza autonoma",
        "correct": true
      },
      {
        "text": "Oggetti con esistenza dipendente da altre entità",
        "correct": false
      },
      {
        "text": "Classi di valori numerici",
        "correct": false
      },
      {
        "text": "Occorrenze di entità che non hanno proprietà",
        "correct": false
      }
    ]
  },
  {
    "text": "Le relazioni nel modello E-R rappresentano:",
    "answers": [
      {
        "text": "Legami logici tra oggetti diversi",
        "correct": true
      },
      {
        "text": "Relazioni tra attributi di un'entità",
        "correct": false
      },
      {
        "text": "Rappresentazioni grafiche di una base dati.",
        "correct": false
      },
      {
        "text": "Associazioni tra occorrenze di relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Gli attributi nel modello E-R rappresentano:",
    "answers": [
      {
        "text": "Le proprietà elementari di entità o relazioni",
        "correct": true
      },
      {
        "text": "Le operazioni eseguibili su un'entità",
        "correct": false
      },
      {
        "text": "Le proprietà delle operazioni sui dati",
        "correct": false
      },
      {
        "text": "I valori non ammessi in un'entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Gli elementi che si possono trovare in un attributo composto nel modello E-R sono:",
    "answers": [
      {
        "text": "Gli attributi che formano l'identificativo di un'entità",
        "correct": true
      },
      {
        "text": "Gli attributi non hanno domini definiti",
        "correct": false
      },
      {
        "text": "Le operazioni definite sui dati",
        "correct": false
      },
      {
        "text": "Gli attributi che determinano la relazione tra entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Il costrutto che lega  un impiegato che lavora in un dipartimento è:",
    "answers": [
      {
        "text": "Afferenza",
        "correct": false
      },
      {
        "text": "Composizione",
        "correct": false
      },
      {
        "text": "Relazione",
        "correct": true
      },
      {
        "text": "Direzione",
        "correct": false
      }
    ]
  },
  {
    "text": "La differenza che c'è tra un'occorrenza di entità e le sue proprietà nel modello E-R è che:",
    "answers": [
      {
        "text": "Un'occorrenza di entità rappresenta un valore identificativo dell'oggetto",
        "correct": false
      },
      {
        "text": "Un'occorrenza di entità è l'oggetto stesso, indipendente dalle proprietà",
        "correct": true
      },
      {
        "text": "Un'occorrenza di entità è una proprietà identificativa",
        "correct": false
      },
      {
        "text": "Un'occorrenza di entità è un valore dipendente dalle proprietà",
        "correct": false
      }
    ]
  },
  {
    "text": "La  rappresentazione graficamente di una relazione in uno schema E-R è:",
    "answers": [
      {
        "text": "Un rettangolo con il nome della relazione",
        "correct": false
      },
      {
        "text": "Un cerchio con il nome della relazione",
        "correct": false
      },
      {
        "text": "Un rombo con il nome della relazione",
        "correct": true
      },
      {
        "text": "Un triangolo con il nome della relazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Un attributo composto è:",
    "answers": [
      {
        "text": "Un attributo che raggruppa altri attributi con significato affine",
        "correct": true
      },
      {
        "text": "Un insieme di relazioni correlate",
        "correct": false
      },
      {
        "text": "Un attributo che identifica un'entità",
        "correct": false
      },
      {
        "text": "Un attributo composto da valori numerici",
        "correct": false
      }
    ]
  },
  {
    "text": "Tra questi, un esempio di relazione ternaria nel modello E-R è:",
    "answers": [
      {
        "text": "La relazione tra due entità",
        "correct": false
      },
      {
        "text": "La relazione tra tre entità",
        "correct": false
      },
      {
        "text": "Un attributo di un'entità",
        "correct": true
      },
      {
        "text": "Una relazione ternaria tra due entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Il simbolo N in una cardinalità indica:",
    "answers": [
      {
        "text": "Indica un numero esatto.",
        "correct": false
      },
      {
        "text": "Indica un numero non maggiore di 1.",
        "correct": false
      },
      {
        "text": "Indica un numero maggiore di 1.",
        "correct": true
      },
      {
        "text": "Indica un valore nullo",
        "correct": false
      }
    ]
  },
  {
    "text": "La cardinalità di una relazione nel modello E-R rappresenta:",
    "answers": [
      {
        "text": "Il numero minimo e massimo di occorrenze di relazione cui un'entità può partecipare.",
        "correct": true
      },
      {
        "text": "Il numero di entità partecipanti a una relazione",
        "correct": false
      },
      {
        "text": "Il numero di valori possibili di un attributo",
        "correct": false
      },
      {
        "text": "Il numero massimo di valori che un'entità può avere",
        "correct": false
      }
    ]
  },
  {
    "text": "Le relazioni con cardinalità massima pari a 1 per entrambe le entità:",
    "answers": [
      {
        "text": "Si classificano come relazioni molti a molti.",
        "correct": false
      },
      {
        "text": "Si classificano come relazioni uno a molti.",
        "correct": false
      },
      {
        "text": "Si classificano come relazioni uno a uno.",
        "correct": true
      },
      {
        "text": "Si classificano come relazioni molti a uno.",
        "correct": false
      }
    ]
  },
  {
    "text": "La cardinalità massima pari a 3 per un attributo indica che:",
    "answers": [
      {
        "text": "Indica che l'attributo è obbligatorio.",
        "correct": false
      },
      {
        "text": "Indica che l'attributo è facoltativo.",
        "correct": false
      },
      {
        "text": "Indica che l'attributo non è utilizzato.",
        "correct": false
      },
      {
        "text": "Indica che l'attributo ha al più 3 valori.",
        "correct": true
      }
    ]
  },
  {
    "text": "La cardinalità di un attributo descrive:",
    "answers": [
      {
        "text": "Il numero di entità partecipanti a una relazione.",
        "correct": false
      },
      {
        "text": "Il numero minimo e massimo di valori associati a un'entità o una relazione.",
        "correct": true
      },
      {
        "text": "Il numero massimo di relazioni che un'entità può avere.",
        "correct": false
      },
      {
        "text": "Il tipo di dato associato a una relazione.",
        "correct": false
      }
    ]
  },
  {
    "text": "La cardinalità di un'entità in una relazione si rappresenta:",
    "answers": [
      {
        "text": "Con un cerchio e linee che collegano entità e relazioni.",
        "correct": false
      },
      {
        "text": "Con un rettangolo e un numero a lato della relazione.",
        "correct": false
      },
      {
        "text": "Con un rombo e linee con numeri tra parentesi.",
        "correct": true
      },
      {
        "text": "Con un triangolo che collega entità e relazioni.",
        "correct": false
      }
    ]
  },
  {
    "text": "Il vincolo tra cardinalità minima e massima in una relazione stabilisce che:",
    "answers": [
      {
        "text": "La cardinalità minima deve essere maggiore di quella massima.",
        "correct": false
      },
      {
        "text": "La cardinalità minima deve essere uguale a quella massima.",
        "correct": false
      },
      {
        "text": "La cardinalità minima deve essere minore o uguale a quella massima.",
        "correct": true
      },
      {
        "text": "Non esiste alcun vincolo tra le cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "La partecipazione opzionale di un'entità a una relazione opzionale significa che:",
    "answers": [
      {
        "text": "Significa che un'entità deve partecipare a ogni occorrenza di relazione.",
        "correct": false
      },
      {
        "text": "Significa che un'entità non è obbligata a partecipare a ogni occorrenza di relazione.",
        "correct": true
      },
      {
        "text": "Significa che un'entità deve avere una partecipazione unica.",
        "correct": false
      },
      {
        "text": "Significa che l'entità deve partecipare a tutte le occorrenze di relazione.",
        "correct": false
      }
    ]
  },
  {
    "text": "La cardinalità minima pari a 0 per un attributo indica che:",
    "answers": [
      {
        "text": "Indica che l'attributo è obbligatorio.",
        "correct": false
      },
      {
        "text": "Indica che l'attributo è facoltativo.",
        "correct": true
      },
      {
        "text": "Indica che l'attributo non è utilizzato.",
        "correct": false
      },
      {
        "text": "Indica che l'attributo è obbligatorio solo per alcune occorrenze.",
        "correct": false
      }
    ]
  },
  {
    "text": "Un attributo multivalore è:",
    "answers": [
      {
        "text": "Un attributo con valori unici per ogni occorrenza di entità.",
        "correct": false
      },
      {
        "text": "Un attributo con più valori per un'occorrenza di entità.",
        "correct": true
      },
      {
        "text": "Un attributo che può essere condiviso da più entità.",
        "correct": false
      },
      {
        "text": "Un attributo che può avere solo valori nulli.",
        "correct": false
      }
    ]
  },
  {
    "text": "Un identificatore costituito da un solo attributo viene rappresentato graficamente come:",
    "answers": [
      {
        "text": "con un cerchio attorno al nome dell'attributo",
        "correct": true
      },
      {
        "text": "con un rettangolo attorno al nome dell'attributo",
        "correct": false
      },
      {
        "text": "con un simbolo a freccia accanto all'attributo",
        "correct": false
      },
      {
        "text": "con un doppio cerchio attorno all'attributo",
        "correct": false
      }
    ]
  },
  {
    "text": "Un esempio di identificatore composto è:",
    "answers": [
      {
        "text": "l'attributo Targa di un'entità Automobile",
        "correct": false
      },
      {
        "text": "l'attributo Cognome di un'entità Persona",
        "correct": false
      },
      {
        "text": "l'insieme degli attributi Nome, Cognome e Data di Nascita per l'entità Persona",
        "correct": true
      },
      {
        "text": "l'attributo Nome per l'entità Città",
        "correct": false
      }
    ]
  },
  {
    "text": "Un esempio di identificatore interno è:",
    "answers": [
      {
        "text": "l'attributo Targa di un'entità Automobile",
        "correct": true
      },
      {
        "text": "l'attributo Cognome di un'entità Persona",
        "correct": false
      },
      {
        "text": "l'insieme degli attributi Nome, Cognome e Data di Nascita per l'entità Persona",
        "correct": false
      },
      {
        "text": "l'attributo Nome per l'entità Città",
        "correct": false
      }
    ]
  },
  {
    "text": "L'attributo Targa per l'entità Automobile costituisce:",
    "answers": [
      {
        "text": "un identificatore unico interno all'entità",
        "correct": true
      },
      {
        "text": "una relazione esterna",
        "correct": false
      },
      {
        "text": "l'entità identificata da una relazione",
        "correct": false
      },
      {
        "text": "l'entità rappresentata da più relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Un identificatore interno nel modello E-R è:",
    "answers": [
      {
        "text": "un attributo che identifica univocamente le occorrenze di un'entità",
        "correct": true
      },
      {
        "text": "un'entità con cardinalità uno a uno",
        "correct": false
      },
      {
        "text": "un attributo che identifica una relazione",
        "correct": false
      },
      {
        "text": "un identificatore che coinvolge altre relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Un identificatore esterno nel modello E-R è:",
    "answers": [
      {
        "text": "un identificatore che utilizza altre entità per identificare un'entità",
        "correct": false
      },
      {
        "text": "un identificatore che usa più attributi della stessa entità",
        "correct": false
      },
      {
        "text": "un identificatore che usa gli attributi di una relazione per identificare un'entità",
        "correct": true
      },
      {
        "text": "un identificatore che usa gli attributi e le relazioni di un'altra entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Il tipo di relazione necessaria per usare un identificatore esterno è:",
    "answers": [
      {
        "text": "una relazione con cardinalità uno a uno",
        "correct": true
      },
      {
        "text": "una relazione con cardinalità uno a molti",
        "correct": false
      },
      {
        "text": "una relazione con cardinalità molti a molti",
        "correct": false
      },
      {
        "text": "una relazione con cardinalità (0,1)",
        "correct": false
      }
    ]
  },
  {
    "text": "Un identificatore che usi  più attributi per identificare un'entità viene chiamato:",
    "answers": [
      {
        "text": "identificatore complesso",
        "correct": false
      },
      {
        "text": "identificatore composto",
        "correct": true
      },
      {
        "text": "identificatore singolo",
        "correct": false
      },
      {
        "text": "identificatore esterno",
        "correct": false
      }
    ]
  },
  {
    "text": "L'attributo Codice Fiscale per l'entità Persona costituisce:",
    "answers": [
      {
        "text": "un identificatore unico interno all'entità",
        "correct": true
      },
      {
        "text": "una relazione esterna",
        "correct": false
      },
      {
        "text": "l'entità identificata da una relazione",
        "correct": false
      },
      {
        "text": "l'entità rappresentata da più relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "L'utilizzo di un identificatore esterno implica che l'identificazione avviene per mezzo di:",
    "answers": [
      {
        "text": "gli attributi di una relazione",
        "correct": true
      },
      {
        "text": "le entità partecipanti alla relazione",
        "correct": false
      },
      {
        "text": "gli attributi di un'entità",
        "correct": false
      },
      {
        "text": "le chiavi esterne di una relazione",
        "correct": false
      }
    ]
  },
  {
    "text": "La proprietà per cui un'entità figlia eredita gli attributi dell'entità genitore è:",
    "answers": [
      {
        "text": "Ereditarietà",
        "correct": true
      },
      {
        "text": "Relazione",
        "correct": false
      },
      {
        "text": "Attributo",
        "correct": false
      },
      {
        "text": "Generalizzazione",
        "correct": false
      }
    ]
  },
  {
    "text": "La generalizzazione esiste tra le entità Studente e Lavoratore può essere:",
    "answers": [
      {
        "text": "Una generalizzazione parziale e sovrapposta",
        "correct": false
      },
      {
        "text": "Una generalizzazione totale ed esclusiva",
        "correct": true
      },
      {
        "text": "Una generalizzazione parziale ed esclusiva",
        "correct": false
      },
      {
        "text": "Una gerarchia di generalizzazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La relazione che esiste tra l'entità Progettista e l'entità Responsabile di progetto è:",
    "answers": [
      {
        "text": "Una relazione di sottoinsieme",
        "correct": false
      },
      {
        "text": "Una generalizzazione totale",
        "correct": false
      },
      {
        "text": "Una gerarchia di generalizzazioni",
        "correct": true
      },
      {
        "text": "Una relazione disgiunta",
        "correct": false
      }
    ]
  },
  {
    "text": "Una generalizzazione nel modello E-R rappresenta:",
    "answers": [
      {
        "text": "Un legame logico tra un'entità genitore e una o più entità figlie",
        "correct": true
      },
      {
        "text": "Una relazione tra due entità che condividono gli stessi attributi",
        "correct": false
      },
      {
        "text": "Una relazione tra un'entità e un attributo",
        "correct": false
      },
      {
        "text": "Una relazione tra entità diverse dello stesso schema",
        "correct": false
      }
    ]
  },
  {
    "text": "Il vincolo di copertura determina una generalizzazione come totale se:",
    "answers": [
      {
        "text": "Le occorrenze dell'entità genitore sono incluse nelle entità figlie",
        "correct": false
      },
      {
        "text": "Le occorrenze dell'entità figlia sono incluse nel genitore",
        "correct": false
      },
      {
        "text": "Le occorrenze dell'entità genitore sono escluse dalle entità figlie",
        "correct": false
      },
      {
        "text": "Ogni occorrenza dell'entità genitore è un'occorrenza di almeno una delle entità figlie",
        "correct": true
      }
    ]
  },
  {
    "text": "Il vincolo di copertura determina una generalizzazione come parziale se:",
    "answers": [
      {
        "text": "Le occorrenze dell'entità genitore sono incluse nelle entità figlie",
        "correct": false
      },
      {
        "text": "Le occorrenze dell'entità figlia sono incluse nel genitore",
        "correct": false
      },
      {
        "text": "Le occorrenze dell'entità genitore sono escluse dalle entità figlie",
        "correct": false
      },
      {
        "text": "Esiste un'occorrenza dell'entità genitore che non è un'occorrenza di almeno una delle entità figlie",
        "correct": true
      }
    ]
  },
  {
    "text": "Una generalizzazione esclusiva è caratterizzata da:",
    "answers": [
      {
        "text": "Le entità figlie non condividono occorrenze dell'entità genitore",
        "correct": false
      },
      {
        "text": "Le entità figlie condividono occorrenze dell'entità genitore",
        "correct": true
      },
      {
        "text": "Le entità figlie hanno solo un identificatore in comune",
        "correct": false
      },
      {
        "text": "Le entità figlie condividono relazioni con altre entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Il vincolo di disgiunzione rappresenta:",
    "answers": [
      {
        "text": "Le entità figlie non condividono occorrenze dell'entità genitore",
        "correct": true
      },
      {
        "text": "Le entità figlie condividono tutte le occorrenze dell'entità genitore",
        "correct": false
      },
      {
        "text": "Le entità figlie ereditano solo alcuni attributi del genitore",
        "correct": false
      },
      {
        "text": "Le entità figlie non ereditano nessun attributo del genitore",
        "correct": false
      }
    ]
  },
  {
    "text": "Una generalizzazione con una sola entità figlia rappresenta:",
    "answers": [
      {
        "text": "Sottoinsieme",
        "correct": true
      },
      {
        "text": "Entità figlia",
        "correct": false
      },
      {
        "text": "Vincolo di copertura",
        "correct": false
      },
      {
        "text": "Gerarchia",
        "correct": false
      }
    ]
  },
  {
    "text": "Una generalizzazione totale è:",
    "answers": [
      {
        "text": "Quando tutte le occorrenze dell'entità genitore sono anche entità figlie",
        "correct": true
      },
      {
        "text": "Quando nessuna occorrenza dell'entità genitore è un'entità figlia",
        "correct": false
      },
      {
        "text": "Quando alcune occorrenze dell'entità genitore non sono entità figlie",
        "correct": false
      },
      {
        "text": "Quando tutte le entità figlie sono disgiunte",
        "correct": false
      }
    ]
  },
  {
    "text": "I concetti che possono essere rappresentati dalle regole aziendali sono:",
    "answers": [
      {
        "text": "Solo i concetti base delle entità",
        "correct": false
      },
      {
        "text": "I vincoli delle relazioni",
        "correct": false
      },
      {
        "text": "Qualunque concetto rilevante per il dominio applicativo",
        "correct": true
      },
      {
        "text": "Solo le proprietà di integrità dei dati",
        "correct": false
      }
    ]
  },
  {
    "text": "Uno dei limiti principali del modello E-R è:",
    "answers": [
      {
        "text": "Non rappresenta tutti gli aspetti di un'applicazione nel dettaglio",
        "correct": true
      },
      {
        "text": "Una rappresentazione grafica dei dati aziendali",
        "correct": false
      },
      {
        "text": "Rende difficile rappresentare vincoli complessi",
        "correct": false
      },
      {
        "text": "Rappresenta solo i nomi dei concetti senza dettaglio",
        "correct": false
      }
    ]
  },
  {
    "text": "La funzione delle regole di vincolo in un modello E-R è:",
    "answers": [
      {
        "text": "Garantire che i dati rispettino certe condizioni",
        "correct": true
      },
      {
        "text": "Espandere i costrutti del modello E-R",
        "correct": false
      },
      {
        "text": "Descrivere solo la struttura dei dati",
        "correct": false
      },
      {
        "text": "Convalidare i concetti principali",
        "correct": false
      }
    ]
  },
  {
    "text": "Il dizionario dei dati in uno schema E-R complesso occorre per:",
    "answers": [
      {
        "text": "Per chiarire le relazioni complesse tra entità",
        "correct": false
      },
      {
        "text": "Per rappresentare attributi complessi in un'unica tabella",
        "correct": true
      },
      {
        "text": "Per evitare confusione nell'interpretazione",
        "correct": false
      },
      {
        "text": "Per migliorare la leggibilità degli schemi",
        "correct": false
      }
    ]
  },
  {
    "text": "La funzione di un glossario è:",
    "answers": [
      {
        "text": "Elencare le entità e relazioni principali di una base dati",
        "correct": true
      },
      {
        "text": "Definire i dati aziendali con precisione",
        "correct": false
      },
      {
        "text": "Spiegare termini tecnici per i non addetti",
        "correct": false
      },
      {
        "text": "Fornire una guida ai dati per gli utenti finali",
        "correct": false
      }
    ]
  },
  {
    "text": "Per regola aziendale si intende:",
    "answers": [
      {
        "text": "Una definizione formale delle relazioni tra entità",
        "correct": false
      },
      {
        "text": "Un vincolo di integrità che riguarda i dati aziendali",
        "correct": false
      },
      {
        "text": "Una regola che descrive un vincolo o derivazione",
        "correct": true
      },
      {
        "text": "Una regola che rappresenta un processo aziendale",
        "correct": false
      }
    ]
  },
  {
    "text": "La struttura tipica per una regola aziendale sotto forma di asserzione è:",
    "answers": [
      {
        "text": "< concetto > deve/non deve < espressione su concetti >",
        "correct": true
      },
      {
        "text": "< regola > si ottiene < operazione su concetti >",
        "correct": false
      },
      {
        "text": "< concetto > è sempre < valore specifico >",
        "correct": false
      },
      {
        "text": "< concetto > è ottenuto tramite < derivazione >",
        "correct": false
      }
    ]
  },
  {
    "text": "I concetti rilevanti per il dominio applicativo possono essere espressi:",
    "answers": [
      {
        "text": "Attraverso frasi in linguaggio naturale",
        "correct": true
      },
      {
        "text": "Con frasi descrittive e dettagliate",
        "correct": false
      },
      {
        "text": "Con schemi astratti specifici",
        "correct": false
      },
      {
        "text": "Con diagrammi di supporto",
        "correct": false
      }
    ]
  },
  {
    "text": "Il motivo per cui il modello E-R non può rappresentare alcuni vincoli complessi è:",
    "answers": [
      {
        "text": "Manca la capacità di correlare più relazioni tra loro",
        "correct": false
      },
      {
        "text": "Non esistono costrutti adeguati per vincoli complessi",
        "correct": true
      },
      {
        "text": "Non permette di rappresentare tutte le proprietà dei dati",
        "correct": false
      },
      {
        "text": "Non può esprimere vincoli tra attributi",
        "correct": false
      }
    ]
  },
  {
    "text": "Secondo il vincolo di copertura,  quello che contraddistingue una generalizzazione totale è:",
    "answers": [
      {
        "text": "Che tutte le occorrenze dell'entità genitore sono incluse nelle entità figlie",
        "correct": false
      },
      {
        "text": "Che le entità figlie non condividono occorrenze",
        "correct": false
      },
      {
        "text": "Che tutte le occorrenze delle entità sono esclusive",
        "correct": false
      },
      {
        "text": "Che tutte le entità occorrenze dell'entità genitore sono occorrenze di almeno una delle entità figlie",
        "correct": true
      }
    ]
  },
  {
    "text": "Generalmente, la specifica dei requisiti raccolti viene espressa:",
    "answers": [
      {
        "text": "In linguaggio naturale",
        "correct": true
      },
      {
        "text": "In linguaggio tecnico",
        "correct": false
      },
      {
        "text": "In un linguaggio di modellazione grafica",
        "correct": false
      },
      {
        "text": "In linguaggio formale",
        "correct": false
      }
    ]
  },
  {
    "text": "I requisiti di carattere generale per un'applicazione rappresentano:",
    "answers": [
      {
        "text": "Dati generali che descrivono l'applicazione e i suoi utenti",
        "correct": true
      },
      {
        "text": "Dati specifici per ciascun ruolo aziendale",
        "correct": false
      },
      {
        "text": "Un insieme di regole di implementazione",
        "correct": false
      },
      {
        "text": "Dati aggiuntivi sui fornitori e collaboratori",
        "correct": false
      }
    ]
  },
  {
    "text": "L'interazione con gli utenti nella fase di raccolta dei requisiti è importante:",
    "answers": [
      {
        "text": "Per evitare contraddizioni e ottenere specifiche accurate",
        "correct": true
      },
      {
        "text": "Per completare la documentazione esistente",
        "correct": false
      },
      {
        "text": "Per fornire dettagli supplementari sui requisiti",
        "correct": false
      },
      {
        "text": "Per fare chiarezza sui dati raccolti",
        "correct": false
      }
    ]
  },
  {
    "text": "Per raccolta dei requisiti si intende:",
    "answers": [
      {
        "text": "La completa individuazione dei problemi e delle caratteristiche dell'applicazione",
        "correct": true
      },
      {
        "text": "La progettazione dettagliata delle operazioni dell'applicazione",
        "correct": false
      },
      {
        "text": "La verifica dei vincoli e delle operazioni sui dati",
        "correct": false
      },
      {
        "text": "Un elenco dei dati necessari per l'implementazione",
        "correct": false
      }
    ]
  },
  {
    "text": "L'interazione con gli utenti nella fase di raccolta dei requisiti è importante:",
    "answers": [
      {
        "text": "Per validare le specifiche raccolte",
        "correct": true
      },
      {
        "text": "Per completare la documentazione esistente",
        "correct": false
      },
      {
        "text": "Per fornire dettagli supplementari sui requisiti",
        "correct": false
      },
      {
        "text": "Per fare chiarezza sui dati raccolti",
        "correct": false
      }
    ]
  },
  {
    "text": "Per glossario dei termini in un modello E-R si intende:",
    "answers": [
      {
        "text": "Una raccolta dei termini con descrizione e sinonimi",
        "correct": false
      },
      {
        "text": "Una descrizione dettagliata di tutte le entità",
        "correct": true
      },
      {
        "text": "Un elenco delle operazioni disponibili per l'utente",
        "correct": false
      },
      {
        "text": "Un riepilogo di tutte le operazioni previste",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel formalizzare le specifiche durante la fase di analisi è importante:",
    "answers": [
      {
        "text": "Documentare le scelte progettuali",
        "correct": false
      },
      {
        "text": "Utilizzare un linguaggio tecnico",
        "correct": false
      },
      {
        "text": "Intervistare gli utenti dell'applicazione",
        "correct": false
      },
      {
        "text": "Unificare i termini evitando sinonini e omonimi",
        "correct": true
      }
    ]
  },
  {
    "text": "Le principali fonti di informazioni per la raccolta dei requisiti sono:",
    "answers": [
      {
        "text": "Documentazione esistente, utenti, e applicazioni preesistenti",
        "correct": true
      },
      {
        "text": "Utenti, dati storici e tecniche di analisi",
        "correct": false
      },
      {
        "text": "Dipendenti, manager e stakeholder",
        "correct": false
      },
      {
        "text": "Dipartimenti, manager e clienti",
        "correct": false
      }
    ]
  },
  {
    "text": "La funzione delle regole di derivazione nei requisiti è:",
    "answers": [
      {
        "text": "Ottenere nuovi dati tramite operazioni su dati esistenti",
        "correct": true
      },
      {
        "text": "Definire vincoli sui dati",
        "correct": false
      },
      {
        "text": "Standardizzare le definizioni tra attributi",
        "correct": false
      },
      {
        "text": "Verificare coerenza dei dati con i requisiti",
        "correct": false
      }
    ]
  },
  {
    "text": "La struttura  utile per precisare e chiarire i termini usati è:",
    "answers": [
      {
        "text": "Un glossario dei termini",
        "correct": true
      },
      {
        "text": "Una tabella degli attributi",
        "correct": false
      },
      {
        "text": "Un dizionario delle entità",
        "correct": false
      },
      {
        "text": "Una lista di regole aziendali",
        "correct": false
      }
    ]
  },
  {
    "text": "Qual è il primo passo della progettazione concettuale",
    "answers": [
      {
        "text": "La creazione del glossario dei dati",
        "correct": false
      },
      {
        "text": "L'analisi dei requisiti",
        "correct": true
      },
      {
        "text": "La rappresentazione delle specifiche con costrutti E-R",
        "correct": false
      },
      {
        "text": "La verifica delle specifiche",
        "correct": false
      }
    ]
  },
  {
    "text": "Un concetto dovrebbe essere rappresentato come entità nel modello E-R:",
    "answers": [
      {
        "text": "Quando descrive classi di oggetti con esistenza autonoma",
        "correct": true
      },
      {
        "text": "Quando non ha proprietà significative",
        "correct": false
      },
      {
        "text": "Quando rappresenta un'associazione tra entità",
        "correct": false
      },
      {
        "text": "Quando è un concetto generale e astratto",
        "correct": false
      }
    ]
  },
  {
    "text": "Il ruolo del glossario dei termini in un progetto E-R è:",
    "answers": [
      {
        "text": "Descrivere le entità coinvolte nel progetto",
        "correct": false
      },
      {
        "text": "Sintetizzare le specifiche dei requisiti",
        "correct": false
      },
      {
        "text": "Chiarire i termini e i sinonimi usati nelle specifiche",
        "correct": true
      },
      {
        "text": "Definire i vincoli del modello",
        "correct": false
      }
    ]
  },
  {
    "text": "La presenza di sessioni distinte per un'attività può essere rappresentata:",
    "answers": [
      {
        "text": "Attraverso un attributo speciale",
        "correct": false
      },
      {
        "text": "Usando un'entità specifica",
        "correct": true
      },
      {
        "text": "Con un collegamento tra le entità coinvolte",
        "correct": false
      },
      {
        "text": "Includendo un'associazione diretta",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione tra partecipanti e attività in un modello E-R rappresenta:",
    "answers": [
      {
        "text": "Le attività seguite da un partecipante",
        "correct": true
      },
      {
        "text": "La presenza di utenti esterni",
        "correct": false
      },
      {
        "text": "I responsabili delle attività",
        "correct": false
      },
      {
        "text": "Gli impieghi associati a ogni partecipante",
        "correct": false
      }
    ]
  },
  {
    "text": "Una generalizzazione nel modello E-R si usa:",
    "answers": [
      {
        "text": "Quando si definiscono attributi di un'entità",
        "correct": false
      },
      {
        "text": "Quando concetti diversi sono casi particolari di un altro concetto",
        "correct": true
      },
      {
        "text": "Quando due entità condividono relazioni",
        "correct": false
      },
      {
        "text": "Quando non ci sono attributi significativi",
        "correct": false
      }
    ]
  },
  {
    "text": "Un'associazione tra tipi di utenti o risorse in un progetto può essere rappresentata:",
    "answers": [
      {
        "text": "Con una relazione di tipo 1 a 1",
        "correct": false
      },
      {
        "text": "Attraverso una generalizzazione",
        "correct": true
      },
      {
        "text": "Con un'entità per ogni tipo",
        "correct": false
      },
      {
        "text": "Con una relazione di tipo N a N",
        "correct": false
      }
    ]
  },
  {
    "text": "Il passo dell'analisi de requisiti che permette di risolvere eventuali ambiguità sui dati da rappresentare è:",
    "answers": [
      {
        "text": "La creazione del glossario dei dati",
        "correct": true
      },
      {
        "text": "L'analisi dei requisiti",
        "correct": false
      },
      {
        "text": "La rappresentazione delle specifiche con costrutti E-R",
        "correct": false
      },
      {
        "text": "La verifica delle specifiche",
        "correct": false
      }
    ]
  },
  {
    "text": "Quali entità rappresentano in generale gli enti associati a un utente nel modello E-R",
    "answers": [
      {
        "text": "L'utente principale",
        "correct": false
      },
      {
        "text": "Una specifica attività o assegnazione",
        "correct": false
      },
      {
        "text": "Le entità relative ai contatti e posizioni",
        "correct": true
      },
      {
        "text": "Gli altri utenti collegati",
        "correct": false
      }
    ]
  },
  {
    "text": "Una generalizzazione nel modello E-R si usa:",
    "answers": [
      {
        "text": "Quando si definiscono attributi di un'entità",
        "correct": false
      },
      {
        "text": "Quando un concetto è evidentemente un sottoinsieme di un altro concetto",
        "correct": true
      },
      {
        "text": "Quando due entità condividono relazioni",
        "correct": false
      },
      {
        "text": "Quando non ci sono attributi significativi",
        "correct": false
      }
    ]
  },
  {
    "text": "Un design pattern rappresenta:",
    "answers": [
      {
        "text": "una soluzione progettuale specifica",
        "correct": false
      },
      {
        "text": "un metodo di sviluppo applicativo",
        "correct": false
      },
      {
        "text": "una soluzione progettuale per un problema ricorrente",
        "correct": true
      },
      {
        "text": "una tecnica per organizzare i dati",
        "correct": false
      }
    ]
  },
  {
    "text": "L'obiettivo principale di un design pattern è:",
    "answers": [
      {
        "text": "risolvere problemi tecnici complessi",
        "correct": false
      },
      {
        "text": "fornire una struttura di codice specifica",
        "correct": false
      },
      {
        "text": "offrire un modello generico per situazioni comuni",
        "correct": true
      },
      {
        "text": "definire le specifiche di un database",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione molti-a-molti nel modello E-R si può eliminare:",
    "answers": [
      {
        "text": "creando un nuovo attributo",
        "correct": false
      },
      {
        "text": "collegando entità con una relazione diretta",
        "correct": false
      },
      {
        "text": "aggiungendo un'entità di associazione",
        "correct": true
      },
      {
        "text": "eliminando gli attributi comuni",
        "correct": false
      }
    ]
  },
  {
    "text": "I pattern architetturali si applicano:",
    "answers": [
      {
        "text": "per strutturare relazioni specifiche",
        "correct": false
      },
      {
        "text": "a livello di organizzazione generale del sistema",
        "correct": true
      },
      {
        "text": "per creare attributi complessi",
        "correct": false
      },
      {
        "text": "per definire vincoli specifici",
        "correct": false
      }
    ]
  },
  {
    "text": "Per reificazione di un attributo si intende:",
    "answers": [
      {
        "text": "trasformare un attributo in una relazione",
        "correct": false
      },
      {
        "text": "convertire un attributo in un'entità",
        "correct": true
      },
      {
        "text": "rimuovere un attributo dal modello",
        "correct": false
      },
      {
        "text": "rendere l'attributo temporaneo",
        "correct": false
      }
    ]
  },
  {
    "text": "Le relazioni parte di nel modello E-R vengono rappresentate:",
    "answers": [
      {
        "text": "con una relazione molti-a-molti",
        "correct": false
      },
      {
        "text": "con un'entità autonoma",
        "correct": false
      },
      {
        "text": "attraverso una gerarchia",
        "correct": false
      },
      {
        "text": "come relazioni uno-a-molti",
        "correct": true
      }
    ]
  },
  {
    "text": "Una relazione parte di si distingue da una relazione istanza di perché:",
    "answers": [
      {
        "text": "una descrive un concetto astratto, l'altra uno specifico",
        "correct": true
      },
      {
        "text": "entrambe si riferiscono a istanze specifiche",
        "correct": false
      },
      {
        "text": "la relazione parte di è sempre uno-a-uno",
        "correct": false
      },
      {
        "text": "istanza di rappresenta varianti di una stessa entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione istanza di si usa:",
    "answers": [
      {
        "text": "per rappresentare occorrenze specifiche di un concetto generale",
        "correct": true
      },
      {
        "text": "per relazioni con vincoli temporali",
        "correct": false
      },
      {
        "text": "quando le entità hanno attributi simili",
        "correct": false
      },
      {
        "text": "solo in presenza di dati gerarchici",
        "correct": false
      }
    ]
  },
  {
    "text": "Teificare una relazione offre il vantaggio di:",
    "answers": [
      {
        "text": "rende più semplice la rappresentazione dei vincoli",
        "correct": true
      },
      {
        "text": "permette di rimuovere attributi",
        "correct": false
      },
      {
        "text": "migliora l'identificazione delle entità",
        "correct": false
      },
      {
        "text": "definisce la cardinalità in modo dinamico",
        "correct": false
      }
    ]
  },
  {
    "text": "I design pattern si possono usare per ottimizzare il modello E-R:",
    "answers": [
      {
        "text": "aggiungendo nuove entità per ogni attributo",
        "correct": false
      },
      {
        "text": "semplificando l'uso di relazioni e vincoli",
        "correct": true
      },
      {
        "text": "eliminando le entità non necessarie",
        "correct": false
      },
      {
        "text": "creando schemi complessi per ogni concetto",
        "correct": false
      }
    ]
  },
  {
    "text": "Un esempio di relazione ricorsiva uno-a-molti è:",
    "answers": [
      {
        "text": "Una relazione tra dipendenti e manager",
        "correct": true
      },
      {
        "text": "Una relazione tra due team",
        "correct": false
      },
      {
        "text": "Una relazione tra progetti e team",
        "correct": false
      },
      {
        "text": "Un'associazione gerarchica tra ruoli",
        "correct": false
      }
    ]
  },
  {
    "text": "Un'evoluzione temporale in un modello E-R si rappresenta:",
    "answers": [
      {
        "text": "Con una generalizzazione e l'aggiunta di attributi temporali",
        "correct": true
      },
      {
        "text": "Creando nuove entità per ogni stato",
        "correct": false
      },
      {
        "text": "Semplificando la relazione in una sola entità",
        "correct": false
      },
      {
        "text": "Rimuovendo entità non rilevanti",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione ricorsiva si rappresenta:",
    "answers": [
      {
        "text": "Con un vincolo di integrità",
        "correct": false
      },
      {
        "text": "Usando un'entità con associazioni ripetute",
        "correct": true
      },
      {
        "text": "Creando una relazione ricorsiva uno-a-uno",
        "correct": false
      },
      {
        "text": "Aggiungendo vincoli per ruoli diversi",
        "correct": false
      }
    ]
  },
  {
    "text": "Una gerarchia di generalizzazione si può rappresentare:",
    "answers": [
      {
        "text": "Con entità figlie specifiche",
        "correct": true
      },
      {
        "text": "Attraverso ruoli diversi per ciascun concetto",
        "correct": false
      },
      {
        "text": "Solo in relazioni uno-a-uno",
        "correct": false
      },
      {
        "text": "Creando gerarchie di attributi",
        "correct": false
      }
    ]
  },
  {
    "text": "Un vincolo di integrità referenziale è necessario:",
    "answers": [
      {
        "text": "Quando due entità hanno attributi simili",
        "correct": false
      },
      {
        "text": "Quando esistono dipendenze tra entità",
        "correct": true
      },
      {
        "text": "Quando la relazione ha attributi ridondanti",
        "correct": false
      },
      {
        "text": "Per rappresentare vincoli esclusivi",
        "correct": false
      }
    ]
  },
  {
    "text": "La reificazione di un attributo è necessaria:",
    "answers": [
      {
        "text": "Quando due entità hanno attributi simili",
        "correct": false
      },
      {
        "text": "Quando esistono dipendenze tra entità",
        "correct": false
      },
      {
        "text": "Per ottimizzzare le performance",
        "correct": false
      },
      {
        "text": "Quando un concetto è rilevante per l'applicazione.",
        "correct": true
      }
    ]
  },
  {
    "text": "Lo scopo della reificazione di una relazione complessa è:",
    "answers": [
      {
        "text": "Aggiungere nuovi vincoli alla relazione",
        "correct": false
      },
      {
        "text": "Semplificare la struttura del modello",
        "correct": false
      },
      {
        "text": "Rendere la relazione autonoma per avere attributi",
        "correct": true
      },
      {
        "text": "Cambiare il tipo di relazione in uno-a-uno",
        "correct": false
      }
    ]
  },
  {
    "text": "Le gerarchie di generalizzazione possono essere usate per ottimizzare il modello:",
    "answers": [
      {
        "text": "Creando più entità figlie per ogni ruolo",
        "correct": false
      },
      {
        "text": "Separando le entità in base alle proprietà specifiche",
        "correct": true
      },
      {
        "text": "Definendo attributi comuni in un'unica entità",
        "correct": false
      },
      {
        "text": "Rimuovendo entità non rilevanti per il modello",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione molti a molti può essere spezzata:",
    "answers": [
      {
        "text": "In due relazioni uno-a-molti, reificando la relazione.",
        "correct": true
      },
      {
        "text": "Solo in relazioni uno-a-uno",
        "correct": false
      },
      {
        "text": "Creando gerarchie di attributi",
        "correct": false
      },
      {
        "text": "Con un vincolo di integrità",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione tra entità può essere storicizzata:",
    "answers": [
      {
        "text": "Aggiungendo attributi temporali",
        "correct": true
      },
      {
        "text": "Usando un'entità con associazioni ripetute",
        "correct": false
      },
      {
        "text": "Creando nuove entità per ogni stato",
        "correct": false
      },
      {
        "text": "Rimuovendo entità non rilevanti",
        "correct": false
      }
    ]
  },
  {
    "text": "L'obiettivo della progettazione logica è:",
    "answers": [
      {
        "text": "Creare uno schema adatto al modello concettuale",
        "correct": false
      },
      {
        "text": "Costruire un modello fisico per i dati",
        "correct": false
      },
      {
        "text": "Descrivere le informazioni in modo efficiente e corretto",
        "correct": true
      },
      {
        "text": "Assicurare la semplicità del modello E-R",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione necessita di riorganizzazione:",
    "answers": [
      {
        "text": "Quando è uno-a-molti",
        "correct": false
      },
      {
        "text": "Quando ha attributi nulli",
        "correct": false
      },
      {
        "text": "Quando influisce sull'efficienza del modello",
        "correct": true
      },
      {
        "text": "Solo se è una generalizzazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Una ridondanza in un database può dipendere da:",
    "answers": [
      {
        "text": "La presenza di dati duplicati in un'entità",
        "correct": false
      },
      {
        "text": "Un dato ottenibile da altri dati esistenti",
        "correct": true
      },
      {
        "text": "Una riduzione delle occorrenze di entità",
        "correct": false
      },
      {
        "text": "La presenza di valori nulli",
        "correct": false
      }
    ]
  },
  {
    "text": "La riorganizzazione dello schema E-R consiste:",
    "answers": [
      {
        "text": "Nella revisione del modello fisico",
        "correct": false
      },
      {
        "text": "Nella traduzione automatica dello schema",
        "correct": false
      },
      {
        "text": "Nella ristrutturazione per ottimizzazione e semplificazione",
        "correct": true
      },
      {
        "text": "Nel rimuovere tutte le associazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Le tavole dei volumi in progettazione logica:",
    "answers": [
      {
        "text": "Misurare lo spazio di memoria per entità",
        "correct": true
      },
      {
        "text": "Ottimizzare solo le relazioni uno-a-uno",
        "correct": false
      },
      {
        "text": "Definire il numero medio di operazioni necessarie",
        "correct": false
      },
      {
        "text": "Visualizzare i dati esclusi",
        "correct": false
      }
    ]
  },
  {
    "text": "L'occupazione di memoria di uno schema viene valutata:",
    "answers": [
      {
        "text": "Solo con il volume delle operazioni",
        "correct": false
      },
      {
        "text": "In base alle occorrenze e agli attributi dello schema",
        "correct": true
      },
      {
        "text": "Misurando l'efficienza delle entità",
        "correct": false
      },
      {
        "text": "Con l'uso delle tavole di transizione",
        "correct": false
      }
    ]
  },
  {
    "text": "Il significato delle tavole delle operazioni è:",
    "answers": [
      {
        "text": "Descrivere il volume dei dati",
        "correct": false
      },
      {
        "text": "Definire la frequenza delle operazioni e i dati coinvolti",
        "correct": true
      },
      {
        "text": "Rappresentare i volumi di memoria",
        "correct": false
      },
      {
        "text": "Descrivere la dimensione delle entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Un esempio di ridondanza derivata da altri attributi è:",
    "answers": [
      {
        "text": "Attributi con vincoli esclusivi",
        "correct": false
      },
      {
        "text": "Attributi ottenuti da funzioni aggregative",
        "correct": true
      },
      {
        "text": "Attributi con valori nulli",
        "correct": false
      },
      {
        "text": "Associazioni dirette uno-a-molti",
        "correct": false
      }
    ]
  },
  {
    "text": "Lo scopo della trasformazione di una generalizzazione in entità e associazioni è:",
    "answers": [
      {
        "text": "Eliminare entità figlie",
        "correct": false
      },
      {
        "text": "Rendere implementabile la generalizzazione nei database",
        "correct": true
      },
      {
        "text": "Separare attributi non significativi",
        "correct": false
      },
      {
        "text": "Cambiare la cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "L'accorpamento delle entità figlie nell'entità genitore:",
    "answers": [
      {
        "text": "Riduce la memoria usata dalle entità",
        "correct": false
      },
      {
        "text": "Permette di ottenere più accessi simultanei",
        "correct": false
      },
      {
        "text": "Aumenta la leggibilità del modello E-R",
        "correct": false
      },
      {
        "text": "Semplifica la struttura, ma può introdurre valori nulli",
        "correct": true
      }
    ]
  },
  {
    "text": "Il partizionamento verticale divide un'entità:",
    "answers": [
      {
        "text": "divide le occorrenze",
        "correct": false
      },
      {
        "text": "separando gli attributi",
        "correct": true
      },
      {
        "text": "raggruppando entità",
        "correct": false
      },
      {
        "text": "eliminando associazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Gli attributi con valori nulli:",
    "answers": [
      {
        "text": "devono essere unici",
        "correct": false
      },
      {
        "text": "non possono essere nulli",
        "correct": true
      },
      {
        "text": "sono supportati nel modello",
        "correct": false
      },
      {
        "text": "generano ridondanze",
        "correct": false
      }
    ]
  },
  {
    "text": "Gli identificatori con pochi attributi:",
    "answers": [
      {
        "text": "aumentano le ridondanze",
        "correct": false
      },
      {
        "text": "sono più efficienti",
        "correct": true
      },
      {
        "text": "ridimensionano le entità",
        "correct": false
      },
      {
        "text": "riducono i vincoli",
        "correct": false
      }
    ]
  },
  {
    "text": "L'accorpamento di relazioni:",
    "answers": [
      {
        "text": "divide concetti correlati",
        "correct": false
      },
      {
        "text": "unisce associazioni per ridurre il costo delle operazioni",
        "correct": true
      },
      {
        "text": "elimina occorrenze",
        "correct": false
      },
      {
        "text": "amplifica entità",
        "correct": false
      }
    ]
  },
  {
    "text": "Il partizionamento orizzontale:",
    "answers": [
      {
        "text": "riorganizzando attributi",
        "correct": false
      },
      {
        "text": "elimina occorrenze",
        "correct": false
      },
      {
        "text": "suddivide un'entità separando le sue occorrenze",
        "correct": true
      },
      {
        "text": "rimuovendo attributi nulli",
        "correct": false
      }
    ]
  },
  {
    "text": "L'accorpamento di entità:",
    "answers": [
      {
        "text": "introduce ridondanze",
        "correct": false
      },
      {
        "text": "riduce operazioni",
        "correct": false
      },
      {
        "text": "Eeuno-a-uno",
        "correct": true
      },
      {
        "text": "amplifica relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Le entità generate da un partizionamento verticale si contraddistinguono perché:",
    "answers": [
      {
        "text": "aumentano le cardinalità",
        "correct": false
      },
      {
        "text": "generano valori nulli",
        "correct": false
      },
      {
        "text": "hanno pochi attributi",
        "correct": true
      },
      {
        "text": "eludono vincoli esclusivi",
        "correct": false
      }
    ]
  },
  {
    "text": "La scelta degli identificatori principali:",
    "answers": [
      {
        "text": "influisce sulle cardinalità",
        "correct": false
      },
      {
        "text": "garantisce vincoli di integrità",
        "correct": false
      },
      {
        "text": "influenza l'efficienza",
        "correct": true
      },
      {
        "text": "determina i vincoli di attributi",
        "correct": false
      }
    ]
  },
  {
    "text": "L'introduzione di un nuovo attributo:",
    "answers": [
      {
        "text": "introduce complessità",
        "correct": false
      },
      {
        "text": "è sconsigliata",
        "correct": false
      },
      {
        "text": "può essere utile per creare un identificatore efficiente",
        "correct": true
      },
      {
        "text": "riduce le relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "L'accorpamento di entità:",
    "answers": [
      {
        "text": "non modifica le associazioni",
        "correct": false
      },
      {
        "text": "può generare valori nulli per alcune associazioni",
        "correct": true
      },
      {
        "text": "riduce la memoria usata",
        "correct": false
      },
      {
        "text": "semplifica il modello senza limiti",
        "correct": false
      }
    ]
  },
  {
    "text": "La normalizzazione:",
    "answers": [
      {
        "text": "Introduce vincoli complessi",
        "correct": false
      },
      {
        "text": "Elimina anomalie e ridondanze",
        "correct": true
      },
      {
        "text": "Aggiunge nuove relazioni",
        "correct": false
      },
      {
        "text": "Rimuove le dipendenze funzionali",
        "correct": false
      }
    ]
  },
  {
    "text": "Le forme normali:",
    "answers": [
      {
        "text": "Ridimensionano la chiave primaria",
        "correct": false
      },
      {
        "text": "Permettono di valutare e garantire la qualità di uno schema logico",
        "correct": true
      },
      {
        "text": "Impongono l'uso di dipendenze complesse",
        "correct": false
      },
      {
        "text": "Limitano l'uso di vincoli",
        "correct": false
      }
    ]
  },
  {
    "text": "Le tabelle normalizzate:",
    "answers": [
      {
        "text": "Generano vincoli ridondanti",
        "correct": false
      },
      {
        "text": "Ridistribuiscono i dati",
        "correct": false
      },
      {
        "text": "Ridistribuiscono chiavi multiple",
        "correct": false
      },
      {
        "text": "Riducono la ripetizione di dati",
        "correct": true
      }
    ]
  },
  {
    "text": "La dipendenza funzionale Progetto → Bilancio:",
    "answers": [
      {
        "text": "Collega vincoli esterni",
        "correct": false
      },
      {
        "text": "Indica che il bilancio dipende dal progetto",
        "correct": true
      },
      {
        "text": "Introduce anomalie di aggiornamento",
        "correct": false
      },
      {
        "text": "Aggiunge cardinalità complesse",
        "correct": false
      }
    ]
  },
  {
    "text": "Le anomalie di aggiornamento:",
    "answers": [
      {
        "text": "Si riferiscono solo a vincoli nulli",
        "correct": false
      },
      {
        "text": "Si verificano quando una modifica obbliga a modifiche su più tuple.",
        "correct": true
      },
      {
        "text": "Dipendono dalla chiave primaria",
        "correct": false
      },
      {
        "text": "Non influenzano la coerenza",
        "correct": false
      }
    ]
  },
  {
    "text": "Le dipendenze funzionali:",
    "answers": [
      {
        "text": "Rimuovono la chiave primaria",
        "correct": false
      },
      {
        "text": "Aggiungono attributi alle relazioni",
        "correct": false
      },
      {
        "text": "Descrivono legami tra attributi",
        "correct": true
      },
      {
        "text": "Limitano le cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione in forma normale di Boyce e Codd:",
    "answers": [
      {
        "text": "Introduce vincoli temporali",
        "correct": false
      },
      {
        "text": "Elimina anomalie e ridondanze",
        "correct": true
      },
      {
        "text": "Genera entità complesse",
        "correct": false
      },
      {
        "text": "Riduce la cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "La dipendenza funzionale Impiegato → SƟpendio:",
    "answers": [
      {
        "text": "Elimina anomalie di cancellazione",
        "correct": false
      },
      {
        "text": "Può essere causa di ridondanze",
        "correct": true
      },
      {
        "text": "Rende efficienti le operazioni",
        "correct": false
      },
      {
        "text": "Limita l'uso delle chiavi",
        "correct": false
      }
    ]
  },
  {
    "text": "Le dipendenze funzionali non banali:",
    "answers": [
      {
        "text": "Riguardano solo la chiave primaria",
        "correct": false
      },
      {
        "text": "Descrivono proprietà significative",
        "correct": true
      },
      {
        "text": "Limitano l'uso di valori nulli",
        "correct": false
      },
      {
        "text": "Riducono le operazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "Una dipendenza funzionale X → A: è banale quando:",
    "answers": [
      {
        "text": "È sempre associata a una chiave primaria",
        "correct": false
      },
      {
        "text": "A è in X",
        "correct": true
      },
      {
        "text": "Aggiunge vincoli di accesso",
        "correct": false
      },
      {
        "text": "Rimuove la superchiave",
        "correct": false
      }
    ]
  },
  {
    "text": "La conservazione delle dipendenze garantisce che le relazioni decomposte:",
    "answers": [
      {
        "text": "riducano i vincoli di integrità",
        "correct": false
      },
      {
        "text": "rendano le relazioni indipendenti",
        "correct": false
      },
      {
        "text": "conservino i vincoli di integrità",
        "correct": true
      },
      {
        "text": "aggiungano dipendenze ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione senza perdita:",
    "answers": [
      {
        "text": "è opzionale per la normalizzazione",
        "correct": false
      },
      {
        "text": "è irrinunciabile per la normalizzazione",
        "correct": true
      },
      {
        "text": "genera dipendenze ridondanti",
        "correct": false
      },
      {
        "text": "introduce vincoli non banali",
        "correct": false
      }
    ]
  },
  {
    "text": "Per essere considerata di qualità sufficiente, rispetto alle proprietà di decomposizione senza perdita e",
    "answers": [
      {
        "text": "è accettabile se soddisfa una sola proprietà",
        "correct": false
      },
      {
        "text": "deve soddisfare entrambe le proprietà",
        "correct": true
      },
      {
        "text": "riduce l'efficienza delle operazioni",
        "correct": false
      },
      {
        "text": "introduce anomalie nei dati",
        "correct": false
      }
    ]
  },
  {
    "text": "Una decomposizione che conserva le dipendenze:",
    "answers": [
      {
        "text": "genera aggiornamenti ridondanti",
        "correct": false
      },
      {
        "text": "previene anomalie di cancellazione",
        "correct": true
      },
      {
        "text": "rimuove vincoli non banali",
        "correct": false
      },
      {
        "text": "aumenta la complessità del modello",
        "correct": false
      }
    ]
  },
  {
    "text": "Una decomposizione senza perdita:",
    "answers": [
      {
        "text": "introduce vincoli aggiuntivi",
        "correct": false
      },
      {
        "text": "permette aggiornamenti ridondanti",
        "correct": false
      },
      {
        "text": "garantisce la ricostruzione senza informazioni spurie",
        "correct": true
      },
      {
        "text": "rimuove attributi comuni",
        "correct": false
      }
    ]
  },
  {
    "text": "Una decomposizione senza perdita si ottiene quando:",
    "answers": [
      {
        "text": "aggiunge attributi nulli",
        "correct": false
      },
      {
        "text": "l'attributo comune è chiave per almeno una delle relazioni decomposte",
        "correct": true
      },
      {
        "text": "riduce i valori duplicati",
        "correct": false
      },
      {
        "text": "genera ridondanze",
        "correct": false
      }
    ]
  },
  {
    "text": "La separazione di attributi con dipendenze funzionali:",
    "answers": [
      {
        "text": "rimuove relazioni ricorsive",
        "correct": false
      },
      {
        "text": "evita anomalie di aggiornamento",
        "correct": true
      },
      {
        "text": "riduce il numero di relazioni",
        "correct": false
      },
      {
        "text": "introduce attributi multivalore",
        "correct": false
      }
    ]
  },
  {
    "text": "La conservazione delle dipendenze:",
    "answers": [
      {
        "text": "rende inutili le dipendenze",
        "correct": false
      },
      {
        "text": "garantisce la verifica dei vincoli originari",
        "correct": true
      },
      {
        "text": "rimuove vincoli di integrità",
        "correct": false
      },
      {
        "text": "aggiunge relazioni ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "La normalizzazione produce relazioni in forma normale e:",
    "answers": [
      {
        "text": "aggiunge vincoli non necessari",
        "correct": false
      },
      {
        "text": "elimina anomalie e ridondanze",
        "correct": true
      },
      {
        "text": "aumenta la complessità delle relazioni",
        "correct": false
      },
      {
        "text": "riduce il numero di relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione senza perdita e la conservazione delle dipendenze:",
    "answers": [
      {
        "text": "sono opzionali per la normalizzazione",
        "correct": false
      },
      {
        "text": "sono i criteri principali per la qualità",
        "correct": true
      },
      {
        "text": "generano modelli non ottimali",
        "correct": false
      },
      {
        "text": "aggiungono relazioni ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione è in prima forma normale quando:",
    "answers": [
      {
        "text": "Include valori complessi",
        "correct": false
      },
      {
        "text": "Tutti gli attributi hanno valori atomici.",
        "correct": true
      },
      {
        "text": "Riduce cardinalità",
        "correct": false
      },
      {
        "text": "Rimuove dipendenze transitive",
        "correct": false
      }
    ]
  },
  {
    "text": "La terza forma normale:",
    "answers": [
      {
        "text": "Garantisce decomposizioni senza perdita.",
        "correct": true
      },
      {
        "text": "Garantisce decomposizioni con ridondanza",
        "correct": false
      },
      {
        "text": "Consente dipendenze transitive",
        "correct": false
      },
      {
        "text": "Introduce nuove chiavi",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione in terza forma normale:",
    "answers": [
      {
        "text": "Riduce anomalie di cancellazione",
        "correct": false
      },
      {
        "text": "Non presenta dipendenze parziali",
        "correct": true
      },
      {
        "text": "Elimina attributi multivalore",
        "correct": false
      },
      {
        "text": "Semplifica l'uso delle chiavi",
        "correct": false
      }
    ]
  },
  {
    "text": "La seconda forma normale:",
    "answers": [
      {
        "text": "Elimina dipendenze parziali",
        "correct": true
      },
      {
        "text": "Consente dipendenze parziali",
        "correct": false
      },
      {
        "text": "Elimina vincoli ridondanti",
        "correct": false
      },
      {
        "text": "Aggiunge vincoli transitori",
        "correct": false
      }
    ]
  },
  {
    "text": "La terza forma normale:",
    "answers": [
      {
        "text": "Tollera dipendenze transitive ma elimina dipendenze parziali.",
        "correct": true
      },
      {
        "text": "Elimina sia dipendenze parziali sia transitive",
        "correct": false
      },
      {
        "text": "Garantisce vincoli deboli",
        "correct": false
      },
      {
        "text": "Introduce relazioni ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione è in terza forma normale se:",
    "answers": [
      {
        "text": "Consente dipendenze parziali",
        "correct": false
      },
      {
        "text": "Non contiene dipendenze transitive o parziali",
        "correct": true
      },
      {
        "text": "Tolleranza a dipendenze transitive",
        "correct": false
      },
      {
        "text": "Elimina superchiavi ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "La forma normale di Boyce e Codd:",
    "answers": [
      {
        "text": "Aggiunge ridondanze",
        "correct": false
      },
      {
        "text": "Richiede una superchiave come primo membro",
        "correct": true
      },
      {
        "text": "Elimina le chiavi ridondanti",
        "correct": false
      },
      {
        "text": "Rende opzionali i vincoli di integrità",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione in terza forma normale:",
    "answers": [
      {
        "text": "Non conserva tutte le dipendenze",
        "correct": false
      },
      {
        "text": "Rimuove dipendenze transitive",
        "correct": false
      },
      {
        "text": "Conserva tutte le dipendenze",
        "correct": true
      },
      {
        "text": "Introduce anomalie di aggiornamento",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione in terza forma normale:",
    "answers": [
      {
        "text": "Rimuove attributi atomici",
        "correct": false
      },
      {
        "text": "Può produrre schemi in forma normale di Boyce e Codd",
        "correct": true
      },
      {
        "text": "Introduce dipendenze parziali",
        "correct": false
      },
      {
        "text": "Elimina superchiavi",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione non normalizzata può:",
    "answers": [
      {
        "text": "Riduce i vincoli",
        "correct": false
      },
      {
        "text": "Presenta anomalie di aggiornamento",
        "correct": true
      },
      {
        "text": "Facilita la gestione delle chiavi",
        "correct": false
      },
      {
        "text": "Non introduce ridondanze",
        "correct": false
      }
    ]
  },
  {
    "text": "Una relazione è in terza forma normale se:",
    "answers": [
      {
        "text": "rimuove relazioni non banali",
        "correct": false
      },
      {
        "text": "non contiene dipendenze transitive",
        "correct": false
      },
      {
        "text": "non contiene dipendenze transitive rispetto a una chiave",
        "correct": true
      },
      {
        "text": "introduce valori atomici",
        "correct": false
      }
    ]
  },
  {
    "text": "Una chiave di relazione:",
    "answers": [
      {
        "text": "identifica relazioni ridondanti",
        "correct": false
      },
      {
        "text": "determina univocamente gli attributi dello schema",
        "correct": false
      },
      {
        "text": "è definita da un insieme di attributi che determina univocamente tutti gli attributi dello schema",
        "correct": true
      },
      {
        "text": "riduce le cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione senza perdita:",
    "answers": [
      {
        "text": "introduce relazioni ridondanti",
        "correct": false
      },
      {
        "text": "garantisce ricostruibilità senza valori spurii",
        "correct": true
      },
      {
        "text": "aumenta le dipendenze funzionali",
        "correct": false
      },
      {
        "text": "riduce il numero di chiavi primarie",
        "correct": false
      }
    ]
  },
  {
    "text": "La chiusura di un insieme di attributi:",
    "answers": [
      {
        "text": "elimina vincoli di integrità",
        "correct": false
      },
      {
        "text": "consente di determinare quali attributi dipendono funzionalmente da esso",
        "correct": true
      },
      {
        "text": "riduce le dipendenze transitive",
        "correct": false
      },
      {
        "text": "aggiunge chiavi non primarie",
        "correct": false
      }
    ]
  },
  {
    "text": "La chiusura di un insieme di attributi:",
    "answers": [
      {
        "text": "è utile per verificare se un insieme costituisce una chiave per la relazione",
        "correct": true
      },
      {
        "text": "identifica dipendenze ridondanti",
        "correct": false
      },
      {
        "text": "limita la complessità delle relazioni",
        "correct": false
      },
      {
        "text": "genera chiavi composite",
        "correct": false
      }
    ]
  },
  {
    "text": "Due insiemi di dipendenze funzionali sono equivalenti se:",
    "answers": [
      {
        "text": "generano attributi ridondanti",
        "correct": false
      },
      {
        "text": "implicano le stesse proprietà",
        "correct": true
      },
      {
        "text": "limitano le cardinalità",
        "correct": false
      },
      {
        "text": "introducono relazioni ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione di uno schema in relazioni normalizzate:",
    "answers": [
      {
        "text": "introduce cardinalità complesse",
        "correct": false
      },
      {
        "text": "riduce anomalie di aggiornamento",
        "correct": true
      },
      {
        "text": "rimuove chiavi composite",
        "correct": false
      },
      {
        "text": "genera nuove dipendenze funzionali",
        "correct": false
      }
    ]
  },
  {
    "text": "La sintesi in terza forma normale:",
    "answers": [
      {
        "text": "limita le relazioni ridondanti",
        "correct": false
      },
      {
        "text": "utilizza una copertura ridotta",
        "correct": true
      },
      {
        "text": "introduce attributi atomici",
        "correct": false
      },
      {
        "text": "riduce le cardinalità",
        "correct": false
      }
    ]
  },
  {
    "text": "La decomposizione di una relazione complessa:",
    "answers": [
      {
        "text": "introduce cardinalità complesse",
        "correct": false
      },
      {
        "text": "produce schemi conformi alla forma normale",
        "correct": false
      },
      {
        "text": "produce schemi che soddisfano la forma normale richiesta senza introdurre anomalie",
        "correct": true
      },
      {
        "text": "genera attributi multivalore",
        "correct": false
      }
    ]
  },
  {
    "text": "La chiusura di un insieme di attributi consente di:",
    "answers": [
      {
        "text": "introdurre vincoli non banali",
        "correct": false
      },
      {
        "text": "identificare gli attributi impliciti nella relazione",
        "correct": true
      },
      {
        "text": "ridurre il numero di relazioni",
        "correct": false
      },
      {
        "text": "rimuovere chiavi composite",
        "correct": false
      }
    ]
  },
  {
    "text": "Il gestore delle interrogazioni:",
    "answers": [
      {
        "text": "aumenta la persistenza dei dati",
        "correct": false
      },
      {
        "text": "traduce SQL in istruzioni di livello fisico",
        "correct": true
      },
      {
        "text": "ottimizza la struttura dei file",
        "correct": false
      },
      {
        "text": "riduce la dimensione dei blocchi",
        "correct": false
      }
    ]
  },
  {
    "text": "La memoria secondaria:",
    "answers": [
      {
        "text": "serve a supportare la persistenza",
        "correct": true
      },
      {
        "text": "riduce i tempi di accesso",
        "correct": false
      },
      {
        "text": "semplifica la gestione dei dati",
        "correct": false
      },
      {
        "text": "aumenta le prestazioni delle operazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La gestione dei buffer:",
    "answers": [
      {
        "text": "introduce pagine ridondanti",
        "correct": false
      },
      {
        "text": "riduce l'accesso diretto alla memoria secondaria",
        "correct": false
      },
      {
        "text": "ottimizza l'uso della memoria principale",
        "correct": true
      },
      {
        "text": "elimina la necessità di backup",
        "correct": false
      }
    ]
  },
  {
    "text": "Il file system del DBMS:",
    "answers": [
      {
        "text": "assegna i file a processi specifici",
        "correct": false
      },
      {
        "text": "gestisce blocchi come unico spazio di memoria",
        "correct": true
      },
      {
        "text": "riduce la necessità di transazioni",
        "correct": false
      },
      {
        "text": "aumenta i costi di accesso ai file",
        "correct": false
      }
    ]
  },
  {
    "text": "I dispositivi di memoria secondaria:",
    "answers": [
      {
        "text": "sono organizzati in file complessi",
        "correct": false
      },
      {
        "text": "sono organizzati in blocchi di dimensione fissa",
        "correct": true
      },
      {
        "text": "dipendono dalla capacità della memoria centrale",
        "correct": false
      },
      {
        "text": "permettono solo lettura sequenziale",
        "correct": false
      }
    ]
  },
  {
    "text": "Per scegliere quali pagine sostituire, il gestore del buffer:",
    "answers": [
      {
        "text": "limita l'accesso ai dati recenti",
        "correct": false
      },
      {
        "text": "usa LRU o FIFO per le pagine",
        "correct": true
      },
      {
        "text": "assegna blocchi casuali",
        "correct": false
      },
      {
        "text": "evita la sostituzione delle pagine",
        "correct": false
      }
    ]
  },
  {
    "text": "Una memoria secondaria a stato solido:",
    "answers": [
      {
        "text": "rende opzionali le operazioni di flush",
        "correct": false
      },
      {
        "text": "elimina i tempi di latenza e posizionamento",
        "correct": true
      },
      {
        "text": "aumenta i costi di gestione",
        "correct": false
      },
      {
        "text": "riduce il numero di transazioni simultanee",
        "correct": false
      }
    ]
  },
  {
    "text": "I dispositivi di memorizzazione secondaria a stato solido:",
    "answers": [
      {
        "text": "introducono ridondanze nei dati",
        "correct": false
      },
      {
        "text": "rendono il pre-flushing meno rilevante",
        "correct": true
      },
      {
        "text": "riducono l'efficienza dei buffer",
        "correct": false
      },
      {
        "text": "aumentano il tempo di trasferimento",
        "correct": false
      }
    ]
  },
  {
    "text": "Il principio di località dei dati:",
    "answers": [
      {
        "text": "assegna pagine casualmente",
        "correct": false
      },
      {
        "text": "stabilisce che i dati recentemente usati hanno maggiore probabilità di essere riutilizzati",
        "correct": true
      },
      {
        "text": "rimuove le pagine inutilizzate",
        "correct": false
      },
      {
        "text": "riduce la probabilità di accesso a dati vecchi",
        "correct": false
      }
    ]
  },
  {
    "text": "Il bit di stato \"dirty\":",
    "answers": [
      {
        "text": "identifica pagine obsolete",
        "correct": false
      },
      {
        "text": "segnala pagine da scrivere su memoria",
        "correct": true
      },
      {
        "text": "blocca l'accesso alla pagina",
        "correct": false
      },
      {
        "text": "consente accessi simultanei",
        "correct": false
      }
    ]
  },
  {
    "text": "L'organizzazione fisica dei dati:",
    "answers": [
      {
        "text": "riduce la necessità di indicizzazione",
        "correct": false
      },
      {
        "text": "influenza recupero e modifica",
        "correct": true
      },
      {
        "text": "aumenta l'efficienza dei vincoli",
        "correct": false
      },
      {
        "text": "facilita il riordino dei dati",
        "correct": false
      }
    ]
  },
  {
    "text": "Un indice secondario di una relazione di una base dati:",
    "answers": [
      {
        "text": "rimuove le relazioni duplicate",
        "correct": false
      },
      {
        "text": "utilizza una chiave per blocchi non ordinati",
        "correct": true
      },
      {
        "text": "aggiunge attributi ridondanti",
        "correct": false
      },
      {
        "text": "elimina i valori ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "La struttura sequenziale disordinata per la memorizzazione delle tuple sulla memoria secondaria:",
    "answers": [
      {
        "text": "garantisce ricerca binaria",
        "correct": false
      },
      {
        "text": "riduce i tempi di ricerca",
        "correct": false
      },
      {
        "text": "è efficiente per l'inserimento, ma poco per la ricerca",
        "correct": true
      },
      {
        "text": "elimina duplicati in memoria",
        "correct": false
      }
    ]
  },
  {
    "text": "Le strutture ad albero per la gestione degli indici primari e secondati:",
    "answers": [
      {
        "text": "non supportano aggiornamenti",
        "correct": false
      },
      {
        "text": "aumentano la profondità degli alberi",
        "correct": false
      },
      {
        "text": "limitano le operazioni di ricerca",
        "correct": false
      },
      {
        "text": "sono utili per accessi puntuali e intervalli di valori",
        "correct": true
      }
    ]
  },
  {
    "text": "Ogni pagina della memoria secondaria:",
    "answers": [
      {
        "text": "contiene solo informazioni utili",
        "correct": false
      },
      {
        "text": "non utilizza puntatori a dati",
        "correct": false
      },
      {
        "text": "include un dizionario di pagina per accedere ai dati",
        "correct": true
      },
      {
        "text": "rimuove i dati inutilizzati",
        "correct": false
      }
    ]
  },
  {
    "text": "Gli indici primari per una relazione di una base dati:",
    "answers": [
      {
        "text": "ordinano fisicamente i dati in base a un campo chiave",
        "correct": true
      },
      {
        "text": "organizzano i dati casualmente",
        "correct": false
      },
      {
        "text": "limitano le chiavi secondarie",
        "correct": false
      },
      {
        "text": "aumentano il numero di relazioni",
        "correct": false
      }
    ]
  },
  {
    "text": "La struttura sequenziale ordinata per la memorizzazione delle tuple su memoria secondaria:",
    "answers": [
      {
        "text": "introduce ritardi nell'accesso",
        "correct": false
      },
      {
        "text": "riduce la memoria disponibile",
        "correct": false
      },
      {
        "text": "è adatta per selezioni su intervalli di valori",
        "correct": true
      },
      {
        "text": "aumenta i costi di gestione",
        "correct": false
      }
    ]
  },
  {
    "text": "Le strutture hash per la memorizzazione dei dati su memoria secondaria:",
    "answers": [
      {
        "text": "limitano l'uso delle chiavi primarie",
        "correct": false
      },
      {
        "text": "richiedono più accessi",
        "correct": false
      },
      {
        "text": "aumentano i tempi di ricerca",
        "correct": false
      },
      {
        "text": "permettono un accesso diretto ai dati tramite il valore della chiave",
        "correct": true
      }
    ]
  },
  {
    "text": "Le strutture ad albero:",
    "answers": [
      {
        "text": "riduce l'uso dei puntatori",
        "correct": false
      },
      {
        "text": "aumenta i tempi di inserimento",
        "correct": false
      },
      {
        "text": "garantiscono un costo di accesso uniforme grazie al bilanciamento dei nodi",
        "correct": true
      },
      {
        "text": "contengono dati nei nodi intermedi",
        "correct": false
      }
    ]
  },
  {
    "text": "Un indice si dice sparso se:",
    "answers": [
      {
        "text": "punta a un record per ciascun blocco del file",
        "correct": true
      },
      {
        "text": "aumenta le dimensioni dei blocchi",
        "correct": false
      },
      {
        "text": "rimuove chiavi ridondanti",
        "correct": false
      },
      {
        "text": "aumenta la granularità dell'indice",
        "correct": false
      }
    ]
  },
  {
    "text": "Durante la gestione delle interrogazioni, il dizionario dei dati:",
    "answers": [
      {
        "text": "Contiene solo informazioni sui tipi di dati",
        "correct": false
      },
      {
        "text": "Fornisce statistiche sulle tabelle",
        "correct": true
      },
      {
        "text": "Limita l'accesso alle tabelle",
        "correct": false
      },
      {
        "text": "Elimina vincoli non necessari",
        "correct": false
      }
    ]
  },
  {
    "text": "Durante la gestione di un'interrogazione:",
    "answers": [
      {
        "text": "Migliorano interrogazioni per intervallo",
        "correct": false
      },
      {
        "text": "Limitano l'accesso a tuple duplicate",
        "correct": false
      },
      {
        "text": "Aggiungono vincoli non necessari",
        "correct": false
      },
      {
        "text": "Gli indici migliorano le interrogazioni puntuali e quelle per intervallo",
        "correct": true
      }
    ]
  },
  {
    "text": "L'equi-join:",
    "answers": [
      {
        "text": "Introduce vincoli di dominio",
        "correct": false
      },
      {
        "text": "Richiede domini compatibili",
        "correct": false
      },
      {
        "text": "Richiede che i domini degli attributi di join siano compatibili",
        "correct": true
      },
      {
        "text": "Rimuove tuple duplicate",
        "correct": false
      }
    ]
  },
  {
    "text": "Il gestore delle interrogazioni:",
    "answers": [
      {
        "text": "Traduce le query SQL in rappresentazioni algebriche",
        "correct": true
      },
      {
        "text": "Traduce SQL in rappresentazioni algebriche",
        "correct": false
      },
      {
        "text": "Introduce nuovi vincoli",
        "correct": false
      },
      {
        "text": "Elimina tuple duplicate",
        "correct": false
      }
    ]
  },
  {
    "text": "Le strutture hash:",
    "answers": [
      {
        "text": "Sono adatte per interrogazioni puntuali, ma non per intervalli di valori",
        "correct": true
      },
      {
        "text": "Aumentano la dimensione delle tabelle",
        "correct": false
      },
      {
        "text": "Non sono adatte per interrogazioni puntuali",
        "correct": false
      },
      {
        "text": "Supportano intervalli di valori",
        "correct": false
      }
    ]
  },
  {
    "text": "Il merge-join:",
    "answers": [
      {
        "text": "Introduce vincoli di unicità",
        "correct": false
      },
      {
        "text": "Richiede ordinamento delle tabelle",
        "correct": false
      },
      {
        "text": "Richiede che entrambe le tabelle siano ordinate",
        "correct": true
      },
      {
        "text": "Limita la selezione dei join",
        "correct": false
      }
    ]
  },
  {
    "text": "Le operazioni di accesso diretto:",
    "answers": [
      {
        "text": "Limitano l'accesso a tabelle grandi",
        "correct": false
      },
      {
        "text": "Riducono i tempi di scansione",
        "correct": false
      },
      {
        "text": "Richiedono un indice o una struttura hash per localizzare i dati",
        "correct": true
      },
      {
        "text": "Generano relazioni ridondanti",
        "correct": false
      }
    ]
  },
  {
    "text": "I profili delle tabelle:",
    "answers": [
      {
        "text": "Contengono solo valori distinti",
        "correct": false
      },
      {
        "text": "Includono il numero di tuple, dimensioni e valori distinti degli attributi",
        "correct": true
      },
      {
        "text": "Limitano la cardinalità delle relazioni",
        "correct": false
      },
      {
        "text": "Eliminano vincoli di integrità",
        "correct": false
      }
    ]
  },
  {
    "text": "Le funzioni di hash:",
    "answers": [
      {
        "text": "Efficienti riducono le collisioni tra i valori chiave",
        "correct": true
      },
      {
        "text": "Aumentano la cardinalità delle tabelle",
        "correct": false
      },
      {
        "text": "Rimuovono le chiavi duplicate",
        "correct": false
      },
      {
        "text": "Introducono tuple spurie",
        "correct": false
      }
    ]
  },
  {
    "text": "Le tecniche di ottimizzazione del join hash-based:",
    "answers": [
      {
        "text": "Limitano l'accesso ai dati",
        "correct": false
      },
      {
        "text": "Riducono la complessità del calcolo distribuendo i dati in partizioni",
        "correct": true
      },
      {
        "text": "Aumentano la cardinalità delle relazioni",
        "correct": false
      },
      {
        "text": "Rimuovono le tuple duplicate",
        "correct": false
      }
    ]
  },
  {
    "text": "La progettazione fisica riceve in input:",
    "answers": [
      {
        "text": "il modello concettuale",
        "correct": false
      },
      {
        "text": "lo schema logico, il sistema e il carico applicativo",
        "correct": true
      },
      {
        "text": "il codice SQL delle query",
        "correct": false
      },
      {
        "text": "solo il modello relazionale",
        "correct": false
      }
    ]
  },
  {
    "text": "I parametri di sistema che influenzano le prestazioni includono:",
    "answers": [
      {
        "text": "solo il tipo di DBMS",
        "correct": false
      },
      {
        "text": "l'accesso concorrente",
        "correct": false
      },
      {
        "text": "la dimensione dei buffer e la contiguità dei file",
        "correct": true
      },
      {
        "text": "il linguaggio di programmazione utilizzato",
        "correct": false
      }
    ]
  },
  {
    "text": "Le operazioni più delicate per la progettazione fisica sono:",
    "answers": [
      {
        "text": "inserimenti e cancellazioni",
        "correct": false
      },
      {
        "text": "proiezioni e unioni",
        "correct": false
      },
      {
        "text": "selezioni e join",
        "correct": true
      },
      {
        "text": "aggiornamenti su chiavi esterne",
        "correct": false
      }
    ]
  },
  {
    "text": "Un indice definito su un attributo migliora:",
    "answers": [
      {
        "text": "tutte le operazioni",
        "correct": false
      },
      {
        "text": "solo gli aggiornamenti",
        "correct": false
      },
      {
        "text": "solo le ricerche su quell'attributo",
        "correct": true
      },
      {
        "text": "le performance globali della base dati",
        "correct": false
      }
    ]
  },
  {
    "text": "In assenza di un indice su un attributo nella relazione, un join:",
    "answers": [
      {
        "text": "diventa impossibile",
        "correct": false
      },
      {
        "text": "diventa più costoso",
        "correct": true
      },
      {
        "text": "si esegue come equi-join automatico",
        "correct": false
      },
      {
        "text": "richiede una relazione ausiliaria",
        "correct": false
      }
    ]
  },
  {
    "text": "I join più comuni nelle applicazioni sono:",
    "answers": [
      {
        "text": "outer join su tabelle piccole",
        "correct": false
      },
      {
        "text": "join impliciti in viste materializzate",
        "correct": false
      },
      {
        "text": "equi-join su chiavi primarie",
        "correct": true
      },
      {
        "text": "natural join tra attributi nulli",
        "correct": false
      }
    ]
  },
  {
    "text": "La scelta della struttura primaria può dipendere:",
    "answers": [
      {
        "text": "dalla frequenza di aggiornamenti",
        "correct": true
      },
      {
        "text": "dal numero di utenti connessi",
        "correct": false
      },
      {
        "text": "dall'output previsto per i report",
        "correct": false
      },
      {
        "text": "dall'uso di viste annidate",
        "correct": false
      }
    ]
  },
  {
    "text": "Un indice su un campo ordinato è preferibile alla struttura hash per:",
    "answers": [
      {
        "text": "accessi puntuali",
        "correct": false
      },
      {
        "text": "ordinamenti e ricerche su intervalli",
        "correct": true
      },
      {
        "text": "relazioni con chiavi composte",
        "correct": false
      },
      {
        "text": "accessi in scrittura",
        "correct": false
      }
    ]
  },
  {
    "text": "Il metodo hash è particolarmente efficiente per:",
    "answers": [
      {
        "text": "ricerche su intervalli",
        "correct": false
      },
      {
        "text": "accessi puntuali a chiavi stabili",
        "correct": true
      },
      {
        "text": "join tra relazioni deboli",
        "correct": false
      },
      {
        "text": "ordinamenti di output",
        "correct": false
      }
    ]
  },
  {
    "text": "La struttura fisica scelta deve tenere conto:",
    "answers": [
      {
        "text": "delle query più complesse nel sistema",
        "correct": false
      },
      {
        "text": "delle dimensioni totali del disco",
        "correct": false
      },
      {
        "text": "della frequenza e del tipo di operazioni",
        "correct": true
      },
      {
        "text": "del linguaggio di modellazione",
        "correct": false
      }
    ]
  },
  {
    "text": "Una transazione deve terminare con:",
    "answers": [
      {
        "text": "commit o rollback",
        "correct": true
      },
      {
        "text": "scrittura su file di log",
        "correct": false
      },
      {
        "text": "sincronizzazione con il sistema operativo",
        "correct": false
      },
      {
        "text": "salvataggio automatico",
        "correct": false
      }
    ]
  },
  {
    "text": "Il dump serve per:",
    "answers": [
      {
        "text": "archiviare i log più recenti",
        "correct": false
      },
      {
        "text": "cancellare i dati obsoleti",
        "correct": false
      },
      {
        "text": "creare una copia completa e consistente del database",
        "correct": true
      },
      {
        "text": "comprimere la base di dati",
        "correct": false
      }
    ]
  },
  {
    "text": "La persistenza assicura che:",
    "answers": [
      {
        "text": "le modifiche confermate sopravvivano a eventuali guasti",
        "correct": true
      },
      {
        "text": "ogni transazione venga salvata in memoria volatile",
        "correct": false
      },
      {
        "text": "tutte le operazioni possano essere annullate",
        "correct": false
      },
      {
        "text": "il DBMS si riavvii dopo ogni commit",
        "correct": false
      }
    ]
  },
  {
    "text": "Il dump viene eseguito per:",
    "answers": [
      {
        "text": "creare una copia consistente della base di dati",
        "correct": true
      },
      {
        "text": "svuotare il buffer",
        "correct": false
      },
      {
        "text": "eseguire rollback automatici",
        "correct": false
      },
      {
        "text": "salvare solo le transazioni attive",
        "correct": false
      }
    ]
  },
  {
    "text": "La consistenza assicura che:",
    "answers": [
      {
        "text": "ogni transazione aggiorni tutte le tabelle",
        "correct": false
      },
      {
        "text": "non vengano violati i vincoli di integrità",
        "correct": true
      },
      {
        "text": "tutte le transazioni siano serializzabili",
        "correct": false
      },
      {
        "text": "il commit sia sempre eseguito",
        "correct": false
      }
    ]
  },
  {
    "text": "Il rollback consente di:",
    "answers": [
      {
        "text": "salvare i dati su memoria secondaria",
        "correct": false
      },
      {
        "text": "annullare tutte le operazioni di una transazione non conclusa",
        "correct": true
      },
      {
        "text": "ripetere l'ultima operazione",
        "correct": false
      },
      {
        "text": "confermare le modifiche parziali",
        "correct": false
      }
    ]
  },
  {
    "text": "Il log contiene:",
    "answers": [
      {
        "text": "esclusivamente i commit eseguiti",
        "correct": false
      },
      {
        "text": "la durata di ogni operazione",
        "correct": false
      },
      {
        "text": "tutte le operazioni significative per il ripristino",
        "correct": true
      },
      {
        "text": "solo il nome della transazione",
        "correct": false
      }
    ]
  },
  {
    "text": "L'operazione di Redo viene eseguita per:",
    "answers": [
      {
        "text": "annullare una transazione errata",
        "correct": false
      },
      {
        "text": "ripetere le modifiche confermate da una transazione",
        "correct": true
      },
      {
        "text": "cancellare i dati temporanei",
        "correct": false
      },
      {
        "text": "creare un nuovo checkpoint",
        "correct": false
      }
    ]
  },
  {
    "text": "Un checkpoint viene usato per:",
    "answers": [
      {
        "text": "sospendere le scritture sul database",
        "correct": false
      },
      {
        "text": "eseguire automaticamente il dump",
        "correct": false
      },
      {
        "text": "registrare lo stato attivo delle transazioni",
        "correct": true
      },
      {
        "text": "eliminare le transazioni concluse",
        "correct": false
      }
    ]
  },
  {
    "text": "Il controllo di concorrenza evita:",
    "answers": [
      {
        "text": "l'uso del rollback",
        "correct": false
      },
      {
        "text": "esecuzioni non corrette in presenza di transazioni parallele",
        "correct": true
      },
      {
        "text": "transazioni ripetute dallo stesso utente",
        "correct": false
      },
      {
        "text": "accessi in sola lettura",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel contesto delle basi di dati, il grado di strutturazione del dato dipende da:",
    "answers": [
      {
        "text": "la quantità di informazioni",
        "correct": false
      },
      {
        "text": "la velocità di accesso",
        "correct": false
      },
      {
        "text": "la presenza o meno di uno schema",
        "correct": true
      },
      {
        "text": "il formato del file",
        "correct": false
      }
    ]
  },
  {
    "text": "Nella basi di dati, i dati semi-strutturati si distinguono per:",
    "answers": [
      {
        "text": "schema flessibile e variabile",
        "correct": true
      },
      {
        "text": "struttura completamente assente",
        "correct": false
      },
      {
        "text": "schema fisso",
        "correct": false
      },
      {
        "text": "essere solo in formato testo",
        "correct": false
      }
    ]
  },
  {
    "text": "Nel linguaggio XML (eXtensible Markup Language), i tag:",
    "answers": [
      {
        "text": "sono fissi e predefiniti",
        "correct": false
      },
      {
        "text": "sono personalizzabili e autodescrittivi",
        "correct": true
      },
      {
        "text": "non sono utilizzati",
        "correct": false
      },
      {
        "text": "sono fissi e autodescrittivi",
        "correct": false
      }
    ]
  },
  {
    "text": "La specifica Document Type Definition (DTD) in XML serve a:",
    "answers": [
      {
        "text": "visualizzare dati in HTML",
        "correct": false
      },
      {
        "text": "validare sintassi SQL",
        "correct": false
      },
      {
        "text": "definire la struttura di un documento XML",
        "correct": true
      },
      {
        "text": "convertire XML in JSON",
        "correct": false
      }
    ]
  },
  {
    "text": "Una delle limitazioni della specifica Document Type Definition (DTD) per XML è:",
    "answers": [
      {
        "text": "non è scritta in XML e ha sintassi proprietaria",
        "correct": true
      },
      {
        "text": "non valida la sintassi",
        "correct": false
      },
      {
        "text": "supporta troppi tipi di dato",
        "correct": false
      },
      {
        "text": "è troppo moderna per sistemi legacy",
        "correct": false
      }
    ]
  },
  {
    "text": "Il linguaggio XPath permette di:",
    "answers": [
      {
        "text": "scrivere codice SQL",
        "correct": false
      },
      {
        "text": "navigare e selezionare elementi XML",
        "correct": true
      },
      {
        "text": "convertire XML in CSV",
        "correct": false
      },
      {
        "text": "formattare HTML",
        "correct": false
      }
    ]
  },
  {
    "text": "Quale RDBMS usa il tipo dato XMLType?",
    "answers": [
      {
        "text": "MySQL",
        "correct": false
      },
      {
        "text": "PostgreSQL",
        "correct": false
      },
      {
        "text": "SQLite",
        "correct": false
      },
      {
        "text": "Oracle",
        "correct": true
      }
    ]
  },
  {
    "text": "I sistemi NoSQL sono nati per gestire:",
    "answers": [
      {
        "text": "solo dati strutturati",
        "correct": false
      },
      {
        "text": "solo immagini",
        "correct": false
      },
      {
        "text": "dati flessibili e grandi volumi",
        "correct": true
      },
      {
        "text": "file compressi",
        "correct": false
      }
    ]
  },
  {
    "text": "Un database document-based come MongoDB utilizza:",
    "answers": [
      {
        "text": "formato BSON/JSON",
        "correct": true
      },
      {
        "text": "formato CSV",
        "correct": false
      },
      {
        "text": "solo testo libero",
        "correct": false
      },
      {
        "text": "solo XML con DTD",
        "correct": false
      }
    ]
  },
  {
    "text": "Redis è un esempio di database:",
    "answers": [
      {
        "text": "orientato ai documenti",
        "correct": false
      },
      {
        "text": "relazionale",
        "correct": false
      },
      {
        "text": "Key-Value",
        "correct": true
      },
      {
        "text": "a grafo",
        "correct": false
      }
    ]
  }
];
