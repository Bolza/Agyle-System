function Library() {

	this.getWeapon = function(type) {
		var wep;
		switch(type) {
			case 'dagger':
				wep = {dmg:2, acc:5, def:0, crit:1, rate:1}; break;
			case 'sabre':				
				wep = {dmg:5, acc:3, def:2, crit:1, rate:1}; break;
			case 'mace':				
				wep = {dmg:15, acc:1, def:1, crit:1, rate:1}; break;
			case 'warhammer':				
				wep = {dmg:20, acc:0, def:1, crit:1, rate:1}; break;
			case 'longsword':
			default:	
				wep = {dmg:10, acc:2, def:2, crit:1, rate:2}; break;
		}
		return wep;
	}
	this.getArmor = function(type) {
		var armor;
		switch(type) {
			case 'Leather':
				armor = {abs: 4}; break;
			case 'Ring Mail':
				armor = {abs: 6}; break;
			case 'Scale Mail':
				armor = {abs: 8}; break;
			case 'Banded Mail':
				armor = {abs: 10}; break;
			case 'Full Plate': 
				armor = {abs: 12}; break;
		}
		return armor;
	}


}