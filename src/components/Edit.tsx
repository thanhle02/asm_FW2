import { getProduct } from '@/apis/product'
import { useProductQuery } from '@/hooks/useProductQuery'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NameForm from './Product/NameForm'
import PriceForm from './Product/PriceForm'
import ImgForm from './Product/Img';
import { Button } from './ui/button'

type Props = {}

const Edit = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    // const navigate = useNavigate()
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <NameForm data={data} />
                </div>
                <div>
                    <ImgForm data={data} />
                </div>
                <div>
                    <PriceForm data={data} />
                </div>
            </div>

            <Link to={'/products'}  > <Button className='bg-green-500'>Back</Button> </Link>
        </div>
    )
}

export default Edit
