import React from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

const paritaGenere = () => {
  const { t } = useTranslation()
  return (
    <div style={{ color: '#262E36' }}>
      <Trans i18nKey={'paritaGenere.quote'}>
        <b>
          &quot;La nostra capacità di raggiungere l&apos;unità nella diversità
          sarà la bellezza e la prova della nostra civiltà.&quot;
        </b>
        <br />
        - Mahatma Gandhi
        <br />
        <br />
      </Trans>
      <Trans i18nKey={'paritaGenere.text1'}>
        <span>
          Il valore fondante di People First srl è: “le Persone al centro di
          tutto”. &nbsp;
          <br />
          <br />
        </span>
        <span>
          &nbsp;Partendo da questo presupposto la nostra organizzazione promuove
          una cultura aziendale fondata sul rispetto per ogni individuo e sul
          riconoscimento delle esigenze, aspirazioni e contributi unici di
          ognuno.
        </span>
        <br />
        <span>
          People First srl valorizza il pluralismo e le pratiche inclusive nel
          mondo del lavoro sia come fattore etico che come capacità di
          rispondere alle trasformazioni della società e dei mercati.
        </span>
        <br />
        <br />
        <span>
          Adottando questa carta,
          <b>
            People First srl intende contribuire alla lotta contro tutte le
            forme di discriminazione sul luogo di lavoro
          </b>
          - identità di genere, età, disabilità, etnia, fede religiosa,
          orientamento sessuale -
          <b>
            impegnandosi al contempo a valorizzare le diversità all&apos;interno
            dell&apos;organizzazione aziendale, con particolare riguardo alle
            pari opportunità tra uomo e donna.
          </b>
        </span>
        <br />
        <br />
        <span>
          In virtù di questa Carta, People First srl si impegna a contribuire al
          raggiungimento degli obiettivi sopra condivisi attraverso una serie di
          azioni concrete di seguito descritte:
        </span>
        <br />
        <br />
      </Trans>
      <ul>
        <li>{t('paritaGenere.list.li1')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li2')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li3')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li4')}</li>
        <ul>
          <li>
            {t('paritaGenere.list.li5')}
            <ul>
              <li>{t('paritaGenere.list.li6.part1')}</li>
              <li>{t('paritaGenere.list.li6.part2')}</li>
            </ul>
          </li>
          <li>
            {t('paritaGenere.list.li7')}
            <ul>
              <li>{t('paritaGenere.list.li8.part1')}</li>
              <li>{t('paritaGenere.list.li8.part2')}</li>
            </ul>
          </li>
          <li>
            {t('paritaGenere.list.li9')}
            <ul>
              <li>{t('paritaGenere.list.li10.part1')}</li>
              <li>{t('paritaGenere.list.li10.part2')}</li>
            </ul>
          </li>
        </ul>
        <li>{t('paritaGenere.list.li11')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li12')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li13')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li14')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li15')}</li>
        <br></br>
        <li>{t('paritaGenere.list.li16')}</li>
        <br></br>
      </ul>
      <Trans i18nKey={'paritaGenere.text2'}>
      Nel sottoscrivere questo impegno People First srl ricorda che
      l&apos;uguaglianza sul lavoro è Responsabilità di ogni membro
      dell&apos;organizzazione e incoraggia ognuno a contribuire alla creazione
      di un ambiente di lavoro equo e inclusivo.
      </Trans>
    </div>
  )
}

export default paritaGenere
