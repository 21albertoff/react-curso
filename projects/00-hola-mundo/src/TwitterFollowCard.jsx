import { useState } from 'react'

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ?
        'tw-followCard-button is-following' :
        'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }   

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src="https://pbs.twimg.com/profile_images/1763979371474227200/CpD2R30l_400x400.jpg" alt="Avatar Alberto Fuentes" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}