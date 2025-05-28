import React from 'react'
import NotFound from '../not-found/NotFound'
import Skeleton from '../skeleton/Skeleton'
import Userss from '../../components/userss/Userss'
import { useFetch } from '../../hooks/useFetch'

const Users = () => {
    const { data, error, loading } = useFetch('/users')

    if (error) {
        return (
            <NotFound/>
        )
    }

  return (
    <div>
        <div className='container mx-auto justify-center flex flex-col items-center'>
            <h2 className='text-4xl font-medium'>Users</h2>

            {loading && <Skeleton count={8}/>}

            <Userss data={data}/>

            <button className='py-3 px-32 text-xl font-medium cursor-pointer rounded-md bg-slate-800 text-white mt-8 hover:bg-slate-900 transition'>See more</button>
        </div>
    </div>
  )
}

export default React.memo(Users)