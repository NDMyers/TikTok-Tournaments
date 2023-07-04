import CompareSection from "@/components/CompareSection"
import { db } from "@/lib/db"

const page = ( {searchParams} ) => {

    const isExample = searchParams.query

    if( isExample ) {

    }
    
    return (

        <div>
            {/* <CompareSection videoToShow={video1}/> */}
        </div>

    )

}

export default page