import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";

import './app.css';

export default class App extends Component {
    swapiService = new SwapiService();

    onPersonSelected2(id) {
        console.log('selected id: ', id);
    }

     render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={() => this.onPersonSelected2()}
                            getData={this.swapiService.getAllStarships}
                        />
                    </div>
                </div>
            </div>
        );
    }
};
