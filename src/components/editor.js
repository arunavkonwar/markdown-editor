import React, { Component } from 'react';
import marked from 'marked';
import '../App.css'

class Editor extends Component {
    state = {
        content : ''
    }

    onChange = (e) => this.setState({content: e.target.value})

    convertToMarkdown = (e) => {
        let md = marked(this.state.content);
        return {__html : md};
      }

    render() {
        return (
            <div>
                <h1>Markdown Editor</h1>
            <div className='container'>       
                <div className='screen'>
                <h4>Editor</h4>
                <textarea id='editor'
                value={this.state.input} 
                onChange={this.onChange}/>
                </div>

                <div className='screen'>
                <h4>Preview</h4>
                <div id='preview' dangerouslySetInnerHTML={this.convertToMarkdown()}></div>
                </div>
            </div>
            <h5><a href="https://twitter.com/arunavkonwar">Arunav Konwar</a></h5>
            </div>
        )
      }
}


export default Editor;


