const Challenge = () => {
const a = 13;
const b = 33;

const soma = () => {
    console.log(a+b)
}

return(
<div>
    <p>a = {a}, b = {b}</p>
    <button onClick={soma}>Clique para ver a soma!</button>
</div>
)};

export default Challenge;