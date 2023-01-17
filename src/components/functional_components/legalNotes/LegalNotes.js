import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next'

const LegalNotes = () => {
  const { t } = useTranslation();
  return (
    <div style={{ color: "#262E36" }}>
      <Trans
        i18nKey={"legalNotes.txt"}
      >
        <b>NOTE LEGALI</b>
        <br />
        <span>
          Tutti i loghi e marchi presenti sul Sito&nbsp;
        </span>
        <a href="https://beije.it/" target={"_blank"} rel="noreferrer">https://beije.it</a>
        <span>
          &nbsp;sono di proprietà di People First S.r.l., Viale
          Giulio Cesare n. 71, 00192 - Roma, Partita IVA e C.F.:16334941008, a cui è stata formalmente
          ottenuta l’assegnazione del nome a dominio internet, secondo le metodologie e procedure vigenti al
          momento della richiesta di assegnazione.
        </span>
        <br />
        <br />
        <b>Definizioni</b>
      </Trans>

      <ul>
        <li>{t("legalNotes.list1.li1")}</li>
        <li>{t("legalNotes.list1.li2")} <a href="https://beije.it/" target={"_blank"} rel="noreferrer"> https://beije.it</a>;</li>
        <li>{t("legalNotes.list1.li3")}</li>
        <li>{t("legalNotes.list1.li4")}</li>
        <li>{t("legalNotes.list1.li5")}</li>
      </ul>

      <Trans
        i18nKey={"legalNotes.txt2"}
      >
        <br />
        <br />
        <b>Contenuti e scopo del Sito</b>
        <br />
        <span>
          I Contenuti del Sito web sono stati studiati nel rispetto delle leggi italiane e delle direttive dell’Unione
          Europea, ivi comprese quelle per la protezione delle opere letterarie e artistiche, e sono rivolti a utenti
          nazionali e internazionali.
        </span>
        <br />
        <span>
          Scopo del Sito è la diffusione tramite internet, per finalità informative e pubblicitarie, di notizie
          relative all’azienda Beije Consulting S.r.l., nonchè la fornitura di Servizi on-line.
        </span>
        <br />
        <span>
          People First S.r.l. precisa in particolare che:
        </span>
      </Trans>
      <ul>
        <li>{t("legalNotes.list2.li1")}</li>
        <li>{t("legalNotes.list2.li2")}</li>
        <li>{t("legalNotes.list2.li3")}</li>
      </ul>
      <Trans
        i18nKey={"legalNotes.txt3"}
      >
        <br />
        <span>
          In ogni caso, i testi, gli articoli, le fotografie e la documentazione in formato elettronico presente su
          questo Sito, salvo quanto diversamente ed espressamente indicato, sono di esclusiva proprietà di
          People First S.r.l. e sono qualificate come “informazioni per il pubblico” e non possono essere
          distribuite e/o copiate senza permesso ed espressa autorizzazione scritta. Eventuali Contenuti di
          proprietà terza recheranno l&apos;indicazione della rispettiva provenienza o sarà presente idonea citazione
          per garantire l&apos;attribuzione dei diritti ai legittimi proprietari o autori.
        </span>
        <br />
        <br />
        <b>People First S.r.l. conferma che:</b>
      </Trans>
      <ul>
        <li>{t("legalNotes.list3.li1")}</li>
        <li>{t("legalNotes.list3.li2")}</li>
        <li>{t("legalNotes.list3.li3")}</li>
        <li>{t("legalNotes.list3.li4")}</li>
      </ul>
      <Trans
        i18nKey={"legalNotes.txt4"}
      >
        <br />
        <span>
          Il contenuto, ed ogni sua parte, può essere riprodotto (anche solo in parte o citando la fonte) solo con
          il preventivo consenso scritto di People First S.r.l.
        </span>
        <br />
        <br />
        <b>Modalità e condizioni di utilizzo del Sito web</b>
        <br />
        <span>
          Chiunque entri in questo Sito web o lo utilizzi in qualsiasi maniera accetta senza restrizioni di essere
          vincolato dalle condizioni qui specificate. Se non le accetta o non intende essere vincolato dalle stesse,
          non può ritenersi autorizzato ad accedere, utilizzare o scaricare materiale da questo Sito.
        </span>
        <br />
        <span>
          In qualsiasi momento, People First S.r.l. si riserva il diritto di aggiornare o variare le presenti
          condizioni e le modalità di utilizzo del Sito web, senza alcun obbligo di preavviso. Nel caso di
          modifiche alle condizioni, l’accesso al Sito web implica l’impegno a rispettare le condizioni così
          come modificate.
        </span>
        <br />
        <br />

        <b>Normativa applicabile</b>
        <br />
        <span>
          Tutti i Contenuti pubblicati o presenti sul Sito web, compresa la loro selezione e organizzazione
          nonché la disposizione e il design del Sito web, sono protetti dalla normativa sulla privacy (D. Lgs.
          30/6/2003, n. 196), dalla legge sul diritto d’autore (Legge 22/4/1941, n. 633, come modificata dal D.
          Lgs. 29/12/1992 n. 518, sulla Tutela giuridica del software) e dalle altre normative nazionali e
          internazionali in materia di tutela della proprietà intellettuale e industriale, loro modifiche e
          integrazioni.
        </span>
        <br />
        <br />
        <b>Regime di utilizzo dei Contenuti del Sito</b>
      </Trans>
      <b>
        <ol
          type="a"
        >
          <li>{t("legalNotes.list4.li1")}</li>
        </ol>
      </b>
      <Trans
        i18nKey={"legalNotes.txt5"}
      >
        <span>
          L’accesso al Sito web, ai suoi contenuti, come Visitatore non registrato o registrato, è consentito solo
          per gli scopi ammessi da People First S.r.l. ed evidenziati su questo stesso Sito web. Il Sito web e i
          dati ivi Contenuti possono essere consultati o utilizzati solo per uso personale (ad esempio per propria
          informazione, ricerca, studio).
        </span>
        <br />
        <br />
      </Trans>
      <b>
        <ol
          type="a"
          start="2"
        >
          <li>{t("legalNotes.list4.li2")}</li>
        </ol>
      </b>
      <Trans
        i18nKey={"legalNotes.txt6"}
      >
        <span>
          L’Utente non può utilizzare o far utilizzare a fini commerciali a terzi il Sito web e i dati ivi contenuti.
          Qualsiasi utilizzo per intento o utilità commerciale o di sfruttamento economico da parte degli utenti
          è pertanto espressamente vietato, salvo sia stato preventivamente concordato per iscritto con People
          First S.r.l. su base contrattuale.
        </span>
        <br />
        <span>
          In ogni caso, sono vietati:
        </span>
      </Trans>

      <ul>
        <li>{t("legalNotes.list5.li1")}</li>
        <li>{t("legalNotes.list5.li2")}</li>
        <li>{t("legalNotes.list5.li3")}</li>
        <li>{t("legalNotes.list5.li4")}</li>
        <li>
          {t("legalNotes.list5.li5.part1")}
          <i>{t("legalNotes.list5.li5.part2")}</i>
          {t("legalNotes.list5.li5.part3")}
          <i>{t("legalNotes.list5.li5.part4")}</i>
          {t("legalNotes.list5.li5.part5")}
          <i>{t("legalNotes.list5.li5.part6")}</i>
          {t("legalNotes.list5.li5.part7")}
        </li>
        <li>{t("legalNotes.list5.li6")}</li>
        <li>{t("legalNotes.list5.li7")}</li>
      </ul>
    </div>
  )
}

export default LegalNotes