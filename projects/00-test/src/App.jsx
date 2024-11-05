import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

const users = [
    {
        userName: 'neutras',
        name: 'Byron Estay',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName: 'test2',
        name: 'Test 2',
        isFollowing: true
    }
]

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
        

    )
}