import './frien.css'

export const Friends = (props) => {
    return <div>
        <ul class="friend-list">
            {props.friends.map((e) => <li class="item">
                <span class="status" style={{backgroundColor: e.isOnline ? 'green' : 'red'}}>online</span>
                <img class="avatar" src={e.avatar} alt="User avatar" width="48" />
                <p class="name">{e.name}</p>
            </li>)}
        </ul>
    </div>
}