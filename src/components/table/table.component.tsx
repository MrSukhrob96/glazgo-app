import React, { memo } from 'react'
import TableRow from './table-row';
import TableCol from './table-col';

const tableRows: Array<string> = [
    "TITLE",
    "BODY",
    "CREATED AT"
]

const Table: React.FC<
    {
        items: Array<
            {
                id: number,
                title: string,
                body: string,
                created_at: string
            }
        >
    }
> =
    ({ items }) => {

        return (
            <table role="table" className="w-full ">
                <thead>
                    <TableRow data={tableRows} />
                </thead>
                <tbody className="w-full px-4">
                    {
                        items && items?.map(item => (
                            <TableCol
                                body={item.body}
                                created_at={item.created_at}
                                title={item.title}
                                key={item.id}
                            />
                        ))
                    }
                </tbody>
            </table>
        )
    }

export default memo(Table)