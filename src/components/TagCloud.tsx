import { useEffect,useState } from "react";
import { baseURL } from "./App";
import { Button  } from '@chakra-ui/react'
import axios from "axios";

export default function TagCloud(): JSX.Element {
    const [listOfTags, setListOfTags] = useState<string []>([])
   
    useEffect(() => {
        async function fetchTags(){
            try { const response = await axios.get(baseURL+"/tag-cloud");
            const tagCloud:string[]= response.data
            setListOfTags(tagCloud)
            } catch (error) {
                console.error("Handle error from the TagComponent:",error)
                
            }
        } 
        fetchTags()
    },[])

    
    return <div>
      {listOfTags.map((t)=> <Button key={t}>{t}</Button> )}

    </div>;
}
