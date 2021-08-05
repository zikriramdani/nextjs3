import React, { Component } from "react";
import { connect } from 'react-redux';
import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TimeseriesChart from '../../components/Timeseries';

import store from '../../store/store';
import { getListTimeseries } from "../../action/action.timeseries";

interface ITimeseriesProps {
    timeseriesListGold: number;
    timeseriesListSilver: number;
}

class IndexPage extends Component<ITimeseriesProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // getListTimeseries();
        getListTimeseries()(store.dispatch);
    }

    render() {
        const timeseriesListGold = this.props.timeseriesListGold;
        const timeseriesListSilver = this.props.timeseriesListSilver;
        const dataTimeseriesChart = {
            labels: ['gold', 'silver'],
            datasets: [{
                label: '# of Votes',
                data: [ timeseriesListGold, timeseriesListSilver ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        }

        return (
            <main className='container'>
                <Heads title="Timeseries Chart - Create Next App" />

                <Navbar />
                    <h1>Ini adalah Halaman Timeseries Chart</h1>
                    <TimeseriesChart dataChart={dataTimeseriesChart} />
                <Footer />
            </main>
        )
    }
}

//untuk baca state dari reducer
const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state)
    return {
        timeseriesListGold: state.timeseries.timeseriesList.gold,
        timeseriesListSilver: state.timeseries.timeseriesList.silver
    }
}

//untuk manggil method di action
const mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps', dispatch)
    return {
        getListTimeseries: () => dispatch(getListTimeseries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)