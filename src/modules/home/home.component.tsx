import React from 'react';

import { useQuery } from 'react-query';
import File from '../../components/UI/file/file.component';
import Table from '../../components/table/table.component';
import Pagination from '../../components/pagination/pagination.component';
import httpApi from '../../utils/axios';


function HomePage() {

    const {
        data,
        isError,
        isLoading,
    } = useQuery("postsData", async function () {
        return httpApi.get(`/api/post?limit=20&offset=1&sort=esc`)
    });

    console.log(data)

    const nextHandler = async () => {

    }

    const previousHandler = async () => {

    }

    if (isError) {
        <div>
            error
        </div>
    }

    return (
        <>
            <section className="container">
                <div className='flex justify-between my-5'>
                    <div className='flex items-center gap-2'>
                        <File />
                        <div className='w-28 text-xs leading-4'>
                            выберите файла на формате xlsx, csv
                        </div>
                    </div>

                    <div className='flex space-x-2'>
                        <button className='btn'>
                            Импорт
                        </button>

                        <button className='btn'>
                            Экспорт
                        </button>
                    </div>

                </div>

                <div className="w-full flex flex-col justify-center">
                    <div
                        className="relative flex w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md "
                    >
                        <div
                            className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100"
                        >
                            <select id="countries" className="border border-gray-300 outline-none text-gray-900 text-sm rounded-md px-5 py-2">
                                <option value="ESC">Старый</option>
                                <option value="DESC">Новый</option>
                            </select>
                        </div>
                        <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                            {
                                isLoading ? (
                                    <>Загрузка данных</>
                                ) : (
                                    <>
                                        <Table items={data?.data?.data} />

                                        <Pagination
                                            next={nextHandler}
                                            previous={previousHandler}
                                        />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomePage;
