function PG(initObj) {
	this.library = new Library();
 	for (var c in initObj) {
 		this[c] = initObj[c];
 	}
 	

	this.weapon = function(type) {
		this.wep = this.library.getWeapon(type);
		this.restat();
		return this.wep;
	}

	this.armor = function(defType) {
		if (!this.abs)	this.abs = 0;
		this.restat();
		//Math.floor((this.con+this.str)/2)-5;
/*
		if (!defType) {
			if (this.str-this.ref >= 2) 		defType = 'shieldStr';
			else if (this.con-this.ref >= 2)   	defType = 'shieldCon';
			else if (this.coo-this.ref >= 2)    defType = 'parry';
			else 								defType = 'dodge';
		}
		this.defType = defType;
		switch (this.defType) {
			case 'shieldStr':  this.DEFPool += 2; break;
			case 'shieldCon':  this.abs += 2 ;    break;
			case 'parry':  	   this.DEFPool += 10 - this.str; break;
		}
*/

	}



	this.restat = function() {
		if (!this.skl) this.skl = 0;//rand(5,7); ﻿  
	﻿  ﻿  if (!this.foc) this.foc = 0;//rand(2,3);  ﻿  
	﻿  ﻿  if (!this.pow) this.pow = 0;//rand(2,5);
		if (!this.wep) this.wep = weapon();
		this.ATKPool = this.coo + this.skl + this.foc + this.wep.acc;
		this.DEFPool = this.ref + this.skl + this.foc + this.wep.def;
		this.hp = this.con * 20;
		this.dmg = this.wep.dmg + this.str;
		this.rate = this.wep.rate;	﻿
	}

	this.attack = function() {
		this.stu = 0;
		this.dice = d10();
		//this.ATKPool -= this.rate-1; //rate?
		var result = this.ATKPool + this.pow + this.dice + this.stu;
		return result;
	}
	this.defend = function() {
		this.stu = 0;
		this.dice = d10();
		//this.DEFPool -= this.rate-1;
		var result = this.DEFPool + this.pow + this.dice + this.stu;
		return result;
	}

	this.weapon();
	this.armor();
	this.restat();


}