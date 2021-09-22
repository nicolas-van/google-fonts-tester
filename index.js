
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const gfontsApiKey = "AIzaSyBHAf_sglwe_9KxdQjKJWCUiuE97CJB9ww"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            selected: undefined,
            previewText: 'Type your text'
        }
    }

    async componentDidMount () {
        await this.loadFonts()
    }

    async loadFonts () {
        const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${gfontsApiKey}`)
        const items = res.data.items
        this.setState({
            items,
            selected: this.state.selected in items ? this.state.selected : 0
        })
    }

    render() {
        const font = this.state.items[this.state.selected]
        const fontName = font ? font.family.replace(/ /g, '+') : null
        const fontUrl = fontName ? `https://fonts.googleapis.com/css?family=${fontName}` : null
        
        const options = this.state.items.map((el, i) => {
            return (
                <option key={i} value={i}>{el.family}</option>
            )
        })
        const text = this.state.previewText.split('\n').map((el, i) => {
            return (
                <p key={i}>{el}</p>
            )
        })
        return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>Google Fonts Tester</h1>
                    <p className="text-muted">Choose a font, type and text and see the result.</p>
                    <p>
                        <select className="form-control" value={this.state.selected} onChange={(e) => {
                            this.setState({selected: Number.parseInt(e.target.value)})
                        }}>
                            {options}
                        </select>
                    </p>
                    <p>
                        <textarea className="form-control" rows="10" value={this.state.previewText} onChange={(e) => {
                            this.setState({ previewText: e.target.value })
                        }}>
                        </textarea>
                    </p>
                    
                    {fontUrl ? <React.Fragment>
                    <link href={fontUrl} rel="stylesheet"></link>
                    <div className="card">
                        <div className="card-body" style={{fontFamily: `'${fontName}'`, fontSize: '32px'}}>
                            {text}
                        </div>
                    </div>
                    </React.Fragment>:
                    null}
                </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
