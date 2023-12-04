

    import { IProduct } from '@/interfaces/Product'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import { SubmitHandler } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useToast } from '../ui/use-toast'

type NameFormProps = {
    data: IProduct
}

type FormControlType = {
    name: string
    img: string,
    
}

const NameForm = ({ data }: NameFormProps) => {
    const { toast } = useToast()
    const [productEditStatus, setProductEditStatus] = useState(false)
    const { form, onSubmit } = useProductMutation({
        action: 'UPDATE',
        onSuccess: () => {
            setProductEditStatus(false)
            toast({
                variant: 'success',
                title: 'Chúc mừng bạn',
                description: 'Cập nhật ảnh  thành công'
            })
        }
    })

    useEffect(() => {
        if (data && form) {
            form.reset({
                name: data.name || '',
                img: data.img || ''
            })
        }
    }, [data, form])

    const onHandleSubmit: SubmitHandler<FormControlType> = (values) => {
        onSubmit({ ...data, ...values })
    }

    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Ảnh sản phẩm
                <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
                    {productEditStatus ? (
                        <>Hủy</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Chỉnh sửa
                        </>
                    )}
                </Button>
            </div>
            {!productEditStatus && (
                <React.Fragment>
                    {/* <p className='text-sm mt-2'>{data?.img}</p> */}
                    <img src={data?.img} alt="Product Image" className="w-32 h-32 rounded-md object-cover mt-2" />
                </React.Fragment>
            )}
            {productEditStatus && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-y-8'>
                        {/* <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Nhập tên sản phẩm' />
                                    </FormControl>
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            name='img'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Nhập URL ảnh sản phẩm' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2'>
                            <Button type='submit'>Lưu</Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default NameForm