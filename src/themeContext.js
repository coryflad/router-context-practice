import React from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state= {
        theme: 'light'
    }

    toggleTheme = (e) => {
        e.preventDefault()
        console.log('I was clicked')
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    
    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}