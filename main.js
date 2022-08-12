const crypto = require("crypto");
const axios = require("axios");
/**
 * your private parmeter
 */
const _AK = '204086098';
const _SK = 'aCTKxK6YXskObZp95ett0tkQY1gPqnTq';
const _APPCODE = 'eb9275cbcc984114895b34efdec9a3de';
/**
 *  生成签名串
 */
function generateSignatureStr(
    HTTPMethod='POST',
    ){ 
    return `
    ${HTTPMethod}\n
    \n
    \n
    application/json\n
    \n
    x-ca-key:${_AK}\n
    \n
    `;
} 
const header = {
    'x-ca-key':_AK,
    // 'x-ca-signature-method':'HmacSHA256'
    'X-Ca-Signature-Headers':'x-ca-key',
    'X-Ca-Signature':generateSignatureStr()
}
console.log('94twp9VC+sX1aCgfCX07ctlmsYZp+Xl96t7FzcAzay0='.length)
console.log('vWwmkzkevEplkdzRkdkckE9ejykmkzfOkdfUjWjOwdvUkEqRjyaVjdjV'.length)
const signature = Buffer.from(crypto.createHmac('SHA256', 'cQ9k9ElFXKZoB3UD27weGv:APA91bF565E3wJ2o9BQN8bCOSDx76PnuQIP8j-SMqVJfoBQ7N6AHzN2Rh0kLku365S_lv-n1ZELQCZmIkPxTrNzyZ2hkb0ON89Ip8I3nCT059SITIczmIBDhPgOpVd4rSR68IeWGZro_').update('1660102032').digest()).toString('base64');
console.log(signature);
