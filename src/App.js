import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebase,app, ui} from './firebase';

const auth = app.auth();

ui.start('#firebaseui-auth-container', {
  signInFlow: 'redirect',
  signInSuccessUrl: '/#3',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        // Your requested scopes.
        'https://www.googleapis.com/auth/plus.login'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        hd: 'sjsu.edu'
      }
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log(authResult, redirectUrl);
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      console.log("ui loaded");
      document.getElementById('loader').style.display = 'none';
    }
  },

  // Terms of service url.
  tosUrl: 'https://trusting-visvesvaraya-804dfa.netlify.com/#2',
  // Privacy policy url.
  privacyPolicyUrl: 'https://trusting-visvesvaraya-804dfa.netlify.com/#4'

});



var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'first.last@sjsu.edu'
});

auth.getRedirectResult().then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log(result, token, user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log(errorCode, errorMessage, email, credential, error);
});

function login(){
  auth.signInWithRedirect(provider).catch(e => {
    console.log(e);
    alert("Your connection sucks.");
  });

}

class WowStateful extends Component {
  state = {
    name: this.props.name
  }
  updateName = () => {
    this.setState({
      name: "Yooooo"
    });
  }
  render() {
    return (
      <h1 onClick={() => this.updateName()}>Wow, this is {this.state.name}</h1>
    )
  }
}

let Wow = (props) => {
  return (
      <h1>Wow, this is {props.name}</h1>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
        <header className="App-header">

          Welcome to My Website<br></br>
          <WowStateful name={20+323}></WowStateful>
          <div id="links">
            <a className="App-link" href="#1">Home</a>
            <a className="App-link" href="#2">About</a>
            <a className="App-link" href="#3">Purchase</a>
            <a className="App-link" href="#4">FAQ</a>
            <a className="App-link" href="#5">Contact Us</a>
            <button onClick={login}>Login</button></div>

        </header>
        <div className="App-div">

          <div className="LotsaDivs">
          <Wow></Wow>
            <a name="1"></a>
            <div id="box">
              <div id="titles">Home</div>

              <p><a
                className="App-link"
                href="https://nrempel.com/guides/react-firebase-ant-design/"
                target="_blank"
                rel="noopener noreferrer">
                <Wow name="Drill"></Wow>
                </a></p>

            </div>


            <a name="2"></a>
            <div id="box">
              <div id="titles">About</div>

              <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, dui ac venenatis vulputate, est justo tristique turpis, molestie suscipit ante leo at dolor. Curabitur dictum metus eget ipsum rutrum fermentum. Sed quis pretium nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nisi dui, pharetra non arcu nec, vulputate finibus lorem. Pellentesque sit amet velit eget mi aliquet elementum at eu erat. Donec magna quam, posuere eu tortor sit amet, varius tincidunt erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In molestie pretium augue, a posuere dui sodales vel. Sed aliquam tempus libero vitae faucibus. Quisque porttitor neque fermentum erat iaculis porta. Suspendisse potenti. Curabitur iaculis augue quis arcu rutrum, eget mattis enim viverra.

                Aliquam sed ex venenatis, gravida ex ac, vehicula neque. Curabitur eleifend eleifend aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies mauris urna, et porta nunc tincidunt vitae. In suscipit bibendum nulla condimentum scelerisque. Aenean facilisis commodo libero, sed facilisis tellus luctus facilisis. Vivamus dictum aliquam blandit. Vivamus ultricies elementum ultrices. Vivamus vitae lacus odio. Donec a mollis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Vivamus fermentum fringilla nisi, a lobortis nisl luctus eget. Aliquam maximus nunc tempus, mattis quam at, sagittis erat. Aenean vehicula eleifend leo, ac posuere mi imperdiet non. Donec tincidunt at nisi egestas tempus. Maecenas interdum bibendum imperdiet. Proin efficitur neque eu odio malesuada faucibus. Mauris nec nulla sit amet ipsum eleifend gravida. Sed non purus est. Aliquam quis semper lacus. Sed eu odio lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet dictum ante. Aliquam ut arcu dolor. Morbi eget varius elit.

                In hac habitasse platea dictumst. Integer tortor erat, accumsan sed mi eleifend, cursus lacinia nibh. Vestibulum dictum ipsum ut justo scelerisque pharetra. Etiam placerat erat ut luctus commodo. Sed maximus tortor molestie, pretium dui quis, consectetur nibh. Integer venenatis aliquam tellus, eget sagittis quam faucibus ac. Sed nunc felis, lobortis et euismod ac, porta sit amet neque.

                Nam porta, lacus nec auctor ullamcorper, lectus lacus imperdiet est, eget cursus turpis est non ipsum. Sed convallis dictum quam. Aliquam eu elit odio. Nunc lorem odio, tristique eu lorem at, ultrices feugiat lectus. Integer massa elit, semper sit amet bibendum ut, fermentum vitae lectus. Ut venenatis nunc orci, ac eleifend turpis ultricies in. Suspendisse malesuada ullamcorper nulla. Donec quis vestibulum dolor. Integer ac dignissim sem, et interdum sapien. In in aliquet felis, ac pretium orci. Suspendisse a ultrices metus. Sed accumsan erat placerat erat cursus pharetra. Proin pharetra mattis lectus, nec semper nulla aliquam ut. Aliquam consequat est at lacus vehicula fermentum.  </p>

              <p>
              <Wow></Wow>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, dui ac venenatis vulputate, est justo tristique turpis, molestie suscipit ante leo at dolor. Curabitur dictum metus eget ipsum rutrum fermentum. Sed quis pretium nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nisi dui, pharetra non arcu nec, vulputate finibus lorem. Pellentesque sit amet velit eget mi aliquet elementum at eu erat. Donec magna quam, posuere eu tortor sit amet, varius tincidunt erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In molestie pretium augue, a posuere dui sodales vel. Sed aliquam tempus libero vitae faucibus. Quisque porttitor neque fermentum erat iaculis porta. Suspendisse potenti. Curabitur iaculis augue quis arcu rutrum, eget mattis enim viverra.
                
                Aliquam sed ex venenatis, gravida ex ac, vehicula neque. Curabitur eleifend eleifend aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies mauris urna, et porta nunc tincidunt vitae. In suscipit bibendum nulla condimentum scelerisque. Aenean facilisis commodo libero, sed facilisis tellus luctus facilisis. Vivamus dictum aliquam blandit. Vivamus ultricies elementum ultrices. Vivamus vitae lacus odio. Donec a mollis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                
                Vivamus fermentum fringilla nisi, a lobortis nisl luctus eget. Aliquam maximus nunc tempus, mattis quam at, sagittis erat. Aenean vehicula eleifend leo, ac posuere mi imperdiet non. Donec tincidunt at nisi egestas tempus. Maecenas interdum bibendum imperdiet. Proin efficitur neque eu odio malesuada faucibus. Mauris nec nulla sit amet ipsum eleifend gravida. Sed non purus est. Aliquam quis semper lacus. Sed eu odio lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet dictum ante. Aliquam ut arcu dolor. Morbi eget varius elit.
                
                In hac habitasse platea dictumst. Integer tortor erat, accumsan sed mi eleifend, cursus lacinia nibh. Vestibulum dictum ipsum ut justo scelerisque pharetra. Etiam placerat erat ut luctus commodo. Sed maximus tortor molestie, pretium dui quis, consectetur nibh. Integer venenatis aliquam tellus, eget sagittis quam faucibus ac. Sed nunc felis, lobortis et euismod ac, porta sit amet neque.
                
                Nam porta, lacus nec auctor ullamcorper, lectus lacus imperdiet est, eget cursus turpis est non ipsum. Sed convallis dictum quam. Aliquam eu elit odio. Nunc lorem odio, tristique eu lorem at, ultrices feugiat lectus. Integer massa elit, semper sit amet bibendum ut, fermentum vitae lectus. Ut venenatis nunc orci, ac eleifend turpis ultricies in. Suspendisse malesuada ullamcorper nulla. Donec quis vestibulum dolor. Integer ac dignissim sem, et interdum sapien. In in aliquet felis, ac pretium orci. Suspendisse a ultrices metus. Sed accumsan erat placerat erat cursus pharetra. Proin pharetra mattis lectus, nec semper nulla aliquam ut. Aliquam consequat est at lacus vehicula fermentum.  </p>


            </div>

            <a name="3"></a>
            <div id="box">
              <div id="titles">Purchase</div>

              <p><a
                className="App-link"
                href="https://nrempel.com/guides/react-firebase-ant-design/"
                target="_blank"
                rel="noopener noreferrer">
                Learn React + Firebase
                <Wow></Wow>
                </a></p>


            </div>

            <a name="4"></a>
            <div id="box">
              <div id="titles">FAQ</div>

              <h4>Is this a Website?</h4>
              <p>Maybe</p>
              <h4>Is it done?</h4>
              <p>No.</p>
              <h4>Does it suck?</h4>
              <p>Due to lack of actual website content, it fails as an actual website. However for the purpose of learning, it serves its purpose.</p>
              <p>So it is up for you to decide for yourself.</p>
              <h4>What is Lorem Ipsum?</h4>
              <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

            <a name="5"></a>
            <div id="box">
              <div id="titles">Contact Us</div>


              <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, dui ac venenatis vulputate, est justo tristique turpis, molestie suscipit ante leo at dolor. Curabitur dictum metus eget ipsum rutrum fermentum. Sed quis pretium nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nisi dui, pharetra non arcu nec, vulputate finibus lorem. Pellentesque sit amet velit eget mi aliquet elementum at eu erat. Donec magna quam, posuere eu tortor sit amet, varius tincidunt erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In molestie pretium augue, a posuere dui sodales vel. Sed aliquam tempus libero vitae faucibus. Quisque porttitor neque fermentum erat iaculis porta. Suspendisse potenti. Curabitur iaculis augue quis arcu rutrum, eget mattis enim viverra.

                Aliquam sed ex venenatis, gravida ex ac, vehicula neque. Curabitur eleifend eleifend aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies mauris urna, et porta nunc tincidunt vitae. In suscipit bibendum nulla condimentum scelerisque. Aenean facilisis commodo libero, sed facilisis tellus luctus facilisis. Vivamus dictum aliquam blandit. Vivamus ultricies elementum ultrices. Vivamus vitae lacus odio. Donec a mollis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Vivamus fermentum fringilla nisi, a lobortis nisl luctus eget. Aliquam maximus nunc tempus, mattis quam at, sagittis erat. Aenean vehicula eleifend leo, ac posuere mi imperdiet non. Donec tincidunt at nisi egestas tempus. Maecenas interdum bibendum imperdiet. Proin efficitur neque eu odio malesuada faucibus. Mauris nec nulla sit amet ipsum eleifend gravida. Sed non purus est. Aliquam quis semper lacus. Sed eu odio lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet dictum ante. Aliquam ut arcu dolor. Morbi eget varius elit.

                In hac habitasse platea dictumst. Integer tortor erat, accumsan sed mi eleifend, cursus lacinia nibh. Vestibulum dictum ipsum ut justo scelerisque pharetra. Etiam placerat erat ut luctus commodo. Sed maximus tortor molestie, pretium dui quis, consectetur nibh. Integer venenatis aliquam tellus, eget sagittis quam faucibus ac. Sed nunc felis, lobortis et euismod ac, porta sit amet neque.

                Nam porta, lacus nec auctor ullamcorper, lectus lacus imperdiet est, eget cursus turpis est non ipsum. Sed convallis dictum quam. Aliquam eu elit odio. Nunc lorem odio, tristique eu lorem at, ultrices feugiat lectus. Integer massa elit, semper sit amet bibendum ut, fermentum vitae lectus. Ut venenatis nunc orci, ac eleifend turpis ultricies in. Suspendisse malesuada ullamcorper nulla. Donec quis vestibulum dolor. Integer ac dignissim sem, et interdum sapien. In in aliquet felis, ac pretium orci. Suspendisse a ultrices metus. Sed accumsan erat placerat erat cursus pharetra. Proin pharetra mattis lectus, nec semper nulla aliquam ut. Aliquam consequat est at lacus vehicula fermentum.  </p>


            </div>

          </div>


        </div>

        <footer className="App-footer">

          <p>This is the footer text.</p>

        </footer>

      </div>
    );
  }
}

export default App;