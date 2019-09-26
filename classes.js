class route{

	constructor(origin, dest, points, ship){
		this._origin = origin;
		this._dest = dest;
		this._points = points;
		this._ship = ship;
	}

	get origin() {return this._origin;}
	get dest() {return this._dest;}
	get points() {return this._points;}
	get ship() {return this._ship;}

}

class ship{

	constructor(name, range, costPerUnit, size, userCreated){
		this._name = name;
		this._range = range;
		this._costPerUnit = costPerUnit;
		this._size = size;
		this._userCreated = userCreated;
	}

	get name() {return this._name;}
	get range() {return this._range;}
	get costPerUnit() {return this._costPerUnit;}
	get size() {return this._size;}
	get userCreated() {return this._userCreated;}
}

class port{

	constructor(country, name, long, lat, size, userCreated){
		this._country = country;
		this._name = name;
		this._long = long;
		this._lat = lat;
		this._size = size;
		this._userCreated = userCreated;
	}

	get country() {return this._country;}
	get name() {return this._name;}
	get long() {return this._long;}
	get lat() {return this._lat;}
	get size() {return this._size;}
	get userCreated() {return this._userCreated;}

}

class waypoint{

	constructor(lat,long){
		this._lat = lat;
		this._long = long;
	}

	get lat() {return this._lat;}
	get long() {return this._long;}
}
