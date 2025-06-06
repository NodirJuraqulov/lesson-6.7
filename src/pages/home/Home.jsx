import React  from 'react'
import NotFound from '../not-found/NotFound'
import Skeleton from '../skeleton/Skeleton'
import Products from '../../components/products/Products'
import Hero from '../hero/Hero'
import { useFetch } from '@/hooks/useFetch'

const Home = () => {
    const { data, error, loading } = useFetch('/products')

    if (error) {
        return (
            <NotFound/>
        )
    }

  return (
    <div>
        <div className='container mx-auto justify-center flex flex-col items-center'>
            <Hero/>

            <h1 className='text-4xl font-medium'>Products</h1>

            {loading && <Skeleton count={8}/>}

            <Products data={data}/>

            <button className='py-3 px-32 text-xl font-medium cursor-pointer rounded-md bg-slate-800 text-white mt-8 hover:bg-slate-900 transition'>See more</button>
        </div>
    </div>
  )
}

export default React.memo(Home)