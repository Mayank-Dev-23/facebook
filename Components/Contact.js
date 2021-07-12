import {DotsHorizontalIcon, SearchIcon, VideoCameraIcon} from "@heroicons/react/solid"
import Person from "./Person"

const persons= [
    {src: 'https://links.papareact.com/f0p' , name:'Jeff Bezoz'},
    {src: 'https://links.papareact.com/kxk' , name:'Elon Musk'},
    {src: 'https://links.papareact.com/zvy' , name:'Bill Gates'},
    {src: 'https://links.papareact.com/snf' , name:'Mark Zuckerberg'},
    {src: 'https://links.papareact.com/d0c' , name:'Harry Potter'},
    {src: 'https://links.papareact.com/6gg' , name:'The Queen'},
    {src: 'https://links.papareact.com/r57' , name:'James Bond'},

]

function Contact() {
    return (
        <div className="hidden lg:flex  flex-col w-60 mt-5 p-2">

            <div className="flex justify-between items-center text-gray-500 mb-5 ">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-5" />
                    <SearchIcon  className="h-5"/>
                    <DotsHorizontalIcon  className="h-5"/>
                </div>
            </div>
            {persons.map(person =>(
<Person
key={person.src}
name={person.name}
src={person.src}
/>
            ))}
        </div>
            
               
           
        
    )
}

export default Contact
