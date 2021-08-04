import React, { Component } from "react";
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimeseriesChart from '../components/TimeseriesChart';

import store from '../store/store';
import { getListUser } from '../action/action.user';

class IndexPage extends Component {
    // const [userList, setUserList] = React.useState(posts)

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getListUser()(store.dispatch);
    }

    render() {
        const userList = this.props.userList || []
        return (
            <main className='container'>
                <Navbar />
                    <TimeseriesChart data={userList} />
                <Footer />
            </main>
        )
    }
}

//untuk baca state dari reducer
const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state)
    return {
        userList: state.user.userList
    }
}

//untuk manggil method di action
const mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps', dispatch)
    return {
        getListUser: () => dispatch(getListUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)