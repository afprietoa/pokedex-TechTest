
export const getPokeName = async(name ='') => {


    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const res = await fetch(url);
    const data = await res.json();

    // if(name.length === 0){
    //     return [];
    // }
    // name = name.toLocaleLowerCase();

    return data
    // data.filter(art => art.name.toLocaleLowerCase().includes(name))

}