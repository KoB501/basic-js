const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    const alfabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    message = this.reverse
      ? message.toUpperCase().split('')
      : message.split('').reverse().join('').toUpperCase().split('')
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length + 1)
      .toUpperCase()
      .split('')

    let resultStr = []
    let counter = 0

    message.forEach((messageSimbol, i) => {
      let messageSimbolCode = messageSimbol.charCodeAt()
      if (messageSimbolCode >= 65 && messageSimbolCode <= 90) {
        let keySimbolCode = key[counter].charCodeAt()
        let resultSimbolCode = (messageSimbolCode + keySimbolCode) % 26
        resultStr.push(alfabetArr[resultSimbolCode])
        counter++
      } else {
        resultStr.push(messageSimbol)
      }
    })
    return resultStr.join('')
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    const alfabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    encryptedMessage = this.reverse
      ? encryptedMessage.toUpperCase().split('')
      : encryptedMessage.split('').reverse().join('').toUpperCase().split('')
    key = key
      .repeat(Math.ceil(encryptedMessage.length / key.length))
      .slice(0, encryptedMessage.length + 1)
      .toUpperCase()
      .split('')

    let resultStr = []
    let counter = 0

    encryptedMessage.forEach((messageSimbol, i) => {
      let messageSimbolCode = messageSimbol.charCodeAt()
      if (messageSimbolCode >= 65 && messageSimbolCode <= 90) {
        let keySimbolCode = key[counter].charCodeAt()
        let resultSimbolCode =
          messageSimbolCode - keySimbolCode < 0
            ? 26 + (messageSimbolCode - keySimbolCode)
            : messageSimbolCode - keySimbolCode
        resultStr.push(alfabetArr[resultSimbolCode])
        counter++
      } else {
        resultStr.push(messageSimbol)
      }
    })
    return resultStr.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
