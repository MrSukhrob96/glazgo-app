export type ButtonPropsType = {
    handler: () => void
    props?: any
    text: string
    type?: 'button' | 'reset' | 'submit'
    className?: string 
}