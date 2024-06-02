import { models } from '../resources/models'
function MyButton(){
    return (
        <button>
            Botão
        </button>
    ) 
    
}

function Home() {
    console.log('models: ')
    console.log(models)
    const listModels = models.map(model => 
        <li key ={model.name}>
           Name: {model.name} . Category: {model.category} . Price: {model.price}
        </li>
    )

    console.log(listModels)
    return (
    <div>
        <h1>Teste Vercel</h1>
        <MyButton />
        <ul>{listModels}</ul>
    </div>
    )
}

export default Home