import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search(){
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?${ingredients}&q=${dish}`;
        console.log('state', this.state, 'url', url);

        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => console.log('recipes', json))
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Form.Label>Ingredients</Form.Label>
                    {' '}
                    <FormControl 
                    type="text" placeholder="Pesto, Tomatoes" 
                    onChange={event => this.setState({ ingredients: event.target.value })}/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Form.Label>Dish</Form.Label>
                    {' '}
                    <FormControl 
                    type="text" placeholder="Pasta" 
                    onChange={event => this.setState({ dish: event.target.value })}/>
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipes;