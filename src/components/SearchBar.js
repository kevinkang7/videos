import React from 'react';

class SearchBar extends React.Component {

    state = {term: 'welcome'}

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }
    //onFormSubmit is called to store users' intput 
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }

    render () {
        
        return (<div className= "search bar ui segment">
                    <form onSubmit = {this.onFormSubmit} className="ui form">
                        <div className= "field">
                            <label>Video Search</label>
                                <input tpye="text" 
                                value={this.state.term}
                                onChange={this.onInputChange}></input>
                        </div>
                    </form>
                </div>) 
    }
}

export default SearchBar;
