import * as React from 'react';
import { Bar } from 'react-chartjs-2';

type Props = {
    dataChart: any;
}

const Timeseries: React.FC<Props> = ({ dataChart }) => {
    return (
        <div className='mb-3'>
            <Bar
                data={dataChart}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default Timeseries

// type Props = {
//     data: User
// }

// const Timeseries: React.FC<Props> = ({ data }) => {
//     return (
//         <div className='mb-3'>
//             Timeseries Chart {data.first_name}
//         </div>
//     )
// }

// export default Timeseries
