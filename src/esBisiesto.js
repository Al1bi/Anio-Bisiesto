function esBisiesto(anio){

  if( !(anio%400) ) return true;
  if(anio == 4) return true;

  return false;
}

export default esBisiesto;