import Child from "./child";

export default function Parent(){
    let name = "Pratham";
    let age = 20;

    return (
        <>
            <Child name={name} age={age}/>
        </>
    )
}