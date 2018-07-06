import number from "./isNumber";

export default function  display( nameBtn) {
    if (nameBtn !== ("÷") && nameBtn !== ("=") && nameBtn !== ("+/-") && nameBtn !== ( '-' ) && nameBtn !== ( 'x' ) && nameBtn !== ( '%' ) && nameBtn !== ( '+' )  ) {
        return  nameBtn;
    }
    else if (nameBtn !=='='){
        if ( nameBtn === 'x')
        {
            return '*';
        }
        if ( nameBtn === '+')
        {
            return '+';
        }
        if ( nameBtn === '-')
        {
            return '-';
        }
        if ( nameBtn === '÷')
        {
            return '/';
        }
        if ( nameBtn === '%')
        {
            return '%';
        }

        return '';
    }
    else if ( nameBtn === '=') {
        nameBtn = '13'
        return nameBtn;
    }

}

