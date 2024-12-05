function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
       // Data is invalid
       return -1;
    }

    let hasWhiteSpace = transmission;
    if (transmission.indexOf(' ') > -1) {
        hasWhiteSpace = -1;
        transmission = transmission.trim();        
    }

    let parts = transmission.split("::");
    let rawData = parts[1];

    if (rawData[0] !== "<" || rawData[rawData.length] !== '>' || rawData.indexOf('>') < rawData.length || rawData.indexOf('<') > 0 || rawData.indexOf('<') === -1 || hasWhiteSpace === -1) {
        rawData = -1;
    }
    for (let i = 1; i < rawData.length -1; i++) {
        if(rawData[i] === '<' || rawData[i] === '>' || Number.isNaN(Number(rawData[i]))) {
            rawData = -1;
            break;           
        }
    }

    return {
       id: Number(parts[0]),
       rawData: rawData
    };
 }

 module.exports = processor;