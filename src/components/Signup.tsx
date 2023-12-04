import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuthMutation } from '@/hooks/useAuthMutation'

const SignupPage = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_UP',
        onSuccess: () => {
            toast({
                description: 'Đăng ký thành công',
                variant: 'success'
            })
            form.reset()
        }
    })
    return (
        <div className='w-1/2 ml-32 mr-44  mt-14'>
            <h1 className='text-lg ml-32 '> Đăng Kí Tài Khoản</h1>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField 
                        name='name'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem >
                                <FormControl>
                                    <Input type='name' {...field} placeholder='Tên của bạn' className='mt-9'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Email của bạn' className='mt-9'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Password của bạn' className='mt-9' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='confirmPassword'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Nhập lại mật khẩu của bạn'  className='mt-9'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit' variant='destructive' className='bg-blue-400 mt-9 ml-36'>
                        Đăng ký
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignupPage