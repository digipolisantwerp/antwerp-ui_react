import { Card } from '@acpaas-ui/react-components';

export function CardExamples() {
  return (
    <div className="u-margin-bottom">
      <h2>Cards</h2>
      <div style={{ maxWidth: '420px' }} className="u-margin">
        <Card
          image={{
            src: 'https://placedog.net/400/300?r',
            alt: 'A random dog'
          }}
          title="Card Title"
          subTitle="May 4th 2021, 12:34"
          content="Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae."
          link={{ label: 'link label', target: 'https://www.google.be' }}
        />
      </div>
    </div>
  );
}

export default CardExamples;
