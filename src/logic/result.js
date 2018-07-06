
export  function  resultCalc( nameBtn) {
    if (nameBtn !== ("÷") && nameBtn !== ("=") && nameBtn !== ("+/-") && nameBtn !== ( '-' ) && nameBtn !== ( 'x' ) && nameBtn !== ( '%' ) && nameBtn !== ( '+' )  ) {
        return  nameBtn;
    }
    else if (nameBtn !=='=') {
        if (nameBtn === 'x') {
            return '*';
        }
        if (nameBtn === '+') {
            return '+';
        }
        if (nameBtn === '-') {
            return '-';
        }
        if (nameBtn === '÷') {
            return '÷';
        }

        return '';
    }

}

