function esBisiesto(anio){

  if( !(anio%400)) return true;
  else if( !(anio%400) && anio%100 ) return true;
  else if( !(anio%4) && anio%100 ) return true;

  return false;
}

export default esBisiesto;