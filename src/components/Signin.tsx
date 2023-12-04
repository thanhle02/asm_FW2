import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
 import { useAuthMutation } from '@/hooks/useAuthMutation'

const SignIn = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_IN'
    })
    return (
        <div className='w-1/2 ml-32 mr-44  mt-14'>
            <h1 className='text-lg ml-32 '> Đăng Nhập  Tài Khoản</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Email của bạn' className='mt-9' />
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
                    <Button type='submit' variant='destructive' className='mt-12 ml-36'>
                        Đăng nhập
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignIn