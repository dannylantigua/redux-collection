import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    render(){
        return (
            <div>
                <Form inline>
                    <FormControl type="date">
                    </FormControl>
                </Form>
            </div>
        )
    }
}

export default App;