import './profile.css';

const profile = ({img , name , email ,age , phone , addres }) => {
    return(
       < div className='main'>
            <img src={img} />
            <div>name :- {name}</div>
            <div>email :- {email}</div>
            <div>age :- {age}</div>
            <div>phone :- {phone}</div>
            <div>addres :- {addres}</div>
       </div>
    )
}

export default profile;