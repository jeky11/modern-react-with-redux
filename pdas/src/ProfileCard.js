function ProfileCard({title, handle, image}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-5">{title}</p>
                        <p className="subtitle is-7">{handle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;