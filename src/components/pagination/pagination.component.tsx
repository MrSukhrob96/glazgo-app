import Button from '../UI/button';

const Pagination: React.FC<{ next: any, previous: any }> = ({ next, previous }) => {
    return (
        <div className="flex gap-5 bg-white my-5">
            <Button handler={previous} text='следующий' />
            <Button handler={previous} text='назад' />
        </div>
    )
}

export default Pagination