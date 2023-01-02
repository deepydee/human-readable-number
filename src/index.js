module.exports = function toReadable (number) {
    let hrn = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      };
    
      let res = "";
      
      if (number < 20) {
        res = hrn[number];
      } else if ((number > 19 && number < 100) && number % 10 === 0) {
        res = hrn[number];
      } else {
        let numbers = String(number).split('');
        let len = numbers.length;

            switch (len) {
                case 2:
                    res += hrn[numbers[0] * 10] + ' ' + hrn[numbers[1]];
                    break;
                case 3:
                    res += hrn[numbers[0]] + ' hundred ';
                    if (number % 100 === 0) break;
                    if (number % 10 === 0) {
                        res += hrn[numbers[1] * 10];
                        break;
                    }  else if (numbers[1] == 0) {
                        res += hrn[numbers[2]];
                    }  else if (+(numbers[1]+numbers[2]) > 10 && +(numbers[1]+numbers[2]) < 20) {
                        res += hrn[+(numbers[1]+numbers[2])];
                    }  else {
                        res += hrn[numbers[1] * 10] + ' ' + hrn[numbers[2]];
                    }
                    break;
            }
    
      }
      return res.trim();
}
