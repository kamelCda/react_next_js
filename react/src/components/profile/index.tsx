const User={
    name:"hedy lamarr",
    imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:90
}
const myStyle={
    width: User.imageSize,
    height:User.imageSize,
}
export default function Profile(){

let content;




    return (
<>
<h1>{User.name}</h1>
<img 
    className="avatar"
    src={User.imageUrl}
    alt={"photo de "+ User.name} 
    style={myStyle}
/>
{/*isLoggedIn && <AdminPanel/>*/}
</>

    );
}