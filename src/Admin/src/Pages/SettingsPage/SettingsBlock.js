import React from 'react';
import { Card, Table } from 'react-bootstrap';

class SettingsBlock extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = { blockForm: "" };
    }

    componentDidMount() {
        let settingsBlockTable = [];
        let i = 0;
        const jsonData = this.props.values;
        Object.keys(jsonData)
            .forEach(key => {
                let valueData = jsonData[key];
                console.log(valueData);
                if(key === "tokenParams")
                {
                    //settingsBlockTable.push(<SettingsBlock key ={0} />)
                }else{
                settingsBlockTable.push(
                    <tr>
                        <td>{i}</td>
                        <td>{key}</td>
                        <td>{valueData}</td>
                    </tr>
                )}
                i++;
            })
        this.setState({ blockForm: settingsBlockTable });
    }

    render() {
        console.log("ok");
        return (
            <Card>
                <Card.Header>
                    <Card.Title as="h5">{this.props.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.blockForm}
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        );
    }
}

export default SettingsBlock;