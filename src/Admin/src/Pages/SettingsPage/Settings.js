import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import SettingsBlock from './SettingsBlock';

import Aux from "../../hoc/_Aux";

class SettingsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { settingsForm: "" };
    }

    componentDidMount() {
        const url = "http://localhost:8080/api/admin/settings";
        let tempSettingsForm = [];
        let i=0;
        fetch(url).then(res => res.text())
            .then((parsedResponse) => {
                const settingsData = JSON.parse(parsedResponse);
                Object.keys(settingsData)
                    .forEach((key) => {
                        tempSettingsForm.push(
                        <SettingsBlock key={i} title={key} values={settingsData[key]}/>);
                        i++;
                    });
                    
            })
        this.setState({ settingsForm: tempSettingsForm });
    }

    render() {
        console.log("ok");
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Settings</Card.Title>
                            </Card.Header>
                            <Card.Body>

                                {this.state.settingsForm}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SettingsTable;