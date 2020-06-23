import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../hoc/_Aux";

class BootstrapTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tableList:""};
  }

  componentDidMount() {
    const url = "http://localhost:8080/api/admin/allMovies";
    let table = [];
    let i = 0;
    fetch(url).then(res => res.text())
      .then((parsedResponse) => {
        JSON.parse(parsedResponse)
          .forEach((element) => {
            table.push( <tr>
                          <th>{i}</th>
                          <th>{element.title}</th>
                          <th>{element.year}</th>
                          <th>poster</th>
                        </tr>
                      )
            i += 1 ;
        })
        this.setState({tableList: table});
    })
  }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Movies List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Year</th>
                                        <th>Poster</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {this.state.tableList}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;