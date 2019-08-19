import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {
    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                itemList.forEach((e) => console.log(e));
                this.setState({itemList: itemList})
            });
    }

    renderItem(arr) {
        return arr.map(({id, name}) => {

            return (
                <li className="list-group-item"
                key={id} >
                    {name}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner/>;
        }
        const items = this.renderItem(itemList);
        return (
            <React.Fragment>
            <ul className="item-list list-group">
                {items}
            </ul>
            </React.Fragment>
        )
    }
}
