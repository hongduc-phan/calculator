

export  function  calC(result, checkIsNumber) {

    if (checkIsNumber ) {
        let resultFloat = eval(result);
        let temp = resultFloat.toString()
        return temp;
    }
}

export function isOperator(nameBtn) {

    if (nameBtn === ("÷") || nameBtn === ("=") || nameBtn === ("+/-") || nameBtn === ( '-' ) || nameBtn === ( 'x' ) || nameBtn === ( '*' ) || nameBtn === ( '%' ) || nameBtn === ( '+' )  ) {
        return  true;
    }
    return false;
}

