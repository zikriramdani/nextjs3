import React, { Component } from "react";
import { connect } from 'react-redux';
import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TimeseriesChart from '../../components/Timeseries';
import ScatterChart from '../../components/ScatterChart';

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

        // Timeseries
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

        // Scatter Chart
        const dataScatterChart = {
            labels: ['Scatter'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 5,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [
                        { x: timeseriesListGold, y: timeseriesListGold },
                        { x: timeseriesListSilver, y: timeseriesListSilver },
                    ]
                }
            ]
        };

        return (
            <main className='container'>
                <Heads title="Timeseries Chart - Create Next App" />

                <Navbar />
                    <h1>Ini adalah Halaman Timeseries Chart</h1>

                    <TimeseriesChart dataChart={dataTimeseriesChart} />

                    <hr />
                    <h1>Scatter Chart</h1>
                    <ScatterChart dataChart={dataScatterChart} />
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