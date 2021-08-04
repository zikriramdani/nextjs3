import * as React from 'react'
import { Article } from '../types'

type Props = {
    data: Article
}

const TimeseriesChart: React.FC<Props> = ({ data }) => {
    return (
        <div className='mb-3'>
            Timeseries Chart
        </div>
    )
}

export default TimeseriesChart
