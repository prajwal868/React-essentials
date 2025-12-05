import { useAvengerHooks } from "./spec";

export function Apps(){
    const pow = useAvengerHooks();
    const pow1 =useAvengerHooks();

    return(<>
    <h1>Count:{pow.count}</h1>
    <h1>Count:{pow1.count}</h1>
    <button type="button" onClick={pow.inc}>increase by 10</button>
    <button type="button" onClick={pow.inc}>increase by 10</button>
    
    <button type="button" onClick={pow.dec}>decrease</button>
    <button type="button" onClick={pow.res}>reset</button>

    <button type="button" onClick={pow1.dec}>decrease</button>
    <button type="button" onClick={pow1.res}>reset</button>

    </>);
}   