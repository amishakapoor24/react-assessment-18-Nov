
export default function ProfileSection({User}){
    return(<section>
        <h2>Name:{User.name}</h2>
        <h2>Role:{User.role}</h2>
        <p>Bio:{User.bio}</p>
        <p>isAvailable{User.isAvailable}</p>
    </section>
    )
}


