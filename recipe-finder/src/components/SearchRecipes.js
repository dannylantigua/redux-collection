import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Form.Label>Ingredients</Form.Label>
                    {' '}
                    <FormControl type="text" placeholder="Pesto, Tomatoes" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Form.Label>Dish</Form.Label>
                    {' '}
                    <FormControl type="text" placeholder="Pasta" />
                </FormGroup>
                {' '}
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipes;