import { IProduct } from '@/interfaces/Product'
import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const getColumns = (removeProduct: any): ColumnDef<IProduct>[] => [
    {
        accessorKey: 'img',
        header: () => <span className='font-bold'>Ảnh sản phẩm</span>,
        cell: ({ row }) => {
            const imageSrc = row.getValue('img') || 0;
            // return <img src={imageSrc} alt='Ảnh sản phẩm' className='w-16 h-16' />;
        }
    },
    {
        accessorKey: 'name',
        header: () => <span className='font-bold'>Tên sản phẩm</span>
    },
    {
        accessorKey: 'price',
        header: 'Giá',
        cell: ({ row }) => {
            const formattedPrice = formatPrice(row.getValue('price') || 0)
            return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />
        }
    },
    {
        accessorKey: '',
        header: 'Hành động',
        cell: ({ row }) => {
            return (
                <>
                      <Link to={`/products/${row?.original.id}`}> <Button className='bg-blue-500 w-16'>Chỉnh sửa</Button></Link>  
                    <Button onClick={() => removeProduct(row?.original!)} className='bg-red-600'>Xóa</Button>
                </>
            )
        }
    }
]