import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    stats: state.character.stats
});

const QuickStats = ({ stats }) => {

    let rows = [];

    return <div>{JSON.stringify(stats)}</div>;
};

export default connect(mapStateToProps)(QuickStats);
