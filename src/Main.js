// Main.js

import React from 'react';
import marked from 'marked';
// In order to use the marked capability
// I had to install marked from this
// project's directory using:
// "npm install marked"
import Editor from './Editor';
import Previewer from './Previewer';

const defaultInput = `# Hi h1 tag.

## Hi h2 tag.

Does anyone want to see some **bold** text?

Feel free to check out my [Personal Portfolio Page](https://terry-sydaus.github.io/FreeCodeCampStuff/Personal-Portfolio-Page).

In order to create this Markdown Previewer App, I had to use Marked.js which in turn required me to install this markdown compiler from the command line with the \`npm install marker\` command.

And of course this app has required a whole lot of javascript and JSX, some of which can be seen below:
\`\`\`javascript
const Previewer = (props) => (
  <div
    style={style}
    id={props.id}
    dangerouslySetInnerHTML={props.htmlObject}
  />
  );
\`\`\`

React is so cool and the above code shows some of the features of this framework, such as:

1. Functional components
1. The use of props
 1. Special interest in the \`dangerouslySetInnerHTML\` prop. 

And just in case any of you didn't quite get how much I love react, let me take the opportunity to remind you all:

> I love React very much!

And how do you recognise React when you see it? What better way than to identify it than through the *React* icon, shown below: 
![React Logo](https://i.ibb.co/b5KxSB5/React-logo.png)
`;


class Main extends React.Component {
  state = {
    input: defaultInput
    //input: temp 
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  convertMarkdownToHTML() {
    let markup = marked(this.state.input,
      {sanitize: true, breaks: true});
    console.log(markup);
    return { __html: markup };
  }

  componentDidMount() {
    this.convertMarkdownToHTML();
  }

  render() {
    return (
      <div className='main'>
	<div className='c1'>
	  <h5>Enter markdown text in text box below</h5>
	  <Editor
	    id='editor'
	    onTxtChange={this.handleChange}
	    value={this.state.input}
	  />
	</div>
	<div className='c2'>
	  <h5>Preview of markdown when marked up to HTML</h5>
	  <Previewer
	    id='preview'
	    htmlObject={this.convertMarkdownToHTML()}
	  />
	</div>
      </div>
    )
  }
}

export default Main;
