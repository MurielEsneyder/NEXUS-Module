/**
 * Clase con funciones utilitarias
 */
export class Utils {

  /**
   * Función para transformar con fecha en formato cadena y convertirla a tipo Date
   * @param fecha cadena con la fecha en formato dd/mm/yyyy, no se puede otro formato.
   * @return fecha en formato Date
   */
  public static stringToDate2(dateString: string): Date {
    let newData = dateString.replace(/(\d+[/])(\d+[/])/, '$2$1');
    return new Date(newData);
  }

  /**
   * Función para calcular en años la diferencia entre dos fechas
   * @param fecha Fecha de inicio del periodo
   * @param referencia Fecha final del periodo (sysdate por defecto)
   * @returns Diferencia en años
   */
  public static calcularAños(fecha: number, referencia: number = new Date().getTime()): number {
    try {
      let temp = (referencia - fecha) / 31536000000;
      return (temp > 0) ? temp : 0;
    }
    catch {
      return 0;
    }
  }


  /**
   * Guarda objeto en localstorage
   * @param key clave del objeto
   * @param object Objeto a guardar
   */
  public static saveObjectToLS(key: string, object: any): void {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(object));
  }

  /**
   * Transforma cadena base64 en byte array
   * @param b64Str cadena base64
   */
  public static b64toByteArr(b64Str: string): Uint8Array {
    let bstr = atob(b64Str);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    for (var i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }
    return u8arr;
  }

  /**
   * Funcion para calcular la diferencia de dias entre dos fechas
   * @param fechaInicio Date
   * @param fechaFin Date
   */
  public static diffDaysOfDates(fechaInicio: Date, fechaFin: Date): number {
    let diffDays = (fechaInicio.getTime() - fechaFin.getTime()) / 86400000;
    return diffDays;
  }

  public static diffMonthsBetweenDates = (fechaInicio: Date, fechaFin: Date) => {
    var months;
    months = (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12;
    months -= fechaInicio.getMonth();
    months += fechaFin.getMonth();
    return months <= 0 ? 0 : months;
  };

  public static getFileType(e: any): string {
    let fileType: string = "";
    if (e == 'pdf' || e == 'csv') {
      fileType = `application/${e}`;
    }
    else if (e == 'jpeg' || e == 'jpg' || e == 'png') {
      fileType = `image/${e}`;
    }
    else if (e == 'txt') {
      fileType = 'text/plain';
    }

    else if (e == 'ppt' || e == 'pot' || e == 'pps' || e == 'ppa') {
      fileType = 'application/vnd.ms-powerpoint';
    }
    else if (e == 'pptx') {
      fileType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    }
    else if (e == 'doc' || e == 'dot') {
      fileType = 'application/msword';
    }
    else if (e == 'docx') {
      fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }
    else if (e == 'xls' || e == 'xlt' || e == 'xla') {
      fileType = 'application/vnd.ms-excel';
    }
    else if (e == 'xlsx') {
      fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    }
    return fileType;

  }

  public static b64ToUint6(nChr: any) {

    return nChr > 64 && nChr < 91 ?
      nChr - 65
      : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
          nChr + 4
          : nChr === 43 ?
            62
            : nChr === 47 ?
              63
              :
              0;

  }

  public static base64DecToArr(sBase64: any, nBlocksSize: any) {

    var
      sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
      nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);

    for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
      nMod4 = nInIdx & 3;
      nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
      if (nMod4 === 3 || nInLen - nInIdx === 1) {
        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
          taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
        }
        nUint24 = 0;

      }
    }

    return taBytes;
  }

  /* Codificación de array en una cadena Base64 */

  public static uint6ToB64(nUint6: any) {

    return nUint6 < 26 ?
      nUint6 + 65
      : nUint6 < 52 ?
        nUint6 + 71
        : nUint6 < 62 ?
          nUint6 - 4
          : nUint6 === 62 ?
            43
            : nUint6 === 63 ?
              47
              :
              65;

  }

  public static base64EncArr(aBytes: any) {

    var nMod3 = 2, sB64Enc = "";

    for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
      nMod3 = nIdx % 3;
      if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
      nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
      if (nMod3 === 2 || aBytes.length - nIdx === 1) {
        sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
        nUint24 = 0;
      }
    }

    return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

  }

  /* De array UTF-8 a DOMString y viceversa */

  public static UTF8ArrToStr(aBytes: any) {

    var sView = "";

    for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
      nPart = aBytes[nIdx];
      sView += String.fromCharCode(
        nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
          : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
            (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
            : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
              (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
              : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                  (nPart - 192 << 6) + aBytes[++nIdx] - 128
                  : /* nPart < 127 ? */ /* one byte */
                  nPart
      );
    }

    return sView;

  }

  public static strToUTF8Arr(sDOMStr: any) {

    var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

    /* mapeando... */

    for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
      nChr = sDOMStr.charCodeAt(nMapIdx);
      nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
    }

    aBytes = new Uint8Array(nArrLen);

    /* transcripción... */

    for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
      nChr = sDOMStr.charCodeAt(nChrIdx);
      if (nChr < 128) {
        /* un byte */
        aBytes[nIdx++] = nChr;
      } else if (nChr < 0x800) {
        /* dos bytes */
        aBytes[nIdx++] = 192 + (nChr >>> 6);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 0x10000) {
        /* tres bytes */
        aBytes[nIdx++] = 224 + (nChr >>> 12);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 0x200000) {
        /* cuatro bytes */
        aBytes[nIdx++] = 240 + (nChr >>> 18);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else if (nChr < 0x4000000) {
        /* cinco bytes */
        aBytes[nIdx++] = 248 + (nChr >>> 24);
        aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      } else /* if (nChr <= 0x7fffffff) */ {
        /* seis bytes */
        aBytes[nIdx++] = 252 + (nChr >>> 30);
        aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
        aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
        aBytes[nIdx++] = 128 + (nChr & 63);
      }
    }

    return aBytes;

  }


}