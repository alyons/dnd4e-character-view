import React, { PureComponent } from 'react';
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';

class FeatureTable extends PureComponent {
    render() {
        const {
            name,
            features
        } = this.props;

        let featureItems = features.map(feature => (
            <OverlayTrigger
                key={feature.name}
                placement="bottom"
                overlay={
                    <Tooltip id={`tooltip-${feature.name}`}>
                        {feature.shortDescription}
                    </Tooltip>
                }>
                    <td key={feature.name}>{feature.name}</td>
            </OverlayTrigger>
        ));

        let rowCount = Math.ceil(featureItems.length / 3);
        let tableRows = [];
        for (let i = 0; i < rowCount; i++) {
            let children = [];
            for(let j = i * 3; j < i * 3 + 3; j++) {
                if (j >= featureItems.length) {
                    children.push(<td key={j}></td>);
                } else {
                    children.push(featureItems[j]);
                }
            }
            tableRows.push(<tr key={i}>{children}</tr>)
        }

        return (
            <Table>
                <thead><tr><th colSpan="3">{name}</th></tr></thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        );
    }
};

export default FeatureTable;
