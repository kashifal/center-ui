  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
  import {CopyToClipboard} from 'react-copy-to-clipboard';
  import { Fragment, useEffect, useState } from 'react';
  const Code = ({code,language}) => {
    const [copy,setCopy] = useState({
      value: '',
      copied: false,
      show:false

    }) 

    
  
  function goOut(){
    setTimeout(() => {
      setCopy({value:code,copied: true,show:false})
    }, 1000);
  }
    console.log(copy);
    

    return (
    <Fragment>
    {copy.show && <p className='w-full bg-green-200 text-green-500 font-medium h-16 '>
        copied
      </p>

    
      } 
      <div className="bg-gray-800">
        <SyntaxHighlighter language={language} style={dracula}>
        
        {code}
      </SyntaxHighlighter>
      </div>
      <CopyToClipboard text={code}
            onCopy={() => setCopy({value:code,copied: true,show:true})}>
            <button onClick={goOut}>copy code</button>
          </CopyToClipboard>
    </Fragment>
    );
  };

  export default Code;