import { models } from '../resources/models'
function MyButton(){
    function handleClick() {
        alert('Te amo vidinha que clica')
     }

    return (
        <button onClick = {handleClick}>
            Clique aqui vidinha
        </button>
    ) 
    
}

function Home() {
    const listModels = models.map(model => 
        <li key ={model.name}>
           Name: {model.name} . Category: {model.category} . Price: {model.price}
        </li>
    )

    return (
    <div>
        <h1>Teste Vercel</h1>
        <MyButton />
        <ul>{listModels}</ul>
    </div>
    )
}

export default Home