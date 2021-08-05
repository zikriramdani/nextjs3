import * as React from 'react';
import { Scatter } from 'react-chartjs-2';

type Props = {
    dataChart: any;
}

const ScatterChart: React.FC<Props> = ({ dataChart }) => {
    return (
        <div className='mb-3'>
            <Scatter
                data={dataChart}
                width={400}
                height={200}
            />
        </div>
    )
}

export default ScatterChart