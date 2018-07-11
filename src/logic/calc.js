

export  function  returnNamebtn(name) {

    switch (name) {
        case '=':

            return ;
        case '+/-':

            return (-1);
        case 'AC':

            return '';
        case '.':

            return (0.1);
        default:
            return name;
    }
}

export function isOperator(nameBtn) {

    if (nameBtn === ("÷") || nameBtn === ("=") || nameBtn === ("+/-") || nameBtn === ( '-' ) || nameBtn === ( 'x' ) || nameBtn === ( '*' ) || nameBtn === ( '%' ) || nameBtn === ( '+' )  ) {
        return  true;
    }
    return false;
}

