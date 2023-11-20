import React, { memo } from "react"

const TableRow: React.FC<{ data: Array<string> }> = ({ data }) => {
    return (
        <tr role="row">
            {
                data && data.map(item => (
                    <th>
                        <div
                            className={
                                `
                                flex 
                                items-center 
                                justify-between 
                                pb-2 
                                pt-4 
                                text-start 
                                uppercase 
                                tracking-wide 
                                text-gray-6001
                            `
                            }
                        >
                            {item}
                        </div>
                    </th>
                ))
            }

        </tr>
    )
}

export default memo(TableRow)
