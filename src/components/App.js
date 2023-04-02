import React from "react"
import Card from "./Card"
const App = () => {
    return <div className="container">
        <h2>my contacts</h2>
        <Card
            name="Dorcas"
            img="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="food-image"
            tel="07041068234"
            email="dorcasibrahim667@gmail.com"
        />
          <Card
            name="Kehinde"
            img="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-760x580.jpg?ext=.jpg" alt="food-image"
            tel="+2347088544687"
            email ="joel-olagrace@gmail.com"
        />
          <Card
            name="Eniola"
            img="https://www.nzherald.co.nz/resizer/0dOMZCd2IIftAn93zh2n11nwsaU=/640x0/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/IJPZ6LM2IML3HWPXEM56SHL2ZY.jpg" alt="food-image"
            tel="+243 788662002"
            email ="Ezekikelibraim@gmail.com"
        />

        </div>
        
     
}
export default App