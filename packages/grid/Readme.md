```
const Wrapper = require('./src').Wrapper;
const Container = require('./src').Container;
const Row = require('./src').Row;
const Col = require('./src').Col;

const containerStyle = {'background': '#98FB98 ' };
const rowStyle = {'background': '#3CB371', 'textAlign': 'center' };
const colStyle = {'background': '#007FFF', 'height': '100px', 'lineHeight': '100px' };


<Wrapper className="wrapper-class">
  <Container className="container-class" style={containerStyle}>
    <Row className="row-class" style={rowStyle}>
      <Col className="col-class" xs sm={10} md={5} lg={5} style={colStyle}>
        <span>.col-xs-12 col-md-5</span>
      </Col>

      <Col xs={12} first={'xs'} last={'md'} sm={10} md={6} lg={6} mdOffset={1} style={colStyle}>
        <span>.col-xs-12 col-md-6</span>
      </Col>
    </Row>
  </Container>
</Wrapper>
```