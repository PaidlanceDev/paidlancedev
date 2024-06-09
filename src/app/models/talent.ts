export interface Talent {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	picture: string;
	field: string;
	experience: string;
	rate: string;
	topSkills: TopSkills[];
	location: Location;
}

export interface TopSkills {
	skillName: string;
}

export interface Location {
	city: string;
	country: string;
}
