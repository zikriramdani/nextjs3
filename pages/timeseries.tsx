import React, { Component } from "react";
import { connect } from 'react-redux';
import Heads from '../components/Heads';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimeseriesChart from '../components/Timeseries';

import store from '../store/store';
import { getListTimeseries } from "../action/action.timeseries";

class TimeseriesPage extends Component {
    // const [userList, setUserList] = React.useState(posts)

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // getListTimeseries();
        getListTimeseries()(store.dispatch);
    }

    render() {
        // const timeseriesList = this.props.timeseriesList || []
        return (
            <main className='container'>
                <Heads title="Timeseries Chart - Create Next App" />

                <Navbar />
                    <h1>Ini adalah Halaman Timeseries Chart</h1>
                    {/* {timeseriesList.map((timeseries, no) => (
                        <TimeseriesChart key={timeseries.id} data={timeseries} />
                    ))} */}
                <Footer />
            </main>
        )
    }
}

//untuk baca state dari reducer
const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state)
    return {
        timeseriesList: state.timeseries.timeseriesList
    }
}

//untuk manggil method di action
const mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps', dispatch)
    return {
        getListTimeseries: () => dispatch(getListTimeseries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeseriesPage)