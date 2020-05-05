import * as os from 'os';

export class UtilService {
    constructor() {
      console.log('Common Util!');
    }

    public getOperatingSystem(): string {
        return os.platform();
     }

   public getReversedString(inputStr: string): string {
      return inputStr.split('').reverse().join('');
   }
}
