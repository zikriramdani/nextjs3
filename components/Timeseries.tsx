import * as React from 'react'
import { User } from '../types'

type Props = {
    data: User
}

const Timeseries: React.FC<Props> = ({ data }) => {
    return (
        <div className='mb-3'>
            Timeseries Chart {data.first_name}
        </div>
    )
}

export default Timeseries
