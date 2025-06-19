- Header
    - Logo
    - LanguageSelector
    - Loggin

-BlockText
    -Titulo
    -Párrafo
    -Formulario Subs ***
        -Input
        -Button

-Main
    - Section popCorn (Todo lo que te encanta de Netflix por solo 6,99 €.)
    - Section Tendencias (carrusel)
    - Section motivos (cards)
    
-Aside 
    - Section FAQ
    -Formulario Subs ***
        -Input
        -Button
    
-Footer
    - Listado


const movies = [
        {
            title: "adaw",
            cover: "jpg"
        },
        {
            title: "aaaa",
            cover: "jpg"
        }
    ];

const getItem = (array)=>array.map({item,index}=>{
    const {title, cover} = item;
    return <li key={index}> <Card data={{title, cover, position:index+1}} /> </li>
});

const tendencias = ()=>{
    const Items = getItems(movies);

    return <ul>
        {Items}
    </ul>

}

    
