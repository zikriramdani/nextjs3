import * as React from 'react'
type Props = {}

const Footer: React.FC<Props> = ({}) => {
    return (
        <div className="bg-dark p-3 text-center text-white">
            Powered by <a href="https://github.com/zikriramdani" target="_blank">Zikri Ramdani</a>
        </div>
    )
}

export default Footer