import React  from 'react'
import dayjs from 'dayjs'

const Card = ({ user, defineColor }) => {
    const pict          = user.picture.large
    const name          = `${user.name.title} ${user.name.first} ${user.name.last}`
    const age           = user.dob.age
    const registerDate  = dayjs(user.registered.date).format('DD MMM YYYY')
    const email         = user.email
    const location      = `${user.location.city}, ${user.location.state}, ${user.location.postcode}`

    return (
        <div className={`card card--${defineColor(age)}`}>
            <div className={'card__img'}>
                <img src={pict} alt={'profile'} />
            </div>
            <div className={'card__texts'}>
                <p className={'name'}>{name}</p>
                <p className={'age'}>age : {age}</p>
                <p className={'register'}>register date : {registerDate}</p>
                <p className={'email resp--mobile'}>{email}</p>
            </div>
            <div className={'card__descs'}>
                <div className={'desc'}>
                    <i className={'fas fa-map-marker-alt'} />
                    {location}
                </div>
                <div className={'desc resp--web'}>
                    <i className={'fas fa-envelope'} />
                    {email}
                </div>
            </div>
        </div>
    )
}

export default Card
