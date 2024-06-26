import Header from '@/app/(app)/Header'
import Todos from './Todos'

export const metadata = {
    title: 'Todo',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Todo List" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-base overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-neutral border-neutral-content">
                            <Todos />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
