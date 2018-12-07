import React, { Component } from 'react';
var Isotope = require('isotope-layout');
class Management extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const iso = document.getElementsByClassName('projects-grid');
        const filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-button'));

        filterButtons.map(button => {
        button.addEventListener('click', function() {
            filterButtons.map(button => button.classList.remove('active-filter'));
            const type = this.getAttribute('data-filter');
            this.classList.add('active-filter');
            iso.arrange({
            // item element provided as argument
            filter: type && `.${type}`
            });
            // iso.layout();
        });
        });

    }
    render(){
        return (
        <React.Fragment>
        <div class="container">
        <header>
          <h1>Projects grid</h1>
        </header>
        <div class="project-filter-buttons">
          <button data-filter="" class="filter-button clear-button active-filter">All</button>
          <button data-filter="react" class="filter-button">React</button>
          <button data-filter="angular" class="filter-button">Angular</button>
          <button data-filter="bootstrap" class="filter-button">Bootstrap</button>
          <button data-filter="firebase" class="filter-button">Firebase</button>
          <button data-filter="php" class="filter-button">PHP</button>
          <button data-filter="mongodb" class="filter-button">MongoDB</button>
        </div>
        
        <div class="projects-grid">
          <div class="project mongodb react bootstrap">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>react</span>
              <span>mongodb</span>
              <span>bootstrap</span>
            </div>
          </div>
          <div class="project bootstrap php">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>bootstrap</span>
              <span>php</span>
            </div>
          </div>
          <div class="project angular">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>angular</span>
            </div>
          </div>
          <div class="project firebase">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>firebase</span>
            </div>
          </div>
          <div class="project react mongodb">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>react</span>
              <span>mongodb</span>
            </div>
          </div>
          <div class="project php bootstrap">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>php</span>
              <span>bootstrap</span>
            </div>
          </div>
          <div class="project angular firebase">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>angular</span>
              <span>firebase</span>
            </div>
          </div>
          <div class="project bootstrap">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>bootstrap</span>
            </div>
          </div>
          <div class="project react">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>react</span>
            </div>
          </div>
          <div class="project php">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>php</span>
            </div>
          </div>
          <div class="project angular mongodb">
            <img src="http://placehold.it/350x250" alt="" class="project-image" />
            <h2 class="project-title">Project title</h2>
            <div class="badges">
              <span>angular</span>
              <span>mongodb</span>
            </div>
          </div>
        </div>
      </div> 
      <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script></React.Fragment>
        )}
}

export default Management;