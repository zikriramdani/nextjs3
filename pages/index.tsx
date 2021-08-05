import React, { Component } from "react";

import UserPage from './user'

class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UserPage />
        )
    }
}

export default IndexPage