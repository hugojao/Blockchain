import { useEffect, useState } from 'react';
import {useRef} from 'react';
import './App.css';

import abi from './contracts/ABI.json';
import { ethers } from 'ethers';

const contractAddress = "0xF786878156D6d0964CA078D8EB3D7fC89D25d6C2";
var cleune;
var cledeux;
var lien;


function App() {


 

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

 function resultats(){ 

    var name = document.getElementById("fname").value;
    var message = document.getElementById("fmessage").value;
    var lien = document.getElementById("fimg").value;

    document.getElementById("modnom").innerHTML=name;
    document.getElementById("modmess").innerHTML=message;
    document.getElementById("modurl").innerHTML=lien;
}


  function copiercoller(){
    
      var range = document.createRange();
      range.selectNode(document.getElementById("jsontext"));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();// to deselect
  
  }

  const cleenvoyeur = useRef(null);
  const clereceveur = useRef(null);
  const lelien = useRef(null);

  function handleClick() {
    cleune = cleenvoyeur.current.value;
    cledeux = clereceveur.current.value;
    lien = lelien.current.value;

    console.log(cleune);
    console.log(cledeux);
    console.log(lien);
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.safeMint(cleune,cledeux,lien);

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log("Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}");

      } else {
        console.log("Ethereum object does not exist");
      }

    } catch (err) {
      console.log(err);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }



    useEffect(() => {
      checkWalletIsConnected();
    }, [])
  


  

  return (
    <div className='main-app'>
      <div class="snowflakes" aria-hidden="flase">  
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
        <div class="snowflake">
        ❅ 
        </div>
      </div>

      <div id="header">  
    <h1>HO HO HO</h1>
    <h2>C'est la fin de l'année... Les fêtes approchent et le Bitcoin est au plus bas. Vous n'avez plus aucun Ethere dans vos poches...</h2>
    <h2>Offrez des <b>NFT</b> pour NOEL! C'est a la mode et tout le monde pense que ca coute super cher</h2>
</div>


<div id="megaform" >  

<div id="form1" >  
    <h3>Etape 1 : Créez le NFT!</h3>

    <p>Donnez un nom à votre cadeau!</p> 
    <input type="text" id="fname" placeholder="Nom du cadeau"></input>

    <p>Quelle message voulez vous lui dire?</p>
    <input type="text" id="fmessage" placeholder="Message"></input>

    <p>Entrez l'URL de l'image que vous voulez offrire!</p>
    <input type="text" id="fimg" placeholder="Lien Image"></input>

    <br></br>
    <button type="button" id="mybutton" onClick={resultats}>Etape suivante!</button>
    <br></br>
</div>


<div id="form2"> 
<h3>Etape 2 : Emballez le NFT!</h3>



<div id="jsontext">
    <h4>{"{"}</h4>
    <h4>  "title": "Asset Metadata",</h4>   
    <h4>  "type": "object"  ,</h4> 
        <h4>  "properties": {"{"}</h4>
        <h4>    "name": {"{"}</h4>
            <h4>     "type": "string",</h4>          
            <h4>      "description": "<a id="modnom">Nom</a>"</h4>
        <h4>{   "}"},</h4>    
        <h4>    "description":{"{"}</h4>       
                <h4>      "type": "string",</h4>          
                <h4>      "description": "<a id="modmess">Message</a>"</h4>          
        <h4>{   "}"},</h4>
        <h4>    "image": {"{"}</h4>
                    <h4>      "type": "string",</h4>         
                    <h4>      "description": "<a id="modurl">URL</a>"</h4>     
            <h4>{   "}"}</h4>
            <h4>{ "}"}</h4>
            <h4>{"}"}</h4>
                  
</div>     
                  

    <button type="button" id="mybutton" onClick={copiercoller}>Copier le texte</button> 

   
    <p>Après avoir copié le texte, le coller sur la page JSON KEPPER et récuperer le lien</p>
   
    <form action="https://www.jsonkeeper.com" method="get" target="_blank">  
        <button type="submit">Aller sur Json keeper</button>
     </form>
    <br></br>

    </div >

  
    

    <div id="form3">

    <h3>Etape 3 : Offrez le NFT!</h3>

        <p>Quelle est le lien que vous avez obtenu?</p>
        <input ref={lelien} type="text" id="unlien" name="message" placeholder='Lien JSON KEEPER'/>


        <p>Quelle est votre clée?</p>
        <input ref={cleenvoyeur} type="text" id="cleenv" name="message" placeholder='Votre clée'/>

        <p>Quelle est la clé du destinataire?</p>
        <input ref={clereceveur} type="text" id="clere" name="message" placeholder='Clée destinataire'/>

        
        <br/>
        <button onClick={handleClick}>Envoyez les INFOS</button>


        <h3>Enfin, cliquez sur le gros bouton!</h3>

  
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
    </div>
    </div>

    

 



      
</div>
  )
}

export default App;