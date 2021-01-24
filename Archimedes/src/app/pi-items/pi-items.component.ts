import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AppState } from 'src/store/models/app-model';
import { PiItem } from 'src/store/models/pi-item.model';
import { AddItemAction, DeleteItemAction } from 'src/store/actions/piCaltulator.actions';

@Component({
  selector: 'app-pi-items',
  templateUrl: './pi-items.component.html',
  styleUrls: ['./pi-items.component.scss']
})
export class PiItemsComponent implements OnInit {

  piItems$: Observable<Array<PiItem>>;
  newPiItem: PiItem = {
    id: '',
    value: '',
    runTime: '',
    digit: 0
  };
  mess = '';
  aPI = [];
  aArctan = [];
  aAngle = [];
  aDivK = [];
  Base = Math.pow(10, 11);
  a = Number.MAX_VALUE;
  MaxDiv = Math.floor(Math.sqrt(this.a));
  cellSize = Math.floor(Math.log(this.Base) / Math.LN10);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.piItems$ = this.store.select(s => s.piItems);
  }
  makeArray(n, aX, Integer) {
    let i = 0;
    for (i = 1; i < n; i++) {
      aX[i] = null;
    }
    aX[0] = Integer;
  }
  isEmpty(aX) {
    let empty = true;
    for (let i = 0; i < aX.length; i++) {
      if (aX[i]) {
        empty = false;
        break;
      }
    }
    return empty;
  }
  Add(n, aX, aY) {
    let carry = 0;

    for (let i = n - 1; i >= 0; i--) {
      aX[i] += Number(aY[i]) + Number(carry);
      if (aX[i] < this.Base) carry = 0;
      else {
        carry = 1;
        aX[i] = Number(aX[i]) - Number(this.Base);
      }
    }
  }
  Sub(n, aX, aY) {
    for (let i = n - 1; i >= 0; i--) {
      aX[i] -= aY[i];

      if (aX[i] < 0) {
        if (i > 0) {
          aX[i] += this.Base;

          aX[i - 1]--;
        }
      }
    }
  }
  Mul(n, aX, iMult) {
    let carry = 0;

    for (let i = n - 1; i >= 0; i--) {
      let prod = aX[i] * iMult;
      prod += carry;
      if (prod >= this.Base) {
        carry = Math.floor(prod / this.Base);
        prod -= carry * this.Base;
      } else carry = 0;

      aX[i] = prod;
    }
  }
  Div(n, aX, iDiv, aY) {
    let carry = 0;

    for (let i = 0; i < n; i++) {
      //add any previous carry
      const currVal = Number(aX[i]) + Number(carry * this.Base);

      //divide
      const theDiv = Math.floor(currVal / iDiv);

      //find next carry
      carry = currVal - theDiv * iDiv;

      //put the result of division in the current slot
      aY[i] = theDiv;
    }
  }
  calcPI(numDec) {
    var ans = '';
    const t1 = new Date();
    numDec = Number(numDec);

    const iAng = new Array(10);
    const coeff = new Array(10);
    const arrayLength = Math.ceil(1 + numDec / this.cellSize);

    this.aPI = new Array(arrayLength);
    this.aArctan = new Array(arrayLength);
    this.aAngle = new Array(arrayLength);
    this.aDivK = new Array(arrayLength);

    //Pi/4 = 4*arctan(1/5)-arctan(1/239)
    //coeff is an array of the coefficients
    //the last item is 0!

    coeff[0] = 4;
    coeff[1] = -1;
    coeff[2] = 0;

    //iAng holds the angles, 5 for 1/5, etc

    iAng[0] = 5;
    iAng[1] = 239;
    iAng[2] = 0;

    //Machin: Pi/4 = 4*arctan(1/5)-arctan(1/239)
    this.makeArray(arrayLength, this.aPI, 0);
    this.makeArray(arrayLength, this.aAngle, 0);
    this.makeArray(arrayLength, this.aDivK, 0);

    for (var i = 0; coeff[i] != 0; i++) {
      this.arctan(iAng[i], arrayLength, this.aArctan);

      //multiply by coefficients of arctan
      this.Mul(arrayLength, this.aArctan, Math.abs(coeff[i]));

      //mess+="mi="+coeff[i]+"<br>";

      if (coeff[i] > 0)
        this.Add(arrayLength, this.aPI, this.aArctan);
      else
        this.Sub(arrayLength, this.aPI, this.aArctan);

      //mess+="api="+aPI+"<br>";
    }
    //we have calculated pi/4, so need to finally multiply

    this.Mul(arrayLength, this.aPI, 4);

    //we have now calculated PI, and need to format the answer

    //to print it out
    let sPI = '';
    let tempPI = '';
    //put the figures in the array into the string tempPI

    for (i = 0; i < this.aPI.length; i++) {
      this.aPI[i] = String(this.aPI[i]);

      //ensure there are enough digits in each cell

      //if not, pad with leading zeros

      if (this.aPI[i].length < this.cellSize && i != 0) {
        while (this.aPI[i].length < this.cellSize) this.aPI[i] = '0' + this.aPI[i];
      }

      tempPI += this.aPI[i];
    }
    let addcount = '', thespace = '';
    for (i = 0; i <= numDec; i++) {
      //put the 3 on a different line, and add a decimal point

      if (i == 0) sPI += tempPI.charAt(i) + '.';
      else {
        //split the long line up into manageable rows

        addcount = ' (' + i + ')';
        thespace = ' ';

        if (i % 50 == 0 && i != 0)
          sPI += tempPI.charAt(i) + addcount;
        else if (i % 5 == 0) sPI += tempPI.charAt(i) + thespace;
        else sPI += tempPI.charAt(i);
      } //i not zero
    }

    //now put the print-out together

    //print our pi
    this.newPiItem.value = 'PI (' + numDec + ')=' + sPI;
    //Window's calculator Pi (for confirmation);
    ans += 'Win PI=<br>3.1415926535897932384626433832795<br>';
    let t2 = new Date();
    let timeTaken = (t2.getTime() - t1.getTime()) / 1000;
    this.newPiItem.runTime = 'Run time is: ' + timeTaken + ' seconds';
    console.log(ans);
  }
  arctan(iAng, n, aX) {
    let iAng_squared = iAng * iAng;
    let k = 3; //k is the coefficient in the series 2n-1, 3,5..
    let sign = 0;

    this.makeArray(n, aX, 0); //aX is aArctan

    this.makeArray(n, this.aAngle, 1);

    this.Div(n, this.aAngle, iAng, this.aAngle); //aAngle = 1/iAng, eg 1/5

    this.Add(n, aX, this.aAngle); // aX = aAngle or long angle

    while (!this.isEmpty(this.aAngle)) {
      this.Div(n, this.aAngle, iAng_squared, this.aAngle); //aAngle=aAngle/iAng_squared, iAng_squared is iAng*iAng

      //mess+="iAng="+iAng+"; aAngle="+aAngle+"<br>";

      this.Div(n, this.aAngle, k, this.aDivK); /* aDivK = aAngle/k */

      if (sign) this.Add(n, aX, this.aDivK);
      /* aX = aX+aDivK */ else this.Sub(n, aX, this.aDivK); /* aX = aX-aDivK */

      k += 2;

      sign = 1 - sign;
    }

    // this.mess += 'aArctan=' + this.Arctan + '<br>';
  }
  calculatePiItem() {
    this.newPiItem.id = uuid();
    this.calcPI(this.newPiItem.digit)
    this.store.dispatch(new AddItemAction(this.newPiItem));
    this.newPiItem = { id: '', value: '', digit: 0, runTime: '' };
  }
  deletePiItem(piItem: PiItem) {
    this.store.dispatch(new DeleteItemAction(piItem));
  }
}
