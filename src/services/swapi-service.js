export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} responce code: ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResources(`/people/`);
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResources(`/people/${id}`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        console.log('get all planets');
        const res = await this.getResources(`/planets/`);
        console.log(res);
        const planets = res.results.map((e) => this._transformPlanet(e));
        console.log(planets);
        return planets;
    };

    async getPlanet(id) {
        const planet = await this.getResources(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResources(`/starships/`);
        return res.results.map((e) => this._transformStarShip(e));
    };

    async getStarship(id) {
        const starship = await this.getResources(`/starships/${id}`);
        return this._transformStarShip(starship);
    }

    _getIdFromUrl(item) {
        const regexp = /\/([0-9]+)\//;
        return item.url.match(regexp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._getIdFromUrl(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._getIdFromUrl(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    }

    _transformStarShip(starship) {
        console.log(starship);
        return {
            id: this._getIdFromUrl(starship),
            name: starship.name
        };
    }
}