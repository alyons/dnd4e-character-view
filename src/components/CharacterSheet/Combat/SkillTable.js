import React, { PureComponent } from 'react';
import { Table } from 'react-bootstrap';

import { capitalize } from '../../../util';

const skills = [
    'acrobatics',
    'arcana',
    'athletics',
    'bluff',
    'diplomacy',
    'dungeoneering',
    'endurance',
    'heal',
    'history',
    'insight',
    'intimidate',
    'nature',
    'perception',
    'religion',
    'stealth',
    'streetwise',
    'thievery'
];

class SkillTable extends PureComponent {
    render() {
        const stats = this.props;

        let skillItems = [];

        skills.forEach(s => {
            skillItems.push(
                <td key={s}>{capitalize(s)}: {stats[s]}</td>
            );
        });

        let tableRows = [];
        for(let i = 0; i < 6; i++) {
            let children = [];
            for(let j = i * 3; j < i * 3 + 3; j++) {
                if (j >= skillItems.length) {
                    children.push(<td key={j}></td>);
                } else {
                    children.push(skillItems[j]);
                }
            }
            tableRows.push(<tr key={i}>{children}</tr>)
        }

        return (
            <Table>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        );
    }
}

export default SkillTable;
