```
const CardBody = require('./src').CardBody;
const CardHeader = require('./src').CardHeader;
const CardIcon = require('./src').CardIcon;
const CardTitle = require('./src').CardTitle;
const CardDescription = require('./src').CardDescription;
const CardActions = require('./src').CardActions;
<Card>
  <CardHeader title="Card header" />
  <CardActions>
    Here come actions
  </CardActions>
  <CardBody>
    <CardIcon icon="ai-alarm-bell" ariaLabel="This is a bell icon" />
    <CardTitle>Card title</CardTitle>
    <CardDescription>
      Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.
    </CardDescription>
  </CardBody>
</Card>
```
