'use strict';


module.exports = class Container
{
    // just to make everything easier, I'll use javascript arrays and implement all higher level functions into it
    constructor(...args)
    {
        this.array = [];
        for(let arg of args)
        {
            this.array.push(arg);
        }
    }
    push(value)
    {
        this.array.push(value);
    }
    map(func)
    {
        // it creates a clone
        let newCon = new  Container();
        for(let value of this.array)
        {
            newCon.push(func(value));
        }
        return newCon;
    }

    reduce(func, start)
    {
        let a = 0;
        if(start != undefined)
        {   
            a = start;
        }
        for(let value of this.array)
        {
            a = func(a, value);
        }
        return a;
    }

    filter(func)
    {
        let newCon = new Container();
        for(let value of this.array)
        {
            if(func(value))
            {
                newCon.push(value);
            }
        }
        return newCon;
    }

}

