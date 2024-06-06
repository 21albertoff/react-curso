import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App(){
    return (
        <section className="App">
            <TwitterFollowCard initialIsFollowing userName="21albertoff" name="Alberto Fuentes"/>
            <TwitterFollowCard initialIsFollowing userName="Usuario2" name="Usuario Dos"/>
            <TwitterFollowCard isFollowing={false} userName="Usuario3" name="Usuario Tres"/>
            <TwitterFollowCard userName="Usuario4" name="Usuario Cuatro"/>
            <TwitterFollowCard userName="Usuario5" name="Usuario Cinco"/>
        </section>
    )
}