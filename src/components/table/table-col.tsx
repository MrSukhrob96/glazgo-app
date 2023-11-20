import React, { memo } from "react"

const TableCol: React.FC<{ title: string, body: string, created_at: string }> = ({ body, created_at, title }) => {
    return (
        <tr className="border-b border-gray-100">
            <td className="py-3 text-sm w-4/12">
                <div className="flex items-center gap-2">
                    <p className="max-h-10 overflow-hidden">
                        {title}
                    </p>
                </div>
            </td>
            <td className="py-3 text-sm w-4/12">
                <p className="max-h-10 overflow-hidden">
                    {body}
                </p>
            </td>
            <td className="py-3 text-sm w-4/12">
                {created_at}
            </td>
        </tr>
    )
}

export default memo(TableCol)