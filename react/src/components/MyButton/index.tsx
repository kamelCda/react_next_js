
'use client'



interface User{
    name:string;
    firstname:string;
    imageUrl:string;
}

interface MyButtonProps{
  count:number,
  onClick:()=>void
};

export default function MyButton({count,onClick}:MyButtonProps){



    const user:User={
        name:'Dutronc', 
        firstname:'Jacques',
        imageUrl:'http://localhost:3000'
    };


  return (
    <>
        <button  onClick={onClick}>
          cliqué {count}  fois
        </button>
       <ul>
        <li>
            <img className='avatar' src={user.imageUrl}/>
           <p>{user.name+' '+ user.firstname}</p> 
        </li>
       </ul>
    </>
  )
}

